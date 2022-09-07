<template>
    <!-- 内容 -->
    <div class="wraps">
        <!-- logo -->
        <div class="header">
            <el-row :gutter="10">
                <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                    <!-- 手机屏 -->
                    <div class="logo-a flex flex-left hidden-sm-and-up">
                        <img src="@/assets/img/logo.png" alt="" class="logoimg">
                        <div class="authorName">xiaoxiao</div>
                    </div>
                    <!-- 大屏 -->
                    <div class="logo-b flex flex-left hidden-xs-only">
                        <img src="@/assets/img/logo.png" alt="" class="logoimg">
                        <div class="authorName">xiaoxiao</div>
                    </div>
                </el-col>
                <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
                    <!-- 手机屏 -->
                    <div @click="menuDrawer = true" class="menuHide-a flex flex-right hidden-sm-and-up">
                        <el-icon :size="24">
                            <MoreFilled />
                        </el-icon>
                    </div>
                    <!-- 大屏 -->
                    <div class="menuHide-b flex flex-right hidden-xs-only">
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                            @select="handleSelect" :ellipsis="false" background-color="transparent"
                            active-text-color="#70C000" text-color="#fff">
                            <el-menu-item index="1">首页</el-menu-item>
                            <el-menu-item index="2">关于</el-menu-item>
                            <el-menu-item index="3">作品</el-menu-item>
                            <el-menu-item index="4">日志</el-menu-item>
                            <el-menu-item index="5">相册</el-menu-item>
                        </el-menu>
                    </div>
                </el-col>

            </el-row>
        </div>


        <div class="content flex flex-center">
            <div>hello! ☀</div>
            My name is zeMing
        </div>

    </div>


    <!-- 三点隐藏菜单 -->
    <div class="menuDrawer">
        <el-drawer v-model="menuDrawer" :with-header="false" size="60%">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical" @select="handleSelect"
                :ellipsis="false" active-text-color="#70C000">
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">关于</el-menu-item>
                <el-menu-item index="3">作品</el-menu-item>
                <el-menu-item index="4">日志</el-menu-item>
                <el-menu-item index="5">相册</el-menu-item>
            </el-menu>
        </el-drawer>
    </div>

    <!-- 底部导航 -->
    <el-row>
        <el-col :span="24">
            <div class="foot-bot">
                © 2022 Copyrights reserved
                <a href="https://beian.miit.gov.cn" target="_blank">陕ICP备2022010215号</a>
                版权所有：xiaoxiao <br>
            </div>
        </el-col>
    </el-row>
</template>

<script setup>
// 栅格隐藏显示css
import 'element-plus/theme-chalk/display.css'

import { ref } from 'vue'

// 导航菜单
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}

// 小屏点击三个点
const menuDrawer = ref(false);

</script>

<style>
body {
    background: url("@/assets/img/laohu.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    color: #fff;
}
</style>
<style lang="scss" scoped>
.wraps {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    // overflow: hidden;

    // 顶部logo
    .header {
        width: 100%;
        padding-top: 24px;
        box-sizing: border-box;
        overflow: hidden;

        .logoimg {
            width: 50px;
            border-radius: 16px;
            margin-right: 16px;
        }

        .authorName {
            font-size: 24px;
        }

        .logo-a {
            padding-left: 24px;
        }

        .logo-b {
            padding-left: 100px;
        }

        .menuHide-a {
            height: 100%;
            padding-right: 24px;
        }

        .menuHide-b {
            height: 100%;
            padding-right: 100px;

            .el-menu--horizontal {
                border: none;
            }

            .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
                background-color: transparent !important;
                border-bottom: 2px solid #70C000 !important;
            }
        }
    }

    .content {
        height: 500px;
        font-size: 36px;
        flex-direction: column;
        text-shadow: 0 0 10px #000;
    }
}

// 三点隐藏菜单
.menuDrawer {
    .el-menu {
        border: none;
    }
}

.foot-bot {
    box-sizing: content-box;
    outline: 0;
    background: #282828;
    padding: 20px 0;
    line-height: 20px;
    font-size: 12px;
    color: #ffffff4d;
    text-align: center;

    a {
        color: #ffffff4d;
    }

    a:hover {
        color: #fff
    }
}
</style>