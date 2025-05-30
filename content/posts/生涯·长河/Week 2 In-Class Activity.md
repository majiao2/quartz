---
title: Week 2 In-Class Activity
date: 2025-05-29
tags:
  - BUAD345
---
[[Quantitative Variables]]

1. <mark style="background: #FF5582A6;">As part of the marketing team at an Internet music site, you want to understand who your customers are. You send out a survey to 25 customers (you use an incentive of $50 worth of downloads to guarantee a high response rate) asking for demographic information. One of the variables is the customer's age. For the 25 customers the ages are:</mark>  
	**a.** Make a histogram of the data using a bar width of 10 years.
```r
# Age data
ages <- c(20, 32, 34, 29, 30, 30, 30, 14, 29, 11, 38, 22, 44, 48, 26, 25, 22, 32, 35, 32, 35, 42, 44, 44, 48)

# Create histogram with a bin width of 10 years
hist(ages, breaks=seq(10, 50, by=10), col="blue", 
     main="Histogram of Customer Ages (Bar Width: 10 years)", 
     xlab="Age", ylab="Frequency")
```
![[Pasted image 20250529215735.png|525]]  
	**b.** Make a histogram of the data using a bar width of 5 years.  
```r
# Create relative frequency histogram with a bin width of 5 years
hist(ages, breaks=seq(10, 50, by=5), col="red", 
     probability=TRUE, main="Relative Frequency Histogram of Customer Ages (Bar Width: 5 years)", 
     xlab="Age", ylab="Relative Frequency")
```
![[Pasted image 20250529220107.png|525]]  
	**c.** Make a relative frequency histogram of the data using a bar width of 5 years.  
```r
# Create relative frequency histogram with a bin width of 5 years
hist(ages, breaks=seq(10, 50, by=5), col="red", 
     probability=TRUE, main="Relative Frequency Histogram of Customer Ages (Bar Width: 5 years)", 
     xlab="Age", ylab="Relative Frequency")
```
![[Pasted image 20250529220151.png|525]]  
	![[Pasted image 20250529163158.png|316]]  

---  

2. <mark style="background: #FF5582A6;">As the new manager of a small convenience store, you want to understand the shopping patterns of your customers. You randomly sample 20 purchases from yesterday's records (all purchases in U.S. dollars):</mark>
```r
# 购买金额数据（美元）
purchases <- c(39.05, 2.73, 32.92, 47.51, 37.91, 34.35, 64.48, 51.96,
               56.95, 81.58, 47.80, 11.72, 21.57, 40.83, 38.24, 32.98,
               75.16, 74.30, 47.54, 65.62)
```
  
**a.** Make a histogram of the data using a bar width of $20.
```r
hist(purchases,
     breaks = seq(0, 100, by = 20),
     col    = "skyblue",
     main   = "Histogram of Purchase Amounts\n(Bar Width = $20)",
     xlab   = "Purchase Amount ($)",
     ylab   = "Frequency")
```
![[Pasted image 20250529220717.png|525]]  
	**b.** Make a histogram of the data using a bar width of $10.  
```{r}
hist(purchases,
     breaks = seq(0, 90, by = 10),
     col    = "lightgreen",
     main   = "Histogram of Purchase Amounts\n(Bar Width = $10)",
     xlab   = "Purchase Amount ($)",
     ylab   = "Frequency")
```
![[Pasted image 20250529220806.png|525]]  
	**c.** Make a relative frequency histogram of the data using a bar width of $10.  
```r
hist(purchases,
     breaks     = seq(0, 90, by = 10),
     col        = "salmon",
     probability= TRUE,
     main       = "Relative Frequency Histogram of Purchase Amounts\n(Bar Width = $10)",
     xlab       = "Purchase Amount ($)",
     ylab       = "Relative Frequency")
```
![[Pasted image 20250529220907.png|525]]  
	![[Pasted image 20250529163339.png|330]]  

---  

3. <mark style="background: #FF5582A6;">For the histogram you made in Exercise 1a:  </mark>  
    <u>**a.** Is the distribution unimodal or multimodal?  </u>  
	    The distribution is **unimodal** because there is only one prominent peak in the histogram, with no significant second peak.  
    <u>**b.** Where is (are) the mode (s)?  </u>  
	    The **mode** is located in the range around **20 to 30 years**, where the highest frequency of data points is clustered.  
    <u>**c.** Is the distribution symmetric?  </u>  
	    The distribution is **not perfectly symmetric**. It seems slightly skewed to the right, as the bars on the higher end (around 30 and above) are somewhat smaller than those on the left.  
    <u>**d.** Are there any outliers?</u>  
	    Based on the histogram, there doesn't seem to be any clear outliers. All the data points appear to be within the same general range (from around 10 to 40 years), with no extreme values standing far apart from the rest.  

---  

