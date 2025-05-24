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
 - JavaScript variables have dynamic data types
```javascript
var length = 16; // Number
var lastName = "Johnson"; // String
var cars = ["Saab", "Volvo", "BMW"]; // Array
var x = {firstName:"John", lastName:"Doe"}; // Object
```


<center>Arithmetic Operators</center>  

| Operator | Operation                  |
| -------- | -------------------------- |
| +        | addition                   |
| -        | subtraction                |
| *        | multiplication             |
| /        | division                   |
| %        | modulus (remainder)        |
| ++       | increment                  |
| --       | decrement<center></center> |

| 代码语句        | 执行前`a`值 | 执行后`a`值 | 执行后`b`值 | 说明                               |     |
| ----------- | ------- | ------- | ------- | -------------------------------- | --- |
| `var a=10;` |         |         |         |                                  |     |
| `var b;`    |         |         |         |                                  |     |
| `b = a++;`  | 10      | 11      | 10      | `a++`是后置自增，先把`a`的值赋给`b`，`a`再自增 1 |     |
| `b = ++a;`  | 10      | 11      | 11      | `++a`是前置自增，`a`先自增 1，再把新值赋给`b`    |     |
| `b = a--;`  | 10      | 9       | 10      | `a--`是后置自减，先把`a`的值赋给`b`，`a`再自减 1 |     |
| `b = --a;`  | 10      | 9       | 9       | `--a`是前置自减，`a`先自减 1，再把新值赋给`b`    |     |

<center>Comparison Operators
</center>

|Meaning|JavaScript|Example|
|---|---|---|
|equal|==|(x==y)|
|strict equal|===|(x===y)|
|not equal|!=|(x!=y)|
|greater than|>|(x>y)|
|greater than (or equal to)|>=|(x>=y)|
|less than|<|(x<y)|
|less than (or equal to)|<=|(x<=y)|

| 代码语句               | 说明                             | 结果        |
| ------------------ | ------------------------------ | --------- |
| `var a = 3;`       | 声明变量`a`并赋值为数值 3                | -         |
| `var b = "3";`     | 声明变量`b`并赋值为字符串 "3"             | -         |
| `var c = (a==b);`  | 使用`==`比较`a`和`b` ，会进行类型转换再比较    | `c=true`  |
| `var d = (a===b);` | 使用`===`比较`a`和`b` ，要求类型和值都相同才为真 | `d=false` |

<center>Logical Operators  </center>  

| Meaning | JavaScript | Example            |
| ------- | ---------- | ------------------ |
| And     | `&&`       | `(A<B) && (C>D)`   |
| Or      | `\|\|`     | `(A<B) \|\| (C>D)` |
| Not     | `!`        | `!(E>F)`           |

<center>Assignment Operators</center>  

|JavaScript|Example|Same As|
|---|---|---|
|=|x=y|x=y|
|+=|x+=y|x=x+y|
|-=|x-=y|x=x-y|
|*=|x*=y|x=x*y|
|/=|x/=y|x=x/y|  

<center>Comment Tags</center>

| 语言         | 单行注释                    | 多行注释                                     |
| ---------- | ----------------------- | ---------------------------------------- |
| JavaScript | `// JavaScript comment` | `/* Multiple line JavaScript comment */` |
| HTML       | `<!-- HTML comment -->` | `<!-- Multiple line HTML comment -->`    |

<center>Strong Opeations
</center>

Strong concatenation (+)

| 代码示例                     | 结果                | 说明                                        |
| ------------------------ | ----------------- | ----------------------------------------- |
| `x = "hello " + "world"` | `x="hello world"` | 两个字符串相加，实现字符串拼接                           |
| `x = "hello" + 5`        | `x="hello5"`      | 字符串与数值相加，数值会被转换为字符串后拼接                    |
| `x = "5" + 5`            | `x="55"`          | 字符串 "5" 与数值 5 相加，数值 5 被转换为字符串后拼接          |
| `x = Number("5") + 5`    | `x=10`            | `Number`函数将字符串 "5" 转换为数值 5 ，再与数值 5 进行加法运算 |

Work with Strings
```javascript
var x="University of Delaware";
var y=x.length; 
y=x.indexOf("i"); 
y=x.lastIndexOf("e"); 
var z=x.substring(14,8); 
z=x.substr(14,8); 
x=x.toUpperCase(); 
x=x.toLowerCase();
```
[JavaScript String Reference](https://www.w3schools.com/jsref/jsref_obj_string.asp)  

