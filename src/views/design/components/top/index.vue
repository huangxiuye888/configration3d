<template>
  <div class="top_wrap">
    <svg-icon class-name="icon-bt" name="baocun" @click="save"></svg-icon>
    <svg-icon class-name="icon-bt" name="yulan"></svg-icon>
    <svg-icon class-name="icon-bt" name="chexiao"></svg-icon>
    <svg-icon class-name="icon-bt" name="huifu"></svg-icon>
    <svg-icon class-name="icon-bt" name="daoru"></svg-icon>
    <svg-icon class-name="icon-bt" name="daochu"></svg-icon>
  </div>
</template>

<script setup lang="ts">
//保存
const save = () => {
  console.log(11);
}
</script>

<style scoped lang="less">
.top_wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;

  .icon-bt {
    margin: 0 20px;
    cursor: pointer;
  }
}
</style>
