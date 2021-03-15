<template>
    <div>
        <div class="wrapper">
            <div class="header">基础用法</div>
            <div class="comp_wrapper">
                <div>
                    <g-input value='张三'></g-input>
                    <g-input value='李四' disabled></g-input>
                    <g-input value='王五' readonly></g-input>
                    <g-input value='王' error='姓名不能少于两个字'></g-input>
                </div>
            </div>
            <div class="clickBtn" @click='isShowOne = !isShowOne'>{{isShowOne?'隐藏代码':'显示代码'}}</div>
            <div class="line" v-if="isShowOne"></div>
            <pre id="pre_action" v-if="isShowOne"><code class="code">{{contentOne}}</code></pre>
        </div>
        <div class="wrapper">
            <div class="header">双向绑定</div>
            <div class="comp_wrapper">
                <div>
                    <g-input v-model='message'></g-input>
                    <p>{{message}}</p>
                </div>
            </div>
            <div class="clickBtn" @click='isShowTwo = !isShowTwo'>{{isShowTwo?'隐藏代码':'显示代码'}}</div>
            <div class="line" v-if="isShowTwo"></div>
            <pre id="pre_action" v-if="isShowTwo"><code class="code">{{contentTwo}}</code></pre>
        </div>

        
    </div>
</template>
<script>
import Input from '../../../src/input';
export default {
    components:{
        'g-input':Input
    },
    data(){
        return{
            isShowOne:false,
            isShowTwo:false,
            message:'',
            contentOne:`
             <g-input value='张三'></g-input>
                <g-input value='李四' disabled></g-input>
                <g-input value='王五' readonly></g-input>
                <g-input value='王' error='姓名不能少于两个字'></g-input>`.replace(/\t+|  /g,'').trim(),
            contentTwo:`
            <g-input v-model='message'></g-input>
            <p>{{message}}</p>`.replace(/\t+|  /g,'').trim()
        }
    },
    methods:{
        
    }
}
</script>
<style lang="scss">
    @import 'scss-style';
</style>