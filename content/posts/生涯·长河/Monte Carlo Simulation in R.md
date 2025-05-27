---
title: Monte Carlo Simulation in R
date: 2025-05-26
tags:
  - BUAD345
---
> [!info]+ What is Monte Carlo Simulation?
> - Definition: A computational technique using random sampling to obtain numerical results.
> 	- Named after the Monte Carlo Casino in Monaco due to its inherent randomness.
> - <mark style="background: #FF5582A6;">Key idea:</mark> Use randomness to solve problems that
> - Are well-defined
> - Involve uncertainty
> - Have complicated structure
> - There is no way to get the exact solution easily  

> [!attention]+ Motivation and Applications
> - **Motivation:**
> 	- Handle complex problems <mark style="background: #bcddbe;">with uncertain inputs</mark>.
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
> 	- As the number of trials increases, <u>the average result approaches the expected value</u> (<mark style="background: #FFB86CA6;">we run the simulation for many replications</mark>).  

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
![[Pasted image 20250526161841.png|325]]  

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
![[Pasted image 20250526162340.png|400]]

> [!abstract]+ Random Walk
> - A random walker starts at the origin (0, 0) and takes steps in random directions (North, South, East, West):
> 	- Simulate the movement of a random walker over 100 steps.
> 	- Visualize the path using ggplot2  

> [!danger]+ Monty Hall
> <mark style="background: #FF5582A6;">Scenario</mark>
> 1. You are on a game show with three doors.
> 2. Behind one door is a car (the prize), and behind the other two doors are goats.
> 3. You choose one door.
> 4. The host, who knows what's behind the doors, opens one of the other two doors, revealing a goat.
> 5. You are given the option to stick with your original choice or switch to the other unopened door.
> <mark style="background: #FF5582A6;">Question</mark>
> - Should you stick with your original choice or switch to the other door to maximize your chances of winning the car?

> [!danger]+ Optional: Multi-Period Inventory Managemen
> <mark style="background: #FF5582A6;">In a periodic review inventory system:</mark>
> - Review inventory levels at fixed intervals.
> - Order a fixed quantity if the inventory level falls below a certain threshold.
> - Goal: Minimize total holding and ordering costs over multiple periods.
> - Weekly demand follows a normal distribution with mean 100 units and standard deviation 20 units.
> - Order a fixed quantity of 200 units when inventory falls below reorder point of 150 units.
> - Holding cost: $1 per unit per week.
> - Ordering cost: $50 per order.
> - Simulate inventory levels and costs over a 12 - week period.  