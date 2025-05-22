---
title: CSS Part 1
date: 2025-05-22
tags:
  - MISY350
---
# Introduction  
- Two aspects of any document are **content** and **style**
    - Content: information to be presented
    - Style: how the information is presented
- HTML's main role is to define content
- Defining style: Cascading Style Sheets 3 (CSS3)
    - Used to specify the presentation of elements separately from the structure of the document.
> [!example]+ CSS Advantages
> - Separation of content from presentation
> - Site-wide consistency  
> - Reduce data transfer over a network  
> - Easy to reformat pages for device portability  
> - Better accessibility  

> [!hint] CSS validator
> [W3C CSS 验证服务](https://jigsaw.w3.org/css-validator/)  

# A Style Sheet  
![[Pasted image 20250522151253.png]]  

> [!note]+ Style Classes
> - Style-class declarations are preceded by a period (.).
> - Use attribute class to define a class in HTML  
> ![[Pasted image 20250522151405.png]]  

> [!note]+ Pseudo Classes
> - A pseudo class give access to information not declared in the HTML document  
> - Examples: hover, visited (visited links), link (unvisited links)  
> - Complete list of pseudo classes can be found at [Title Unavailable \| Site Unreachable](http://www.w3schools.com/css/css_pseudo_classes.asp)  

> [!note]+ Conflicting Styles
> - Most styles defined for parent elements are also i**nherited** by child (nested) elements.
> - Styles specified for child elements have higher specificity and take precedence over styles defined for their parent elements
> - Styles may be defined by an <span style="background:#fff88f">author (us!)</span>, a <span style="background:#fff88f">user</span>, or a <span style="background:#fff88f">user agent (browser)</span>.  
>> - Styles **cascade** (and hence the term “Cascading Style Sheets”), or flow together, such that the ultimate appearance of elements on a page results from combining styles defined in several ways.  
>> - Styles defined by authors take precedence over styles defined by the user.  
>> - Styles defined by the user take precedence over styles defined by the user agent.  
> 

|Style Source|Priority|Description|
|---|---|---|
|**Author Styles**|Highest|CSS rules written by developers|
|**User Styles**|Medium|Styles set by users through browser settings|
|**User - Agent Styles**|Lowest|Default styles built into browsers|

# Three Ways to Specify CSS Styles  
- **Inline styles**
    - Styles declared in HTML elements
    - Only apply to the element where style is declared
    - Do not truly separate presentation from content
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <p style="font-size: 20pt; color: deepskyblue;">
    This is an inline-style example.
  </p>
</body>

</html>
```
- **Embedded styles**
    - Styles declared in an HTML document's head section
    - Apply to the entire HTML document
![[Pasted image 20250522152606.png]]
- **External styles (preferred)**
    - Styles defined in external style sheets
    - Apply to all HTML documents on a site
		- <u>Linking External CSS</u>
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Linking External Style Sheets</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>

<body>
  <h1>这是一个链接外部CSS的示例</h1>
  <p>通过外部CSS来设置我的样式。</p>
</body>

</html>
```