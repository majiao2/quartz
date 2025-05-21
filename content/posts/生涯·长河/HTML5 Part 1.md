---
title: HTML5 Part 1
date: 2025-05-21
tags:
  - MISY350
---
# Intro to HTML
- HTML, which stands for **HyperText Markup Language**, is the standard markup language for creating web pages.
- It is used to specify the content and structure of a web page, enabling the creation of visually engaging web pages with images, text, and interactive forms.
- In modern web design, a clear separation is made among content (HTML), styling (CSS), and behavior (JavaScript).
    - HTML should not be used for styling purposes, such as alignment, indentation, colors, spacing, font formats, background, etc.
# Basic HTML5 Terms
- **Tag**: an HTML recognized keyword enclosed in angle brackets
    - e.g., `<html>`, `</html>`
- **Element**: in the format of `<start tag>mark up text<end tag>`
    - e.g., `<title>Example Title</title>`
- **Attribute**: in the format of `AttributeName="value"`
    - e.g., `<meta charset="utf-8">`
- **Void element**: An element that has no mark up text, nor the end tag
    - e.g., `<meta charset="utf-8">` or `<meta charset="utf-8" />`

> [!info] Required HTML Sections
>- **Head Section (invisible)**
>    - A container for all head elements, defined using the `<head>` and `</head>` tags.
>    - The title element is required.
>    - Optional elements include meta, style, script, etc.
>- **Body Section (visible)**
>    - Defines the document body, using `<body>` and `</body>` tags.
>    - Can use many HTML elements, including text, paragraph, image, hyperlink, table, form, etc.
> 
> ![[Pasted image 20250521212821.png|240]]

---

> [!done] Head Section Elements
- Title
```html
<head>
  <title>我的个人博客</title>
</head>
```
- Meta
   - Charset
```html
<head>
  <meta charset="utf - 8">
</head>
```
   - Keywords
```html
<head>
  <meta name="keywords" content="旅游, 景点, 攻略">
</head>
```
   - Description
```html
<head>
  <meta name="description" content="提供全球热门旅游景点攻略和旅行资讯，助您规划完美旅程。">
</head>
```
   - Etc.
```html
<head>
  <meta name="viewport" content="width=device-width, initial - scale = 1.0">
</head>
```
   - Style
```html
<head>
  <style>
    body {
      background - color: lightblue;
    }
    h1 {
      color: white;
      text - align: center;
    }
  </style>
</head>
```
   - Script
```html
<head>
  <script>
    function greet() {
      alert('欢迎访问本网页！');
    }
  </script>
</head>
```

---

> [!done] Body Section Elements
- Heading elements (h1 - h6)
```html
  <h1>主标题</h1>
  <h2>副标题</h2>
  <h3>子标题</h3>
```
- Paragraph (strong, em)
```html
<p>这是普通文本，<strong>这是加粗文本</strong>，<em>这是斜体文本</em></p>
```
- Linking (a)
```html
<a href="https://www.example.com">外部链接</a>
```
- Internal Linking (a with #)
```html
<a href="#section2">跳转到第二部分</a>
<!-- 需配合目标元素的id属性 -->
<h2 id="section2">第二部分内容</h2>
```
- Image and Image Linking (img)
```html
<img src="image.jpg" alt="图片描述">
<a href="https://www.example.com">
  <img src="logo.png" alt="链接图片">
</a>
```
- Lists (unordered list, ordered list, list item, nested lists)
```html
<ul>
  <li>无序列表项1</li>
  <li>无序列表项2</li>
</ul>
<ol>
  <li>有序列表项1</li>
  <li>有序列表项2</li>
  <ul>
    <li>嵌套列表项1</li>
    <li>嵌套列表项2</li>
  </ul>
</ol>
```
- Tables (table, thead, tbody, tr, th, td)
```html
<table>
  <thead>
    <tr>
      <th>表头1</th>
      <th>表头2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>单元格1</td>
      <td>单元格2</td>
    </tr>
  </tbody>
</table>
```
- Grouping elements (div, span)
```html
<div class="container">
  <span style="color:red">红色文本</span>
  <p>段落内容</p>
</div>
```
- Line breaks (br)
```html
<p>第一行<br>第二行</p>
```
- [Special characters](e.g., © & copy; )
```html
<p>版权符号: &copy; 注册商标: &reg; 欧元符号: &euro;</p>
```

---

> [!done] Block-Level and Inline Elements
- Source: [https://www.w3schools.com/html/html_blocks.asp](https://www.w3schools.com/html/html_blocks.asp)
- Block-level elements are enclosed in an invisible rectangular box. They always start on a new line and take up the full width available.
    - Examples: h1-h6, ol, ul, li, p, div, table
- Inline elements do not start on a new line and only take up as much width as necessary. They can be embedded in a line
    - Examples: a, img, strong, em, span, br