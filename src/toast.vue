<template>
    <div class="toast" ref="wrapper">
        <slot v-if="!enableHtml"></slot>
        <div v-else class="message" v-html="$slots.default[0]"></div>
        <div class="line" ref="line"></div>
        <span class="close" v-if='closeButton' @click='onClickclose'>{{closeButton.text}}</span>
    </div>
</template>
<script>
export default {
    name:'NeilToust',
    props:{
        autoClose:{
            type:Boolean,
            default:true
        },
        autoCloseDelay:{
            type:Number,
            default:50
        },
        closeButton:{
            type:Object,
            default(){ //默认：props没从plugin.js接收到closeBunton的情况下
                return{
                text:'关闭',callback:undefined
                }
            }
        },
        enableHtml:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        this.updateStyles()
        this.execAutoClose()
    },
    methods:{
        close(){
            this.$el.remove()
            this.$destroy()
        },
        onClickclose(){
            this.close()
            if(this.closeButton && typeof this.closeButton.callback === 'function'){
                this.closeButton.callback()
            }
        },
        execAutoClose(){
            if(this.autoClose){
                setTimeout(()=>{
                    this.close();
                },this.autoCloseDelay*1000)
            }
        },
        updateStyles(){
        // console.log(this.$refs.wrapper,this.$refs.line,this.$refs);
            this.$nextTick(()=>{
                this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
        })
        }
    }
}
</script>
<style lang="scss">
    $font-size: 14px;
    $min-toast-height: 40px;
    $toast-bg: rgba(10,170,204,0.8);
  .toast {
    font-size: $font-size; min-height: $min-toast-height; line-height: 1.8;
    position: fixed; top: 0; left: 50%; transform: translateX(-50%); display: flex;
    color: white;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    padding: 0 16px;
    .message {
      padding: 8px 0;
    }
    .close {
      padding-left: 16px;
      flex-shrink: 0;
      cursor: pointer;
    }
    .line {
      height: 100%;
      border-left: 1px solid #666;
      margin-left: 16px;
    }
  }
</style>