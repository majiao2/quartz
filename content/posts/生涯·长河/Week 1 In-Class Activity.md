[[Categorical Variables]]
# Create a frequency table for each variable  
#### **Variable 1: Commuting Methods**
| Commuting Method | Frequency     |
| ---------------- | ------------- |
| Walk             | 24            |
| Drive            | 4             |
| Public Transit   | 10            |
| Bike/Scooter     | 5             |
|                  | **Total**: 43 |
#### **Variable 2: Study Environment Sound**
| Environment Sound | Frequency     |
| ----------------- | ------------- |
| Silent            | 27            |
| Background Noise  | 6             |
| Music             | 10            |
|                   | **Total**: 43 |
#### **Variable 3: Beverage Habits**
| Beverage Type    | Frequency     |
| ---------------- | ------------- |
| None             | 15            |
| Regular          | 19            |
| Specialty Drinks | 9             |
|                  | **Total**: 43 |
#### **Variable 4: Note-Taking Methods**
| Note-Taking Method | Frequency     |
| ------------------ | ------------- |
| Laptop             | 12            |
| Tablet             | 15            |
| Handwritten        | 12            |
| Don’t Take Notes   | 4             |
|                    | **Total**: 43 |

# Calculate appropriate percentages (relative frequencies)  
#### **Variable 1: Commuting Methods**
| Commuting Method | Frequency | Relative Frequency (%) |
| ---------------- | --------- | ---------------------- |
| Walk             | 24        | 55.81%                 |
| Drive            | 4         | 9.30%                  |
| Public Transit   | 10        | 23.26%                 |
| Bike/Scooter     | 5         | 11.63%                 |
#### **Variable 2: Study Environment Sound**
|Environment Sound|Frequency|Relative Frequency (%)|
|---|---|---|
|Silent|27|62.79%|
|Background Noise|6|13.95%|
|Music|10|23.26%|
#### **Variable 3: Beverage Habits**
|Beverage Type|Frequency|Relative Frequency (%)|
|---|---|---|
|None|15|34.88%|
|Regular|19|44.19%|
|Specialty Drinks|9|20.93%|
#### **Variable 4: Note-Taking Methods**
|Note-Taking Method|Frequency|Relative Frequency (%)|
|---|---|---|
|Laptop|12|27.91%|
|Tablet|15|34.88%|
|Handwritten|12|27.91%|
|Don’t Take Notes|4|9.30%|
# Examine relationships between two variables using contingency tables  
To examine the relationships between **note-taking method** (Laptop, Tablet, Handwritten, Don’t take notes) and **environment type** (Silent, Background noise, Music), we analyze the contingency table.  

| Environment/Note-Taking Method | Laptop | Tablet | Handwritten | Don’t Take Notes | **Total** |
| ------------------------------ | ------ | ------ | ----------- | ---------------- | --------- |
| Silent                         | 8      | 9      | 8           | 2                | 27        |
| Background Noise               | 1      | 2      | 2           | 1                | 6         |
| Music                          | 3      | 4      | 2           | 1                | 10        |
| **Total**                      | 12     | 15     | 12          | 4                | **43**    |
## Key Observations

1. **Silent Environment Dominance**:
    
    - Most note-takers (27/43 ≈ 62.8%) prefer a silent environment, with **Tablet users** (9) and **Laptop users** (8) being the most frequent in this category.
    - Only 2 users in the "Don’t take notes" group are in a silent environment, suggesting note-takers generally prefer silence.
2. **Low Preference for Background Noise**:
    
    - Only 6 users (14.0%) are in a background noise environment, with similar small counts across all note-taking methods (1–2 users each).
    - This implies a weak relationship between background noise and note-taking preference.
3. **Music Environment Trends**:
    
    - In a music environment (10 users, 23.3%), **Tablet users** (4) and **Laptop users** (3) are more common than handwritten (2) or "Don’t take notes" (1).
    - This suggests a mild association between music and digital note-taking (laptop/tablet) compared to handwritten methods or no note-taking.
4. **Note-Taking Method Totals**:
    
    - **Tablet users** (15 total) are the largest group, with a strong presence in silent (9) and music (4) environments.
    - **Don’t take notes** (4 total) is the smallest group, with most (2) in silent environments.

The contingency table suggests **moderate associations** between environment and note-taking method:
- **Silent environments** are strongly preferred by all note-takers, especially tablet/laptop users.
- **Music environments** slightly favor digital note-taking (tablet/laptop) over handwritten methods.
- **Background noise** shows little relationship with any note-taking method, likely due to low sample size in this category.

# Create appropriate visualizations (bar charts, pie charts, or segmented bar charts)  
![[Pasted image 20250523195336.png|315]] ![[Pasted image 20250523195341.png|315]] ![[Pasted image 20250523195348.png|315]] ![[Pasted image 20250523195403.png|315]]
![[Pasted image 20250523195621.png|315]] ![[Pasted image 20250523195630.png|315]] ![[Pasted image 20250523195634.png|315]] ![[Pasted image 20250523195639.png|315]]
![[Pasted image 20250523195756.png|475]] ![[Pasted image 20250523195807.png|475]] ![[Pasted image 20250523200050.png|475]]
# Look for potential instances of Simpson's Paradox  
Based on the provided data, we analyze the potential presence of **Simpson's Paradox** by comparing trends within individual groups (study environments) and the overall aggregated data. Simpson's Paradox occurs when a trend that is evident within individual groups reverses when the data is combined.  

