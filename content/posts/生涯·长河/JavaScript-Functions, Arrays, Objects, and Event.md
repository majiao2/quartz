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

> [!attention]+ Functions are Objects
> - An array is a group of variables that have the same name and normally are of the same type.
> - Each individual variable is called an element.
> - We may refer to any one of these elements by giving the array’s name followed by the position number of the element in square brackets (`[]`).  
> - The first element in every array is the zeroth element.
> - The i - th element of array c is referred to as c[i - 1].
> - Every array in JavaScript knows its own length, which it stores in its `length` attribute and can be found with the expression `arrayname.length`.  

![[Pasted image 20250528163549.png]]  

> [!attention]+ Declaring and Allocating Arrays
> - JavaScript arrays are **Array objects**.
> - You use the **`new` operator** to create a new array and to specify the number of elements in an array.
>     - E.g.,
>         - `var n1= [];`
>         - `var n2 = new Array();`
>         - `var n3 = ["Ford", "Toyota", "Honda"];`




