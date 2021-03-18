<template>
<div>
    <div class="wrapper">
        <div class="header">布局</div>
        <div class="comp_wrapper">
            <div>
                <n-layout style="color: white; margin-bottom:50px;">
                    <n-header style="height:50px; background:#0AAACC;">
                        header
                    </n-header>
                    <n-content style="height: 100px; background:#0A8AC2;">
                        content
                    </n-content>
                    <n-footer style="height: 50px; background:#0AAACC;">
                        footer
                    </n-footer>
                </n-layout>
            </div>
        </div>
        <div class="clickBtn" @click='isShowOne = !isShowOne'>{{isShowOne?'隐藏代码':'显示代码'}}</div>
        <div class="line" v-if="isShowOne"></div>
        <pre id="pre_action" v-if="isShowOne"><code class="code">{{contentOne}}</code></pre>
    </div>
    <div class="wrapper">
        <div class="header">布局</div>
        <div class="comp_wrapper">
            <div>
               <n-layout style="color: white; margin-bottom:50px;">
                    <n-header style="height:50px; background:#0AAACC;">
                        header
                    </n-header>
                    <n-layout>
                        <n-sider style="height: 100px; background:#00ACB5; width:200px; color: black;">sider</n-sider>
                        <n-content style="height: 100px; background:#0A8AC2;">
                            content
                        </n-content>
                    </n-layout>
                    <n-footer style="height: 50px; background:#0AAACC;">
                        footer
                    </n-footer>
                </n-layout>
            </div>
        </div>
        <div class="clickBtn" @click='isShowTwo = !isShowTwo'>{{isShowTwo?'隐藏代码':'显示代码'}}</div>
        <div class="line" v-if="isShowTwo"></div>
        <pre id="pre_action" v-if="isShowTwo"><code class="code">{{contentTwo}}</code></pre>
    </div>
    <div class="wrapper">
        <div class="header">布局</div>
        <div class="comp_wrapper">
            <div>
                <n-layout style="color: white; overflow:hidden; margin-bottom:50px;">
                    <n-sider style=" background:#00ACB5; width:200px; color: black;">
                        sider
                    </n-sider>
                    <n-layout>
                        <n-header style="height: 50px; background:#0AAACC;">
                            header
                        </n-header>
                        <n-content style="height: 100px; background:#0A8AC2;">
                            content
                        </n-content>
                        <n-footer style="height: 50px; background:#0AAACC;">
                            footer
                        </n-footer>
                    </n-layout>
                </n-layout>
            </div>
        </div>
        <div class="clickBtn" @click='isShowThree = !isShowThree'>{{isShowThree?'隐藏代码':'显示代码'}}</div>
        <div class="line" v-if="isShowThree"></div>
        <pre id="pre_action" v-if="isShowThree"><code class="code">{{contentThree}}</code></pre>
    </div>
    <footer class="page-nav">
            <p>上一节：<a href='#/input'>input组件</a></p>
            <p>下一节：<a href='#/grid'>grid组件</a></p>
    </footer>
</div>
</template>
<script>
import Layout from '../src/components/layout'
import Header from '../src/components/header'
import Sider from '../src/components/sider'
import Content from '../src/components/content'
import Footer from '../src/components/footer'
export default {
    components:{
        'n-layout':Layout,
        'n-header':Header,
        'n-sider':Sider,
        'n-content':Content,
        'n-footer':Footer,
    },
    data() {
            return {
                contentOne:`
                <n-layout style="color: white; margin-bottom:50px;">
                    <n-header style="height:50px; background:#0AAACC;">
                        header
                    </n-header>
                    <n-content style="height: 100px; background:#0A8AC2;">
                        content
                    </n-content>
                    <n-footer style="height: 50px; background:#0AAACC;">
                        footer
                    </n-footer>
                </n-layout>`.replace(/\t+| {8}/g,'').trim(),
                contentTwo:`
                <n-layout style="color: white; margin-bottom:50px;">
                    <n-header style="height:50px; background:#0AAACC;">
                        header
                    </n-header>
                    <n-layout>
                        <n-sider style="height: 100px; background:#00ACB5; width:200px; color: black;">sider</n-sider>
                        <n-content style="height: 100px; background:#0A8AC2;">
                            content
                        </n-content>
                    </n-layout>
                    <n-footer style="height: 50px; background:#0AAACC;">
                        footer
                    </n-footer>
                </n-layout>`.replace(/\t+| {8}/g,'').trim(),
                contentThree:`
                <n-layout style="color: white; overflow:hidden; margin-bottom:50px;">
                    <n-sider style=" background:#00ACB5; width:200px; color: black;">
                        sider
                    </n-sider>
                    <n-layout>
                        <n-header style="height: 50px; background:#0AAACC;">
                            header
                        </n-header>
                        <n-content style="height: 100px; background:#0A8AC2;">
                            content
                        </n-content>
                        <n-footer style="height: 50px; background:#0AAACC;">
                            footer
                        </n-footer>
                    </n-layout>
                </n-layout>`.replace(/\t+| {8}/g,'').trim(),
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
