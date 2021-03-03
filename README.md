# Vue-wheel - 一个简易的UI组件
## 介绍
学习vue过程中做的一个简易的UI框架，用于练手及加深理解
### 安装
1. 添加CSS框架

 使用本框架前，请在css中开启border-box
   
  ```
   *{box-sizing: border-box;}
  ```
  IE8及以上浏览器支持此样式
  你还需要设置默认颜色等变量(后续会改为SCSS变量)
  ```
  html{
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #999;
        --border-color: #999;
        --border-color-hover: #666;
          }
  ```
   IE15及以上浏览器都支持
2. 安装wheel
```
npm i --save zxq-wheel-test
```
3. 引入wheel
```
import {Button, ButtonGroup,Icon} from 'zxq-wheel-test'
import 'zxq-wheel-test/dist/index.css'

export default {
  name: 'app', 
  components: {
      'g-button': Button,
      'g-icon': Icon
  }
}
```
## 问题
### 遇到的第一个问题，workspace.xml文件报错
```
Element option is not allowed here
```
解决方法：重启idea
File -> Invlidte Cches
### 遇到的第二个问题
```
top-level selectors may not contain the parent selector "&".
```
解决方法：&必须嵌套在scss规则内
### iconfont链接报错
```coffeescriptliterate
Warning:(73, 14) There is no locally stored library for the HTTP link.
```
解决方法：快速修复（Alt + Enter）
## 关键字
单文件组件
### 单元测试
> 用来对一个模块，一个函数或者一个类来进行正确性检验的测试工作
#### chai
chai是一个可以在node和浏览器环境运行的BDD/TDD断言库

BDD
- 行为驱动开发behavior Driven Development
TDD
- 测试驱动开发Test-Driven Development
断言
- 用于验证事情是否正确

#### 安装
```
npm install -D chai
```
```
import chai from 'chai'
const expect = chai.expect
//except使用构造函数来创建断言对象实例
```
./node_modules/.bin/parcel index.html
