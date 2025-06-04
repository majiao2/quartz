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

# CSS Media Quaries  
- CSS media queries allow you to decide what a page should look like depending on the media type being used to display the page
- A media type can be screen, print, handheld, braille, and speech,
- CSS styles that apply to all media types is declared by `@media all`
- See the next slide for an example
- Disadvantages:
    - Lengthy code
    - Can't enumerate all possible devices
- Resource: [CSS tutorial - Media types](https://www.howtocreate.co.uk/tutorials/css/mediatypes)

```html
<style type = "text/css">
    @media all {
        body {
            background-color: steelblue;
        }
        h1 {
            font-family: verdana, helvetica, sans-serif;
            color: palegreen;
        }
        p {
            font-size: 12pt;
            color: white;
            font-family: arial, sans-serif;
        }
    } /* End @media all declaration. */
    @media print {
        body {
            background-color: white;
        }
        h1 {
            color: seagreen;
        }
        p {
            font-size: 14pt;
            color: steelblue;
            font-family: "times new roman", times, serif;
        }
    } /* End @media print declaration. */
</style>
```

# Grid Systems  
- A grid system is a layout methodology where the horizontal and vertical dimensions of the grid (rows, columns) are defined using relative units such as percentages, rather than fixed units like pixels.
- The Bootstrap Grid System divides a row into 12 equal columns
- Columns can be grouped together to create wider columns
- Columns can be grouped differently depending on the width of the container
```scss
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```
- Source: [Grid system · Bootstrap v5.2](https://getbootstrap.com/docs/5.2/layout/grid/)

> [!tldr] Bootstrap Grid Syetem Example
![[Pasted image 20250526125317.png|1050]]

> [!check]+ Bootstrap
> - Bootstrap is an open-source frontend web framework, also known as UI toolkit, for designing web applications
> - Originally developed by Twitter (renamed to X) in 2011, the latest version is Bootstrap 5.3.x
> - We use Bootstrap 5.2.3 in this class (jQuery has been removed)
> - Download the Bootstrap framework (compiled CSS and JS) from [Download · Bootstrap v5.2](https://getbootstrap.com/docs/5.2/getting-started/download/) or use the CDN libraries

[Get started with Bootstrap · Bootstrap v5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/)