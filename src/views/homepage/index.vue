<template>
    <div class="wrap">
        <!-- 交互区 -->
        <div class="canvans">
            <div class="vanta_area" ref="Birds"></div>
            <div class="mask flex-center">
                <img class="img" src="../../assets/img/logoFFF.svg" alt="">
                <text class="title">zeMing</text>
            </div>
            <div class="animation" style="display: flex;align-items: center;">
                <div class="flex-column">
                    <h1 class="animation-top">Animation</h1>
                    <text class="animation-bot">Come on. Tell me how to interact</text>
                </div>
            </div>
            <div class="fps">{{ fps || 59 }} fps</div>
        </div>
        <div class="content">
            <!-- 瀑布区 -->
            <div class="sault">
                <div class="sault-title">图片</div>
                <el-row :gutter="20">
                    <el-col v-for="(item, i) in saultList" :key="i" :xs="12" :sm="6" :md="6" :lg="6" :xl="6">
                        <div class="sault-item flex-center">
                            <el-image :src="item" fit="fill" style="width: 100%; height: 100%" />
                        </div>
                    </el-col>
                </el-row>
                <div class="border"></div>
            </div>
            <!-- 文字区 -->
            <div class="textcon">
                <div class="textcon-title">文案</div>
                <el-row :gutter="20">
                    <el-col v-for="(item, i) in textconList" :key="i" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
                        <ul class="textcon-item">
                            <li>{{ item }}</li>
                        </ul>
                    </el-col>
                </el-row>
                <div class="border"></div>
            </div>
            <!-- 底部 -->
            <div class="footcon flex-center">
                <el-row :gutter="20" style="width:100%">
                    <el-col :xs="24" :sm="5" :md="5" :lg="5" :xl="5">
                        <div class="button">zeMing</div>
                    </el-col>
                    <el-col :xs="24" :sm="19" :md="19" :lg="19" :xl="19">
                        <div class="des">
                            <div class="des-dzm">
                                apricityzm.top 是由 zeMing(xiaoxiao) 制作而来！
                            </div>
                            <div class="des-dzm">
                                The apricityzm.top is made by zeMing(xiaoxiao)!
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script setup>
// 栅格隐藏显示css
import "element-plus/theme-chalk/display.css";
//导入vanta.js和three.js，以及ref等hooks
import * as THREE from 'three'
import CLOUDS from 'vanta/src/vanta.birds'
import { onMounted, onBeforeUnmount, ref, reactive } from 'vue'

// 简单查看设备的fps
const times = reactive([])      // 存储当前的时间数组
let fps = ref(null)
const getWinFps = () => {
    window.requestAnimationFrame(() => {
        const now = performance.now();    // 获取更高的精度
        while (times.length > 0 && times[0] <= now - 1000) {
            times.shift();  // 去掉1秒外的时间
        }
        times.push(now);
        fps.value = times.length;
        getWinFps()
    })
}

// canvas的dom
const Birds = ref(null)
// canvas生成的数据
let vanta_new = null

// 绘画three
onMounted(() => {
    vanta_new = CLOUDS({
        el: Birds.value,
        THREE: THREE,
        //如果需要改变样式，要写在这里
        //因为这里vantaEffect是没有setOptions这个方法的
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        separation: 40,     // 分离
        // birdSize: 1      // 鸟的大小
    })
    // 获取当前fps
    getWinFps()
})
// 销毁three
onBeforeUnmount(() => {
    if (vanta_new) {
        vanta_new.destroy()
    }
})


// 瀑布区图片
let saultList = [
    'https://p.qqan.com/up/2022-10/202210191352175198.jpg',
    'https://p.qqan.com/up/2022-11/202211251426581849.png',
    'https://p.qqan.com/up/2022-9/20229201027158459.jpg',
    'https://p.qqan.com/up/2022-11/202211231539343765.png',
    'https://p.qqan.com/up/2022-11/202211221425561826.png',
    'https://p.qqan.com/up/2022-11/202211241731345535.png',
    'https://p.qqan.com/up/2022-12/20221221356517033.jpg',
    'https://p.qqan.com/up/2022-12/20221221342333018.jpg',
    'https://p.qqan.com/up/2022-12/20221211424433786.jpg',
    'https://p.qqan.com/up/2022-11/20221141723481811.jpg',
    'https://p.qqan.com/up/2022-11/2022112113459630.jpg',
    'https://p.qqan.com/up/2022-11/20221111131552237.jpg'
]

