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


