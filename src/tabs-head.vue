<template>
    <div class="tabs-head">
         <slot></slot>
         <div class="line" ref="line"></div>
         <div class="actions-wrapper">
            <slot name='actions'></slot>
         </div>
    </div>
</template>
<script>
export default {
    name:'NeilTabsHead',
    inject:['eventBus'],
    created(){
        this.eventBus.$on('update:selected',(item,vm)=>{
            // console.log(item);
            // console.log(vm);
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
            width: 2.5em;
            border-bottom: 3px solid $active-color;
        }
    }
</style>