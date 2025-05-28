---
title: JavaScript-Functions, Arrays, Objects, and Event
date: 2025-05-28
tags:
  - MISY350
---

> [!example]+ JavaScript Functions
> - Built-in functions
> 	- JavaScript provides several objects with extensive method collections for performing common operations:
> 	    - `Math`: For numerical calculations.
> 	    - `String`: For string manipulation.
> 	    - `Date`: For date and time operations.
> 	    - `Array`: For working with collections of data.
> - Customized functions
> 	- You can define your own functions to perform specific tasks.  

![[Pasted image 20250528162056.png]]
```javascript
function addNumbers(num1, num2) {
    // 函数代码部分，实现两个数相加并返回结果
    return num1 + num2;
}

// 调用函数并打印结果
const result = addNumbers(5, 3);
console.log(result); 
```

> [!tldr]+ Three ways to return control to the point at which a function was invoked
- **Reaching the function-ending right brace**: When the function execution reaches the closing right brace of the function, control automatically returns to the point where the function was called.
- **Executing a `return;` statement**: When the function executes a `return;` statement, it immediately stops executing the function and returns control to the caller. This statement is typically used when there is no need to return a specific value and you only want to end the function execution early.
- **Executing a `return expression;` statement**: When this statement is executed, the value of the `expression` is calculated and returned to the script that called the function, and at the same time, the function execution ends.

