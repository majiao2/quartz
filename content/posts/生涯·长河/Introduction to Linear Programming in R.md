---
title: Introduction to Linear Programming in R
date: 2025-05-26
tags:
  - BUAD345
---
[[Monte Carlo Simulation in R]]  

> [!example]+ What is Linear Programming?
> - Definition:
> 	- **Linear programming** is a mathematical method for determining a way to achieve the best outcome (such as maximum profit or lowest cost) in a given mathematical model for some list of requirements represented as linear relationships
> - Purpose:
> 	- Used to optimize operations, maximize efficiency, and solve complex decision problems.  

> [!todo]+ Key Components of Linear Programming
> - <mark style="background: #bcddbe;">Decision Variables:</mark>
> 	- Variables that represent quantities to determine by the model (e.g., quantities of products to produce).
> - <mark style="background: #bcddbe;">Objective Function:</mark>
> 	- The function that needs to be maximized or minimized (e.g., total profit, total cost).
> - <mark style="background: #bcddbe;">Constraints:</mark>
> 	- Conditions that must be met for the solution to be viable (e.g., resource limits, demand fulfillment).  

> [!abstract]+ Real-World Applications of Linear Programming
> - <mark style="background: #FFB86CA6;">Manufacturing:</mark>
> 	- Optimize production levels and mix to maximize profit.
> - <mark style="background: #FFB86CA6;">Agriculture:</mark>
> 	- Efficiently allocate resources such as seeds, fertilizers, and labor to maximize crop output.
> - <mark style="background: #FFB86CA6;">Transportation:</mark>
> 	- Optimize routes and logistics to minimize costs and time.  


# Formulating Linear Programming Problems
- Steps to Formulation:
1. Identify and define decision variables.
2. Construct the objective function to express what needs to be maximized or minimized.
3. Write down all constraints as linear inequalities or equations.

- Constructing Objective Functions
	- Maximization
		- Often involves profit, efficiency, or output maximization
	- Minimization
		- Typically involves cost, waste, or time minimization
- Writing Constrants
	- Equality Constraints
	- 