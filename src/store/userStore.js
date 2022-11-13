import { defineStore } from 'pinia'

export const userStore = defineStore({
    id: 'user',
    state: () => {
        return {
            token: ""
        }
    },
    getters: {

    },
    actions: {

    },
    // 开启数据缓存
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'userInfo',
                storage: localStorage,
            }
        ]
    }
})
