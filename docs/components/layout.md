---
title: Layout-布局
---
# 布局
## 预览
<ClientOnly>
<layout-demo></layout-demo>
</ClientOnly>

##  使用方法
```Vue
<template>
  <div class="wrapper">
    <g-layout>
      <g-header>header</g-header>
      <g-layout>
        <g-sider>sider</g-sider>
        <g-content>content</g-content>
      </g-layout>
      <g-footer>footer</g-footer>
    </g-layout>
    <br>

    <g-layout>
      <g-header>header</g-header>
      <g-layout>
        <g-sider>sider</g-sider>
        <g-layout>
          <g-content>content</g-content>
          <g-footer>footer</g-footer>
        </g-layout>
      </g-layout>
    </g-layout>
    <br>

    <g-layout>
      <g-header>header</g-header>
      <g-content>content</g-content>
      <g-footer>footer</g-footer>
    </g-layout>
  </div>
</template>
<style lang="scss" scoped>
$black: #000;
$grey: #999;
$ddd: #ddd;
$white: #fff;
.wrapper {
  > .layout-wrapper {
    height: 30vh;

    > .header-wrapper {
      color: $white;
      height: 3em;
      background: $black;
    }
    > .content-wrapper{
      background: $white;
    }
    > .layout-wrapper {
      height: 6em;

      > .sider-wrapper {
        width: 15%;
        background: $ddd;
      }

      > .content-wrapper {
        background: $white;
      }

      > .layout-wrapper {
        > .content-wrapper {
          background: $white;
        }

        > .footer-wrapper {
          background: $grey;
        }
      }
    }

    > .footer-wrapper {
      height: 3em;
      background: $grey;
    }
  }
}
</style>
```