<template>
  <div class="contentWrapper">
    <slot></slot>
  </div>
</template>
<script>
export default {
    name:'NeilContent'
}
</script>
<style lang="scss" scoped>
    .contentWrapper{
        flex-grow: 1;
    }
</style> 