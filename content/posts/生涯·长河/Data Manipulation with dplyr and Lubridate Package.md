---
title: Data Manipulation with dplyr and Lubridate Package
date: 2025-05-23
tags:
  - BUAD345
---
[[Data Manipulation with dplyr Package]]  

> [!note]+ Product Category Informationi
> - We need to combine the item delivery information with the product category information. How?
>     
>     1. **Mutating Joins**
>     
>     - Add new variable to one table from matching rows in another
>     
>     2. **Filtering Joins**
>     
>     - Filter observations from one table based on whether or not they match an observation in the other table
>     
>     3. **Set Operations**
>     
>     - Combine the observations in the data sets as if they were set elements  

# Example  
```r
oneCatDelivIDs <- numitem_date %>% 
  # 按deliveryID分组，统计每个订单包含的产品类别数量
  group_by(deliveryID) %>% 
  summarize(numCategories = n()) %>% 
  
  # 添加标记列：若订单仅含1个类别标记为0，否则标记为1
  mutate(multiCatFlag = ifelse(numCategories == 1, 0, 1)) %>% 
  
  # 筛选出只包含单个类别的订单（multiCatFlag=0）
  filter(multiCatFlag == 0) %>% 
  
  # 仅保留deliveryID列，形成最终结果
  select(deliveryID)
```
![[Pasted image 20250606152557.png]]  

<mark style="background: #FF5582A6;">关键步骤说明：</mark>
1. **分组统计**：统计每个`deliveryID`对应的产品类别数量
2. **标记生成**：根据类别数量生成单 / 多类别标记
3. **数据筛选**：提取单类别订单的 ID 列表
4. **结果整理**：仅保留需要的 `deliveryID` 列

```r
aa <- oneCatDelivIDs %>% 
  # 左连接fullDF数据集，保留oneCatDelivIDs的所有记录及fullDF的匹配数据
  left_join(fullDF) %>% 
  
  # 选择第1至3列和第7列（通常为deliveryID、日期、类别等关键列）
  select(1:3, 7) %>% 
  
  # 创建准时标志列：实际发货日期晚于计划则标记为0（不准时），否则为1（准时）
  mutate(onTimeFlag = ifelse(actualShipDate > plannedShipDate, 0, 1)) %>% 
  
  # 按产品类别分组
  group_by(prodCategory) %>% 
  
  # 计算每个类别的准时率（onTimeFlag的平均值，1代表准时，0代表不准时）
  summarize(onTimePct = mean(onTimeFlag))
```
![[Pasted image 20250606152754.png]]  
<mark style="background: #FF5582A6;">核心逻辑说明：</mark>
1. **数据连接**：  
    通过 `left_join(fullDF)` 将之前筛选出的单类别订单 ID 列表(`oneCatDelivIDs`)与完整数据集（fullDF）进行左连接，确保保留所有单类别订单的记录，并补充 fullDF 中的其他字段（如日期、类别等）。
2. **列筛选**：  
    `select(1:3, 7)`用于提取分析所需的关键列（如订单 ID、计划日期、实际日期、产品类别等，具体列含义需结合业务数据定义）。
3. **准时性标记**：  
    通过`mutate`创建`onTimeFlag`列，直接比较实际发货日期与计划日期，生成二进制标记（0/1）。
4. **分组统计**：  
    按 `prodCategory`（产品类别）分组后，计算 `onTimeFlag` 的平均值，得到每个类别的**准时交付率**（`onTimePct`），数值范围为 0 到 1（如 0.8 表示 80% 准时率）。

```r
fullDF %>% 
  # 筛选出deliveryID存在于oneCatDelivIDs中的记录（单类别订单）
  filter(deliveryID %in% oneCatDelivIDs$deliveryID) %>% 
  
  # 选择第1至3列和第7列（通常包含ID、日期、类别等关键信息）
  select(1:3, 7) %>% 
  
  # 创建准时标志列：实际发货日期晚于计划日期时标记为0（不准时），否则为1（准时）
  mutate(onTimeFlag = ifelse(actualShipDate > plannedShipDate, 0, 1)) %>% 
  
  # 按产品类别分组
  group_by(prodCategory) %>% 
  
  # 计算每个类别的准时率（准时标记的平均值）
  summarize(onTimePct = mean(onTimeFlag))
```
![[Pasted image 20250606153203.png]]  
<mark style="background: #FF5582A6;">核心逻辑说明：</mark>
1. **数据筛选**：  
    从完整数据集（`fullDF`）中提取**仅存在于`oneCatDelivIDs`中的单类别订单**，确保后续分析聚焦于特定订单子集。
2. **列选择**：  
    保留分析所需的关键列（如订单 ID、计划 / 实际日期、产品类别），丢弃无关数据以提升性能。
3. **准时性判断**：  
    通过比较`actualShipDate`和`plannedShipDate`生成二进制准时标记（`onTimeFlag`），**逻辑为严格晚于**（若相等则视为准时）。
4. **分组统计**：  
    按产品类别聚合数据，计算每个类别的准时率（`onTimePct`），即准时订单数占比。