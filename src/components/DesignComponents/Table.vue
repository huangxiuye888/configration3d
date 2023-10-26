<template>
  <div class="box">
    <el-table :data="value.data[value.data.dataType]" border style="width: 100%; height: 100%">
      <el-table-column v-for="item in value.config.dynamicAddTable" :key="item.prop" v-bind="item">
        <template v-if="item.needSlot" #default="{ row, column, $index }">
          <slot :name="item.prop" v-bind="{ row, column, $index }"></slot>
        </template>
      </el-table-column>
    </el-table>
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
