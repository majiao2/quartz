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

