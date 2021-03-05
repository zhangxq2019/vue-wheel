---
title: '快速上手'
---
# 快速上手

##  引入资源
```
import {Button} from "zxq-wheel-test";
import "zxq-wheel-test/dist/index.css";
```
## 注册组件
```
export default {
  name: "ComponentName",
  components: {
    "g-button": Button,
  },
}
```
## 使用
```
<template>
  <div>
    <g-button>默认按钮</g-button>
  </div>
</template>
```
效果预览：
<ClientOnly>
<button-demos></button-demos>
</ClientOnly>