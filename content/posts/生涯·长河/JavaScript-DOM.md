---
title: JavaScript-DOM
date: 2025-05-25
tags:
  - MISY350
---
[[Introduction to JavaScript]]  

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

> [!success]+ Legacy Form Input Shortcut Accessor
> - Uses the name attribute value of the input element, e.g.,  
![[Pasted image 20250525195917.png|750]]

```javascript
var x = document.forms[0];
var y = x.fullName; //references the fullName text input
var z = x.address; //references the address textarea input
var yy = x.fullName.value; //get the user input value in fullName
```

---  

> [!summary]+ Node Properties
> - parentNode
> - childNodes[nodenumber]
> - firstChild
> - lastChild
> - nextSibling
> - previousSibling  

```javascript
// 获取页面中第一个h1元素的父节点，预期结果是body元素
const bodyElement = document.getElementsByTagName("h1")[0].parentNode;
console.log("第一个h1元素的父节点（预期为body元素）:", bodyElement);

// 获取页面中第一个html元素的第一个子节点，预期结果是head元素
const headElement = document.getElementsByTagName("html")[0].firstChild;
console.log("第一个html元素的第一个子节点（预期为head元素）:", headElement);

// 获取页面中第一个html元素的最后一个子节点，预期结果是body元素
const bodyElement2 = document.getElementsByTagName("html")[0].lastChild;
console.log("第一个html元素的最后一个子节点（预期为body元素）:", bodyElement2);

// 获取页面中第一个h1元素的前一个兄弟节点，预期结果是a元素
const aElement = document.getElementsByTagName("h1")[0].previousSibling;
console.log("第一个h1元素的前一个兄弟节点（预期为a元素）:", aElement);

// 获取页面中第一个a元素的后一个兄弟节点，预期结果是h1元素
const h1Element = document.getElementsByTagName("a")[0].nextSibling;
console.log("第一个a元素的后一个兄弟节点（预期为h1元素）:", h1Element);
```

---  
# Changing HTML Elements

| Method                                   | Description                                   |
| ---------------------------------------- | --------------------------------------------- |
| `element.innerHTML = new html content`   | Change the inner HTML of an element           |
| `element.attribute = new value`          | Change the attribute value of an HTML element |
| `element.setAttribute(attribute, value)` | Change the attribute value of an HTML element |
| `element.style.property = new style`     | Change the style of an HTML element           |  

![[Pasted image 20250525200505.png]]

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <p id="p1">原始文本</p>
  <script>
    // 获取id为p1的元素
    var x = document.getElementById("p1");
    // 更新元素的innerHTML
    x.innerHTML = "New text";
    // 隐藏该元素
    x.style.visibility = "hidden";
  </script>
</body>

</html>
```


# Adding and Deleting Elements  
|Method|Description|
|---|---|
|`document.createElement(element)`|Create an HTML element|
|`document.removeChild(element)`|Remove an HTML element（实际应在父元素上调用，非 document 方法 ）|
|`document.appendChild(element)`|Add an HTML element（实际应在父元素上调用，非 document 方法 ）|
|`document.replaceChild(element)`|Replace an HTML element（实际应在父元素上调用，非 document 方法 ）|
Note: `removeChild()`, `appendChild()`, `replaceChild()` are NOT document methods. They can be used with any parent element object, e.g.,

![[Pasted image 20250525200734.png]]

```html
<!DOCTYPE html>
<html>
<body>
  <div id="container">
    <h2>现有内容</h2>
    <p>这是原始段落。</p>
    <div id="place">
      <!-- 新元素将被添加到这里 -->
    </div>
  </div>

  <button onclick="addNewElement()">添加新段落</button>

  <script>
    function addNewElement() {
      // 创建一个新的<p>元素
      var x = document.createElement("p");
      
      // 设置新元素的文本内容
      x.textContent = "这是新创建的段落！";
      
      // 设置新元素的样式（可选）
      x.style.color = "blue";
      x.style.fontSize = "18px";
      
      // 将新元素添加到id为"place"的元素内部
      document.getElementById("place").appendChild(x);
    }
  </script>
</body>
</html>
```

> [!example]
> ![[Pasted image 20250525200918.png|600]]  

```html
<!DOCTYPE html>
<html>
<body>
  <div id="container">
    <h2>原始内容</h2>
    <p>这是页面的初始段落。</p>
  </div>

  <button onclick="addNewParagraph()">添加新段落</button>

  <script>
    function addNewParagraph() {
      // 创建一个新的<p>元素
      var newNode = document.createElement("p");
      
      // 设置新元素的ID属性
      newNode.id = "new";
      
      // 定义要添加的文本
      var txt = "I love Tech";
      
      // 创建文本节点并将其附加到新段落
      newNode.appendChild(document.createTextNode(txt));
      
      // 设置新段落的样式
      newNode.style.color = "green";
      newNode.style.fontWeight = "bold";
      
      // 将新段落添加到容器中
      document.getElementById("container").appendChild(newNode);
    }
  </script>
</body>
</html>
```

# Adding Event Handlers  
| Method                                                   | Description                                   |
| -------------------------------------------------------- | --------------------------------------------- |
| `document.getElementById(id).onclick = function(){code}` | Adding event handler code to an onclick event |

![[Pasted image 20250525201232.png|950]]

```html
<!DOCTYPE html>
<html>
<body>
    <div id="p1" onclick="alert('通过属性绑定')">点击我</div>

    <script>
        // 推荐方式：使用addEventListener
        document.getElementById("p1").addEventListener("click", function() {
            console.log("通过addEventListener触发");
        }, false);

        // 不推荐方式：直接赋值onclick（会覆盖HTML中的onclick属性）
        document.getElementById("p1").onclick = function() {
            console.log("onclick属性被JavaScript覆盖");
        };
    </script>
</body>
</html>
```