// 文案区文案
let textconList = [
    '童年时的一场旅途是不是真的很短暂，距离缩短了，时间拉长了，我们迷失了',
    '认为自己没听说过的事情就不存在于世，这可是无可救药的傲慢啊',
    '我们的相遇是很多年以前就已经注定的命运',
    '努力过后，才知道许多事情，坚持坚持，就过来了',
    '青春只剩一段未完的爱恋，偶而像被风卷起的黄叶，落在心口上像一滴被忍住的泪'
]
</script>

<style lang="scss" scoped>
.wrap {
    width: 100%;
    height: 100vh;

    // 交互区
    .canvans {
        position: relative;
        height: 75%;
        color: #fff;

        .vanta_area {
            width: 100%;
            height: 100%;
        }

        .mask {
            position: absolute;
            z-index: 111;
            top: 20px;
            left: 20px;
            padding: 10px;

            .img {
                width: 1.5em;
            }

            .title {
                padding-left: 6px;
                color: #fff;
            }
        }

        .animation {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 111;
            padding: 60px;
            padding-left: 50px;

            .animation-top {
                font-weight: 400;
                font-size: 72px;
                margin-bottom: 15px;
                letter-spacing: -2px;
            }

            .animation-bot {
                font-size: 1.5em;
            }
        }

        .fps {
            position: absolute;
            top: auto;
            bottom: 10px;
            left: 10px;
            opacity: 0.4;
            font-size: 12px;
        }
    }

    .content {
        max-width: 1200px;
        margin: 0 auto;
        overflow: hidden;

        // 瀑布区
        .sault {
            padding: 50px;
            box-sizing: border-box;

            .sault-title {
                font-size: 24px;
                font-weight: 400;
                margin-bottom: 16px;
            }

            .sault-item {
                margin-bottom: 20px;
                height: 162px;
                max-height: 162px;
                border-radius: 8px;
                overflow: hidden;

                :deep(.el-image) {
                    width: 100%;
                    height: 100%;
                    transition: all 0.5s;
                    border-radius: 8px;

                    .el-image__inner {
                        border-radius: 8px;
                    }
                }

                .el-image:hover {
                    transform: scale(1.1);
                }
            }
        }

        // 文字区
        .textcon {
            padding: 50px;
            padding-top: 0;
            box-sizing: border-box;

            .textcon-title {
                font-size: 24px;
                font-weight: 400;
                margin-bottom: 16px;
            }

            .textcon-item {
                margin-left: 1.5em;
                margin-bottom: 8px;
                list-style: disc;
                color: #568;
                line-height: 1.4;
            }
        }

        // 底部区
        .footcon {
            padding: 50px;
            padding-top: 0;
            box-sizing: border-box;

            .button {
                // width: 20%;
                margin-left: 1.25%;
                margin-right: 1.25%;
                text-align: center;
                color: #fff;
                font-size: 1.5em;
                // margin-bottom: 20px;
                background: #6a479e;
                border-radius: 100px;
                padding: 30px 20px;
                transition: all 0.1s;
                cursor: pointer;
                flex-shrink: 0;
            }

            .des {
                height: 100%;
                display: flex;
                justify-content: center;
                flex-direction: column;
                flex-grow: 1;
                font-size: 1.25em;
                color: #2b2928;
                vertical-align: middle;

                .des-dzm {
                    margin-top: 12px;
                }

                .el-link {
                    font-size: 1.25em;
                    color: #2b2928;
                }
            }
        }

        @media (max-width: 727px) {

            .sault,
            .textcon,
            .footcon {
                padding: 30px 15px;
            }
        }

        .border {
            padding-top: 20px;
            border-bottom: 1px solid rgba(85, 102, 136, 0.251);
        }
    }
}
</style>