| Environment/Note-Taking Method | Laptop | Tablet | Handwritten | Don’t Take Notes | **Total** |
| ------------------------------ | ------ | ------ | ----------- | ---------------- | --------- |
| **Silent**                     | 8      | 9      | 8           | 2                | 27        |
| **Background Noise**           | 1      | 2      | 2           | 1                | 6         |
| **Music**                      | 3      | 4      | 2           | 1                | 10        |
| **Total**                      | 12     | 15     | 12          | 4                | 43        |

| Environment/Note-Taking Method | Laptop | Tablet | Handwritten | Don’t Take Notes | **Total** |
| ------------------------------ | ------ | ------ | ----------- | ---------------- | --------- |
| **Silent**                     | 29.6%  | 33.3%  | 29.6%       | 7.4%             | 1         |
| **Background Noise**           | 16.7%  | 33.3%  | 33.3%       | 16.7%            | 1         |
| **Music**                      | 30.0%  | 40.0%  | 20.0%       | 10.0%            | 1         |
| **Total**                      | 27.9%  | 34.9%  | 27.9%       | 9.3%             | 1         |
## Observations:

1. **Within each environment**:
    
    - In the **Silent** environment, **Tablet** is the most frequent note-taking method (9 out of 27, or ~33.3%), followed by **Laptop** (8 out of 27, or ~29.6%), and **Handwritten** (8 out of 27, or ~29.6%).
        
    - In the **Background Noise** environment, the distribution is more evenly spread, with **Tablet** and **Handwritten** both having 2 occurrences (2/6, or 33.3% each), and **Laptop** (1/6, or ~16.7%) and **Don’t Take Notes** (1/6, or ~16.7%) being less common.
        
    - In the **Music** environment, **Tablet** is again the most common (4 out of 10, or 40%), followed by **Laptop** (3 out of 10, or 30%), and **Handwritten** (2 out of 10, or 20%).
        
2. **Overall data (Aggregated totals)**:
    
    - **Tablet** is the most common note-taking method across all environments (15 out of 43, or ~34.9%).
        
    - **Laptop** is the second most common (12 out of 43, or ~27.9%).
        
    - **Handwritten** and **Don’t Take Notes** follow with 12 (27.9%) and 4 (9.3%) occurrences, respectively.
        

## Analyzing Simpson's Paradox:

- **Individual Environment Trends**:
    
    - In the **Silent** and **Music** environments, **Tablet** is the most frequently used note-taking method.
        
    - In the **Background Noise** environment, **Tablet** and **Handwritten** are tied as the most common methods, each at 33.3%.
        
- **Overall Trends (Total Data)**:
    
    - When we combine all environments, **Tablet** becomes the most common note-taking method overall (34.9%), followed by **Laptop** (27.9%).
## Conclusion:

Simpson's Paradox is **not** present in this dataset. The trends within each study environment (Silent, Background Noise, Music) are consistent with the overall trends when aggregated. For example, **Tablet** is consistently the most common method in both the **Silent** and **Music** environments, and it also becomes the most common method when the data is combined.
Thus, there is no reversal of trends between the individual environments and the overall data that would characterize **Simpson's Paradox**.
We also tried other combinations and did not find any potential instances of Simpson's Paradox.

# What patterns did you discover?  
1. **Overall Preferences**
    
    - **Commuting:** A majority walk (≈56%), with public transit (23%), biking/scootering (12%) and driving (9%) much less common.
        
    - **Study Environment:** Most students prefer silence (≈63%), followed by music (23%) and only a small segment working amid background noise (14%).
        
    - **Beverage Habits:** Nearly half drink “regular” drinks (≈44%), about a third abstain (35%), and specialty beverages account for the remaining fifth (21%).
        
    - **Note-Taking:** Tablets are the single most popular tool (≈35%), followed by laptops and handwriting (each ≈28%), with about 9% not taking notes at all.
        
2. **Environment vs. Note-Taking**
    
    - **Silent Settings:** Strongly favored across all methods; tablets (33%), laptops (30%), and handwriting (30%) are nearly tied here, with “no notes” rare (7%).
        
    - **Music Settings:** Digital note-taking (tablets 40%, laptops 30%) outpaces handwriting (20%) and no-note takers (10%).
        
    - **Background Noise:** Very low overall; tablets and handwriting share the lead (each 33%), while laptops and no-notes lag (17% each).
        
        
3. **No Simpson’s Paradox**
    
    - The pattern “tablet most popular,” “laptop second,” “handwritten third” holds true both within each environment subgroup and in the aggregated data—there’s no reversal of trends when you combine across environments.
# Which visualization method was most effective and why?  
# Were there surprising relationships between variables?  
# How could this data be used to make a decision?