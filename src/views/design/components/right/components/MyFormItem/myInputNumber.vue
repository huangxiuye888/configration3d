<template>
  <el-form-item :label="item.label" :label-width="item.labelWidth">
    <el-input-number v-model="value" min="0" @change="changValue"/>
  </el-form-item>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  item:{}
})
const value = ref('')
const changValue = () => {

}
</script>

<style scoped>

</style>
