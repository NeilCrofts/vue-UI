<template>
  <article class="article-wrapper markdown-body">
    <h1>开始使用</h1>
    <p>请先<a href="#/getStart">安装</a>本组件库</p>
    <p>然后再你的代码中写入下面的代码</p>
    <pre><code>import {Button,Tabs,input,grid,toast,popover} from 'neil-vue-ui'</code></pre>
    <h1>使用示例</h1>
    <pre>
<code>import {Button} from 'Neil-vue-ui'
import Vue from 'vue'

new Vue({
el: '#app',
components: {
    'n-button':Button
    }
})</code>
      </pre>

      <footer class="page-nav">
            <p>上一节：<a href='#/getStart'>快速上手</a></p>
            <p>下一节：<a href='#/button'>button组件</a></p>
        </footer>
  </article>
</template>

<script>

export default {
  
}
</script>

<style lang="scss" scoped>
.article-wrapper {
  padding: 40px 0;
  p>a{
    color: #0AAACC;
    text-decoration: none;
  }
  .page-nav{
        display: flex;
        justify-content: space-between;
        margin: 20px;
        p>a{
          color:#0AAACC;
          text-decoration: none;
        }
    }
}
</style>
