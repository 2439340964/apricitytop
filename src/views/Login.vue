<template>
    <div class="login flex-center">
        <div class="content">
            <div class="welcome-title">
                欢迎来到我的空间
                <div class="title-des">赶快登陆发现新大陆吧</div>
            </div>
            <div class="user">
                <div class="name">
                    <div class="name-top user-top">用户名</div>
                    <el-input v-model="userInfo.name" class="userinput" placeholder="请输入用户名" />
                </div>
                <div class="pass">
                    <div class="pass-top user-top">密码</div>
                    <el-input v-model="userInfo.pass" show-password class="userinput" type="password"
                        placeholder="请输入密码" @change="loginClick"/>
                </div>
                <div class="loginbtn">
                    <el-button @click="loginClick" :loading="btnLoading" round color="#626aef">登录</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// 通知组件
import { ElMessage } from 'element-plus'
// 解构ref
import { ref, reactive, onMounted } from "vue";
// 解构路由
import { useRouter } from "vue-router";
// 请求
import { LoginApi } from "@/api/Login.js";
// 导入store
import { userStore } from "../store/userStore"
import { storeToRefs } from "pinia"
// 路由
const router = useRouter();
// store
const store = userStore();
let { token } = storeToRefs(store)

// 用户输入的表单信息
let userInfo = reactive({
    name: '',
    pass: ''
})
// 确定按钮的loading状态
let btnLoading = ref(false)

const loginClick = async () => {
    btnLoading.value = true;

    if (userInfo.name == '' || userInfo.pass == '') {
        let message = '';
        let messageType = {
            name: "请输入有效账号",
            pass: "请输入有效密码"
        }
        message = userInfo.name == '' ? messageType.name : messageType.pass

        ElMessage({
            message,
            type: 'warning',
            center: true,
        })

        btnLoading.value = false
        return;
    }

    let res = await LoginApi(userInfo)
    res ? btnLoading.value = false : btnLoading.value = true;

    if (res.status == 200) {
        store.token = res.data.token

        router.push({
            name: 'photo',
            replace: true
        })
    }

    if (res.status == 400) {
        ElMessage({
            message: '这是一个错误的账号或密码',
            type: 'error',
            center: true,
        })
    }

}

</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100vh;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 0 30px;

    .content {
        flex-grow: 1;

        .welcome-title {
            font-size: 32px;
            margin-bottom: 86px;

            .title-des {
                font-size: 16px;
                color: #a1a1a1;
                margin-top: 4px;
            }
        }

        .user {
            .user-top {
                font-size: 24px;
                margin-bottom: 8px;
            }

            .userinput {
                :deep(.el-input__wrapper) {
                    box-shadow: none;
                    border-bottom: 1px solid #a9a9a9;
                    border-radius: 0;
                    height: 40px;
                    font-size: 20px;
                    padding-left: 0;

                    .el-input__password {
                        font-size: 24px;
                    }
                }
            }

            .name {
                margin-bottom: 24px;
            }

            .pass {
                margin-bottom: 110px;
            }

            .loginbtn {
                border-radius: 50px;
                overflow: hidden;

                .el-button {
                    width: 100%;
                    height: 50px;
                    font-size: 20px;
                }
            }
        }
    }
}
</style>