<template>
    <div class="popover" @click.stop="xxx">
        <div class="content-wrapper" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'NeilPopover',
    data() {
        return {visible:false}
    },
    methods:{
        xxx(){
            this.visible=!this.visible
            console.log(this.visible,'切换visible');
            if(this.visible===true){
                let eventHandle = ()=>{//点击按钮后再点击一次，还会触发该事件，因为第一次按钮生成的document监听事件还没有移除，再点击按钮冒泡触发了该事件
                    this.visible = false
                    console.log(this.visible,'点击body关闭popover')
                    document.removeEventListener('click',eventHandle)
                }
               setTimeout(()=>{
                   //当xxx方法一执行，该click事件就新建并调用了，故需要用异步
                    document.addEventListener('click',eventHandle)
                })
            }
        }
    }
}
</script>
<style lang="scss">
    .popover{
        display: inline-block;
        vertical-align: bottom;
        position: relative;
        .content-wrapper{
            position: absolute;
            bottom: 100%;
            left: 0;
            border: 1px solid grey;
            box-shadow: 0 0 5px rgba(0,0,0,0.5);
        }
    }
</style>