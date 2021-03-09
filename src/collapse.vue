<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name:'NeilCollapse',
    props:{
        single:{
            type:Boolean,
            default:false
        },
        selected:{
            type:Array
        }
    },
    data(){
        return{
            eventBus:new Vue(),
        }
    },
    provide(){
        return{
            eventBus:this.eventBus
        }
    },
    mounted(){
        //根据初始的selected，设置哪个是否打开
        this.eventBus.$emit('update:selected',this.selected)

        //监听点击打开 的eventBus，接收name
        this.eventBus.$on('update:addSelected',(name)=>{
            //深拷贝selected
            let selectedCopy = JSON.parse(JSON.stringify(this.selected));
            if(this.single){
                selectedCopy = [name];
            }else{
                //添加到数组
                selectedCopy.push(name)
            }
            //通知儿子打开内容区
            this.eventBus.$emit('update:selected',selectedCopy)
            //然后传到界面
            this.$emit('update:selected',selectedCopy)

        })
        //监听点击关闭 的eventBus，接收name
         this.eventBus.$on('update:removeSelected',(name)=>{
            let selectedCopy = JSON.parse(JSON.stringify(this.selected));
             //在数组中删除对应的name
            let index = this.selected.indexOf(name)
            selectedCopy.splice(index,1)
            //通知儿子关闭内容区
            this.eventBus.$emit('update:selected',selectedCopy)
            //然后传到界面
            this.$emit('update:selected',selectedCopy)
        })

        //将父级的single传给子组件的data
        // this.$children.forEach((vm)=>{
        //     vm.single = this.single
        // })
    }
}
</script>
<style lang="scss">
    $border-radius:4px;
    $grey:#ccc;
    .collapse{
        border: 1px solid $grey;
        border-radius: $border-radius;
        // border-bottom: none;
    }
</style>