# __ _proto_ __ & prototype
> 首先我们要知道，在JS代码没有执行时，环境中已经创建了 `window` 对象，其中具有构造函数 `window.Object()` 和 `window.Array()` 以及 `window.Number()` 等。  
> 这些构造函数首先具备构造对象的能力，同时又天生注册了许多功能方法，如 Object 的 `valueOf()` , Array 的 `push()` , Number的 `toFix()` 等。这些方法都存在 `prototype` 属性中，存放在系统内存中。

`__proto__` 是对象的属性， `prototype` 是构造函数的属性。

当对象调用方法时，在本身未查找到，会查找其构造函数的方法，具体如下。


## 举例

看创建对象的例子

```ts
const obj = {}
obj.toString()
```

obj 上并不存在 `toString()` 方法，因为创建时，仅为空对象，但仍可以调用，是因为**原型链查找**，搜索到`obj.__proto__.toString()` 。

`obj.__proto__` 正是指向 `window.Object.prototype` 内存区，所以可以调用其中的方法。

---
再看创建数组的例子

```ts
const arr = []
arr.push(1)
arr.toString()
```

同样的，arr 创建时，仅为空数组，且不带有方法，`arr.push()` 来自于 `arr.__proto__` 指向 `window.Array.prototype` 的内存区，存储有 push、pop 等数组方法。

而调用 `arr.toString()` 时，在上述数组方法内存中不具备 toString() ，因此按原型链查找，到 `arr.__proto__.__proto__` ，即 `window.Array.prototype.__proto__` ，指向 `window.Object.prototype` 内存区，调用该方法。

>  因此我们发现 `window.Object.prototype` 是链的起始段，是所有对象上的方法查找的终点。起始段意味着无法再继续查找，即 `window.Object.prototype.__proto__` 为 `null`

---
## 设想

想象一下，如果没有 `prototype` ，那么就没有共享方法的内存区域，就不存在原生的 toString、push、pop 等一切非用户自定义方法。

如果没有 `__proto__` ，对象方法的查找将无所下手，只能通过自定义引用到原型（构造函数）中的方法，如下

```ts
const obj = {
  toString: window.Object.prototype.toString,
  valueOf: window.Object.ptototype.valueOf
}
obj.toString() // '[object Object]'
```

## 总结

`prototype` 是构造函数用来查找本身方法的属性， `__proto__` 是实例对象用来查找其原型上方法的属性。