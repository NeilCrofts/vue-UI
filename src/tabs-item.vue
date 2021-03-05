<template>
    <div class="tabs-item" @click='xxx' :class="classes">
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
            return {active:this.active}
        }
    },
     inject:['eventBus'],
    created(){
        this.eventBus.$on('update:selected',(name)=>{
           if(name===this.name){
                this.active = true
            }else{
                this.active = false
            }
        })

    },
    methods: {
      xxx(){
          this.eventBus.$emit('update:selected',this.name,this)
      }
    },

}
</script>
<style lang="scss" scoped>
    $active-color:rgba(0,172,181,1);
    .tabs-item{
        flex-shrink: 0;
        padding: 0 1em;
        height: 100%;
        cursor: pointer;
        font-weight: 700;
         &.active{
            // background-color: sandybrown;
            color:$active-color;
        }
    }
</style>