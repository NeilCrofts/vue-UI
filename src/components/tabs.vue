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
        
    },
    methods:{
        checkChildern(){
        if (this.$children.length === 0) {
            console && console.warn &&
            console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
            }
        },
        selectTab(){
            //为得到子组件tab的位置
         this.$children.forEach((vm)=>{
             if(vm.$options.name==='NeilTabsHead'){
                 vm.$children.forEach((childVm)=>{
                    //  console.log(childVm);
                if(childVm.$options.name === 'NeilTabsItem' && childVm.name === this.selected){
                    //确定孙子组件tabs-childVm的初始状态,并得到（将childVm传出）
                    // console.log(childVm.$el);
                    this.eventBus.$emit('update:selected',this.selected,childVm)
                    }
                })
             }
         })
        }
    },
     mounted(){
         this.checkChildern()
         this.selectTab()
    }
}
</script>
<style lang="scss">
    
</style>