# umi-plugin-chunk-rename

## 启动方式

```shell
yarn add umi-plugin-chunk-rename -D
```

## 介绍

umi 打包文件名称默认为 `umi.js`，但是更多的场景下我们希望可以自定义这个文件名称，此插件应运而生。

## 配置

```javascript
export default {
  chunks: ['app'],
};
```

打包后，我们会发现产出了 `app.js`，umi-plugin-chunk-rename 的实现原理很简单，我们约定 chunks 数组的最后一个元素是原 chunk - `'umi'`，通过将 chunks 数组最后一位元素的名称作为 `'umi'`的名称，这样我们就实现了为打包文件重命名的操作。
