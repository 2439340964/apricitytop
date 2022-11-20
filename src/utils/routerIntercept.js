import router from "../router";
import { ElMessage } from "element-plus";
import { isNavigationFailure } from 'vue-router'

// 要拦截的路由
const interceptList = ['photo']
// 判断设备类型
const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) ? true : false;

router.beforeEach((to, from) => {
    // console.log(failure);

    if (!interceptList.includes(to.name)) {

    } else {
        if (!flag) {
            router.push({
                name: 'home'
            })

            ElMessage.error('抱歉！非移动设备禁止进入');
            return;
        }

        let userInfo = localStorage.getItem('userInfo')
        if (!userInfo) {
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