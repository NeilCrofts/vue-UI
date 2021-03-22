<template>
<div>
    <div class="wrapper">
        <div class="header">基础用法</div>
        <div class="comp_wrapper">
            <div>
                <n-collapse :selected.sync='selectedTab' single>
                    <n-collapse-item title="标题1" name='1'>内容1</n-collapse-item>
                    <n-collapse-item title="标题2" name='2'>内容2</n-collapse-item>
                    <n-collapse-item title="标题3" name='3'>内容3</n-collapse-item>
                </n-collapse>
            </div>
        </div>
        <div class="clickBtn" @click='isShowOne = !isShowOne'>{{isShowOne?'隐藏代码':'显示代码'}}</div>
        <div class="line" v-if="isShowOne"></div>
        <pre id="pre_action" v-if="isShowOne"><code class="code">{{contentOne}}</code></pre>
    </div>
    <div class="wrapper">
        <div class="header">不同样式</div>
        <div class="comp_wrapper">
            <div>
               
            </div>
        </div>
        <div class="clickBtn" @click='isShowTwo = !isShowTwo'>{{isShowTwo?'隐藏代码':'显示代码'}}</div>
        <div class="line" v-if="isShowTwo"></div>
        <pre id="pre_action" v-if="isShowTwo"><code class="code">{{contentTwo}}</code></pre>
    </div>
    <footer class="page-nav">
            <p>上一节：<a href='#/use'>使用</a></p>
            <p>下一节：<a href='#/tabs'>tabs组件</a></p>
    </footer>
</div>
</template>
<script>
import Collapse from '@/components/collapse'
import CollapseItem from '@/components/collapse-item'
export default {
    components:{
        'n-collapse':Collapse,
        'n-collapse-item':CollapseItem,
    },
    data() {
            return {
                contentOne:`
                <n-button>默认按钮</n-button>
                <n-button icon="setting">设置</n-button>
                <n-button icon="setting" iconPosition="right">设置</n-button>
                <n-button :is-loading='true'>加载中</n-button>
                <n-button icon='click'>点击</n-button>
                <n-button icon='thumbs-up'>点赞</n-button>
                <n-button icon='open'>打开</n-button>
                <n-button icon='add'>添加</n-button>
                <n-button icon='remove'>删除</n-button>
                <n-button icon='download'>下载</n-button>
                <n-button icon='upload'>上传</n-button>
                <n-button icon='info'>通知</n-button>
                <n-button disabled>禁用按钮</n-button>`.replace(/\t+| {8}/g,'').trim(),
                contentTwo:`<n-button theme='primary'>主要按钮</n-button>
                <n-button theme='success'>成功按钮</n-button>
                <n-button theme='warning'>警告按钮</n-button>
                <n-button theme='info'>信息按钮</n-button>
                <n-button theme='danger'>危险按钮</n-button>
                <n-button theme='text'>文字按钮</n-button>`.replace(/\t+| {8}/g,'').trim(),
                isShowOne:false,
                isShowTwo:false,
            }
        },
        methods:{
        },
        
}
</script>
<style lang="scss">
@import 'scss-style';
</style>
