<template>
<div>
    <div class="wrapper">
        <div class="header">基础用法</div>
        <div class="btn_wrapper">
            <div>
                <g-button>默认按钮</g-button>
                <g-button icon="setting">默认按钮</g-button>
                <g-button icon="setting" iconPosition="right">默认按钮</g-button>
                <g-button :is-loading='true'>加载中</g-button>
                <g-button disabled>禁用按钮</g-button>
            </div>
        </div>
        <div class="clickBtn" @click='isShowOne = !isShowOne'>{{toggleMsg}}</div>
        <div class="line" v-if="isShowOne"></div>
        <pre id="pre_action" v-if="isShowOne"><code class="code">{{content}}</code></pre>
    </div>
    <div class="wrapper">
        <div class="header">不同样式</div>
        <div class="btn_wrapper">
            <div>
                <g-button theme='primary'>主要按钮</g-button>
                <g-button theme='success'>成功按钮</g-button>
                <g-button theme='warning'>警告按钮</g-button>
                <g-button theme='info'>信息按钮</g-button>
                <g-button theme='danger'>危险按钮</g-button>
                <g-button theme='text'>文字按钮</g-button>
            </div>
        </div>
        <div class="clickBtn" @click='isShowTwo = !isShowTwo'>{{toggleMsg}}</div>
        <div class="line" v-if="isShowTwo"></div>
        <pre id="pre_action" v-if="isShowTwo"><code class="code">{{content}}</code></pre>
    </div>
</div>
</template>
<script>
import Button from '../../../src/button.vue'
import Header from '../../../src/header.vue'
export default {
    components:{
        'g-button':Button,
        Header,
    },
    data() {
            return {
                content:`<g-button theme='primary'>主要按钮</g-button>
                <g-button theme='success'>成功按钮</g-button>
                <g-button theme='warning'>警告按钮</g-button>
                <g-button theme='info'>信息按钮</g-button>
                <g-button theme='danger'>危险按钮</g-button>
                <g-button theme='text'>文字按钮</g-button>`.replace(/\t+|  /g,'').trim(),
                isShowOne:false,
                isShowTwo:false
            }
        },
        methods:{
            handleClick(){
            }
        },
        computed:{
             toggleMsg(){
                 if(!this.isShowOne){
                     return '显示代码'
                 }else{
                     return '隐藏代码'
                 }
             }
        }
}
</script>
<style lang="scss">
    
    .wrapper{
        border: 1px solid #ebebeb;
        margin: 16px 0 32px;
        &:hover{
        box-shadow: 0 0 3px #ccc;
        }
        .header{
            font-size: 18px;
            font-weight: 400;
            padding: 8px 16px;
            border-bottom: 1px solid #ebebeb;
        }
        .btn_wrapper{
            padding:16px;
            .g-button{
                margin: 8px;
            }
        }
        .clickBtn{
        text-align: center;
        padding: 8px 16px;
        cursor: pointer;
        border-top: 1px dashed #ebebeb;
        color: #ccc;
        background-color: #fff;
        &:hover{
            color: #00ACB5;
            background-color: #f9fafc;
            }
        }
        .line{
            height: 0;
            width: 100%;
            border-bottom: 1px dashed #ebebeb;
        }
     #pre_action{
        border-radius: 0;
        padding: 8px;
        margin: 0;
        background-color: rgba(79,179,179,0.1);
       .code{
            line-height: 1.5;
            color: #000;
            font-size: 15px;
            }
        }
}
    
   
</style>
