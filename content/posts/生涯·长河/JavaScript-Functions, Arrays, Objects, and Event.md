---
title: JavaScript-Functions, Arrays, Objects, and Event
date: 2025-05-28
tags:
  - MISY350
---
[[Introduction to JavaScript]]

# Functions
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

# Arrays
![[Pasted image 20250528163549.png]]  

> [!attention]+ Declaring and Allocating Arrays
> - JavaScript arrays are **Array objects**.
> - You use the **`new` operator** to create a new array and to specify the number of elements in an array.
>     - E.g.,
>         - `var n1= [];`
>         - `var n2 = new Array();`
>         - `var n3 = ["Ford", "Toyota", "Honda"];`

> [!attention]+ Array Methods
> - `push()`: adds new element to the end of array
> - `pop()`: removes last element in array and returns the removed element
> - `shift()`: removes first element in array and returns the removed element
> - `concat()`: concatenates two arrays into one
> - `sort()`: sorts an array
> - `indexOf()`: search array for an element and returns its position index  

```javascript
var nums = [5, 3, 6, 2];
nums.push(1);
console.log(nums); // [5,3,6,2,1]
console.log(nums.pop()); // 1
console.log(nums); // [5,3,6,2]
console.log(nums.shift()); // 5
console.log(nums); // [3,6,2]
console.log(nums.concat([3, 5])); // [3,6,2,3,5]
console.log(nums.sort()); // [2,3,6]
console.log(nums.indexOf(6)); // 2
```

# Events  
- JavaScript events
	- allow scripts to respond to user interactions and modify the page accordingly
- Events and event handling
	- help make web applications more dynamic and interactive

> [!example]+ Event Examples
> - **Click**: When the user single-clicks an HTML element
> - **Dblclick**: When the user double-clicks an element
> - **Change**: When the user makes a selection change in a Select element
> - **Submit**: When a form’s data is submitted
> - **Mouseover**: When the mouse cursor enters an element, a mouseover event occurs for that element
> - **Mouseout**: When the mouse cursor leaves the element, a mouseout event occurs for that element  

> [!error]+ Event Handlers
> - An **event handler** is a function that responds to an event.
> - Assigning an event handler to an event on a DOM node is called **registering an event handler**.
> - Method `addEventListener` can be called multiple times on a DOM node to register more than one event - handling method for an event.
> - If a script in the head attempts to get a DOM node for an HTML element in the body, `getElementById` returns `null` because the body has not yet loaded.

> [!hint]+ The Window Object
> - The window object represents an open window in a browser.  
> 	- `window.document`：访问当前页面的文档。
> 	- `window.alert()`：弹出提示框。
> 	- `window.innerWidth`：获取窗口的宽度。
> - If a document contains frames (`<iframe>` tag), there is a window object for the HTML document, and one additional window for each frame.  
> 	- 每个 `<iframe>` 都有自己独立的 `window` 对象，代表该框架内的文档。这些子窗口是主窗口的 “子级”，可以通过 `iframeElement.contentWindow` 访问。

> [!hint]+ The load Event
> - The window object’s load event fires when the window finishes loading successfully.
>     - i.e., all its children are loaded and all external files referenced by the page are loaded.
> - Every DOM element has a load event, but it’s most commonly used on the window object.  
> 	- `load` 事件最常被用在 `window` 对象上

> [!hint]+ Window Methods
> - `prompt()`: displays a dialog box that prompts the user for input and returns the input value if the user clicks "OK"
> - `alert()`: display an alert message and an OK button
> - `setTimeout()`: call a function after a specified number of milliseconds
> - `setInterval()`: call a function at the specified interval in milliseconds
> - [The Window Object](https://www.w3schools.com/jsref/obj_window.asp)

> [!done]+ The Document Object
> - The root of an HTML document
> - Methods:
>     - `getElementById()`: returns the value of the element at the specified id
> 	    - 这是 JavaScript 中用于在 HTML 文档中通过元素的 `id` 属性值来获取特定元素的方法。在 HTML 里，每个元素可以设置唯一的 `id` 属性，通过 `document.getElementById("元素的id值")` 这种形式调用该方法，就能获取到对应的 DOM 元素对象。获取到元素对象后，就可以进一步操作该元素，比如修改其文本内容、样式属性等。
>     - `writeln()`: writes a line of output to the document (adds a new line at the end)
>     - `write()`: writes output to the document

> [!done]+ The DOMContentLoaded Event
> - The DOMContentLoaded event fires <mark style="background: #bcddbe;">when the initial HTML document has been completely loaded and parsed</mark>, without waiting for stylesheets, images, and subframes to finish loading.
> - Window’s load event should be used only to detect a fully-loaded page.  
> - **提前操作 DOM**：  
	当需要在页面结构加载完成后立即操作 DOM（如绑定事件、动态渲染内容），但不需要等待所有外部资源时，使用 `DOMContentLoaded` 比 `window.load` 更高效

| **对比维度** | **DOMContentLoaded** | **window.load**               |
| -------- | -------------------- | ----------------------------- |
| **触发时机** | HTML 解析完成，无需等待外部资源   | 所有资源（HTML、样式、图片、iframe 等）加载完成 |
| **执行顺序** | 先触发                  | 后触发                           |
| **典型用途** | DOM 操作、事件绑定（无需等待资源）  | 依赖所有资源的操作（如图片尺寸计算）            |
| **性能影响** | 触发早，代码执行更快           | 触发晚，可能导致用户等待                  |
- **`document.addEventListener("DOMContentLoaded", ...)`**：  
    将事件监听器绑定到`document`对象，它是 HTML 文档的根节点。
- **`window.addEventListener("load", ...)`**：  
    将事件监听器绑定到`window`对象，它代表浏览器窗口。