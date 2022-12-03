<template>
  <div class="none flex-center">
    <div class="">缺UI设计</div>
    <div class="">没头绪还没开发！！请期待...</div>
    <!-- <div class="">{{ soulChickenSoup }}</div> -->
  </div>
</template>

<script setup>
// 解构ref
import { ref, reactive, onMounted } from "vue";
// 解构路由
import { useRouter } from "vue-router";
// 请求
import { NoneApi } from "@/api/None";
// 路由
const router = useRouter();


let soulChickenSoup = ref('')
onMounted(async () => {
  // let res = await NoneApi();
  // soulChickenSoup.value = res
})

</script>

<style lang="scss" scoped>
.none {
  height: 100vh;
  flex-direction: column;
  padding: 0 18px;
  text-indent: 1em;
  text-align: justify;
  line-height: 32px;
}
</style>