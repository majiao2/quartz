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

> [!hint]+ Functions
> - <mark style="background: #FF5582A6;">Constructing Objective Functions</mark>
> 	- <u>Maximization</u>
> 		- Often involves profit, efficiency, or output maximization
> 	- <u>Minimization</u>
> 		- Typically involves cost, waste, or time minimization
> - <mark style="background: #FF5582A6;">Writing Constrants</mark>
> 	- <u>Equality Constraints</u>
> 		- Precise conditions (e.g., exact amounts of ingredients for a recipe).
> 	- <u>Ineauality Constraints</u>
> 		- Precise conditions (e.g., exact amounts of ingredients for a recipe).  

## Example  
A company manufactures two types of desks: Standard and Deluxe. The profit per Standard desk is $30, and the profit per Deluxe desk is $50. Each type of desk goes through two main processes: Carpentry and Finishing. The Standard desk requires 1 hour in Carpentry and 2 hours in Finishing. The Deluxe desk requires 1.5 hours in Carpentry and 1 hour in Finishing. There are 400 hours available for Carpentry and 300 hours available for Finishing per week. The goal is to maximize the weekly profit.  

<mark style="background: #FF5582A6;">Decision Variables</mark>
- x1​: The number of Standard desks produced per week.
- x2​: The number of Deluxe desks produced per week.
<mark style="background: #FF5582A6;">Objective Function</mark>
- $$Maximize P=30x1​+50x2$$<mark style="background: #FF5582A6;">​
Constraints</mark>
- Carpentry: $$x1​+1.5x2​≤400$$
- Finishing: $$2x1​+x2​≤300$$
```r
# Define the objective coefficients for maximization
objective_prod = c(30, 50)
# Create the constraint matrix
constraints_prod = matrix(c(1, 1.5, 2, 1), nrow=2, byrow=TRUE)
# Define constraint directions
directions_prod = c("<=", "<=")
# Define right - hand side of constraints
rhs_prod = c(400, 300)
# Solve the LP problem
result_prod = lp("max", objective_prod, constraints_prod, directions_prod, rhs_prod)
# Print the solution for production optimization
print(result_prod$solution)
```

# Introduction to lpSolve in R  
`lpSolve` is a package in R that provides functions to solve linear programming problems.  

<mark style="background: #FF5582A6;">Key Function</mark>
- `lp(direction, objective.in, const.mat, const.dir, const.rhs)`, where `direction` can be `'min'` or `'max'`.


> [!danger]+ Components of `lp` Function in R
> `lp(direction, objective.in, const.mat, const.dir, const.rhs)`
> -  `Direction`
> 	- Specifies whether the objective function should be maximized (`'max'`) or minimized (`'min'`).
> -  `Objective.in`
> 	- A numeric vector containing the coefficients of the objective function.
> -  `Const.mat`
> 	- The constraint matrix, where each row represents a constraint.
> -  `Const.dir`
> 	- A character vector specifying the direction of each constraint (e.g., `'<=', '>=', '='`).
> -  `Const.rhs`
> 	- A numeric vector representing the right-hand side values of the constraints.  

## Example of `lp` Function in R
<mark style="background: #FF5582A6;">Example Problem</mark>
$$\max \quad \text{profit} = 25 \times \text{chairs} + 45 \times \text{tables}$$
<mark style="background: #bcddbe;">Subject to:</mark>
- Wood: $4 \times \text{chairs} + 10 \times \text{tables} \leq 100$
- Labor: $3 \times \text{chairs} + 5 \times \text{tables} \leq 80$ 
- Non - negativity: $\text{chairs} \geq 0, \quad \text{tables} \geq 0$
```r
library(lpSolve)
objective <- c(25, 45)
constraints <- matrix(c(4, 10, 3, 5), nrow=2, byrow=TRUE)
directions <- c('<=', '<=')
rhs <- c(100, 80)
solution <- lp('max', objective, constraints, directions, rhs)
solution$solution
solution$objval
```

> [!quote]+ Interpreting lpSolve Output
> - Solution Status:   
> 	- Indicates if the solution is `optimal`, `infeasible`, etc. (`solution$status`) 
> - Optimal Values: 
> 	- The values of decision variables at the optimal solution (`solution$solution`) 
> - Objective Function Value: 
> 	- The maximum (or minimum) value of the objective function (`solution$objval`)  

<mark style="background: #FF5582A6;">Detailed Interpretation Example</mark>  
```r
# 输出解的状态
print(solution$status)
# 0 (optimal)

# 输出决策变量的值
print(solution$solution)
# chairs = 10, tables = 6

# 输出目标函数值
print(solution$objval)
# 395
```
<mark style="background: #FF5582A6;">Understanding Results:</mark>
- Check for <mark style="background: #bcddbe;">feasibility and boundedness</mark> to ensure the solution is valid.
- The optimal solution is to produce 10 chairs and 6 tables, resulting in a maximum profit of 395.

---  

# Example: Diet  
# Example: Transporation  
# Example: Staff Scheduling  
# Example: Investment Problem  
