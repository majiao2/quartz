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

# Lubridate  
## 安装与加载  
```r
# 安装包（首次使用需运行）
# install.packages("lubridate") 

# 加载包
library(lubridate) 
```

## 日期解析  
**功能**：将字符型日期转换为日期对象，支持多种格式解析  
```r
# 使用mdy()解析"月/日/年"格式（如"01/31/2023"）
delivDF$plannedShipDate <- mdy(delivDF$plannedShipDate)  
delivDF$actualShipDate <- mdy(delivDF$actualShipDate)  

# 其他常用解析函数：
# dmy() 解析"日/月/年"格式（如"31/01/2023"）
# ymd() 解析"年/月/日"格式（如"2023-01-31"）
```


## 获取日期组件  
**功能**：从日期对象中提取年、月、日、星期等信息  
```r
# 获取当前日期
this_day <- today()  # 输出：2025-06-06（假设当前日期为2025年6月6日）

# 提取年、月、日（数值型）
year(this_day)  # 2025
month(this_day)  # 6
day(this_day)    # 6

# 一年中的第几天（1-365/366）
yday(this_day)  # 例如：6月6日是第157天（31+28+31+30+31+6=157）

# 一个月中的第几天（与day()等价）
mday(this_day)  # 6

# 一周中的第几天（默认：1=星期日，2=星期一，...，7=星期六）
wday(this_day)  # 例如：2025-06-06是星期五，输出6（因星期五是一周第6天，取决于系统设置）
```

## 星期格式控制  
**功能**：调整星期输出为缩写或完整名称  
```r
# 返回缩写星期（如"Fri"），结果为factor类型
wday(this_day, label = TRUE)  # "Fri"

# 转换为字符型字符串
as.character(wday(this_day, label = TRUE))  # "Fri"

# 返回完整星期名称（如"Friday"）
as.character(wday(this_day, label = TRUE, abbr = FALSE))  # "Friday"
```

## 日期算数运算  
**功能**：计算日期差，支持逻辑比较  
```r
# 提取数据框第一行的日期
first_actual <- delivDF$actualShipDate[1]
first_planned <- delivDF$plannedShipDate[1]

# 计算时间差（返回difftime对象，单位为天）
date_diff <- first_actual - first_planned  
print(date_diff)  # 输出：X days

# 转换为数值型（仅保留天数）
diff_days <- as.numeric(date_diff)  

# 逻辑判断（是否延迟/准时/提前）
is_late <- date_diff > 0       # 实际日期 > 计划日期 → 延迟
is_on_time <- date_diff == 0  # 准时
is_early <- date_diff < 0     # 提前
```

## 总结  
1. **日期解析函数**：`mdy()`/`dmy()`/`ymd()`需根据数据实际格式选择，确保解析正确。
2. **日期组件提取**：
    - `yday()`：一年中的第几天，用于统计年内进度。
    - `wday()`：星期几的数值表示，通过`label`和`abbr`参数控制输出格式。
3. **日期差计算**：直接相减得到 `difftime` 对象，需用 `as.numeric()` 转换为数值型天数，以便后续分析（如准时率计算）。
# 数据连接 (Joins) 操作  
```r
# 创建两个示例数据框用于演示连接操作
df1 <- data.frame(x = c(1, 2), y = 2:1)
df2 <- data.frame(x = c(1, 3), a = 10, b = "a")

# 查看数据结构
df1
df2
```
## SQL风格的连接操作
```r
# 1. 内连接（Inner Join）：仅保留两个表中连接键匹配的行
df1 %>% inner_join(df2)  # 等价于 inner_join(df1, df2)
# 结果：仅保留x=1的行（df1和df2中均存在）
```
![[Pasted image 20250606155015.png]]  

```r
# 2. 左连接（Left Join）：保留左表所有行，右表匹配不到则填充NA
df1 %>% left_join(df2)  # 等价于 left_join(df1, df2)
# 结果：保留df1的两行，第二行因df2无匹配x=2的记录，a和b列填充NA
```
![[Pasted image 20250606155211.png]]

```r
# 3. 全连接（Full Join）：保留两个表所有行，匹配不到的部分填充NA
df1 %>% full_join(df2)
# 结果：保留df1和df2的所有行，缺失值填充NA
```
![[Pasted image 20250606155132.png]]

## 实际案例：ZappTech 产品交付数据分析  
```r
# 自动识别公共列作为连接键（此处为partID）
fullDF <- delivDF %>% left_join(prodCatDF)  # 等价于 left_join(delivDF, prodCatDF, by = "partID")

# 显式指定连接键（推荐写法，避免歧义）
fullDF <- delivDF %>% left_join(prodCatDF, by = "partID")

# 查看合并结果
fullDF
```
![[Pasted image 20250606155348.png]]  

```r
# 统计prodCategory列的缺失值数量
sum(is.na(fullDF$prodCategory))

# 过滤掉prodCategory列包含缺失值的行
fullDF <- fullDF %>% filter(!is.na(prodCategory))
```
![[Pasted image 20250606155529.png]]  
![[Pasted image 20250606155556.png]] 

# Example 1  
<mark style="background: #FF5582A6;">多类别订单占比分析</mark>  
```r
# 按订单ID和产品类别分组，统计每个类别下的商品数量
numitem_date <- fullDF %>% 
  group_by(deliveryID, prodCategory) %>% 
  summarize(numItems = n())

# 查看中间结果
numitem_date

# 按订单ID分组，统计每个订单包含的类别数量
# 添加多类别标记（0=单类别，1=多类别）
# 计算多类别订单的比例（即multiCatFlag的均值）
numitem_date %>% 
  group_by(deliveryID) %>% 
  summarize(numCategories = n()) %>% 
  mutate(multiCatFlag = ifelse(numCategories == 1, 0, 1)) %>% 
  summarize(MultiCatOrders = mean(multiCatFlag))
```



# Example 2 
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