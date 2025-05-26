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

