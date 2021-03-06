<template>
    <div class="tabs-head">
         <slot></slot>
         <div class="line" ref="line" v-show='isShow'></div>
         <div class="actions-wrapper">
            <slot name='actions'></slot>
         </div>
    </div>
</template>
<script>
export default {
    name:'NeilTabsHead',
    inject:['eventBus'],
    data(){
        return{
            isShow:false
        }
    },
    mounted(){
        this.eventBus.$on('update:selected',(item,vm)=>{
             //解决初始打开时下划线会移动问题
            this.isShow=true   
            //确定下划线的位置和宽度
            let parentLeft = vm.$parent.$el.getBoundingClientRect().left;
            let {width,left} = vm.$el.getBoundingClientRect()
            this.$refs.line.style.width = width+'px'
            this.$refs.line.style.transform = `translateX(${left-parentLeft}px)`
        })
    }
}
</script>
<style lang="scss" scoped>
    $tab-height:40px;
    $active-color:rgba(0,172,181,1);
    $border-color:#ddd;
    .tabs-head{
        display: flex;
        position: relative;
        height: $tab-height;
        line-height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid $border-color;
        >.actions-wrapper{
            margin-left: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 1em;
        }
        >.line{
            position: absolute;
            bottom: 0;
            border-bottom: 2.5px solid $active-color;
            transition: transform .25s,width .25s;
        }
    }
</style>