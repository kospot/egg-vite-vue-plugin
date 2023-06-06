# egg-vite-vue-plugin

## 依赖说明

### 依赖的 egg 版本

egg-vite-vue-plugin 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件

## 开启插件

```js
// config/plugin.js
exports.vitePlugin = {
  enable: true,
  package: 'egg-vite-vue-plugin',
};
```


```js
// config/config.default.js
// https://cn.vitejs.dev/guide/api-javascript.html#createserver
// 可以在这里配置vite引用的环境变量之类的
exports.vitePlugin = {
  devServer: false,
  targets: [],
  viteServerConfig: {}
};
```


对外暴露了vite和viteServer




## 使用场景

- Why and What: egg-vite-vue-plugin插件不支持修改开发模式，所以增加了这个功能

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

