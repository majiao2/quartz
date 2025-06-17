---
title: Visualization_R.r
date: 2025-06-17
tags:
  - BUAD345
---
```R
library(dplyr)
library(ggplot2)
library(tidyr)
library(ggthemes)
library(gridExtra)
library(nycflights13)
library(lubridate)
```
- **`dplyr`**: 一个用来整理和处理数据的工具箱，可以方便地筛选、排序、新增或汇总数据。
- **`ggplot2`**: 一个功能强大的绘图包，通过组合不同的图层来创建各种精美的统计图表。
- **`tidyr`**: 一个用来整理数据格式的工具，主要功能是让你的数据表格变得更规整，便于分析。
- **`ggthemes`**: `ggplot2` 的一个主题扩展包，提供多种预设好的图表风格，比如模仿《经济学人》或Excel的样式。
- **`gridExtra`**: 一个布局工具，可以轻松地将多个独立的图表拼接组合在一张图上。
- **`nycflights13`**: 一个数据包，包含了2013年纽约市所有航班的详细信息，通常用作数据分析的练习数据。
- **`lubridate`**: 一个专门处理日期和时间的包，让解析、计算和操作日期变得非常简单。

```R
# 1. Visualization makes data accessible to the human brain
ansDF = anscombe %>% tbl_df %>% select(x1,y1,x2,y2,x3,y3) %>% mutate(rowNum = 1:nrow(anscombe))
```
- **`anscombe %>% tbl_df`**: 选取 `anscombe` 这个经典数据集，并将它转换成更易于查看的 "tibble" 格式。
- **`select(x1,y1,x2,y2,x3,y3)`**: 从数据集中只挑选出前三组的 x 和 y 变量（共6列）。
- **`mutate(rowNum = 1:nrow(anscombe))`**: 添加一个名为 `rowNum` 的新列，内容就是行号 (1, 2, 3, ...)。
- **`ansDF`**: 将上面所有操作的结果保存到一个名为 `ansDF` 的新变量中。

```R
mean(ansDF$y1)
mean(ansDF$y2)
mean(ansDF$y3)
var(ansDF$y1)
var(ansDF$y2)
var(ansDF$y3)

# 绘制散点图
g1 = ggplot(ansDF, aes(x = x1, y = y1)) + geom_point(size = 4) + theme_bw(30)
g2 = ggplot(ansDF, aes(x = x2, y = y2)) + geom_point(size = 4) + theme_bw(30)
g3 = ggplot(ansDF, aes(x = x3, y = y3)) + geom_point(size = 4) + theme_bw(30)
grid.arrange(g1,g2,g3, ncol = 2)
```
`grid.arrange(g1, g2, g3, ncol = 2)`: 这是 `gridExtra` 包的命令。
- 它将前面创建的三个图 (`g1`, `g2`, `g3`) 组合到一个大的图表中。
- `ncol = 2` 的意思是指定排列为 **2列**。
![[Pasted image 20250617172319.png|225]]  

```R
# This is a dinosaur example (optional)
install.packages("datasauRus")
library(datasauRus)
library(dplyr)
dinodat = datasaurus_dozen %>% filter(dataset=="dino"|dataset=="bullseye"|dataset=="star")
dinodat %>% group_by(dataset) %>% summarize(xm=mean(x),xsd=sd(x),ym=mean(y),ysd=sd(y))
ggplot(dinodat, aes(x=x, y=y, colour=dataset))+
  geom_point(size=6)+ theme_void()+ theme(legend.position = "none")+
  facet_wrap(~dataset, ncol=3)
```
**参数: `legend.position = "none"`**: 这个参数专门用来控制图例（legend）的位置。
- `"none"` 这个值表示**不显示图例**。在这个例子中，因为后面的 `facet_wrap` 会为每个子集创建带标题的面板，所以颜色图例就显得多余了，可以移除。
`facet_wrap(~dataset, ncol=3)`
这部分是 `ggplot2` 一个非常强大的功能，用于创建分面（或“子图”）。
- **`facet_wrap()`**: 这个函数会根据某个分类变量，将数据分割成若干子集，然后为每个子集单独创建一个图表，最后将这些子图排列在一个网格中。
- **第一个参数: `~dataset`**: 这是一个公式（formula），`~` 符号后面的 `dataset` 变量告诉 `facet_wrap` 要根据 `dataset` 列中的每一个唯一值来创建子图。
- **第二个参数: `ncol=3`**: `ncol` 是 "number of columns" 的缩写，这个参数指定了子图网格的**列数**。这里设置为 `3`，意味着所有子图将被排列成一个3列的网格布局。行数会根据总的子图数量自动计算。
![[Pasted image 20250617173040.png|650]]  

