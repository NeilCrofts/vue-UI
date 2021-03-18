<template>
  <article class="article-wrapper markdown-body">
      <h1>Neil UI 官网</h1>
      <h2>介绍</h2>
      <p>Neil UI 是一个简单易用的 UI 框架，提供了按钮、栅格、布局、弹出框等常用组件，适合移动端和 PC 端使用</p>
      <h2>设计缘由</h2>
      <p>是我为了深入学习Vue而写的一个项目，目前因为完成该项目熟悉掌握了Vue的语法特性，Vue组件间通信等，项目还会继续开发其他组件，将继续深入理解更多Vue的知识</p>
      <h2>本网站</h2>
      <p>本网站采用vue-cli搭建，样式是由自己实现的</p>
      <p class="page-nav">下一节：<a href='#/getStart'>快速上手</a></p>
  </article>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.article-wrapper {
  padding: 40px 0;
  position: relative;
  .page-nav{
        position: absolute;
        right: 0;
        margin: 20px;
        a{
          color:#0AAACC;
          text-decoration: none;
        }
    }
}
</style>
