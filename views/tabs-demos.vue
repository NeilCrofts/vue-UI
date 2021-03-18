<template>
<div>
    <div class="wrapper">
        <div class="header">基础用法</div>
        <div class="comp_wrapper">
            <div>
                <n-tabs :selected.sync='selectedTab'>
                    <n-tabs-head>
                        <n-tabs-item name='study'>学习</n-tabs-item>
                        <n-tabs-item name='movie'>放映厅</n-tabs-item>
                        <n-tabs-item name='sleep'>睡大觉</n-tabs-item>
                        <n-tabs-item name='game' disabled>单机游戏</n-tabs-item>
                    </n-tabs-head>
                    <n-tabs-body>
                        <n-tabs-pane name='study'>学习</n-tabs-pane>
                        <n-tabs-pane name='movie'>放映厅</n-tabs-pane>
                        <n-tabs-pane name='sleep'>睡大觉</n-tabs-pane>
                    </n-tabs-body>
                </n-tabs>
            </div>
        </div>
        <div class="clickBtn" @click='isShowOne = !isShowOne'>{{isShowOne?'隐藏代码':'显示代码'}}</div>
        <div class="line" v-if="isShowOne"></div>
        <pre id="pre_action" v-if="isShowOne"><code class="code">{{contentOne}}</code></pre>
    </div>
    <footer class="page-nav">
            <p>上一节：<a href='#/button'>button组件</a></p>
            <p>下一节：<a href='#/input'>input组件</a></p>
    </footer>
</div>
</template>
<script>
import Tabs from '../src/components/tabs.vue'
import TabsHead from '../src/components/tabs-head.vue'
import TabsBody from '../src/components/tabs-body'
import TabsItem from '../src/components/tabs-item'
import TabsPane from '../src/components/tabs-pane'
export default {
    components:{
        'n-tabs':Tabs,
        'n-tabs-head':TabsHead,
        'n-tabs-body':TabsBody,
        'n-tabs-item':TabsItem,
        'n-tabs-pane':TabsPane
    },
    data() {
            return {
                contentOne:`
                 <n-tabs :selected.sync='selectedTab'>
                    <n-tabs-head>
                        <n-tabs-item name='study'>学习</n-tabs-item>
                        <n-tabs-item name='movie'>放映厅</n-tabs-item>
                        <n-tabs-item name='sleep'>睡大觉</n-tabs-item>
                        <n-tabs-item name='game' disabled>单机游戏</n-tabs-item>
                    </n-tabs-head>
                    <n-tabs-body>
                        <n-tabs-pane name='study'>学习</n-tabs-pane>
                        <n-tabs-pane name='movie'>放映厅</n-tabs-pane>
                        <n-tabs-pane name='sleep'>睡大觉</n-tabs-pane>
                    </n-tabs-body>
                </n-tabs>
                
                data(){
                    return{
                        selectedTab:'movie'
                    }
                }`.replace(/\t+| {16}/g,'').trim(),
                isShowOne:false,
                selectedTab:'movie'
            }
        },
        methods:{
            
        },
}
</script>
<style lang="scss">
@import 'scss-style';
   
</style>
