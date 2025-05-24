---
title: CSS Part 2
date: 2025-05-24
tags:
  - MISY350
---
[[CSS Part 1]]  

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


- margin and padding Properties
    - The margin property sets the space between the outside of an element’s border and all other content on the page.
    - The padding property determines the distance between the content inside an element and the inside of the element’s border.
    - Margins for individual sides of an element can be specified by using the properties margin-top, margin-right, margin-left and margin-bottom.
    - Padding can be specified in the same way, using padding-top, padding-right, padding-left and padding-bottom.




