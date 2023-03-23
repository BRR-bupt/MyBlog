# Ts-declare
declare是ts中为变量、模块等添加类型声明的关键字，使用declare，有下面几点注意事项
- 创建文件`*.d.ts`来使用declare类型声明
- 在ts-config中include到所声明的文件（一般用通配符`*.d.ts`）

## declare 变量
常见的，使用script标签引用第三方库时
```html
<script src="//webapi.amap.com/ui/1.1/main.js?v=1.1.1"></script>
```

上述js文件中具有对象AMap，但ts在编译前并无法识别该对象，因此我们需要创建类型声明文件`amap.d.ts`

```ts
declare const AMap: any
```

## declare module
常见的，在ts文件中使用import引入库时，可能会提示找不到该模块的类型声明文件，需要`npm install`或者自定义，当不具备相关类型声明文件时，无法下载，只能自定义，大致如下：

最简单的可以直接书写为：
```ts
declare module 'mqtt/dist/mqtt.min'
```
不带有任何的内部属性说明，仅为了取消ts文件的报错

稍微详细点的可以如下：
```ts
declare module 'tiny-emitter/instance' {
  const on: (...args) => {}
  const once: (...args) => {}
  const off: (...args) => {}
  const emit: (...args) => {}
}
```

## declare namespace

## 拓展window属性
拓展window属性是开发过程中常见的用法，可以不使用declare，直接运用interface拓展window对象的类型`Window`

```ts
// window.d.ts
interface Window {
  Version: string
  BitStar: any
  createConnection: (userName: any, userPasswd: any, onConnectCb: any) => void
  doPublish: (topic: any, payload: any, qos: any) => void
  doSubscribe: (topic: any, qos: any) => void
  currentUsrId: any
  server_mqtt_ip: {
    BASE_URL: string
    BASE_PORT: number
  }
  server_ip: {
    Berth: string
    BerthRoad: string
  }
}
```

