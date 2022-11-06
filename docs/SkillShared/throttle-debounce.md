# 防抖 & 节流
防抖和节流是为了限制过度频繁的触发事件，消耗过大资源。

一般的，防抖和节流我们都采用lodash现成的函数实现。

```bash
npm install -S lodash
# ts
npm install -D @types/lodash
```


## 防抖
何为防抖，以按键button为例，短时间内重复点击该按键，只触发一次处理函数，且为最后一次点击触发，即消除短时间内之前点击的效果。

## 节流
何为节流，以按键button为例，短时间内重复点击该按键，只触发一次处理函数，且为第一次点击触发，即取消短时间内之后点击的效果。

## 代码实现
```vue
<script setup lang="ts">
import _ from 'lodash'
const debounce = _.debounce(() => {
  console.log('debounce')
}, 2000)

const throttle = _.throttle(() => {
  console.log('throttle')
}, 2000, {
  trailing: false,
})
</script>

<template>
  <div class="main">
    <button @click="debounce">
      debounce
    </button>
    <button @click="throttle">
      throttle
    </button>
  </div>
</template>
```
