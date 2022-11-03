/**
 * 全局变量每次都需要解构出来每次代码都是一样的，这时候我们可以把它封装成一个hooks
 * 利用这个hooks我们还能扩展一下，比如在里面加入一个vuex中的数据：获取当前系统主题色
*/
import { computed, getCurrentInstance } from 'vue';
// import { useStore } from 'vuex';

export default function useGetGlobalProperties() {
    const { emit, appContext: { app: { config: { globalProperties } } } } = getCurrentInstance()
    // const store = useStore()

    // const curThemeColor = computed(() => store.getters.themeColor)
    const curThemeColor = ''

    return { ...globalProperties, curThemeColor }
}
