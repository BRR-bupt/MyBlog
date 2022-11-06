# 详解 npm 包

## 引用 npm 包的原理
前端项目中引用npm包是常见的开发方式，一般来说我们不会去关心具体的包实现，只要会用就行。但搞清楚来龙去脉总归是有益的。

首先，npm包大都是node项目开发完成，并且在入口文件index.ts中将所有功能对象导出，供外部引用。

> node项目包括npm管理package.json以及实现功能所需的js/ts文件

其实一个包项目并不神秘，对应到实际项目中，就像是composables文件夹下自己封装的js/ts文件，对外暴露对象和方法，供其他文件js/ts/vue等引用。包项目就是将这些js/ts文件上传到了npm服务器，可以被所有项目下载引用。

## npm 镜像配置
配置镜像是为了下载npm包时速度更快，一般设置为淘宝镜像即可，但有时需要切换到官方服务（比如发布npm包时），就需要我们了解熟悉相关命令。

- 查看镜像源使用状态
```bash
npm get registry
```

- 全局切换镜像源
```bash
npm config set registry http://registry.npm.taobao.org
```

- 全局切换官方镜像源
```bash
npm config set registry https://registry.npmjs.org/
```

## 如何发布 npm 包
造轮子后要发布轮子，供所有开发者使用，这一环节就是发布npm包。

> 包的相关配置均在package.json中，例如包名称

1. 切换到官方镜像
```bash
npm config set registry https://registry.npmjs.org/
```

2. 登录npm
```bash
npm login
```

3. 在包项目目录终端下运行
```bash
npm publish
```

4. 删除不需要的包
```bash
npm unpublish <name> --force
```

> 注意只能删除72小时内发布的包，且24小时内不允许重复发布，为了维护良好的社区环境，请不要发布无意义的包，若为测试发布，请及时删除

## 自创建包示例
一个最简单的包应该具备如下index.ts代码结构
```ts
import chalk from 'chalk'

function noop(msg: string): string {
  return msg
}

function log(fn: Function): (msg: string) => void {
  return (msg: string): void => {
    console.log(fn(msg))
  }
}

export default {
  success: log(chalk.green),
  error: log(chalk.red),
  warn: log(chalk.yellow),
  info: log(chalk.cyan),
  default: log(noop),
}
```

可见，可以在包项目中引用其他的包，比如用户项目a，引用了包b，而项目b在创建时，引用了包c。所以c其实也是a的依赖，但是隐式依赖，不会显示在a项目的package.json中。

> 注意导出部分，这是必要的，否则一切都无意义

## dependencies 和 devDependencies
二者都是项目的依赖，但
- devDependencies 是仅限开发环境依赖，在生产环境中将被去除，一般为构建工具和代码提示等，比如vite和eslint，以及ts
- dependencies 是全环境依赖，是项目的实际功能需求依赖，比如vue、vueuse等