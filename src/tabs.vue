<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name:'NeilTabs',
    props:{
        selected:{
            type:String,
            require:true
        },
        direction:{
            type:String,
            default:'Horizontal',
            validator(value){
                return ['Horizontal','vertical'].indexOf(value)>=0;
            }
        }
    },
    data(){
        return{
            //eventBus是一个Vue实例，可以使用.$on()类似方法
            eventBus:new Vue()
        }
    },
    provide(){  //提供事件中心，使得其所有子孙组件可以使用到eventBus
        return{
            eventBus:this.eventBus
        }
    },
    created () {
        // console.log(this);
        // console.log(this.eventBus);
        // this.$emit('update:selected', 'xxx')
    },
     mounted(){
        this.eventBus.$emit('update:selected',this.selected)
    }
}
</script>
<style lang="scss">
    
</style>