---
title: Categorical Variables
date: 2025-05-22
tags:
  - BUAD345
---
# Variables in  Datasets  
- The characteristics recorded about a certain entity (e.g., object, person, place or event) are called **variables**.
- These are usually shown as the columns of a data table and identify **What** has been measured
- A variable that can take on one of a limited, and usually fixed, number of possible values is called a **categorical** or **qualitative variable** 
- When a variable has **numerical value**s with units and tells us about the quantity of what it measures, it is called a **quantitative variable**.

==Some variables can be <span style="background:#fff88f">both categorical and quantitative</span>. How data are classified depends on why we are collecting the data.==

> [!tip]+ Identifiers 标识符变量
> - An <span style="background:#fff88f">identifier variable</span> is a unique identifier assigned to each individual or item in a group.  
> - For example, <span style="background:#fff88f">social security numbers</span>, <span style="background:#fff88f">student ID numbers</span>, <span style="background:#fff88f">tracking numbers</span>, <span style="background:#fff88f">transactions numbers</span>, etc. are all identifier variables for people or items.  
>> - do not have unites  
>> - are a special kind of <span style="background:#fff88f">categorial variable</span>  
>> - are useful in combining data from different sources to avoid duplication  
>> - are not variables to be analyzed

> [!hint]+ Nomianal vs Ordinal
> - Categorical variables used only to name categories (that don’t have order) are sometimes called nominal variables  
> - When data values can be ordered, we say that the variable has <span style="background:#fff88f">ordinal values</span> 有序变量. For example, employees can be ranked according to the number of months employed

> [!hint]+ Cross-Sectional vs Time Series
> - Variables that are measured at regular intervals over time are called <span style="background:#fff88f">a time series</span>  
> 	- Typical measuring points are months, quarters, or years  
> - When several variables are all measured at the same time point for a specific population, the data is called <span style="background:#fff88f">cross-sectional data</span> 
> 	- For example, data on sales revenue, number of customers, and expenses at each Starbucks (more than 20,000 locations) at one point in time would be cross-sectional data  

# Contigency Table  
列联表（交叉表）  
- The marginal distribution of a variable in a contingency table is the total count that occurs <span style="background:#fff88f">when the value of that variable is held constant</span>
- Each cell of a contingency table (any intersection of a row and column of the table) gives the count for a <span style="background:#fff88f">combination of values of the two variables</span>
- Rather than displaying the data as counts, a table may display the data as a percentage – as a total percent, row percent, or column percent, which show percentages **with respect to the total count, row count, or column count, respectively**

> [!attention]+ Conditional probability
> Content