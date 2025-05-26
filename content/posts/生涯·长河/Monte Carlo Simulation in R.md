---
title: Monte Carlo Simulation in R
date: 2025-05-26
tags:
  - BUAD345
---
> [!info]+ What is Monte Carlo Simulation?
> - Definition: A computational technique using random sampling to obtain numerical results.
> 	- Named after the Monte Carlo Casino in Monaco due to its inherent randomness.
> - Key idea: Use randomness to solve problems that
> - Are well-defined
> - Involve uncertainty
> - Have complicated structure
> - There is no way to get the exact solution easily  

> [!attention]+ Motivation and Applications
> - **Motivation:**
> 	- Handle complex problems with uncertain inputs.
> 	- Model phenomena with significant uncertainty.
> - **Applications:**
> 	- Physics: Particle simulations, Quantum mechanics.
> 	- Finance: Risk analysis, Option pricing.
> 	- Operations: Reliability analysis, Optimization.
> 	- Environmental Science: Climate modeling, Resource management.  

> [!attention]+ Motivation and Applications
> - Random Sampling:
> 	- Selecting a random subset of data from a larger dataset.
> 	- Fundamental for simulating possible outcomes.
> - Probability Distributions:
> 	- Common distributions: Uniform, Normal, Binomial.
> - Law of Large Numbers:
> 	- As the number of trials increases, the average result approaches the expected value (<mark style="background: #FFB86CA6;">we run the simulation for many replications</mark>).  

# Basics of R Programming  
<mark style="background: #FF5582A6;">Basic R Syntax:</mark>
- Variables, operators, data types (`numeric`, `character`, `logical`).
<mark style="background: #FF5582A6;">Data Structures:</mark>
- Vectors: `c()`
- Matrices: `matrix()`
- Data Frames: `data.frame()`
## R Functions and Control Structures
<mark style="background: #FF5582A6;">Writing Functions:</mark>
- Syntax: `function_name = function(arguments) { body }`
<mark style="background: #FF5582A6;">Loops and Conditional Statements:</mark>
- For loop: `for (i in 1:10) { print(i) }`
- While loop: `while (condition) { body }`
- If-else: `if (condition) {} else {}`

## Simulation Process  
![[Pasted image 20250526161841.png]]  

> [!abstract]+ Example: Simulating Probability Distributions
> - Simulate normal, binomial, and other distributions.
>     - Generating Random Numbers:
>         - `runif()`: Uniform distribution.
>         - `rnorm()`: Normal distribution.
>         - `rbinom()`: Binomial distribution.
>     - Visualize distributions using histograms and density plots.

> [!abstract]+ Example: Estimating Pi (π）
> - Generate random points in a unit square and count points inside the unit circle.
> - Estimate π as 4 times the ratio of points inside the circle to the total number of points.  

> [!abstract]+ Machine Breakdown
> - In production management, machine breakdowns can cause significant disruptions:
> 	- **Time between breakdowns** follows an exponential distribution with mean λ.
> 	- Simulate the **number of breakdowns** in a year and estimate the **expected downtime**.  

![[Pasted image 20250526162340.png]]  
