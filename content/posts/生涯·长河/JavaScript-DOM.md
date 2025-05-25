---
title: JavaScript-DOM
date: 2025-05-25
tags:
  - MISY350
---
> [!example]+ DOM Nodes and Trees
> - The nodes in a document make up the page’s **DOM tree**, which describes the relationships among elements
> - Nodes are related to each other through child - parent relationships
> - A node can have multiple children, but **only one parent**
> - Nodes with the same parent node are referred to as siblings
> - The `html` node in a DOM tree is called the root node, which is the parent node of all HTML elements in the page  

# The HTML DOM Tree of Objects
![[Pasted image 20250525194810.png|750]]  

<mark style="background: #FF5582A6;">Finding HTML Elements in JavaScript</mark>

|Method|Description|
|---|---|
|`document.getElementById(id)`|Find an element by element id|
|`document.getElementsByTagName(name)`|Find elements by tag name|
|`document.getElementsByClassName(name)`|Find elements by class name|

---
# Finding HTML Elements in JavaScript
![[Pasted image 20250525195129.png|1025]]
```html
<!DOCTYPE html>
<html>
<body>
  <div id="intro">
    <p class="major">第一个段落</p>
    <p>第二个段落</p>
    <p class="major">第三个段落</p>
  </div>

  <div class="major">
    <p>外部段落</p>
  </div>

  <button onclick="demoDOM()">执行DOM操作</button>

  <script>
    function demoDOM() {
      // 1. 通过ID获取元素
      var myElement = document.getElementById("intro");
      console.log("通过ID获取的元素:", myElement);

      // 2. 获取特定元素下的所有<p>标签
      var paragraphs = myElement.getElementsByTagName("p");
      console.log("intro下的所有p标签:", paragraphs);
      
      // 遍历并修改文本内容
      for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "blue";
      }

      // 3. 通过类名获取元素
      var majorElements = document.getElementsByClassName("major");
      console.log("所有class=major的元素:", majorElements);
      
      // 修改第一个匹配元素的背景色
      if (majorElements.length > 0) {
        majorElements[0].style.backgroundColor = "yellow";
      }
    }
  </script>
</body>
</html>
```

# Finding HTML Elements by CSS Selectors  
![[Pasted image 20250525195304.png|1025]]  
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    /* 定义样式，用于后续展示操作效果 */
   .intro {
      border: 1px solid gray;
      padding: 10px;
    }
  </style>
</head>

<body>
  <!-- 定义一些具有class为intro的p元素 -->
  <p class="intro">这是第一个class为intro的p元素</p>
  <p class="intro">这是第二个class为intro的p元素</p>
  <p>这是一个普通的p元素</p>

  <button onclick="operateElements()">操作元素</button>

  <script>
    function operateElements() {
      // 使用document.querySelectorAll()方法获取所有class为intro的p元素
      var x = document.querySelectorAll("p.intro");
      // 遍历获取到的元素集合
      for (var i = 0; i < x.length; i++) {
        // 为每个元素添加一个点击事件监听器
        x[i].addEventListener('click', function () {
          // 当元素被点击时，改变其文本颜色为红色
          this.style.color ='red';
        });
        // 改变元素的背景颜色为浅黄色
        x[i].style.backgroundColor = 'lightyellow';
      }
    }
  </script>
</body>

</html>
```

# Find HTML Elements by DOM Collections  
- DOM has collections—groups of related objects on a page
- DOM collections are `document.links`/`document.anchors`, `document.images`, and `document.forms`.
    - Contain all the elements of the corresponding type on the page
- The collection’s `length` property specifies the number of items in the collection
Examples:
- `document.images[1]` //the second image in the page
- `document.forms.length` //number of forms in the page

---  

> [!success]+ Access a HTML Element's Attributes
> - Use the dot (.) operator to access an element's attribute values
> - Example:
> 	- Given HTML: `<img id="myImage" src="oldpic.jpg">`

In Javascript:  
```javascript
var x = document.getElementById('myImage');
x.src = "newpic.jpg";
x.className = 'allpics';
x.id = "alternateimg";
```

---  

