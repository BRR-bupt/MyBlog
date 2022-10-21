# Map
ES6 新增数据结构，类似于对象的键值对，是一种映射关系。

## 基本用法
| Syntax      | Description |
| ----------- | ----------- |
| new Map()   | 新建 map       |
| get()   | 按key获取value        |
| set()   | 按key设置value        |
| entries()   | 返回key、value数组        |
| keys()   | 返回key数组        |
| values()   | 返回value数组        |
| clear()   | 清空map        |
| delete()   | 按key删除        |
| has()   | 按key判断存在        |
| forEach()   | 遍历        |
| size   | 返回长度        |

## 特点
- 是一种散列表，即 hashMap
- 按 key 查找/设置 value 的时间复杂度为 O(1)
- key 可以是任意数据结构
- map 是有序并天生可迭代的

## map 应用场景
1. 典型的，我们可能会在需要 hashMap 时，使用 map 存储。
> 但这不是绝对的，在 js 中我们也经常使用 array 作 hashMap，只要能达到简化查找到 O(1) 的目的，实现过程并不关键

2. 其次，我们在存储大量数据的场景中会用 map，将优于普通对象。
> Object 查找属性的时间复杂度为 O(n)，因为其无序，需要遍历，直到找到