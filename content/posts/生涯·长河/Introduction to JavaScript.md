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


Arithmetic Operators  

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

---  

Comparison Operators

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

---

Logical Operators

| Meaning | JavaScript | Example            |
| ------- | ---------- | ------------------ |
| And     | `&&`       | `(A<B) && (C>D)`   |
| Or      | `\|\|`     | `(A<B) \|\| (C>D)` |
| Not     | `!`        | `!(E>F)`           |

---  

Assignment Operators

|JavaScript|Example|Same As|
|---|---|---|
|=|x=y|x=y|
|+=|x+=y|x=x+y|
|-=|x-=y|x=x-y|
|*=|x*=y|x=x*y|
|/=|x/=y|x=x/y|  

---  

Comment Tags

| 语言         | 单行注释                    | 多行注释                                     |
| ---------- | ----------------------- | ---------------------------------------- |
| JavaScript | `// JavaScript comment` | `/* Multiple line JavaScript comment */` |
| HTML       | `<!-- HTML comment -->` | `<!-- Multiple line HTML comment -->`    |

---  

Strong Opeations

Strong concatenation (+)

| 代码示例                     | 结果                | 说明                                        |
| ------------------------ | ----------------- | ----------------------------------------- |
| `x = "hello " + "world"` | `x="hello world"` | 两个字符串相加，实现字符串拼接                           |
| `x = "hello" + 5`        | `x="hello5"`      | 字符串与数值相加，数值会被转换为字符串后拼接                    |
| `x = "5" + 5`            | `x="55"`          | 字符串 "5" 与数值 5 相加，数值 5 被转换为字符串后拼接          |
| `x = Number("5") + 5`    | `x=10`            | `Number`函数将字符串 "5" 转换为数值 5 ，再与数值 5 进行加法运算 |

<mark style="background: #FF5582A6;">Work with Strings</mark>
``` javascript
// 定义变量 x 为 "University of Delaware"
var x = "University of Delaware";

// 获取 x 的长度
var y = x.length;  // y = 22，表示字符串的长度

// 获取 x 中第一次出现字符 "i" 的索引位置
y = x.indexOf ("i");  // y = 2，索引从 0 开始计数，"i" 第一次出现在第 2 个位置

// 获取 x 中最后一次出现字符 "e" 的索引位置
y = x.lastIndexOf ("e");  // y = 21，"e" 最后一次出现的位置是索引 21

// 获取 x 字符串中从索引 14 到索引 8 之间的子字符串（该操作无效，返回空字符串）
var z = x.substring (14, 8);  // z = ""，因为起始索引大于结束索引，返回空字符串

// 获取 x 字符串中从索引 14 开始，截取 8 个字符的子字符串
z = x.substr (14, 8);  // z = "Delaware"，从索引 14 开始，截取 8 个字符

// 将 x 字符串转为大写
x = x.toUpperCase ();  // x = "UNIVERSITY OF DELAWARE"，返回大写形式

// 将 x 字符串转为小写
x = x.toLowerCase ();  // x = "university of delaware"，返回小写形式
```

[JavaScript String Reference](https://www.w3schools.com/jsref/jsref_obj_string.asp)  

---  

Data and Time

```javascript
// 创建 Date 对象（当前日期时间）
var a = new Date();   // 当前日期和时间
```

| Date 方法     | 功能                       | 返回值范围  |
| ----------- | ------------------------ | ------ |
| getHours    | 获取当前时间的小时数               | 0 - 23 |
| getDay      | 获取当前是星期几（0 代表周日，6 代表周六 ） | 0 - 6  |
| getDate     | 获取当前月份中的日期               | 1 - 31 |
| getMinutes  | 获取当前时间的分钟数               | 0 - 59 |
| getMonth    | 获取当前月份（0 代表一月，11 代表十二月 ） | 0 - 11 |
| getFullYear | 获取当前年份（四位数表示 ）           | yyyy   |

## Control structures: Conditions  
![[Pasted image 20250524231545.png|475]]
```javascript
// 定义一个变量用于条件判断
var num = 10;
// 使用if - else语句
if (num > 5) {
    console.log("数字大于5");
} else {
    console.log("数字小于等于5");
}
```

![[Pasted image 20250524231559.png|350]]
```javascript
// 定义一个变量用于switch判断
var day = 3;
switch (day) {
    case 1:
        console.log("星期一");
        break;
    case 2:
        console.log("星期二");
        break;
    case 3:
        console.log("星期三");
        break;
    default:
        console.log("其他");
        break;
}
```

## Control structures: Loop  
## Input/Output in JavaScript