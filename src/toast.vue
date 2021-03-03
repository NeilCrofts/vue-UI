<template>
    <div class="toast">
        <div class="message">
            <slot></slot>
        </div>
        <div class="line"></div>
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
        }
    },
    mounted(){
        if(this.autoClose){
            setTimeout(()=>{
                this.close();
            },this.autoCloseDelay*1000)
        }
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
        }
    }
}
</script>
<style lang="scss">
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(10,170,204,0.8);
  .toast {
    font-size: $font-size; height: $toast-height; line-height: 1.8;
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