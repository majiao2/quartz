---
title: HTML5 Part 2
date: 2025-05-21
tags:
  - MISY350
---
[[HTML5 Part 1]]
# Outline
- Simple HTML forms
    - Input types: text, submit and reset, TextArea, password, select checkbox, radio
    - Form attributes: Method, action
    - Hidden input types
- Advanced forms
    - Input types: color, date, date, month, week, time, range, email, number, url, search, tel
    - Attributes: autofocus, placeholder, required, autocomplete
    - Elements: datalist
- Page structure elements:
    - Header, time, nav, figure and figurecaption, article, summary and details, section, aside, meter, footer, mark and wbr

# Page-structure elements
- **Header (vs. head)**：A page can have multiple header elements; creates a header for each sectioning element; usually includes a heading element (h1, h2, etc.)
- **nav**：used to group navigation links
```html
<nav>
  <ul>
    <li><a href="#">首页</a></li>
    <li><a href="#">产品</a></li>
    <li><a href="#">关于</a></li>
  </ul>
</nav>
```
- **Figure and figurecaption**：a figurecaption can be associated with a group of figures (img, chart, table)
```html
<figure>
  <img src="chart.png" alt="销售数据">
  <figcaption>图1：2023年Q1销售趋势</figcaption>
</figure>
```
- **Article**：used to mark a standalone section, e.g., news article, story, comment
```html
<article>
  <h2>最新技术突破</h2>
  <p>科学家成功研发出新型量子处理器...</p>
</article>
```
- **Summary and details**：summary element displays a right - pointing arrow next to a summary; when the summary is clicked, the arrow points downward and show the details element
```html
<details>
  <summary>查看更多</summary>
  <p>这是隐藏的详细信息...</p>
</details>
```
- **Section**：used to define a group of related content; use a heading (h1 - h6) to define each section
```html
<section id="features">
  <h2>产品特性</h2>
  <p>我们的产品具有以下优势...</p>
</section>
```

| 元素        | 核心语义        | 独立性 | 嵌套关系                   |
| --------- | ----------- | --- | ---------------------- |
| `header`  | 区域头部        | 否   | 可包含`h1-h6`、`nav`等      |
| `nav`     | 导航链接组       | 否   | 通常嵌套在`header`或`footer` |
| `figure`  | 自包含内容（图、表等） | 是   | 包含`img`、`figcaption`   |
| `article` | 独立内容单元      | 是   | 可包含完整的文章结构             |
| `section` | 文档逻辑章节      | 部分  | 包含相关内容块                |
| `details` | 交互式折叠面板     | 否   | 包含`summary`和展开内容       |
[How to Use The HTML5 Sectioning Elements](https://blog.teamtreehouse.com/use-html5-sectioning-elements)  

# demo  
```html
<form method="post" action="html1demo.html">
```

- `<form>` 标签用于定义一个表单，是整个表单内容的容器。
- `method="post"` 表示表单数据提交的方式为 POST 方法，这种方式会将数据封装在请求体中发送到服务器，相比 GET 方法更安全，适合提交敏感信息（如密码等） 。
- `action="html1demo.html"` 指定了表单数据提交的目标页面，这里是名为 `html1demo.html` 的页面，当用户点击提交按钮时，表单数据会被发送到该页面进行处理。

![[Pasted image 20250524194657.png|425]]
```html
<label for="">Name:
    <input type="text" name="name">
</label>
<br><br>
```
- `<label>` 标签用于为表单元素定义标注（标记），它能让文本与对应的表单元素关联起来，提高用户体验（比如点击文本也能聚焦到对应表单元素）。这里 `for` 属性为空，最佳实践是应与关联的表单元素的 `id` 属性值一致。
- `<input type="text">` 是一个文本输入框，用户可以在其中输入文本内容。`name="name"` 为该输入框指定了名称，在表单提交时，这个名称会作为键，用户输入的内容会作为值被发送到服务器。

![[Pasted image 20250524194726.png|236]]
```html
<label for="">Comments: <br>
    <textarea name="comments" id=""></textarea>
</label>
<br><br>
```
- `<textarea>` 标签用于创建一个多行文本输入区域，用户可以在其中输入较长的文本内容，比如评论等。`name="comments"` 为其指定名称，用于表单提交时标识数据。这里 `id` 属性也为空，同样可优化为设置合适的 `id` 值以便于通过 CSS 或 JavaScript 操作。
- 外层 `<label>` 标签关联该文本区域，提供标注说明。

![[Pasted image 20250524194753.png|475]]
```html
<label for="">Password:
    <input type="password" name="password">
</label>
<br><br>
```
- `<input type="password">` 是密码输入框，用户输入的内容会以掩码形式（如星号或圆点）显示，保护密码隐私。`name="password"` 为其指定名称，用于表单提交时标识密码数据。

![[Pasted image 20250524194814.png|356]]
```html
<label for="">Things You Liked: <br>
    <label for="">Site Design
        <input type="checkbox" name="thingsliked">
    </label>
    <label for="">Links
        <input type="checkbox" name="thingsliked">
    </label>
</label>
<br><br>
```
- `<input type="checkbox">` 是复选框元素，用户可以勾选或取消勾选。这里两个复选框的 `name` 属性值相同，在表单提交时，服务器会接收到用户勾选的对应值（默认勾选状态下的值为 `on` ，也可通过 `value` 属性自定义） 。
- 每个复选框都被包含在一个 `<label>` 标签内，提供相应的文本描述，便于用户理解。

![[Pasted image 20250524194849.png|420]]
```html
  <select name="rating" id="">
        <option value="5">Amazing</option>
        <option value="4">Very Good</option>
        <option value="3">Good</option>
        <option value="2">Bad</option>
        <option value="1">Terrible</option>
    </select>
</label>
<br><br>
```
- `<select>` 标签创建一个下拉选择框，用户可以从中选择一个选项。`name="rating"` 为其指定名称，用于表单提交时标识评分数据。
- `<option>` 标签定义下拉选项，每个 `<option>` 的 `value` 属性指定了该选项对应的值，在表单提交时会被发送到服务器，标签内的文本（如 `Amazing` 等）是用户看到的显示文本。

![[Pasted image 20250524194910.png|181]]
```html
<input type="submit" name="submit" value="Submit">
<input type="reset" value="Clear">
```
- `<input type="submit">` 创建一个提交按钮，当用户点击该按钮时，表单数据会按照 `<form>` 标签指定的 `method` 和 `action` 发送到服务器。`name="submit"` 为其指定名称，`value="Submit"` 设置按钮上显示的文本。
- `<input type="reset">` 创建一个重置按钮，用户点击该按钮时，表单内所有元素会恢复到初始状态（如文本框清空、复选框取消勾选等 ），`value="Clear"` 设置按钮上显示的文本。