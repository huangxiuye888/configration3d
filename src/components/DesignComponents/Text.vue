<template>
  <div class="box">
    {{ value.data[value.data.dataType] }}
  </div>
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'
const props = defineProps({
  value: {
    type: Object,
    default: () => {}
  }
})
const { value } = toRefs(props)
</script>
<style scoped lang="less">
.box {
  width: 100%;
  height: 100%;
}
</style>
