<template>
   <button class='g-button' :class="classes">
        <g-icon v-if='icon && !isLoading' :name='icon' class="icon"></g-icon>
        <g-icon v-if='isLoading' name='loading' class="loading icon"></g-icon>
        <div class="g-button-content">
            <slot></slot>
        </div>
   </button>
</template>
<script>
    import Icon from './icon'
export default {
    components:{
        'g-icon':Icon
    },
    props:{
        theme:{
          type:String,
          default:'default',
          validator(value){
           return ['default','primary','success','warning','info','danger','text'].indexOf(value)>=0
          }
        },
        icon:{},
        iconPosition:{
            type:String,
            default:'left',
            validator(value){
               return value==='left'|| value==='right'
                }
            },
        isLoading:{
            type:Boolean,
            default:false
            },
        size:{
            type:String,
            default:'normal'
          },
        },
        computed:{
          classes(){
            return `icon-${this.iconPosition} g-button-${this.theme} g-button-${this.size}`
          }
        }
}
</script>
<style lang="scss" scoped>

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .g-button { font-size: 14px; height: 40px;  padding: 0 1em;
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex; justify-content: center; align-items: center;
    vertical-align: middle;
    &:focus { outline: none; }
    > .g-button-content { order: 2; }
    > .icon { order: 1; margin-right: .1em; }
    &.icon-right {
      > .g-button-content { order: 1; }
      > .icon { order: 2; margin-right: 0; margin-left: .1em;}
    }
    .loading {
      animation: spin 2s infinite linear;
    }
    &.g-button-default{
    background: #fff;
    border: 1px solid #dcdfe6;
    &:hover,&:focus{
      color: #222831;
      border-color: #222831;
      background-color: #eeeeee;
    }
  }
     &.g-button-primary{
    background: #00adb5;
    border: 1px solid #393e46;
    color: #eeeeee;
    &:hover,&:focus{
      color: #eeeeee;
      border-color: #222831;
      background-color: #40babf;
    }
  }
  &.g-button-success{
    background: #4ecca3;
    border: 1px solid #393e46;
    color: #eeeeee;
    &:hover,&:focus{
      color: #eeeeee;
      border-color: #222831;
      background-color: #6be3bc;
    }
  }
  &.g-button-danger{
    background: #d72323;
    border: 1px solid #d72323;
    color: #eeeeee;
    &:hover,&:focus{
      color: #eeeeee;
      border-color: #dd5656;
      background-color: #dd5656;
    }
  }

  &.g-button-info{
    background: #52616b;
    border: 1px solid #393e46;
    color: #eeeeee;
    &:hover,&:focus{
      color: #eeeeee;
      border-color: #222831;
      background-color: #6c777d;
    }
  }

  &.g-button-warning{
    background: #fce38a;
    border: 1px solid #393e46;
    color: #4a4444;
    &:hover,&:focus{
      color: #8e8282;
      border-color: #222831;
      background-color: #f7e4a4;
    }
  }

  &.g-button-text{
    background: #fff;
    border: 0;
    color: #4a4444;
    &:hover,&:focus{
      .g-button-content{
        color: #8e8282;
        border-color: #222831;
        background-color: #f7e4a4;
      }
    }
  }

  &.g-button-normal{
    padding: 12px 20px;
  }
  &.g-button-small{
    height: 36px;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  &.g-button-mini{
    height: 32px;
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
  }

}
</style>