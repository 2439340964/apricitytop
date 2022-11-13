<template>
    <div class="photo flex-center">
        <!-- 骨架屏 -->
        <div v-if="noenShow" class="none flex-center">
            <el-empty description="稍等一下啦..." />
        </div>

        <!-- 内容 -->
        <div v-else class="content">
            <!-- 轮播 -->
            <el-carousel class="carousel" autoplay :interval="2500" :height="carouselHeight + 'px'" arrow="never">
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
// 轮播图列表
let carouselList = ref([]);
// 轮播图高度
let carouselHeight = ref(260);
let a = reactive([])

onMounted(async () => {
    let res = await PhotoApi();
    if (res.status == 200) {
        noenShow.value = false;
        carouselList.value = res.data.photoList;
        carouselHeight.value = res.data.height;


        a.push(...res.data.photoList)
    }
});

console.log(a);

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
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>