```R
# 2. Visualization gives faster access to actionable insights
head(mtcars)
ggplot(mtcars, aes(x=mpg, y= hp)) + geom_point(size = 4) + theme_bw(30) + 
  geom_text(label = rownames(mtcars), check_overlap = TRUE, nudge_y = 10)
```
`geom_text(label = rownames(mtcars), check_overlap = TRUE, nudge_y = 10)`
这部分是代码的关键，它在图上添加了文字标签。
- **`geom_text()`**: 这个函数添加一个**文本图层**，可以在每个数据点的位置上显示文字。
- **参数 `label = rownames(mtcars)`**: 这是最重要的参数，它指定了要显示的文本内容。
    - `rownames(mtcars)` 会提取 `mtcars` 数据集的所有**行名**，而这些行名正好是汽车的型号（例如 "Mazda RX4", "Ford Pantera L"）。
    - `label = ...` 将这些汽车型号映射为每个点的标签。
- **参数 `check_overlap = TRUE`**: 这是一个非常实用的功能，用于**检查标签是否重叠**。
    - 当设置为 `TRUE` 时，`ggplot` 会自动隐藏掉那些会与其他标签挤在一起的标签，以避免图表变得混乱不清。
- **参数 `nudge_y = 10`**: 这个参数用于微调标签的位置。
    - `nudge_y` 表示在 **y轴方向上“推动”** 标签。
    - `10` 表示将每个标签相对于其对应的数据点，向上移动10个单位。这样做是为了让标签显示在点的正上方，而不是直接覆盖在点上。
![[Pasted image 20250617173401.png|625]]  

```R
# 3. Visualization allows access to huge amounts of data
quakes %>% tbl_df()

fijiPlot = ggplot(data = quakes, aes(x = long,y = lat,colour = mag, size = mag)) + geom_point()
fijiPlot
fijiPlot + borders("world", colour="gray50", fill="gray50", xlim = c(100,200), ylim = c(-50,0)) 
fijiPlot + borders("world", colour="gray50", fill="gray50", xlim = c(min(quakes$long),max(quakes$long)), ylim = c(min(quakes$lat),max(quakes$lat))) 
```
- `fijiPlot + ...`: 表示在 `fijiPlot` 的基础上增加新图层。
- `borders("world", ...)`: 添加世界地图的边框和陆地。`colour`和`fill`是把地图设为灰色。
- `xlim` 和 `ylim`: **手动限制**地图只显示经度100到200、纬度-50到0的区域，就像用手在地图上框选一个长方形区域来放大。
**简单说：** 在地震图上加了灰色的世界地图，并手动放大到斐济附近区域。  
- `xlim = c(min(quakes$long),max(quakes$long))`: 这里是**自动计算**地图的左右边界。它会找到所有地震数据中最西边（最小经度）和最东边（最大经度）的点，把地图的宽度设为刚好能容纳它们。
- `ylim = ...`: 同理，自动计算地图的上下边界，刚好容纳最南和最北的地震点。
**简单说：** 在地震图上加了灰色的世界地图，并**自动缩放**到恰好能包含所有地震点的范围。这是最常用的方法，可以确保所有数据都被看到。  
![[Pasted image 20250617173733.png|675]]  



