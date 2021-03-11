<template>
   <button class='g-button' :class="{[`icon-${iconPosition}`]:true,[`g-button-${theme}`]:true}" @click="$emit('click')">
        <g-icon v-if='icon && !isLoading' :name='icon' class="icon"></g-icon>
        <g-icon v-if='isLoading' name='loading' class="loading icon"></g-icon>
        <div class="g-button-content">
            <span><slot></slot></span>
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
           return ['primary','success','wraning','info','danger','text'].indexOf(value)>=0
          }
        },
        'icon':{},
        'iconPosition':{
            type:String,
            default:'left',
            validator(value){
            //    return !(value!=='left'&& value!=='right')
               return value==='left'|| value==='right'
                }
            },
            'isLoading':{
                type:Boolean,
                default:false
            },
        }
}
</script>
<style lang="scss" scoped>
  $font-size: 14px;
  $button-height: 36px;
  $button-bg: white;
  $button-active-bg: #eee;
  $border-radius: 4px;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  .g-button { font-size: $font-size; height: $button-height;  padding: 0 1em;
    border-radius: $border-radius; border: 1px solid $border-color;
    background: $button-bg;
    cursor: pointer;
    display: inline-flex; justify-content: center; align-items: center;
    vertical-align: middle;
    &:hover { border-color: $border-color-hover; }
    &:active { background-color: $button-active-bg; }
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
      span{
        color: #8e8282;
        border-color: #222831;
        background-color: #f7e4a4;
      }
    }
  }
}
</style>