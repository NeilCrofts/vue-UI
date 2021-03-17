<template lang="">
    <div>
        <pre id='pre_action'>
            <code class='code'>
{{startScript}}
            </code>
        </pre>
    </div>
</template>
<script>
export default {
    data(){
        return{
            startScript:`
                import {Button} from 'Neil-vue-ui'
                import Vue from 'vue'

                new Vue({
                el: '#app',
                components: {
                    'g-button':Button
                    }
                })`.replace(/\t+|                /g,'').trim(),
        }
    }
}
</script>
<style lang="scss" scoped>
    #pre_action {
        border-radius: 5px;
        padding: 8px;
        margin: 0;
        background-color: rgba(79, 179, 179, 0.1);
        .code {
            line-height: 1.5;
            color: #000;
            font-size: 15px;
        }
    }
</style>