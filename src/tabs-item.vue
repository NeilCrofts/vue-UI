<template>
    <div class="tabs-item">
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
      }
    }
}
</script>
<style lang="scss">
    
</style>