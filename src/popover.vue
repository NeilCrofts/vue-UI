<template>
    <div class="popover" @click="onClick">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <!-- 添加span为获取slot或确定slot位置 -->
        <span ref="triggerWrapper" style="display:inline-block">
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
        close(){
            this.visible=false
            //解决第二次按钮后监听事件关闭两次的问题
            document.removeEventListener('click',this.onClickDocument)
        },
        contentPosition(){
            //移动一个元素的位置，不会影响其功能，绑定的事件也能触发
            document.body.append(this.$refs.contentWrapper);
            //确定button位置--》进而设置popover内容位置
            let {left,top} = this.$refs.triggerWrapper.getBoundingClientRect();
            this.$refs.contentWrapper.style.left = left+window.scrollX+'px';
            this.$refs.contentWrapper.style.top = top+window.scrollY+'px';
        },
        onClickDocument(e){//点击按钮后再点击一次，还会触发该事件，因为第一次按钮生成的document监听事件还没有移除，再点击按钮冒泡触发了该事件
            //不用冒泡，如果是popover弹窗内容，则不关闭
            if(this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target)){return}
                this.close()
                // console.log('document close');
            },
        open(){
            this.visible = true
             setTimeout(()=>{
                this.contentPosition();
                //当onClick方法一执行，该click事件就新建并调用了，故需要用异步
                document.addEventListener('click',this.onClickDocument)
            })
        },
        onClick(event){
            if(this.$refs.triggerWrapper.contains(event.target)){
                if(this.visible===true){
                    this.close();
                    // console.log('click close');
                }else{
                    this.open();
                }
            }
        },
    }
}
</script>
<style lang="scss">
    $border-color:#333;
    .popover{
        display: inline-block;
        vertical-align: bottom;
        position: relative;
    }
    .content-wrapper{
            position: absolute;
            border: 1px solid $border-color;
            border-radius: 4px;
            // box-shadow: 0 0 5px rgba(0,0,0,0.5);
            filter: drop-shadow(0 1px 1px rgba(0,0,0,.5));
            background-color: white;
            transform: translateY(-100%);
            margin-top: -10px;
            padding: .5em 1em;
            max-width: 20em;
            word-break: break-all;
            &::before,&::after{
                content: '';
                display: block;
                border: 10px solid transparent;
                width: 0;
                height: 0;
                position: absolute;
                left: 10px;
            }
            &::before{
                border-top-color: black;
                top: 100%;
            }
            &::after{
                border-top-color: white;
                top: calc(100% - 1px);
            }
        }
</style>