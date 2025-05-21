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

> [!info]+ Required HTML Sections
>- **Head Section (invisible)**
>    - A container for all head elements, defined using the `<head>` and `</head>` tags.
>    - The title element is required.
>    - Optional elements include meta, style, script, etc.
>- **Body Section (visible)**
>    - Defines the document body, using `<body>` and `</body>` tags.
>    - Can use many HTML elements, including text, paragraph, image, hyperlink, table, form, etc.
> 
> ![[Pasted image 20250521212821.png]]

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

> [!done] Body Section Elements
- Heading elements (h1 - h6)
- Paragraph (strong, em)
- Linking (a)
- Internal Linking (a with #)
- Image and Image Linking (img)
- Lists (unordered list, ordered list, list item, nested lists)
- Tables (table, thead, tbody, tr, th, td)
- Grouping elements (div, span)
- Line breaks (br)
- [Special characters](e.g., © & copy; )

> [!done] Block-Level and Inline Elements
- Source: [https://www.w3schools.com/html/html_blocks.asp](https://www.w3schools.com/html/html_blocks.asp)
- Block-level elements are enclosed in an invisible rectangular box. They always start on a new line and take up the full width available.
    - Examples: h1-h6, ol, ul, li, p, div, table
- Inline elements do not start on a new line and only take up as much width as necessary. They can be embedded in a line
    - Examples: a, img, strong, em, span, br