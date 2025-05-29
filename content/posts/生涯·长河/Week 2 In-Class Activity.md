---
title: Week 2 In-Class Activity
date: 2025-05-29
tags:
  - BUAD345
---
[[Quantitative Variables]]

1. As part of the marketing team at an Internet music site, you want to understand who your customers are. You send out a survey to 25 customers (you use an incentive of $50 worth of downloads to guarantee a high response rate) asking for demographic information. One of the variables is the customer's age. For the 25 customers the ages are:
	**a.** Make a histogram of the data using a bar width of 10 years.
```{r}
# Age data
ages <- c(20, 32, 34, 29, 30, 30, 30, 14, 29, 11, 38, 22, 44, 48, 26, 25, 22, 32, 35, 32, 35, 42, 44, 44, 48)

# Create histogram with a bin width of 10 years
hist(ages, breaks=seq(10, 50, by=10), col="blue", 
     main="Histogram of Customer Ages (Bar Width: 10 years)", 
     xlab="Age", ylab="Frequency")
```
![[Pasted image 20250529215735.png|525]]
	**b.** Make a histogram of the data using a bar width of 5 years.  
```{r}
# Create relative frequency histogram with a bin width of 5 years
hist(ages, breaks=seq(10, 50, by=5), col="red", 
     probability=TRUE, main="Relative Frequency Histogram of Customer Ages (Bar Width: 5 years)", 
     xlab="Age", ylab="Relative Frequency")
```
	**c.** Make a relative frequency histogram of the data using a bar width of 5 years.  
	![[Pasted image 20250529163158.png|316]]
2. As the new manager of a small convenience store, you want to understand the shopping patterns of your customers. You randomly sample 20 purchases from yesterday's records (all purchases in U.S. dollars):
	**a.** Make a histogram of the data using a bar width of $20. 
	**b.** Make a histogram of the data using a bar width of $10.  
	**c.** Make a relative frequency histogram of the data using a bar width of $10.
	![[Pasted image 20250529163339.png|330]]
3. For the histogram you made in Exercise 1a:  
    **a.** Is the distribution unimodal or multimodal?  
    **b.** Where is (are) the mode (s)?  
    **c.** Is the distribution symmetric?  
    **d.** Are there any outliers?
    
4. For the histogram you made in Exercise 2a:  
    **a.** Is the distribution unimodal or multimodal?  
    **b.** Where is (are) the mode (s)?  
    **c.** Is the distribution symmetric?  
    **d.** Are there any outliers?
    
5. For the data in Exercise 1:  
    **a.** Would you expect the mean age to be smaller than, bigger than, or about the same size as the median? Explain.  
    **b.** Find the mean age.  
    **c.** Find the median age.
    
6. For the data in Exercise 2:  
    **a.** Would you expect the mean purchase to be smaller than, bigger than, or about the same size as the median? Explain.  
    **b.** Find the mean purchase.  
    **c.** Find the median purchase.
    
7. Adair Vineyard is a 10 - acre vineyard in New Paltz, New York. The winery itself is housed in a 200 - year - old historic Dutch barn, with the wine cellar on the first floor and the tasting room and gift shop on the second. Since they are relatively small and considering an expansion, they are curious about how their size compares to that of other vineyards. The histogram shows the sizes (in acres) of 36 wineries in upstate New York. (Data in Vineyards)  
    **a.** Write a short description of this distribution (shape, center, spread, unusual features).  
    **b.** Would you expect the mean or the median to be larger? Explain.  
    **c.** Which would be a more appropriate summary of the center, the mean or the median? Explain.  
    ![[Pasted image 20250529164038.png|425]]
    
8. Using the ages from Exercise 1:  
    **a.** Standardize the minimum and maximum ages using the mean from Exercise 5b and the standard deviation **9.84 years**  
    **b.** Which has the more extreme z - score, the min or the max?  
    **c.** How old would someone with a z - score of 3 be?
    
9. Using the purchases from Exercise 2:  
    **a.** Standardize the minimum and maximum purchase using the mean from Exercise 6b and the standard deviation **$20.67**  
    **b.** Which has the more extreme z - score, the min or the max?  
    **c.** How large a purchase would a purchase with a z - score of 3.5 be?
    
10. A survey of major universities asked what percentage of incoming freshmen usually graduate “on time” in 4 years. Use the summary statistics given to answer these questions.  
    **a.** Would you describe this distribution as symmetric or skewed?  
    **b.** Are there any outliers? Explain.  
    **c.** Create a boxplot of these data.


