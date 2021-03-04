import Toast from './toast'

let currentToast
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function(message, toastOptions) {
            if (currentToast) {
                currentToast.close() //toast关闭了，但实例对象toast还存在
            }
            currentToast = createToast({
                Vue,
                message,
                propsData: toastOptions,
                onClose: () => {
                    currentToast = null
                }
            })
        }
    }
}


function createToast({ Vue, message, propsData, onClose }) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({ propsData })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close', onClose) //创建close方法，toast.vue用$emit('close')调用
    document.body.appendChild(toast.$el)
    return toast
}