<template><img :src="homesrc" alt="" class="homeimg" /></template>
<script lang="ts" setup>
import { ref } from 'vue'
import homephoto from '@/assets/img/home.png'
const homesrc = ref(homephoto)
</script>
<style scoped lang="less"></style>
