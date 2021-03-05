---
title: Input-输入框
---
# 输入框
## 预览
<ClientOnly>
<input-demo></input-demo>
</ClientOnly>

## 使用方法
```Vue
  <div>
    <div class="wrapper">
      <g-input value="文本输入框"></g-input>
      <g-input value="禁止输入" disabled></g-input>
      <g-input value="只读" read-only></g-input>
      <g-input value="world" error="error message"></g-input>
      <div class="box">
        <g-input v-model="message"></g-input>
        {{ message }}
      </div>
    </div>
  </div>
```