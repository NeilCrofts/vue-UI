<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
    name:'NeilLayout',
    data(){
        return {
            layoutClass: {
                hasSider: false
            }
        }
    },
    mounted(){
        this.$children.forEach((vm)=>{
            if(vm.$options.name==='NeilAsider'){
                this.layoutClass.hasSider=true
            }
        })
    }
}
</script>
<style lang="scss">
    .layout{
        display: flex;
         flex-grow: 1;
        flex-direction: column;
        border: 2px green solid;
    }
    .hasSider{
        flex-direction:row;
    }
</style>