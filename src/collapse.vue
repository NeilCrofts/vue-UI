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
            type:String
        }
    },
    data(){
        return{
            eventBus:new Vue()
        }
    },
    provide(){
        return{
            eventBus:this.eventBus
        }
    },
    mounted(){
        this.eventBus.$emit('update:selected',this.selected)
        this.eventBus.$on('update:selected',(name)=>{
            this.$emit('update:selected',name)
        })
        
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