<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button icon="setting">默认按钮</g-button>
        <g-button icon="setting" iconPosition="right">默认按钮</g-button>
        <g-button :is-loading='true'>加载中</g-button>
        <g-button disabled>禁用按钮</g-button>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
import Button from '../../../src/button.vue'
export default {
    components:{
        'g-button':Button,
    },
    data() {
            return {
                content:`<g-button>默认按钮</g-button>
                <g-button icon="setting">默认按钮</g-button>
                <g-button icon="setting" iconPosition="right">默认按钮</g-button>
                <g-button :is-loading='true'>加载中</g-button>
                <g-button disabled>禁用按钮</g-button>`.replace(/\t+| +/g,'').trim()
            }
        },
}
</script>
