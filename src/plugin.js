import Toast from './toast'

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function(message, toastOptions) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                //就传toastOptions对象 传给toast.vue组件的props
                propsData: toastOptions
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}