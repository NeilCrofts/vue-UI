<template>
    <div class="popover" @click="xxx">
        <div class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'NeilPopover',
    data() {
        return {visible:false}
    },
    methods:{
        xxx(){
            this.visible=!this.visible
        }
    }
}
</script>
<style lang="scss">
    .popover{
        display: inline-block;
        vertical-align: bottom;
        position: relative;
        .content-wrapper{
            position: absolute;
            bottom: 100%;
            left: 0;
            border: 1px solid grey;
            box-shadow: 0 0 5px rgba(0,0,0,0.5);
        }
    }
</style>