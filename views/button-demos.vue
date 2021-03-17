<template>
<div>
    <div class="wrapper">
        <div class="header">基础用法</div>
        <div class="comp_wrapper">
            <div>
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
                <n-button disabled>禁用按钮</n-button>
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
                <n-button theme='primary'>主要按钮</n-button>
                <n-button theme='success'>成功按钮</n-button>
                <n-button theme='warning'>警告按钮</n-button>
                <n-button theme='info'>信息按钮</n-button>
                <n-button theme='danger'>危险按钮</n-button>
                <n-button theme='text'>文字按钮</n-button>
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
                <n-button size='normal'>默认大小</n-button>
                <n-button size='small'>中等按钮</n-button>
                <n-button size='mini'>超小按钮</n-button>
            </div>
        </div>
        <div class="clickBtn" @click='isShowThree = !isShowThree'>{{isShowThree?'隐藏代码':'显示代码'}}</div>
        <div class="line" v-if="isShowThree"></div>
        <pre id="pre_action" v-if="isShowThree"><code class="code">{{contentThree}}</code></pre>
    </div>
    <div class="wrapper">
        <div class="header">连续的按钮</div>
        <div class="comp_wrapper">
            <div>
                <n-button-group>
                    <n-button icon='left'>
                        上一页
                    </n-button>
                    <n-button>更多</n-button>
                    <n-button icon='right' icon-position='right'>
                        下一页
                    </n-button>
                </n-button-group>
            </div>
        </div>
        <div class="clickBtn" @click='isShowFour = !isShowFour'>{{isShowFour?'隐藏代码':'显示代码'}}</div>
        <div class="line" v-if="isShowFour"></div>
        <pre id="pre_action" v-if="isShowFour"><code class="code">{{contentFour}}</code></pre>
    </div>
</div>
</template>
<script>
import Button from '../src/components/button'
import ButtonGroup from '../src/components/button-group.vue'
export default {
    components:{
        'n-button':Button,
        'n-button-group':ButtonGroup,
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
                contentThree:`<n-button size='normal'>默认大小</n-button>
                <n-button size='small'>中等按钮</n-button>
                <n-button size='mini'>超小按钮</n-button>`.replace(/\t+| {8}/g,'').trim(),
                contentFour:`
                <n-button-group>
                    <n-button icon='left'>
                        上一页
                    </n-button>
                    <n-button>更多</n-button>
                    <n-button icon='right' icon-position='right'>
                        下一页
                    </n-button>
                </n-button-group>`.replace(/\t+| {10}/g,'').trim(),
                isShowOne:false,
                isShowTwo:false,
                isShowThree:false,
                isShowFour:false
            }
        },
        methods:{
        },
        
}
</script>
<style lang="scss">
@import 'scss-style';
   
</style>
