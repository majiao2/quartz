---
title: Data Manipulation with dplyr Package
date: 2025-05-23
tags:
  - BUAD345
---
[[Intro to R]]
# Five Essential Verbs in dplyr
```R
library(dplyr)
# 创建数据框
df <- data.frame(
  name = c("Alice", "Bob", "Charlie", "David"),
  age = c(25, 30, 35, 40),
  score = c(85, 90, 78, 92)
)
```

 - `filter()`
    - Select subset of rows (observations)  
```R
filter(df, age > 30)
```

- `arrange()`  
     - Reorder rows  
```R
arrange(df, score)
arrange(df, desc(score))
```

 - `select()`
     - Select subset of columns (variables)  
```R
select(df, name, score)
```

 - `mutate()`
     - Create new columns that are functions of existing columns   
```R
mutate(df, grade = ifelse(score >= 90, "A", "B"))
```

 - `summarize()`
     - Collapse data into a single row  
```R
summarize(df, avg_age = mean(age), max_score = max(score))
```

```R
df %>%
  filter(age > 30) %>%
  arrange(desc(score))
```