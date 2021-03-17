<template lang="">
    <article class='markdown-body'>
        <h1>安装</h1>
        <p>打开终端运行下列命令</p>
        <pre class='pre_action'><code class='code'>npm install neil-vue-ui</code>
        </pre>
        <p>或</p>
        <pre class='pre_action'><code class='code'>yarn add neil-vue-ui</code>
        </pre>
        
        <footer>
            <p>上一节：<a href='#/introduce'>介绍</a></p>
            <p>下一节：<a href='#/use'>使用</a></p>
        </footer>
    </article>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
    .pre_action {
        border-radius: 5px;
        padding: 8px;
        margin: 0;
        background-color: rgba(79, 179, 179, 0.1);
        .code {
            line-height: 1.5;
            color: #000;
            font-size: 15px;
        }
    }
    footer{
        display: flex;
        justify-content: space-between;
        margin: 20px;
    }
</style>