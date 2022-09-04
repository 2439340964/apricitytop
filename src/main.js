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