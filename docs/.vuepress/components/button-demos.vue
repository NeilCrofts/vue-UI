<template>
<div>
    <div class="wrapper">
        <div class="header">基础用法</div>
        <div class="comp_wrapper">
            <div>
                <g-button>默认按钮</g-button>
                <g-button icon="setting">默认按钮</g-button>
                <g-button icon="setting" iconPosition="right">默认按钮</g-button>
                <g-button :is-loading='true'>加载中</g-button>
                <g-button disabled>禁用按钮</g-button>
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
                <g-button theme='primary'>主要按钮</g-button>
                <g-button theme='success'>成功按钮</g-button>
                <g-button theme='warning'>警告按钮</g-button>
                <g-button theme='info'>信息按钮</g-button>
                <g-button theme='danger'>危险按钮</g-button>
                <g-button theme='text'>文字按钮</g-button>
            </div>
        </div>
        <div class="clickBtn" @click='isShowTwo = !isShowTwo'>{{isShowTwo?'隐藏代码':'显示代码'}}</div>
        <div class="line" v-if="isShowTwo"></div>
        <pre id="pre_action" v-if="isShowTwo"><code class="code">{{contentTwo}}</code></pre>
    </div>
    <div class="wrapper">
        <div class="header">不同尺寸</div>
        <div class="comp_wrapper">
            <div>
                <g-button size='normal'>默认大小</g-button>
                <g-button size='small'>中等按钮</g-button>
                <g-button size='mini'>超小按钮</g-button>
            </div>
        </div>
        <div class="clickBtn" @click='isShowThree = !isShowThree'>{{isShowThree?'隐藏代码':'显示代码'}}</div>
        <div class="line" v-if="isShowThree"></div>
        <pre id="pre_action" v-if="isShowThree"><code class="code">{{contentThree}}</code></pre>
    </div>
</div>
</template>
<script>
import Button from '../../../src/button.vue'

export default {
    components:{
        'g-button':Button,
    },
    data() {
            return {
                contentOne:`
                <g-button>默认按钮</g-button>
                <g-button icon="setting">默认按钮</g-button>
                <g-button icon="setting" iconPosition="right">默认按钮</g-button>
                <g-button :is-loading='true'>加载中</g-button>
                <g-button disabled>禁用按钮</g-button>`.replace(/\t+|  /g,'').trim(),
                contentTwo:`<g-button theme='primary'>主要按钮</g-button>
                <g-button theme='success'>成功按钮</g-button>
                <g-button theme='warning'>警告按钮</g-button>
                <g-button theme='info'>信息按钮</g-button>
                <g-button theme='danger'>危险按钮</g-button>
                <g-button theme='text'>文字按钮</g-button>`.replace(/\t+|  /g,'').trim(),
                contentThree:`<g-button size='normal'>默认大小</g-button>
                <g-button size='small'>中等按钮</g-button>
                <g-button size='mini'>超小按钮</g-button>`.replace(/\t+|  /g,'').trim(),
                isShowOne:false,
                isShowTwo:false,
                isShowThree:false
            }
        },
        methods:{
        },
        
}
</script>
<style lang="scss">
@import 'scss-style';
   
</style>
