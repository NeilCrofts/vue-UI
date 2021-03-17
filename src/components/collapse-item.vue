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
        name:{
            type:String,
            require:true
        }
    },
    data(){
        return{
            open:false,
        }
    },
    mounted(){
        //获取父亲传过来的selected，确定初始时的和点击后的关闭状态
        this.eventBus && this.eventBus.$on('update:selected',(names)=>{
            if(names.indexOf(this.name)>=0){
                this.open = true;
            }else{
                this.open = false
            }
        })
    },
    methods:{
        toggleState(){
            if(this.open){
                //通知eventBus,向父亲传递name,让父亲发送关闭信息
                this.eventBus && this.eventBus.$emit('update:removeSelected',this.name)
            }else{
                //通知eventBus,向父亲传递name,让父亲发送打开信息
                this.eventBus && this.eventBus.$emit('update:addSelected',this.name)
            }
        },

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