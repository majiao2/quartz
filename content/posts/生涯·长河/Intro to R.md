---
title: Intro to R
date: 2025-05-23
tags:
  - BUAD345
---
[[Quantitative Variables]]
# Exercise 1  
Make a vector from 1 to 100. Make a for-loop which runs through the whole vector. Multiply the elements which are smaller than 5 and larger than 90 with 10, and the other elements with 0.1.  
- Key functions:
	1. `seq()`
	2. `for(i in 1:100)`
	3. `If(x<5|x>90)`
```R
# 创建从1到100的向量
vec <- seq(1, 100)
# 使用for循环遍历向量
for (i in 1:length(vec)) {
  x <- vec[i]
  if (x < 5 | x > 90) {
    vec[i] <- x * 10
  } else {
    vec[i] <- x * 0.1
  }
}
vec
```

# Exercise 2  
Read “class_exercise.txt” file. Exclude customers younger than 18 or older than80. Use data frame and store it as a data frame. Then write it into a txt file.  
- Key functions:
    1. `read("class_exercise.txt", header=TRUE)`
    2. Use logic: `>=18 and <=80`
    3. `write`
```r
# 读取文件
df <- read.table("class_exercise.txt", header = TRUE)

# 筛选年龄在18到80岁之间的顾客
filtered_df <- df[df$age >= 18 & df$age <= 80, ]

# 写入新的txt文件
write.table(filtered_df, "filtered_class_exercise.txt", 
            row.names = FALSE, quote = FALSE)
```

# Exercise 3  
Write a function that takes a vector of numbers as its argument, then multiplies the first element of the vector by its last element, and then adds the one before the last element to the result of the multiplication, and returns the final value.  
```r
custom_calculation <- function(x) {
  if (length(x) < 3) {
    stop("The vector must contain at least 3 elements.")
  }
  result <- x[1] * x[length(x)] + x[length(x) - 1]
  return(result)
}
```

