// 引入pinia
import { createPinia } from 'pinia'
// 引入持久化
import piniaPluginPersist from 'pinia-plugin-persist'
const store = createPinia()
// 挂载
store.use(piniaPluginPersist)



export default store
