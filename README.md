# Vue-wheel - 一个简易的UI组件
## 安装
使用本框架前，请在css中开启border-box
```coffeescriptliterate
*{box-sizing: border-box;}
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