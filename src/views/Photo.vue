<template>
    <div class="photo flex-center">
        <!-- 骨架屏 -->
        <div v-if="noenShow" class="none flex-center">
            <el-empty description="暂无更多..." />
        </div>

        <!-- 内容 -->
        <div v-else class="content">
            <!-- 轮播 -->
            <el-carousel class="carousel" trigger="click" height="250px" indicator-position="outside">
                <el-carousel-item v-for="item in carouselList" :key="item">
                    <img :src="item" alt="">
                </el-carousel-item>
            </el-carousel>

            累了，没了！
        </div>
    </div>
</template>
  
<script setup>
// 栅格隐藏显示css
import "element-plus/theme-chalk/display.css";
// 挂载在全局的变量
import useGetGlobalProperties from "@/utils/hooks.js";
// 解构ref
import { ref, reactive, onMounted } from "vue";
// 请求
import { PhotoApi } from "@/api/Photo.js";

// 控制骨架屏
let noenShow = ref(true);
// 轮播图
let carouselList = ref([]);

let timer = setTimeout(() => {
    noenShow.value = false;
}, 500)

onMounted(async () => {
    let res = await PhotoApi();
    carouselList.value = res.data.photoList;
});
console.log(carouselList,);

// carouselList = [
//     "https://apricityzm.top/apiphoto/upload/9d8089102fa955b0b2d9e0c240285928.jpeg",
//     "https://apricityzm.top/apiphoto/upload/2e097c9c0248a34374174b665398ad08.png",
//     "https://apricityzm.top/apiphoto/upload/6a353b13c40adf468d43b1e45effffdf.jpeg",
//     "http://124.221.2.47:7000/upload/fdf76f2843eef788981f8189db5d28e3.jpeg"
// ]

</script>
  
<style lang="scss" scoped>
.photo {
    .none {
        width: 100%;
        height: 100vh;
    }

    .content {
        width: 100%;

        // 轮播图
        .carousel {
            img {
                width: 100%;
                height: 250px;
                object-fit: cover;
            }
        }
    }
}
</style>