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
> - Reaching the function - ending right brace
> - Executing the statement `return;`
> - Executing the statement “`return expression;`” to return the value of `expression` to the <mark style="background: #bcddbe;">caller script</mark>  

> [!attention]+ Functions are Objects
> - A function can be considered as an object and referenced by a variable
>     - e.g., `var obj = function(){ console.log("Hello");};`
> - A function without a name is an **anonymous function**
> - A function can be used as an argument to another function
>     - e.g., `window.setTimeOut(obj, 5000);`

