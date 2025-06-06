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

