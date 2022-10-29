# CSS
页面样式是前端不可或缺的部分，只是较为繁杂，不系统，对于许多杂乱的小知识，在博主日常开发中遇到的小问题，将在这里记录。

## font-family 引用
首先，下载所需谷歌字体，选择Regular版本放入项目中。注意使用edge下载，会提示风险，选择保留，而chorme下载会自动吞了。

[网页链接](https://www.googlefonts.cn/)

之后，使用`@font-face`注册：
```css
@font-face {
  font-family: Cormorant;
  src: url('~/assets/font/Cormorant-Regular.ttf')
}
```

## img 动态绑定
使用变量存储路径，img 的 src 属性动态绑定该变量引用路径时，应采取如下方案：
```ts
import img1 from '~/assets/scrollBanner/AR看房.jpg'
import img2 from '~/assets/scrollBanner/健身2.jpg'
```

```html
<img :src="img1" alt="">
```

## 去除默认样式
以去除a标签和img标签默认样式为例：
```css
a {
  text-decoration: none;
  color: #000;
}

img {
  vertical-align: top
}
```

## hover 事件
浏览器可以监测到元素被hover了，但并未给出hover事件api，取而代之的是其他两个鼠标事件api：`mouseenter` 和 `mouseleave` 

注意不要使用 `mouseover` 内部div会使得该事件多次触发，与预期效果不符。