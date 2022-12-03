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
        <!-- 瀑布区 -->
        <div class="sault">
            <div class="sault-title"></div>
        </div>
    </div>
</template>

<script setup>
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

    // 瀑布区
    .sault {
        max-width: 1200px;
        margin: 0 auto;
        padding: 50px;
        box-sizing: border-box;
    }

    @media (max-width: 727px) {
        .sault{
            padding: 30px 15px;
        }
    }
}
</style>