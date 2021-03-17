<template>
    <div class="tabs-item" @click='onClick' :class="classes">
         <slot></slot>
    </div>
</template>
<script>
export default {
    name:'NeilTabsItem',
    data(){
        return{
            active:false
        }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name:{
          type:String|Number,
          require:true
      }
    },
    computed: {
        classes(){
            return {active:this.active,
            disabled:this.disabled}
        }
    },
     inject:['eventBus'],
    created(){
        //确定初始选中的标签 字体变色
        if(this.eventBus){
            this.eventBus.$on('update:selected',(name)=>{
            if(name===this.name){
                    this.active = true
                }else{
                    this.active = false
                }
            })
        }

    },
    methods: {
      onClick(){
          if(this.disabled){return}
          //点击标签，向eventBus中心请求切换标签
          this.eventBus && this.eventBus.$emit('update:selected',this.name,this)
      }
    },

}
</script>
<style lang="scss" scoped>
    $active-color:rgba(0,172,181,1);
    $disabled-color:grey;
    .tabs-item{
        flex-shrink: 0;
        padding: 0 1em;
        height: 100%;
        cursor: pointer;
         &.active{
            color:$active-color;
        }
        &.disabled{
            color:$disabled-color;
            cursor:not-allowed
        }
    }
</style>