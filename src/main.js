import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 挂载
// createApp(App).use(router).use(ElementPlus).mount('#app')

const app = createApp(App)
// element icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router).use(ElementPlus).mount('#app')

// 全局挂载的判断设备类型的变量
const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) ? true : false;
app.config.globalProperties.$equipment = flag;
// 全局挂载的获取屏幕高度的方法
app.config.globalProperties.$getViewHight = function () {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,//兼容性获取屏幕宽度
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight//兼容性获取屏幕高度
    };
}


// 打印语句
console.log("@2022 zeMing Du", "\n", "\n", "https://apricityzm.top", "\n", "\n", "xiaoxiao 的个人网站");