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