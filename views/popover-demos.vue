<template>
<div>
    <div class="wrapper">
        <div class="header">点击弹出</div>
        <div class="comp_wrapper">
            <div>
                <n-popover>
                    <n-button>上方弹出</n-button>
                    <template slot="content">
                        弹出内容
                    </template>
                </n-popover>
                <n-popover position="bottom">
                    <n-button>下方弹出</n-button>
                    <template slot="content">
                        弹出内容
                    </template>
                </n-popover>
                <n-popover position="left">
                    <n-button>左边弹出</n-button>
                    <template slot="content">
                        弹出内容
                    </template>
                </n-popover>
                <n-popover position="right">
                    <n-button>右边弹出</n-button>
                    <template slot="content">
                        弹出内容
                    </template>
                </n-popover>
            </div>
        </div>
        <div class="clickBtn" @click='isShowOne = !isShowOne'>{{isShowOne?'隐藏代码':'显示代码'}}</div>
        <div class="line" v-if="isShowOne"></div>
        <pre id="pre_action" v-if="isShowOne"><code class="code">{{contentOne}}</code></pre>
    </div>
    <div class="wrapper">
        <div class="header">hover弹出</div>
        <div class="comp_wrapper">
            <div>
                <n-popover trigger='hover'>
                    <n-button>上方弹出</n-button>
                    <template slot="content">
                        弹出内容
                    </template>
                </n-popover >
                <n-popover position="bottom" trigger='hover'>
                    <n-button>下方弹出</n-button>
                    <template slot="content">
                        弹出内容
                    </template>
                </n-popover>
                <n-popover position="left" trigger='hover'>
                    <n-button>左边弹出</n-button>
                    <template slot="content">
                        弹出内容
                    </template>
                </n-popover>
                <n-popover position="right" trigger='hover'>
                    <n-button>右边弹出</n-button>
                    <template slot="content">
                        弹出内容
                    </template>
                </n-popover>
            </div>
        </div>
        <div class="clickBtn" @click='isShowTwo = !isShowTwo'>{{isShowTwo?'隐藏代码':'显示代码'}}</div>
        <div class="line" v-if="isShowTwo"></div>
        <pre id="pre_action" v-if="isShowTwo"><code class="code">{{contentTwo}}</code></pre>
    </div>
    <footer class="page-nav">
            <p>上一节：<a href='#/toast'>toast组件</a></p>
            <p>下一节：<a href='#/other'>other</a></p>
    </footer>
</div>
</template>
<script>
import Popover from '../src/components/popover'
import Button from '../src/components/button'

export default {
    components:{
        'n-popover':Popover,
        'n-button':Button,
    },
    data() {
            return {
                contentOne:`
                <n-popover>
                    <n-button>上方弹出</n-button>
                    <template slot="content">
                        弹出内容
                    </template>
                </n-popover>
                <n-popover position="bottom">
                    <n-button>下方弹出</n-button>
                    <template slot="content">
                        弹出内容
                    </template>
                </n-popover>
                <n-popover position="left">
                    <n-button>左边弹出</n-button>
                    <template slot="content">
                        弹出内容
                    </template>
                </n-popover>
                <n-popover position="right">
                    <n-button>右边弹出</n-button>
                    <template slot="content">
                        弹出内容
                    </template>
                </n-popover>`.replace(/\t+| {8}/g,'').trim(),
                contentTwo:`
                <n-popover trigger='hover'>
                    <n-button>上方弹出</n-button>
                    <template slot="content">
                        弹出内容
                    </template>
                </n-popover >
                <n-popover position="bottom" trigger='hover'>
                    <n-button>下方弹出</n-button>
                    <template slot="content">
                        弹出内容
                    </template>
                </n-popover>
                <n-popover position="left" trigger='hover'>
                    <n-button>左边弹出</n-button>
                    <template slot="content">
                        弹出内容
                    </template>
                </n-popover>
                <n-popover position="right" trigger='hover'>
                    <n-button>右边弹出</n-button>
                    <template slot="content">
                        弹出内容
                    </template>
                </n-popover>`.replace(/\t+| {8}/g,'').trim(),
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
