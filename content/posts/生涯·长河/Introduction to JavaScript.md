---
title: Introduction to JavaScript
date: 2025-05-24
tags:
  - MISY350
---
[[CSS Part 2]]

> [!info]+ When to Use JavaScript
> - **What CSS can handle**:
>     - Hover and focus events
>     - Image swaps
>     - Basic animation
>     - Drop - down menus
> - **What JavaScript is used to achieve**:
>     - Visual enhancements that CSS can't do
>     - Advanced animation  

# Where Does One’s JavaScript Code Go?  
<mark style="background: #FF5582A6;">Embedding JavaScript in HTML</mark>
```html
<head>
    <title>JavaScript template</title>
    <script type="text/javascript">
        // JavaScript code goes here
    </script>
</head>
<body>
   ...
</body>
```
- Actually,
    - JavaScript code can be inserted anywhere in the HTML, including in the body.
    - There are no limits on how many `<script>` tags can be embedded in the HTML code of a web page.

<mark style="background: #FF5582A6;">Putting the JavaScript in its Own File</mark>
```html
<head>
    <title>Client-side input validation</title>
    <script src="inputValidator.js" type="text/javascript"></script>
</head>
```
- Attributes
	- **src** - Specify URL of external code source.
	- **type** - specifies scripting language ("text/javascript")
<u>This is the best way for code reuse.</u>  

# Variables  
- **Valid variable names**
    - Consist of letters, digits, underscores, and dollar signs
    - Do not begin with a digit
    - Not a <font color="red">reserved JavaScript keyword</font>
- JavaScript is <font color="red">case sensitive</font>
- A `var` or `let` statement to declare a variable:
```javascript
var varName=1;
```
 