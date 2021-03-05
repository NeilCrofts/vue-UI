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
          this.eventBus.$emit('update:selected',this.name)
      }
    },

}
</script>
<style lang="scss" scoped>
    .tabs-item{
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
         &.active{
            background-color: sandybrown;
        }
    }
</style>