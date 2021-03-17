<template>
<div>
    <div class="wrapper">
        <div class="header">24网格</div>
        <div class="comp_wrapper">
            <div>
                <n-row>
                    <n-col span='8'>
                        <div class="colDemo">8</div>
                    </n-col>
                    <n-col span='8'>
                        <div class="colDemo">8</div>
                    </n-col>
                    <n-col span='8'>
                        <div class="colDemo">8</div>
                    </n-col>
                </n-row>
                <n-row>
                    <n-col span='6'>
                        <div class="colDemo">6</div>
                    </n-col>
                    <n-col span='6'>
                        <div class="colDemo">6</div>
                    </n-col>
                    <n-col span='6'>
                        <div class="colDemo">6</div>
                    </n-col>
                    <n-col span='6'>
                        <div class="colDemo">6</div>
                    </n-col>
                </n-row>
                <n-row>
                    <n-col span='4'>
                        <div class="colDemo">4</div>
                    </n-col>
                    <n-col span='4'>
                        <div class="colDemo">4</div>
                    </n-col>
                    <n-col span='4'>
                        <div class="colDemo">4</div>
                    </n-col>
                    <n-col span='4'>
                        <div class="colDemo">4</div>
                    </n-col>
                    <n-col span='4'>
                        <div class="colDemo">4</div>
                    </n-col>
                    <n-col span='4'>
                        <div class="colDemo">4</div>
                    </n-col>
                </n-row>
                <n-row>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                </n-row>
            </div>
        </div>
        <div class="clickBtn" @click='isShowOne = !isShowOne'>{{isShowOne?'隐藏代码':'显示代码'}}</div>
        <div class="line" v-if="isShowOne"></div>
        <pre id="pre_action" v-if="isShowOne"><code class="code">{{contentOne}}</code></pre>
    </div>
    <div class="wrapper">
        <div class="header">设置 gutter</div>
        <div class="comp_wrapper">
            <div>
                <n-row gutter='10'>
                    <n-col span="8">
                        <div class="colDemo">8</div>
                    </n-col>
                    <n-col span="8">
                        <div class="colDemo">8</div>
                    </n-col>
                    <n-col span="8">
                        <div class="colDemo">8</div>
                    </n-col>
                </n-row>
                <n-row gutter="10">
                    <n-col span='6'>
                        <div class="colDemo">6</div>
                    </n-col>
                    <n-col span='6'>
                        <div class="colDemo">6</div>
                    </n-col>
                    <n-col span='6'>
                        <div class="colDemo">6</div>
                    </n-col>
                    <n-col span='6'>
                        <div class="colDemo">6</div>
                    </n-col>
                </n-row>
            </div>
        </div>
        <div class="clickBtn" @click='isShowTwo = !isShowTwo'>{{isShowTwo?'隐藏代码':'显示代码'}}</div>
        <div class="line" v-if="isShowTwo"></div>
        <pre id="pre_action" v-if="isShowTwo"><code class="code">{{contentTwo}}</code></pre>
    </div>
    <div class="wrapper">
        <div class="header">设置间隙</div>
        <div class="comp_wrapper">
            <div>
                <n-row>
                    <n-col span="8">
                        <div class="colDemo">8</div>
                    </n-col>
                    <n-col span="8" offset="8">
                        <div class="colDemo">8</div>
                    </n-col>
                </n-row>
                <n-row>
                    <n-col span="6" offset="6">
                        <div class="colDemo">6</div>
                    </n-col>
                    <n-col span="6" offset="6">
                        <div class="colDemo">6</div>
                    </n-col>
                </n-row>
                <n-row>
                    <n-col span="4" offset="4">
                        <div class="colDemo">4</div>
                    </n-col>
                    <n-col span="4" offset="4">
                        <div class="colDemo">4</div>
                    </n-col>
                    <n-col span="4" offset="4">
                        <div class="colDemo">4</div>
                    </n-col>
                </n-row>
            </div>
        </div>
        <div class="clickBtn" @click='isShowThree = !isShowThree'>{{isShowThree?'隐藏代码':'显示代码'}}</div>
        <div class="line" v-if="isShowThree"></div>
        <pre id="pre_action" v-if="isShowThree"><code class="code">{{contentThree}}</code></pre>
    </div>
    <div class="wrapper">
        <div class="header">支持响应式</div>
        <div class="comp_wrapper">
            <div>
               <n-row gutter="20">
                    <n-col span="24" :ipad="{span:8}" :narrow-pc="{span:6}" :pc="{span:4}" :wide-pc="{span:2}">
                        <div class="colDemo">响应式</div>
                    </n-col>
                    <n-col span="24" :ipad="{span:16}" :narrow-pc="{span:18}" :pc="{span:20}" :wide-pc="{span:22}">
                        <div class="colDemo">比例随着屏幕宽度的减小发生变化</div>
                    </n-col>
                </n-row>
            </div>
        </div>
        <div class="clickBtn" @click='isShowFour = !isShowFour'>{{isShowFour?'隐藏代码':'显示代码'}}</div>
        <div class="line" v-if="isShowFour"></div>
        <pre id="pre_action" v-if="isShowFour"><code class="code">{{contentFour}}</code></pre>
    </div>
