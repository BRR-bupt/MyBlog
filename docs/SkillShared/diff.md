# Diff
Vue 和 React 使用diff算法来比较新旧虚拟dom，实现最小化更新。

## React diff
比较节点会比较

1. 节点类型
2. 节点属性
3. 子节点

对于子节点，React会基于fiber生成fiberNode链表结构，采用两轮遍历机制，第一轮按唯一key值比较，直到不匹配。第二轮先使用map存储老fiberNode，比较新节点key值是否在map中的老fiberNode中有，如有则比较index的位置做移动操作并打上更新标志，如没有则打上新增操作。最后检查老fiberNode中未标记使用项，打上删除操作。

对于所有更新标志的节点，还需比较前后dom的节点类型、属性、子节点。

特别注意对于非列表渲染的子节点fiberNode，即不需要key值做优化，直接按序比较类型、属性、子节点。

> fiberNode链表的形式，方便记录当前指针索引，并中断，预防线程阻塞以及可以做一些优先级调度的机制。

> react fiber 的优化，增量渲染、优先级调度、可中断。

## Vue diff 的区别
1. 不采用链表结构，使用普通树形结构，子节点为普通数组结构。

2. 采用双端比较优化，对于列表渲染，当双端比较都阻断时，按key值建立新旧节点map映射关系，并找出最长递增节点序列，用来优化最小移动次数。

## Patch阶段
根据diff算法生成的最小化更新，生成对应的原生dom操作，应用在真实dom上，实现更新渲染

```javascript
parentElement.appendChild(newChildElement);
parentElement.removeChild(oldChildElement);
parentElement.replaceChild(newChildElement, oldChildElement);

// 旧属性
element.className = 'old-class';

// 新属性
element.className = 'new-class';

element.setAttribute('data-new', 'value');

element.removeAttribute('data-old');

element.addEventListener('click', handleClick);
```