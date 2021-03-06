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
            this.isShow=true    //解决初始打开时下划线会移动问题
            let {width,left} = vm.$el.getBoundingClientRect()
            this.$refs.line.style.width = width+'px'
            this.$refs.line.style.transform = `translateX(${left}px)`
        })
    }
}
</script>
<style lang="scss" scoped>
    $tab-height:40px;
    $active-color:rgba(0,172,181,1);
    .tabs-head{
        display: flex;
        position: relative;
        height: $tab-height;
        line-height: $tab-height;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid salmon;
        >.actions-wrapper{
            margin-left: auto;
        }
        >.line{
            position: absolute;
            bottom: 0;
            border-bottom: 2.5px solid $active-color;
            transition: transform .25s,width .25s;
        }
    }
</style>