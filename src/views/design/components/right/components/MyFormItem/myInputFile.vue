<template>
  <el-form-item :label="item.label" :label-width="item.labelWidth">
    <el-input v-model="item.value" @input="changValue">
      <template #append>
        <el-upload
          v-model="item.value"
          class="upload-demo"
          action=""
        >
          <el-button type="primary">Click to upload</el-button>
        </el-upload>
      </template>
    </el-input>
  </el-form-item>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  item: {}
})
const emits = defineEmits<{
  (e: 'changeValue', data: any): void
}>()
const changValue = (val: string) => {
  emits('changeValue', props.item)
}
</script>

<style scoped>

</style>