</div>
</template>
<script>
import Col from '../src/components/col.vue'
import Row from '../src/components/row.vue'

export default {
    components:{
        'n-col':Col,
        'n-row':Row,
    },
    data() {
            return {
                contentOne:`
                * {
                    box-sizing: border-box;
                }

                <n-row>
                    <n-col span='8'>
                        <div class="colDemo">8</div>
                    </n-col>
                    <n-col span='8'>
                        <div class="colDemo">8</div>
                    </n-col>
                    <n-col span='8'>
                        <div class="colDemo">8</div>
                    </n-col>
                </n-row>
                <n-row>
                    <n-col span='6'>
                        <div class="colDemo">6</div>
                    </n-col>
                    <n-col span='6'>
                        <div class="colDemo">6</div>
                    </n-col>
                    <n-col span='6'>
                        <div class="colDemo">6</div>
                    </n-col>
                    <n-col span='6'>
                        <div class="colDemo">6</div>
                    </n-col>
                </n-row>
                <n-row>
                    <n-col span='4'>
                        <div class="colDemo">4</div>
                    </n-col>
                    <n-col span='4'>
                        <div class="colDemo">4</div>
                    </n-col>
                    <n-col span='4'>
                        <div class="colDemo">4</div>
                    </n-col>
                    <n-col span='4'>
                        <div class="colDemo">4</div>
                    </n-col>
                    <n-col span='4'>
                        <div class="colDemo">4</div>
                    </n-col>
                    <n-col span='4'>
                        <div class="colDemo">4</div>
                    </n-col>
                </n-row>
                <n-row>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                    <n-col span='2'>
                        <div class="colDemo">2</div>
                    </n-col>
                </n-row>`.replace(/\t+| {16}/g,'').trim(),
                contentTwo:`
                * {
                    box-sizing: border-box;
                }

                <n-row gutter='10'>
                    <n-col span="8">
                        <div class="colDemo">8</div>
                    </n-col>
                    <n-col span="8">
                        <div class="colDemo">8</div>
                    </n-col>
                    <n-col span="8">
                        <div class="colDemo">8</div>
                    </n-col>
                </n-row>
                <n-row gutter="10">
                    <n-col span='6'>
                        <div class="colDemo">6</div>
                    </n-col>
                    <n-col span='6'>
                        <div class="colDemo">6</div>
                    </n-col>
                    <n-col span='6'>
                        <div class="colDemo">6</div>
                    </n-col>
                    <n-col span='6'>
                        <div class="colDemo">6</div>
                    </n-col>
                </n-row>`.replace(/\t+| {16}/g,'').trim(),
                contentThree:`
                * {
                    box-sizing: border-box;
                }

                <n-row>
                    <n-col span="8">
                        <div class="colDemo">8</div>
                    </n-col>
                    <n-col span="8" offset="8">
                        <div class="colDemo">8</div>
                    </n-col>
                </n-row>
                <n-row>
                    <n-col span="6" offset="6">
                        <div class="colDemo">6</div>
                    </n-col>
                    <n-col span="6" offset="6">
                        <div class="colDemo">6</div>
                    </n-col>
                </n-row>
                <n-row>
                    <n-col span="4" offset="4">
                        <div class="colDemo">4</div>
                    </n-col>
                    <n-col span="4" offset="4">
                        <div class="colDemo">4</div>
                    </n-col>
                    <n-col span="4" offset="4">
                        <div class="colDemo">4</div>
                    </n-col>
                </n-row>`.replace(/\t+| {16}/g,'').trim(),
                contentFour:`
                * {
                    box-sizing: border-box;
                }

                <n-row gutter="20">
                    <n-col span="24" :ipad="{span:8}" :narrow-pc="{span:4}" :pc="{span:2}" :wide-pc="{span:1}">
                        <div class="colDemo">响应式</div>
                    </n-col>
                    <n-col span="24" :ipad="{span:16}" :narrow-pc="{span:20}" :pc="{span:22}" :wide-pc="{span:23}">
                        <div class="colDemo">比例随着屏幕宽度的减小发生变化</div>
                    </n-col>
                </n-row>`.replace(/\t+| {16}/g,'').trim(),
                isShowOne:false,
                isShowTwo:false,
                isShowThree:false,
                isShowFour:false,
            }
        },
        methods:{
        },
        
}
</script>
<style lang="scss">
@import 'scss-style';
*{
    box-sizing: border-box;
}
.wrapper{
   .comp_wrapper{
       .row{
           .col{
               .colDemo{
                   height: 100%;
                   background-color: #00ACB5;
                   border: 1px solid #ccc;
               }
           }
       }
   }
}
</style>
