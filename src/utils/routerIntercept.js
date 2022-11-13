import router from "../router";
import { ElMessage } from "element-plus";
import { isNavigationFailure } from 'vue-router'

// 要拦截的路由
const interceptList = ['/photo']

router.beforeEach((to, from) => {
    // console.log(failure);

    if (!interceptList.includes(to.path)) {

    } else {
        let userInfo = localStorage.getItem('userInfo')
        if (!userInfo)  {
            // let { token } = JSON.parse(userInfo)
            // console.log(token);
            // if (!token) {
                ElMessage.error('你还没有登录，请先登录');
                // if (!isNavigationFailure(failure)) {
                router.push({
                    name: 'login'
                })
                // }
            // }
        }

    }
})

export default router