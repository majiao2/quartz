---
title: RWD and Bootstrap
date: 2025-05-26
tags:
  - MISY350
---
[[JavaScript-DOM]]  

> [!example]+ What is Responsive Web Design (RWD)
> - Responsive web design makes your web page look good and have the same user experience on all devices
> - **Responsive web design** uses only HTML and CSS to resize, hide, shrink, enlarge, or move the content to make a web page look good on any screen
> - It is a cost-effective alternative to developing mobile applications separately  
> - Source: [Responsive Web Design - Introduction](https://www.w3schools.com/css/css_rwd_intro.asp)


# Viewport  
- The viewport is the user's visible area of a web page.
- The viewport varies depending on the size of the device screen
- By including the following `<meta>` viewport element in your web page, the browser will automatically sets the width of the page to the screen-width of the device:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- You should include the meta element in all your HTML pages from now on
- Potential problems that may cause bad UX:
    - An element can be wider than the viewport;
    - No guarantee that content will look good one all screens.
