<template>
    <div class="collapseItem" >
        <div class="title" v-on:click='toggleState'>{{title}}</div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:'NeilCollapseItem',
    props:{
        title:{
            type:String,
            required:true
        },
    },
    data(){
        return{
            open:false
        }
    },
    mounted(){
        this.eventBus && this.eventBus.$on('update:selected',(vm)=>{
            if(vm!==this){
                this.close()
            }
        })
    },
    methods:{
        toggleState(){
            if(this.open){
                this.open = !this.open
            }else{
                this.open = true
                this.eventBus && this.eventBus.$emit('update:selected',this)
            }
        },
        close(){
            this.open = false
        }
    },
    inject:['eventBus']
}
</script>
<style lang="scss">
    $border-radius:4px;
    $grey:#ccc;
    .collapseItem{
        >.title{
            border: 1px solid $grey;
            // border-radius: $border-radius;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
            min-height: 32px;
            line-height: 32px;
            padding: 0 8px;
        }
        &:first-child{
            >.title{
            border-top-left-radius:$border-radius;
            border-top-right-radius:$border-radius;
            }
        }
        &:last-child{
            >.title:last-child{
            border-bottom-left-radius:$border-radius;
            border-bottom-right-radius:$border-radius;
            }
        }
        >.content{
            padding: 8px;
        }
    }
</style>