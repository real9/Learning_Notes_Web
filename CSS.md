# 1.CSS概述
CSS，即层叠样式表，是一种用来为结构化文档（如：HTML文档）添加样式（字体、颜色等）的计算机语言，其主要职能是确定布局和元素的表现，且不能单独使用。
# 2.CSS-美化文档
## 2.1HTML添加内部样式
#### 2.1.1在标签中添加声明
示例：
`<input type="text" placeholder="手机号码" style="">`  
即是：`style = ""`  
各关键字间用空格隔开，与标签也要用空格隔开，各关键字排序不分先后。
#### 2.1.2在引号间添加样式
示例：
`<p style="font-size:14px;color:white"></p>`  
这段代码的意思就是：设置p标签中的字体大小为14px，颜色为白色。
## 2.2字体大小和粗细
在CSS中，样式由属性和值组成，即为：**属性：值**。  
- 字体大小：  
`font-size:36px;`
- 字体粗细：  
`font-weight:100;`
## 2.3字体颜色和文字对齐方式
- 字体颜色  
颜色有4种表达形式：英文单词形式、十六进制形式（从00~FF）、rgb、rgba。
> 多数情况下建议使用十六进制形式，rgba可以设置透明度。  
`color:#ff9a9e;`  
- 文字对齐方式  
```html
text-align:right;  
text-align:center;
text-align:left;
```
## 2.4文字行高、字间距、字体
- 行高  
`line-height:30px;`  
行距 = （行高 - 字体大小）/2  
> 行高可以控制行距，使一行文本处于上下居中。  
- 字间距  
`letter-spacing:30px;`  
> 英文字间距是字母之间的间隔，中文是汉字之间的间隔。  
- 字体  
`font-family:sans-serif;`  
示例：  
`style="font-size:20px;color:#FFFFFF;line-height:30px;"`  
> 最好在每一个样式结束都加“；”，虽然上例中30px后不加“；”也可以运行，但是不符合规范。  
