# 1.HTML的概述
  HTML 描述了一个网站的结构，是一种标记语言而非编程语言。一个HTML元素是HTML文件的基本组成单元。  
  浏览器使用 HTML 标签（即`<html>`）和脚本（JavaScript）来诠释网页内容，但不会将标签显示在页面上。
# 2.认识HTML
## 2.1HTML元素的结构
### 2.1.1HTML标签
HTML标签有以下特点：
* 1.由尖括号包围关键词组成，如`<p>` `<h>` `<span>` 。  
* 2.通常成对出现，如`<div>` `</div>`。
* 3.也有单独出现的标签，如`<img>` `<input>`。  
>注：在HTML中，标签大小写不敏感，但是要求成对的标签大小写统一。  
### 2.1.2HTML元素的结构
`<p> Hello, World! </p> `  
开始标签+内容+结束标签。  
## 2.2HTML中的嵌套
`<div> <p> Hello, World! </p> </div>`  
div元素是p元素的父元素，p元素是div的子元素。  
## 2.3完整的HTML文档结构
```html
<!DOCTYPE HTML>
<html lang = "en">
  <head>
    <!--系统内置 start-->
<script type="text/javascript" src="//qgt-style.oss-cn-hangzhou.aliyuncs.com/commonJSCSS/console.js"></script>
<!--系统内置 end-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>标题</title>
  </head>
  <body>
    <h1>两只口袋</h1>
    <p>普罗米修斯创造了人，又在他们每人脖子上挂了两只口袋，一只装别人的缺点，另一只装自我的。他把那只装别人缺点的口袋挂在胸前，另一只则挂在背后。因此人们总是能够很快地看见别人的缺点，而自我的却总看不见。<strong>这故事说明人们往往喜欢挑剔别人的缺点，却无视自身的缺点。</strong></p>
  </body>
</html>
```
[点击查看网页效果](https://ham.youkeda.com/workspaces/5dc566fb0f101ed7c2333ead/5eabd9eeda3d645484759f95/index.html?time=1611840572465)
#### 1.`<!DOCTYPE HTML>`
(1). 作用：告知浏览器该页面文件的文档类型，指示 web 浏览器使用哪个 HTML 版本编写页面。  
(2). 位置：<!DOCTYPE> 声明必须是 HTML 文档的第一行，位于 <html> 标签之前。  
(3). <!DOCTYPE> 声明对大小写不敏感。  
(4). <!DOCTYPE> 声明 **没有** 结束标签。
#### 2.`<html lang = "en">` 
(1). 此元素可告知浏览器其自身是一个 HTML 文档。  
(2). `<html> `与 `</html> `标签限定了文档的开始点和结束点，在它们之间是文档的头部和主体。文档的头部由` <head>` 标签定义，而主体由` <body> `标签定义。  
(3). lang 属性（语言属性）：当搜索引擎或者浏览器拿到语言属性后，有可能做一些针对指定语言的辅助操作，‘en’表示英文。  
#### 3.标签属性
(1). 标签可以拥有零个或多个标签属性，注意：标签属性与标签名称、标签属性与标签属性之间需用一个空格隔开。  
  (2). 标签属性可以赋予标签更多的信息，标签属性通常是以 key="value" 即 名称="值" 的形式出现。   
  (3). 常见的标签属性有：class、id、style、lang、src 等。
#### 4.文档的头部`<head>...</head>`
  (1). head 元素定义文档的头部，我们通常在这里引用样式表、提供元信息等。  
  (2). 文档的头部中的`<title>...</title>`定义文档的标题，在网页上体现为网页标签的标题。
  (3). 一个` <head> `元素必须包含且只能包含一个 `<title> `元素。（title元素之间必须有标题）  
#### 5.文档的主体`<body>...</body>`
  body 元素定义文档的主体，包含文档的所有内容（比如文本、超链接、图像、表格和列表等等）。
## 2.4HTML中的注释
  在HTML中我们用`<!-- ... -->`标签来表示注释。
## 2.5MDN
  [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML)是学习 Web 开发的一个权威、全面、高质量的网站，文档丰富，资料全面，非常适合大家学习使用，是Web 开发学习时的百科全书。   
  在 MDN 中查询'audio'，为网页添加一段音频文件。 [audio 标签文档的地址`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio)
  ```html
  <body>
    <audio muted controls="controls">
      <source src="https://document.youkeda.com/P3-1-HTML-CSS/1.2/nocturne.mp3" autoplay>
      Your browser does not support the <code>audio</code> element.
    </audio>
  </body>
  ```
  [效果预览](https://ham.youkeda.com/workspaces/5dc566fb0f101ed7c2333ead/5eb2a2a529fdc7737671a7b1/index.html?time=1611843293648)     
在 MDN 中查询'progress'，在网页中插入一个进度条。 [progress 标签文档的地址](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/progress)  
  ```html
  <body>
   <progress value="50" max="100">
     50%
   </progress> 
   <p>
     <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000002mWhlf2aBPQ7_1.jpg?max_age=2592000" \>
   </p>
  </body>
  ```
  [效果预览](https://ham.youkeda.com/workspaces/5dc566fb0f101ed7c2333ead/5eb2a2a529fdc7737671a7b1/index.html?time=1611843494911)  
 # 3.HTML 文本标签
  
