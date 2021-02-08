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
# 3.CSS-引入方式
## 3.1CSS的三种引入方式
- 行内样式  
示例：
```html
<p style="font-size: 18px;font-weight: 700;color: blue;">
  这是一个p标签，和第三个p标签样式一样
</p>
<p>这是一个中立的p标签</p>
<p style="font-size: 18px;font-weight: 700;color: blue;">
  这是一个p标签，和第一个p标签样式一样
</p>
```
> 行内样式需要内嵌在每一个HTML标签中,若标签过多，则书写很麻烦。  
- 内部样式  
```html
<style>
  /*给h3标签添加样式*/
  h3{
    font-size:28px;
    color:#333;
    letter-spacing:5px;
  }
    /*给p标签添加CSS样式*/
    p{
      font-size:12px;
      color:#666;
    }
</style>
```
> 1、将每一个标签里面的样式抽离出来；2、在标签head里面声明一个`<style></style>`标签；3、把同一个标签里面文本的样式写在`<style>`里面的时候，用`{}`包围。  
- 外部样式
> 1、新建index.css文件；2、将html文件中的head里面的style标签内的样式全部拷贝过去；3、建立html文件和css文件的联系，使用link标签。  
>> 这里的 link 标签引入的位置一定要在 head 标签内。  
- css的注释  
`/*...*/`  
内部样式：写在style标签内  
外部样式：写在.css文件里  
- link标签  
`<link rel="stylesheet" type="text/css" href="index.css" />`  
## 3.2相对路径、绝对路径  

