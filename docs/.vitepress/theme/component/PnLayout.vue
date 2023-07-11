<script setup>
import DefaultTheme from 'vitepress/theme'
import PnHome from "./PnHome/index.vue";
import {Content} from "vitepress";

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- 通用插槽   -->
<!--    <template #aside-outline-before>-->
<!--      My custom sidebar top content-->
<!--    </template>-->
<!--    <template #nav-bar-title-before>-->
<!--      nav-bar-title-before-->
<!--    </template>-->
<!--    <template #layout-top>-->
<!--      layout-top-->
<!--    </template>-->
<!--    <template #layout-bottom>-->
<!--      layout-bottom-->
<!--    </template>-->
<!--    <template #nav-bar-title-after>-->
<!--      nav-bar-title-after-->
<!--    </template>-->
<!--    <template #nav-bar-content-before>-->
<!--      nav-bar-content-before-->
<!--    </template>-->
<!--    <template #nav-bar-content-after>-->
<!--      nav-bar-content-after-->
<!--    </template>-->
<!--    <template #nav-screen-content-before>-->
<!--      nav-screen-content-before-->
<!--    </template>-->
<!--    <template #nav-screen-content-after>-->
<!--      nav-screen-content-after111-->
<!--    </template>-->
<!--    &lt;!&ndash;  首页独有  &ndash;&gt;-->
    <template #home-hero-before><PnHome/> </template>
<!--    <template #home-hero-info> home-hero-info </template>-->
<!--    <template #home-hero-image> home-hero-image </template>-->
<!--    <template #home-hero-after> home-hero-after </template>-->
<!--    <template #home-features-before> home-features-before  特性区域1-->
<!--    </template>-->
<!--    <template #home-features-afte> home-features-after 特性区域</template>-->
  </Layout>
</template>

<style scoped>

</style>
