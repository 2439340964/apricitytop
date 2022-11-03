<template>
    <div class="content">
        <el-skeleton :rows="5" animated ref="skeleton" />
        <el-skeleton v-for="i in skeletonNum" :key="i" :rows="5" animated />
    </div>
</template>

<script setup>
// 解构ref
import { ref, reactive, nextTick, onMounted } from "vue";
// 挂载在全局的变量
import useGetGlobalProperties from "@/utils/hooks.js";


// 获取屏幕高度计算出骨架屏数量
const viewHight = reactive(useGetGlobalProperties().$getViewHight());
const skeleton = ref(null);

let skeletonNum = ref(0);
// nextTick(() => {
//     skeletonNum.value.num = ref(Math.floor(viewHight.height / skeleton.value.$el.offsetHeight))
//     // console.log(skeletonNum);
// })

onMounted(() => {
    skeletonNum.value = Math.floor(viewHight.height / skeleton.value.$el.offsetHeight) - 1
})


</script>

<style lang="scss" scoped>
.content {
    padding: 16px;

    .el-skeleton {
        margin-top: 32px;
    }
    .el-skeleton:nth-child(1){
        margin-top: 0px;
    }
}
</style>