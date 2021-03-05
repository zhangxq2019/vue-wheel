---
title: Collapse-折叠面板
---
# 折叠面板

## 多项展开预览
<ClientOnly>
<collapse-demo></collapse-demo>
</ClientOnly>

## 使用方法
```Vue
    <g-collapse :selected.sync="selectedTab">
          <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
          <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
          <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
```
## 单项展开预览
<ClientOnly>
<collapse-single-demo></collapse-single-demo>
</ClientOnly>

## 使用方法
```Vue
    <g-collapse :selected.sync="selectedTab" single>
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>
```