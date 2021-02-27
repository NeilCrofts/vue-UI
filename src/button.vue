<template>
   <button class='g-button' :class="{[`icon-${iconPossition}`]:true}">
        <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href='`#i-${icon}`'></use>
        </svg> 
        <div class="content">
            <slot></slot>
        </div>
   </button>
</template>
<script>
export default {
    props:{
        'icon':{},
        'iconPossition':{
            type:String,
            default:'left',
            validator(value){
            //    return !(value!=='left'&& value!=='right')
               return value==='left'|| value==='right'
                }
            }
        }
}
</script>
<style lang="scss">
    .g-button {
        display: inline-flex;justify-content: center;align-items: center;  //用flex布局来设置图标在按钮的左右位置
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        vertical-align:middle;
        &:hover { border-color: var(--border-color-hover);}
        &:active {background-color: var(--button-active-bg);}
        &:focus {outline: none;}
        //>为子类选择器 order1在前2在后
        >.icon{ order: 1;margin-right: .3em;margin-left: 0;}
        >.content{order:2;}
        &.icon-right{
            >.icon{order:2;margin-left: .3em;margin-right: 0;}
            >.content{order: 1}
        }
        
    }
</style>