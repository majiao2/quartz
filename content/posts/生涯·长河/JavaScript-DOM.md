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

