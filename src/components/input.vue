<template>
    <div class="inputWrapper" :class="{'error':error}">
        <input type="text" :value="value" :disabled='disabled' :readonly='readonly'
        @change="$emit('change',$event.target.value)"
        @input="$emit('input',$event.target.value)"
        @focus="$emit('focus',$event.target.value)"
        @blur="$emit('blur',$event.target.value)">
        <template v-if="error">
            <icon class="icon-error" name='error'></icon>
            <span  class="errorMessage">{{error}}</span>    
        </template>
    </div>
</template>
<script>
import Icon from './icon'
export default {
    components:{Icon},
    name:'n-input',
    props:{
        value:{
            type:String,
        },
        disabled:{
            type:Boolean,
            default:false
        },
        readonly:{
            type:Boolean,
            default:false
        },
        error:{
            type:String
        }
    }
}
</script>
<style lang="scss" scoped>
    $height:32px;
    $border-color:#999;
    $border-color-hover:#333;
    $border-radius:4px;
    $font-size:14px;
    $box-shadow-color:rgba(0, 0, 0, 0.5);
    $red:#F1453D;

    .inputWrapper{
            display: inline-flex;
            align-items: center;
            >*:not(:last-child){
                margin-right: 0.5em;
            }
            margin: 10px;
            font-size: $font-size;
            >input{
            height: 32px;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
            &:hover{
                border-color:$border-color-hover;
            }
             &:focus { box-shadow: inset 0 1px 3px $box-shadow-color; }
             &[disabled] , &[readonly]{
                 border-color: #bbb;
                 color: #bbb;
                 cursor: not-allowed;
                }
            }
            &.error{
                 > input { border-color: $red; }
            }
         .icon-error { fill: $red; }
         .errorMessage { color: $red; }
    }
</style>