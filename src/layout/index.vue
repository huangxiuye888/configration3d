<template>
  <el-container class="layout-container-demo" style="height: 100vh">
    <Menu />
    <el-container class="container-main">
      <Header />
      <Main>
        <router-view></router-view>
      </Main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Menu from './components/menu.vue'
import Header from './components/header.vue'
import Main from './components/main.vue'
</script>

<style scoped>
.container-main {
  display: flex;
  flex-direction: column;
}
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
</style>
