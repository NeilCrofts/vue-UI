# vue-UI
- 描述：一个Vue UI 组件
- 作者：NeilCrofts
## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架

## 开始使用

1. 安装
2. 添加 CSS 样式
  使用本框架前，请在 CSS 中开启 border-box

  ```
  *,*::before,*::after{box-sizing: border-box;}
  ```
  IE 8 及以上浏览器都支持此样式。


2. 安装
  ```
  npm i --save neil-vue-ui
  ```
3. 引入
  ```
import {Button, ButtonGroup, Icon,Input,Layout,Tabs,Grid,Toast,Popover} from 'neil-vue-ui'
使用本框架前，请在 CSS 中开启 border-box
  export default {
    name: 'app',
    components: {
      'n-button': Button,
      'n-icon': Icon
    }
  }
  ```

```
*{box-sizing: border-box;}
```

## 文档

## 提问
## 变更记录
## 联系方式
## 贡献代码