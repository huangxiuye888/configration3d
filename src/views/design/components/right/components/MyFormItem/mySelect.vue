<template>
  <el-form-item :label="item.label" :label-width="item.labelWidth">
    <el-select v-model="value" placeholder="" @change="changValue">
      <el-option v-for="option in selectOptions" :label="option.name" :value="option.value"/>
    </el-select>
  </el-form-item>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  item:{}
})
const selectOptions=props.item?.selectOptions
const value = ref('')
const changValue = () => {

}
</script>

<style scoped>

</style>
