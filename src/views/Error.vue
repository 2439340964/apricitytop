<template>
    <div class="error flex-center">
        <div class="title">
            糟糕！访问丢失~
        </div>
        <div class="flex-center">
            <img class="img" src="../assets/img/errorIcon.svg" alt="">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.error {
    width: 100%;
    height: 100vh;
    flex-direction: column;

    .title {
        font-size: 24px;
    }

    .img {
        width: 100%;
        max-width: 350px;
    }
}
</style>