4. <mark style="background: #FF5582A6;">For the histogram you made in Exercise 2a: </mark>   
    <u>**a.** Is the distribution unimodal or multimodal?  </u>  
	    The distribution is **unimodal**, with a single prominent peak in the histogram. The majority of the data points are clustered in the 20–60 dollar range, with a few higher values, but no second peak.  
    <u>**b.** Where is (are) the mode (s)?  </u>  
	    The **mode** is in the range of **20–40 dollars**, where the highest frequency of purchases is observed.  
    <u>**c.** Is the distribution symmetric?  </u>  
	    The distribution is **slightly right-skewed**. There is a long tail on the right side, with higher purchase amounts (above 60 dollars) causing the distribution to be asymmetrical. The left side (lower purchase amounts) is more compact.  
    <u>**d.** Are there any outliers?  </u>  
	    There are potential **outliers** in the higher purchase amounts. The values **81.58** and **75.16** seem to be significantly higher than the rest of the data, which could be considered outliers, given the majority of purchases fall below 50 dollars.

---  

5. <mark style="background: #FF5582A6;">For the data in Exercise 1: </mark>   
    <u>**a.** Would you expect the mean age to be smaller than, bigger than, or about the same size as the median? Explain. </u>  
		The mean age is expected to be larger than the median.  
    <u>**b.** Find the mean age.  </u>  
	    The mean age is approximately **32.2 years**.  
    <u>**c.** Find the median age.</u>  
	    The 13th value in the ordered list is the **median age**, which is **32 years**.  

---  

6. <mark style="background: #FF5582A6;">For the data in Exercise 2:  </mark>  
    <u>**a.** Would you expect the mean purchase to be smaller than, bigger than, or about the same size as the median? Explain. </u>  
	    The expected **mean purchase to be larger than the median**.  
    <u>**b.** Find the mean purchase.</u>  
	    $\text{Mean} = \frac{\sum \text{purchase amounts}}{\text{number of purchases}}$  
	    The **mean purchase** is approximately **$40.16**.  
    <u>**c.** Find the median purchase.</u>  
	    The **median purchase** is approximately **$38.64**.

---  

7. <mark style="background: #FF5582A6;">Adair Vineyard is a 10 - acre vineyard in New Paltz, New York. The winery itself is housed in a 200 - year - old historic Dutch barn, with the wine cellar on the first floor and the tasting room and gift shop on the second. Since they are relatively small and considering an expansion, they are curious about how their size compares to that of other vineyards. The histogram shows the sizes (in acres) of 36 wineries in upstate New York. (Data in Vineyards)  </mark>  
    <u>**a.** Write a short description of this distribution (shape, center, spread, unusual features). </u>
    - **Shape**: The distribution of vineyard sizes is **right-skewed**. Most of the vineyards are quite small, with a significant number of them clustered near the 0-acre range. As vineyard size increases, the frequency of vineyards decreases gradually, forming a long tail to the right. This suggests that there are fewer large vineyards.
    - **Center**: The center of the distribution is likely between **30 and 60 acres**, where the majority of vineyards appear to fall.
    - **Spread**: The spread is wide, with vineyard sizes ranging from **0 to 240 acres**. However, most vineyards are small, and the spread of larger vineyard sizes is quite limited.
    - **Unusual Features**: The distribution doesn't show any clear outliers, but the **right skew** is a notable feature. There are a few larger vineyards, but they are much less common than the smaller ones.  
	
    <u>**b.** Would you expect the mean or the median to be larger? Explain.  </u>
	    Since the distribution is **right-skewed**, the **mean** is expected to be **larger than the median**. In a right-skewed distribution, the tail on the right (large vineyard sizes) pulls the mean towards the higher values, while the median is less influenced by extreme values and is closer to the center of the data. Therefore, the mean would likely be greater than the median.  
    <u>**c.** Which would be a more appropriate summary of the center, the mean or the median? Explain.  </u>  
	    The **median** would be a more appropriate summary of the center in this case because the distribution is **right-skewed**. The median is not affected by the extreme large values and better represents the typical vineyard size. In contrast, the mean could be distorted by the few large vineyards in the right tail of the distribution, making the median a more robust and accurate measure of central tendency.
    ![[Pasted image 20250529164038.png|425]]

---  

8. <mark style="background: #FF5582A6;">Using the ages from Exercise 1:  </mark>  
    **a.** Standardize the minimum and maximum ages using the mean from Exercise 5b (**32.2 years**) and the standard deviation **9.84 years**  
	    Standardized (z-) scores for the minimum (11 yr) and maximum (48 yr): <br>
		$z = \frac{x - \mu}{\sigma}$ <br>
		$z_{\min}=\frac{11 - 32.2}{9.84} \approx \frac{-21.2}{9.84} \approx -2.15$ <br>
		$z_{\max}=\frac{48 - 32.2}{9.84} \approx \frac{15.8}{9.84} \approx +1.61$  
    **b.** Which has the more extreme z - score, the min or the max?  
	    The minimum age is more extreme.  
    **c.** How old would someone with a z - score of 3 be?  
	$\text{age} = \mu + z\sigma = 32.2 + 3\times9.84 = 32.2 + 29.52 = 61.72$  

