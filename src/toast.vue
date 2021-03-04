<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast" >
            <slot v-if="!enableHtml"></slot>
            <div v-else class="message" v-html="$slots.default[0]"></div>
            <div class="line" ref="line"></div>
            <span class="close" v-if='closeButton' @click='onClickclose'>{{closeButton.text}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'NeilToust',
    props:{
        autoClose:{
            type:[Boolean,Number],
            default:5,
            validator(value){
                return value===false || typeof value==='number';
            }
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
        },
        position:{
            type:String,
            default:'top',
            validator(value){
                return ['top','middle','bottom'].indexOf(value)>=0;
            }
        }
    },
    mounted(){
        this.updateStyles()
        this.execAutoClose()
    },
    methods:{
        close(){
            this.$el.remove()
            this.$emit('close')
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
                },this.autoClose*1000)
            }
        },
        updateStyles(){
        // console.log(this.$refs.wrapper,this.$refs.line,this.$refs);
        this.$nextTick(()=>{
        })
        setTimeout(()=>{
            this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
        },0)
        }
    },
    computed:{
        toastClasses(){
            return{
                ['position-'+this.position]:true
            }
        }
    }
}
</script>
<style lang="scss">
    $font-size: 14px;
    $min-toast-height: 40px;
    $toast-bg: rgba(10,170,204,0.8);
    @keyframes slide-up {
        0%{opacity: 0;transform: translateY(100%);}
        100%{opacity: 1;transform: translateY(0);}
    }
    @keyframes slide-down {
        0%{opacity: 0;transform: translateY(-100%);}
        100%{opacity: 1;transform: translateY(0);}
    }
    @keyframes fade-in {
        0%{opacity: 0;}
        100%{opacity: 1;}
    }
    $animation-duration:300ms;
    .wrapper{
            position: fixed; 
            left: 50%; 
            transform: translateX(-50%);
            &.position-top{
            top: 0;
            .toast{
                animation: slide-down $animation-duration;
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                }
            }
        &.position-middle{
            top: 50%;
            transform: translate(-50%,-50%);//父子标签的transform属性会覆盖，而不是合并
            .toast{
                animation: fade-in $animation-duration;
                }
            }
        &.position-bottom{
            bottom: 0;
            .toast{
                animation: slide-up $animation-duration;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                }
            }
    }
  .toast {
    font-size: $font-size; min-height: $min-toast-height; line-height: 1.8;
    display: flex;
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