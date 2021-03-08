<template>
    <div class="popover" @click="onClick">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
            <slot name="content"></slot>
        </div>
        <!-- 添加span为获取slot或确定slot位置 -->
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
    name:'NeilPopover',
    data() {
        return {visible:false}
    },
    methods:{
        onClick(event){
            // console.log(event.target);
            if(this.$refs.triggerWrapper.contains(event.target)){
                this.visible=!this.visible
                console.log(this.visible,'切换visible');
            if(this.visible===true){
              setTimeout(()=>{
                   //移动一个元素的位置，不会影响其功能，绑定的事件也能触发
                    document.body.append(this.$refs.contentWrapper);
                    //确定button位置--》进而设置popover内容位置
                    let {left,top,width} = this.$refs.triggerWrapper.getBoundingClientRect();
                    this.$refs.contentWrapper.style.left = left+window.scrollX+'px';
                    this.$refs.contentWrapper.style.top = top-width+window.scrollY+'px';
                    let eventHandle = ()=>{//点击按钮后再点击一次，还会触发该事件，因为第一次按钮生成的document监听事件还没有移除，再点击按钮冒泡触发了该事件
                        this.visible = false
                        console.log(this.visible,'点击body关闭popover')
                        document.removeEventListener('click',eventHandle)
                }
                   //当onClick方法一执行，该click事件就新建并调用了，故需要用异步
                    document.addEventListener('click',eventHandle)
                    
                })
            }
        }
    },

    }
}
</script>
<style lang="scss">
    .popover{
        display: inline-block;
        vertical-align: bottom;
        position: relative;
    }
    .content-wrapper{
            position: absolute;
            border: 1px solid grey;
            box-shadow: 0 0 5px rgba(0,0,0,0.5);
        }
</style>