---  

9. <mark style="background: #FF5582A6;">Using the purchases from Exercise 2:  </mark>  
    **a.** Standardize the minimum and maximum purchase using the mean from Exercise 6b (**$40.16**) and the standard deviation **$20.67**  
	    $z_{\min}=\frac{x_{\min}-\mu}{\sigma}=\frac{2.73 - 40.16}{20.67}\approx -1.81$ <br>
	    $z_{\max}=\frac{x_{\max}-\mu}{\sigma}=\frac{81.58 - 40.16}{20.67}\approx +2.00$  
    **b.** Which has the more extreme z - score, the min or the max?  
	    $\text{Compare } |z_{\min}| \approx 1.81 \text{ vs. } |z_{\max}| \approx 2.00.$
	    Since $2.00>1.81$, the **maximum purchase** has the more extreme z-score.  
    **c.** How large a purchase would a purchase with a z - score of 3.5 be?  
	    $x = \mu + z\sigma = 40.16 + 3.5\times 20.67 \approx 40.16 + 72.35 = \$112.51$
    

---  

10. <mark style="background: #FF5582A6;">A survey of major universities asked what percentage of incoming freshmen usually graduate “on time” in 4 years. Use the summary statistics given to answer these questions.  </mark>  
![[Pasted image 20250529230646.png|206]]  
    **a.** Would you describe this distribution as symmetric or skewed?  
	Since the mean (68.35) is slightly **less** than the median (69.90), the distribution is **left-skewed** (negatively skewed). In a left-skewed distribution the long tail is on the lower end, pulling the mean down below the median.   
    **b.** Are there any outliers? Explain.  
		$\text{IQR} = Q_3 - Q_1 = 74.75 - 59.15 = 15.60$  
		$Q_1 - 1.5\times\text{IQR} = 59.15 - 1.5(15.60) = 59.15 - 23.40 = 35.75$  
		$Q_3 + 1.5\times\text{IQR} = 74.75 + 23.40 = 98.15$  
		Since the observed minimum (43.20) is above 35.75 and the maximum (87.40) is below 98.15, **there are no outliers** according to the usual 1.5 × IQR rule.  
    **c.** Create a boxplot of these data.  
```{r}
# 创建数据框
stats <- data.frame(
  Statistic = c("Count", "Mean", "Median", "StdDev", "Min", "Max", "Range", "25th %tile", "75th %tile"),
  Value = c(48, 68.35, 69.90, 10.20, 43.20, 87.40, 44.20, 59.15, 74.75)
)

# 提取箱线图所需的统计量
min_val <- stats$Value[stats$Statistic == "Min"]
q1 <- stats$Value[stats$Statistic == "25th %tile"]
median_val <- stats$Value[stats$Statistic == "Median"]
q3 <- stats$Value[stats$Statistic == "75th %tile"]
max_val <- stats$Value[stats$Statistic == "Max"]

# 创建模拟数据（基于统计量生成近似的数据集）
set.seed(123)  # 设置随机种子，确保结果可重现
sim_data <- c(
  min_val,
  q1,
  median_val,
  q3,
  max_val,
  rnorm(43, mean = stats$Value[stats$Statistic == "Mean"], 
        sd = stats$Value[stats$Statistic == "StdDev"])
)

# 调整模拟数据使其符合给定的统计量
sim_data <- sort(sim_data)
sim_data[1] <- min_val
sim_data[round(0.25 * length(sim_data))] <- q1
sim_data[round(0.5 * length(sim_data))] <- median_val
sim_data[round(0.75 * length(sim_data))] <- q3
sim_data[length(sim_data)] <- max_val

# 绘制箱线图
boxplot(sim_data, 
        main = "Boxplot of Graduation Rates",
        ylab = "Percentage",
        col = "lightblue",
        border = "black",
        horizontal = FALSE,
        outline = TRUE)

# 添加统计信息文本
text(x = 1.3, y = min_val, labels = paste("Min:", min_val))
text(x = 1.3, y = q1, labels = paste("Q1:", q1))
text(x = 1.3, y = median_val, labels = paste("Median:", median_val))
text(x = 1.3, y = q3, labels = paste("Q3:", q3))
text(x = 1.3, y = max_val, labels = paste("Max:", max_val))
text(x = 1.3, y = mean(sim_data), labels = paste("Mean:", round(mean(sim_data), 2)))    
```

![[Pasted image 20250529231807.png|550]]



