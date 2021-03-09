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
        }
    },
    data(){
        return{
            eventBus:new Vue()
        }
    },
    provide(){
        if(this.single){
            return{
                eventBus:this.eventBus
            }
        }
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