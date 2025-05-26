---
title: CSS Part 1
date: 2025-05-22
tags:
  - MISY350
---
[[HTML5 Part 2]]
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

# Different Selectors
![[Pasted image 20250526093559.png|800]]

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
index. html
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
style. css
```css
h1 {
  color: blue;
  text-align: center;
}

p {
  font-size: 16px;
  line-height: 1.6;
}
```

# CSS Fonts  
- `font-weight` property specifies the “boldness” of text. Possible values are:
    - `bold`
    - `normal` (the default)
    - `bolder` (bolder than bold text)
    - `lighter` (lighter than normal text)
    - Boldness also can be specified with multiples of 100, from 100 to 900 (e.g., 100, 200, …, 900). Text specified as normal is equivalent to 400, and bold text is equivalent to 700
- `font-family` property specifies the name of the font to use.
    - Generic font families allow authors to specify a type of font instead of a specific font, in case a browser does not support a specific font.
    - Times New Roman is outdated
    - Use Arial, Helvetica, and Sans-serif
- `font-size` property specifies the size used to render the font.
	- You can specify a point size or a relative value such as xx-small, x-small, small, smaller, medium, large, larger, x-large and xx-large.
	- Relative font-size values are preferred over points, because an author does not know the specific measurements of each client’s display.
	- Relative values permit more flexible viewing of web pages.
	    - For example, users can change font sizes the browser displays for readability.
	- A point size value is formed by:
	    - an optional + or -
	    - followed by a number
		    - followed by a two-letter abbreviation indicating the unit (There are no spaces in the middle of the value)
	    - Example: `p {font-size: 0.4em}`
    - Units include px(pixels), em(size of letter M), ex(size of letter x), in (inch), cm(centimeter)
	- Allows you to set text to none, italic or oblique
# CSS Text  
- **text-decoration property**
	- underline
	- overline
	- line-through
	- blink
- **color property** specifies the color of text
	- In CSS you can (see above) use three-hex values: "06f" is equal to "0066ff".
```css
{
  color: keyword |
         #hex hex hex |
         #hex hex hex hex hex hex |
         rgb(int int int) |
         rgb(%%%)
}
```

- **text-aligh property**
	- Text in an element can be centered using `text-align: center;`; other values for the text-align property are `left` and `right`
- **text-indent property**
	- Indents the first line of text in the element by the specified amount