<template>
    <div class="tabs-item" @click='xxx'>
         <slot></slot>
    </div>
</template>
<script>
export default {
    name:'NeilTabsItem',
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
     inject:['eventBus'],
    created(){
        // console.log('爷爷给孙子的 eventBus');
        // console.log(this.eventBus);
        this.eventBus.$on('update:selected',(name)=>{
            console.log(name);
        })

    },
    methods: {
      xxx(){
          this.eventBus.$emit('update:selected',this.name)
      }
    },

}
</script>
<style lang="scss">
    
</style>