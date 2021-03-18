<template>
<div>
    <div class="wrapper">
        <div class="header">this.$toast</div>
        <div class="comp_wrapper">
            <div>
                <n-button @click.native="$toast('弹出提示')">上方弹出</n-button>
                <n-button @click.native="$toast('弹出提示', {position:'middle'})">中间弹出</n-button>
                <n-button @click.native="$toast('弹出提示', {position:'bottom'})">下方弹出</n-button>
            </div>
        </div>
        <div class="clickBtn" @click='isShowOne = !isShowOne'>{{isShowOne?'隐藏代码':'显示代码'}}</div>
        <div class="line" v-if="isShowOne"></div>
        <pre id="pre_action" v-if="isShowOne"><code class="code">{{contentOne}}</code></pre>
    </div>
    <div class="wrapper">
        <div class="header">设置关闭按钮</div>
        <div class="comp_wrapper">
            <div>
                <n-button @click.native="onClickButton('top')">上方弹出</n-button>
                <n-button @click.native="onClickButton('middle')">中间弹出</n-button>
                <n-button @click.native="onClickButton('bottom')">下方弹出</n-button>
            </div>
        </div>
        <div class="clickBtn" @click='isShowTwo = !isShowTwo'>{{isShowTwo?'隐藏代码':'显示代码'}}</div>
        <div class="line" v-if="isShowTwo"></div>
        <pre id="pre_action" v-if="isShowTwo"><code class="code">{{contentTwo}}</code></pre>
    </div>
    <div class="wrapper">
        <div class="header">支持HTML</div>
        <div class="comp_wrapper">
            <div>
                <n-button @click.native="onClickButtonTwo('top')">上方弹出</n-button>
                <n-button @click.native="onClickButtonTwo('middle')">中间弹出</n-button>
                <n-button @click.native="onClickButtonTwo('bottom')">下方弹出</n-button>
            </div>
        </div>
        <div class="clickBtn" @click='isShowThree = !isShowThree'>{{isShowThree?'隐藏代码':'显示代码'}}</div>
        <div class="line" v-if="isShowThree"></div>
        <pre id="pre_action" v-if="isShowThree"><code class="code">{{contentThree}}</code></pre>
    </div>
    <footer class="page-nav">
            <p>上一节：<a href='#/grid'>grid组件</a></p>
            <p>下一节：<a href='#/popover'>popover组件</a></p>
    </footer>
</div>
</template>
<script>
import Button from '../src/components/button.vue'
import Nplugin from '../src/plugin.js'
import Vue from 'vue'
Vue.use(Nplugin)
export default {
    components:{
        'n-button':Button,
    },
    data() {
            return {
                contentOne:`
                <n-button @click.native="$toast('弹出提示')">上方弹出</n-button>
                <n-button @click.native="$toast('弹出提示', {position:'middle'})">中间弹出</n-button>
                <n-button @click.native="$toast('弹出提示', {position:'bottom'})">下方弹出</n-button>`.replace(/\t+| {8}/g,'').trim(),
                contentTwo:`
                <n-button @click.native="onClickButton('top')">上方弹出</n-button>
                <n-button @click.native="onClickButton('middle')">中间弹出</n-button>
                <n-button @click.native="onClickButton('bottom')">下方弹出</n-button>

                 methods:{
                    onClickButton(position){
                    this.$toast("你的智商余额为:"+parseInt(Math.random()*100)+",请充值", {
                    closeButton: {
                        text: '马上充值',
                        callback: () => {
                            console.log('用户说他知道了');
                        }
                    },
                    autoClose: 3,   //设置自动关闭时间，单位s
                    position,
                        })
                    }
                }`.replace(/\t+|  {8}/g,'').trim(),
                contentThree:`
                <n-button @click.native="onClickButtonTwo('top')">上方弹出</n-button>
                <n-button @click.native="onClickButtonTwo('middle')">中间弹出</n-button>
                <n-button @click.native="onClickButtonTwo('bottom')">下方弹出</n-button>
                
                onClickButtonTwo(position){
                    this.$toast('<strong style="color:red;">加粗的提示</strong>', {
                    closeButton: {
                        text: '谢谢提醒',
                    },
                    enableHtml: true,
                    position,
                    })
                }`.replace(/\t+| {8}/g,'').trim(),
                isShowOne:false,
                isShowTwo:false,
                isShowThree:false
            }
        },
        methods:{
            onClickButton(position){
                this.$toast(`你的花费余额为:${parseInt(Math.random()*100)},请充值`, {
                closeButton: {
                    text: '马上充值',
                    callback: () => {
                        console.log('用户说他知道了');
                    }
                },
                enableHtml: true,
                autoClose: 3,
                position,
            })
            },
            onClickButtonTwo(position){
                this.$toast('<strong style="color:red;">加粗的提示</strong>', {
                closeButton: {
                    text: '谢谢提醒',
                },
                enableHtml: true,
                position,
                })
            }
        },
        
}
</script>
<style lang="scss">
@import 'scss-style';
   .toastWrapper{
       z-index:30;
   }
</style>
