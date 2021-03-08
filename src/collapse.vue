<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'NeilCollapse',
    
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