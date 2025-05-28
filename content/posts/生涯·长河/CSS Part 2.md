---
title: CSS Part 2
date: 2025-05-24
tags:
  - MISY350
---
<mark style="background: #FF5582A6;"></mark>[[CSS Part 1]]  

> [!example]+ Review: Inline and Block-Level Elements
> - **Inline-level elements**
>     - Examples:
>         - img
>         - a
>         - em
>         - strong
>         - Span
> - **Block-level elements**
>     - The Box Model applies
>     - Examples:
>         - body
>         - p
>         - all headings (h1 through h6)
>         - div
>         - table
>         - form  


> [!danger]+ Box Model and Text Flow
> - <mark style="background: #FF5582A6;">Block - level HTML5 elements</mark>  
> 	- Block - level HTML5 elements have a virtual box drawn around them based on the box model.
> 	- When the browser renders an element using the box model, the content is surrounded by <span style="background:#fff88f">padding</span>, <span style="background:#fff88f">a margin</span> and <span style="background:#fff88f">a border</span>.
> - <mark style="background: #FF5582A6;">Padding</mark>  
> 	- The padding property determines the distance between the content inside an element and the edge of the element.
> 	- Padding can be set for each side of the box by using padding - top, padding - right, padding - left and padding - bottom.
> - <mark style="background: #FF5582A6;">Margin</mark>  
> 	- Determines the distance between the element’s edge and any outside text.
> 	- Margins for individual sides of an element can be specified by using margin - top, margin - right, margin - left and margin - bottom.  
>  ![[Pasted image 20250524220822.png|550]]  

> [!abstract]+ The CSS Display Property
> - You can make an inline element behave like a block element using the display css property.
>     - In the following example:
>         - The `<span>` element will take up the full width of its container.
>         - Other elements will appear above and below it.
>         - The box model applies here.
```css
/* style.css */
.block-element {
    display: block;
    background-color: lightblue;
    padding: 10px;
}
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Block Element Demo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p>This is an <span class="block-element">inline element</span> with display: block; applied.</p>
</body>
</html>
```

> [!abstract]+ Box Model and Text Flow
> - Border
>     - The border is controlled using the properties:
>         - border-width
>             - May be set to any of the CSS lengths or to the predefined value of thin, medium or thick.
>         - border-color
>             - Sets the color used for the border.
>         - border-style
>             - Options are: none（无）、hidden（隐藏）、dotted（点状）、dashed（虚线）、solid（实线）、double（双线）、groove（凹槽）、ridge（垄状）、inset（内陷）和 outset（外凸）
> - margin and padding Properties
>     - The margin property sets the space between the outside of an element’s border and all other content on the page.
>     - The padding property determines the distance between the content inside an element and the inside of the element’s border.
>     - Margins for individual sides of an element can be specified by using the properties `margin-top`,  `margin-right`, `margin-left` and `margin-bottom`.
>     - Padding can be specified in the same way, using `padding-top`, `padding-right`, `padding-lef` t and `padding-bottom`.

> [!quote]+ CSS Backgrounds
> - <mark style="background: #FF5582A6;">background-repeat Property</mark>
>     - The background-repeat property controls the tiling of the background image.
>         - Setting the tiling to `no-repeat` displays one copy of the background image on screen.
>         - Setting to `repeat` (the default) tiles the image vertically and horizontally.
>         - Setting to `repeat-x` tiles the image only horizontally.
>         - Setting to `repeat-y` tiles the image only vertically.
> - <mark style="background: #FF5582A6;">background-image Property</mark>
>     - Specifies the URL of the image, in the format `url(fileLocation)`.
> - <mark style="background: #FF5582A6;">background-position Property</mark>
>     - Places the image on the page using the values `top`, `bottom`, `center`, `left`, and `right` individually or in combination for vertical and horizontal positioning. You can also position by using lengths.

> [!quote]+ CSS Backgrounds
> **CSS box-shadow property**
> - Adds a shadow effect to any block-level element.
> - The property has 4 values:
>     - Horizontal offset of the shadow
>     - Vertical offset of the shadow
>     - Blur radius
>     - Color
> - Example:
> ![[Pasted image 20250524222924.png]]  


# Animation  
- CSS animation property: allows animation of most HTML elements without using JavaScript or Flash
- Syntax:
```css
{animation: name timing-function duration delay iteration-count direction;}
```
- **name**: name of the animation
- **timing-function**: type of animation (linear, ease, ease-in, ease-out, ease-in-out, cubic-bezler, etc.)
- **duration**: time for one iteration
- **delay**: time after the page loads and before animation begins
- **iteration-count**: number of times animation runs (a number or infinite)
- **direction**: animation direction (normal, alternate, etc.)
- Also need to define a CSS @keyframe rule for an animation
![[Pasted image 20250524223228.png|600]]

> [!check]+ Browser Compatibility
> - Some CSS extensions only work with specific browsers.
>     - Extensions with prefix `–webkit` only work with webkit - based browsers, such as Chrome, Safari, android and IOS browsers.
>     - Extensions with prefix `–moz` only work with Mozilla Firefox.
>     - Extensions with prefix `–ms` only work with Microsoft browsers.
>     - Other extensions exist.  

  ![[Pasted image 20250524223435.png|550]]

[Fundamental text and font styling - Learn web development \| MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals)

# demo  
```html
<head>
  <meta charset="utf-8">
  <title>我的网站</title>
  <link rel="stylesheet" href="css1demo.css"> 
  <!-- 引入CSS -->
</head>
```

1. `h1 {color:rgb(179, 89, 89);}`
    - 选择所有的`<h1>`标题元素。
    - 将其文本颜色设置为 RGB 值`(179, 89, 89)`（一种暗红色）。
2. `li ul {font-style: italic;}`
    - 选择嵌套在列表项 (`<li>`) 内的所有无序列表 (`<ul>`)。
    - 将这些列表中的文本设置为斜体。
3. `h1,p {font-family: Verdana, Geneva, Tahoma, sans-serif;}`
    - 同时选择`<h1>`标题和段落 (`<p>`) 元素。
    - 将它们的字体设置为 Verdana（如果不可用，则依次尝试 Geneva、Tahoma 或系统默认的无衬线字体）。
4. `.nodec {font-weight: bolder;}`
    - 选择所有带有`class="nodec"`的元素。
    - 将其字体粗细设置为比父元素更粗（例如，从`normal`变为`bold`）。
5. `li.nodec {font-size:larger;}`
    - 选择同时满足以下条件的元素：
        - 是列表项 (`<li>`)。
        - 带有`class="nodec"`。
    - 将其字体大小设置为比母元素更大。
6. `#wholebread {font-size:smaller;}`
    - 选择 ID 为`wholebread`的唯一元素。
    - 将其字体大小设置为比母元素更小。
7. `a.nodec:hover {text-decoration: none;}`
    - 选择带有`class="nodec"`的链接 (`<a>`)，并且仅在鼠标悬停时生效。
    - 移除悬停时的下划线装饰，保持文本整洁。

>  [CSS Diner - Where we feast on CSS Selectors!](https://flukeout.github.io/)