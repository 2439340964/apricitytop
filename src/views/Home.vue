<template>
    <div class="zeMing">
        <!-- body 背景 -->
        <div class="bodyBg"></div>

        <!-- 内容 -->
        <div class="wraps">
            <!-- logo -->
            <div class="header">
                <el-row :gutter="10" style="align-items: center">
                    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
                        <!-- 手机屏 -->
                        <div class="logo-a flex flex-left hidden-sm-and-up">
                            <img @click="linkHome" src="@/assets/img/logo.png" alt="" class="logoimg" />
                            <div class="authorName">xiaoxiao</div>
                        </div>
                        <!-- 大屏 -->
                        <div class="logo-b flex flex-left hidden-xs-only">
                            <img @click="linkHome" src="@/assets/img/logo.png" alt="" class="logoimg" />
                            <div class="authorName">xiaoxiao</div>
                        </div>
                    </el-col>
                    <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
                        <!-- 手机屏 -->
                        <div class="menuHide-a flex flex-right hidden-sm-and-up">
                            <el-dropdown @command="commandMenuHide" trigger="click">
                                <span class="el-dropdown-link">
                                    <!-- @click="menuDrawer = true" -->
                                    <el-icon :size="24">
                                        <MoreFilled />
                                    </el-icon>
                                </span>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item :command="0">首页</el-dropdown-item>
                                        <el-dropdown-item :command="1">关于</el-dropdown-item>
                                        <el-dropdown-item :command="2">作品</el-dropdown-item>
                                        <el-dropdown-item :command="3">日志</el-dropdown-item>
                                        <el-dropdown-item :command="4" divided>相册</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                        <!-- 大屏 -->
                        <div class="menuHide-b flex flex-right hidden-xs-only">
                            <el-menu :default-active="activeIndex" class="el-menu-demo" router mode="horizontal"
                                @select="handleSelect" :ellipsis="false" background-color="transparent"
                                active-text-color="#70C000" text-color="#fff">
                                <el-menu-item index="/homepage">首页</el-menu-item>
                                <el-menu-item index="/none">关于</el-menu-item>
                                <el-menu-item index="/none">作品</el-menu-item>
                                <el-menu-item index="/none">日志</el-menu-item>
                                <el-menu-item index="/none">相册</el-menu-item>
                            </el-menu>
                        </div>
                    </el-col>
                </el-row>
            </div>

            <div class="content flex flex-center">
                <div>{{ titleDes.title[0] }}</div>
                {{ titleDes.title[1] }}
            </div>
        </div>

        <!-- 三点隐藏菜单 -->
        <div class="menuDrawer">
            <!-- <el-drawer v-model="menuDrawer" :with-header="false" size="60%">
                <el-menu :default-active="activeIndex" class="el-menu-demo" router mode="vertical"
                    @select="handleSelect" :ellipsis="false" active-text-color="#70C000">
                    <el-menu-item index="/photo">首页</el-menu-item>
                    <el-menu-item index="/photo">关于</el-menu-item>
                    <el-menu-item index="/photo">作品</el-menu-item>
                    <el-menu-item index="/photo">日志</el-menu-item>
                    <el-menu-item index="/photo">相册</el-menu-item>
                </el-menu>
            </el-drawer> -->
        </div>

        <!-- 底部导航 -->
        <el-row>
            <el-col :span="24">
                <div class="foot-bot flex-center">
                    © 2022 Copyrights reserved
                    <el-link href="https://beian.miit.gov.cn" :underline="false" target="_blank">
                        &nbsp;陕ICP备2022010215号&nbsp;
                    </el-link>
                    版权所有：xiaoxiao <br />
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
// 栅格隐藏显示css
import "element-plus/theme-chalk/display.css";
// 挂载在全局的变量
import useGetGlobalProperties from "@/utils/hooks.js";
// 解构ref
import { ref, reactive, onMounted } from "vue";
// 解构路由
import { useRouter } from "vue-router";
// 请求
import { HomeApi } from "@/api/Home";
// 路由
const router = useRouter();
// 设备类型
const equipment = ref(useGetGlobalProperties().$equipment)


// body 背景
const bodyBg = ref("@/assets/img/laohu.jpg");

// 点击导航菜单
const activeIndex = ref("1");
const handleSelect = (key, keyPath) => {
    // console.log(key, keyPath)
};

// 小屏点击三个点进行显示
const menuDrawer = ref(false);

// 点击隐藏三个点的列表跳转
const commandMenuHide = (data) => {
    let a = ["homepage", "none", "none", "feelings", "photo"];
    if (!a[data]) return;
    router.push({
        name: a[data],
    });
};

// 点击logo跳转主页
const linkHome = () => {
    router.push({
        name: "home",
    });
};

// 首页加载动态数据显示
let titleDes = reactive({
    title: []
});
onMounted(async () => {
    let res = await HomeApi();
    titleDes.title = reactive(res.data.title);
});


</script>

<style lang="scss" scoped>
.zeMing {
    position: relative;
    color: #fff;
    overflow: hidden;

    .bodyBg {
        position: absolute;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background: url("@/assets/img/laohu.jpg") no-repeat;
        background-size: cover;
        background-position: center;
        z-index: -1;
    }

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

                .el-dropdown-link {
                    cursor: pointer;
                    display: flex;
                    align-items: center;

                    .el-icon {
                        color: #fff;
                    }
                }
            }

            .menuHide-b {
                height: 100%;
                padding-right: 100px;

                .el-menu--horizontal {
                    border: none;
                }

                .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
                    background-color: transparent !important;
                    border-bottom: 2px solid #70c000 !important;
                }

                .el-menu-item {
                    --el-menu-hover-bg-color: rgba(0, 0, 0, 0);
                }
            }
        }

        // 内容
        .content {
            height: calc(100% - 74px);
            font-size: 36px;
            flex-direction: column;
            // text-shadow: 0 0 10px #000;
        }
    }

    // 三点隐藏菜单
    .menuDrawer {
        .el-menu {
            border: none;
        }

        .el-drawer__body {
            background-color: #fff;

            .el-menu .el-menu-item:hover {
                background-color: #fff;
            }

            .el-menu-item {
                --el-menu-hover-bg-color: rgba(0, 0, 0, 0);
            }
        }
    }

    // 页尾脚部
    .foot-bot {
        box-sizing: content-box;
        outline: 0;
        background: #282828;
        padding: 20px 0;
        line-height: 20px;
        font-size: 12px;
        color: #ffffff4d;
        text-align: center;
        flex-wrap: wrap;

        a {
            color: #ffffff4d;
        }

        a:hover {
            color: #fff;
        }

        .el-link {
            font-size: 12px !important;
        }
    }
}
</style>