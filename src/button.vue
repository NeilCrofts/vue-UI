<template>
   <button class='g-button' :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <g-icon v-if='icon && !isLoading' :name='icon' class="icon"></g-icon>
        <g-icon v-if='isLoading' name='loading' class="loading icon"></g-icon>
        <div class="content">
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
            }
        }
}
</script>
<style lang="scss">
    @keyframes spin {
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
    }
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
        //>为子类选择器 order设置icon位置的左右 1在左2在右
        >.icon{ order: 1;margin-right: .3em;margin-left: 0;}
        >.content{order:2;}
        &.icon-right{
            >.icon{order:2;margin-left: .3em;margin-right: 0;}
            >.content{order: 1}
        }
        >.loading{
            animation: spin 2s infinite linear;
        }
    }
</style>