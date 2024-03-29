# VNode
本文讲述vue中虚拟dom的前身后世

> template --> 渲染函数h({Vue编译后的template}) --> VNode --> VDom --> 真实dom

## template
vue模板，是最常见以及官方推荐的创建dom的写法。

Vue 模板会被 **预编译** 成虚拟 DOM 渲染函数。Vue 也提供了 API 使我们可以不使用模板编译，直接手写渲染函数。在处理高度动态的逻辑时，渲染函数相比于模板更加灵活，因为你可以完全地使用 JavaScript 来构造你想要的 vnode。

那么为什么 Vue 默认推荐使用模板呢？有以下几点原因：

1. 模板更贴近实际的 HTML。这使得我们能够更方便地重用一些已有的 HTML 代码片段，能够带来更好的可访问性体验、能更方便地使用 CSS 应用样式，并且更容易使设计师理解和修改。

2. 由于其确定的语法，更容易对模板做静态分析。这使得 Vue 的模板编译器能够应用许多编译时优化来提升虚拟 DOM 的性能表现 (下面我们将展开讨论)。

## 渲染函数h()
渲染函数的内容（括号内参数）由 Vue 模板预编译而来，也可由开发者**直接编写**，基本格式如下:
```js
import { h } from 'vue'

const vnode = h(
  'div', // type
  { id: 'foo', class: 'bar' }, // props
  [
    /* children */
  ]
)
```

若为上述，由开发者直接编写h()，则省去了template预编译得到h()。

得到渲染函数后，其返回值即为VNode。

## VNode
是渲染函数h()的返回值，基本格式如下

```js
const vnode = {
  type: 'div',
  props: {
    id: 'hello'
  },
  children: [
    /* 更多 vnode */
  ]
}
```

VNode的集合组成了VDom。

## VDom
VNode的集合组成了VDom。

一个运行时渲染器将会遍历整个虚拟 DOM 树，并据此构建真实的 DOM 树。这个过程被称为挂载 (mount)。

## 真实 Dom
符合浏览器以及HTML标准的文档对象模型。

## JSX
vue中的JSX可以替代渲染函数的作用，生成VNode

> JSX --> VNode --> VDom --> 真实dom

## Dom 更新流程
响应式数据的变化，会触发生成新的虚拟dom树（不是立即，是一次事件循环结束后，详见下节），与前一次的虚拟dom树对比，获取到发生改变的dom节点位置，再根据位置与改变信息，定位地操作真实dom，完成一次响应式数据改变触发的dom更新。

## Vue Dom 更新机制
Vue 在更新 DOM 时是异步执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。

也就是说 Vue 在数据变化之后，视图不会立刻更新，而是等同一事件循环中所有的数据变化完成之后再进行统一是数据更新。

## diff算法