<template>
  <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
    <template v-for="itemTab in tabs" :key="itemTab.name">
      <el-tab-pane v-if="activeLayer.options[itemTab.name]?.length" :key="itemTab.name" :label="itemTab.label"
                   :name="itemTab.name">
        <el-form :model="form" class="config_form">
          <ul>
            <li class="config_item" v-for="itemConfig in activeLayer.options[itemTab.name]" :key="itemConfig">
              <component :is="myFormItem[itemConfig.type]" :item="itemConfig" :labelWidth="100"
                         @changeValue="changeValue"
              >
              </component>
            </li>
          </ul>
        </el-form>
      </el-tab-pane>
    </template>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import * as myFormItem from './components/MyFormItem'
import * as types from './type'

//defineExpose 用法 ，在使用的组件内
const abc = ref(null)
defineExpose({
  abc
})
/*
* const infoRef=ref<{abc:number,handel:()=>void} | null>(null)
* */
const emits = defineEmits<{
  (e: 'changeLayer', data: number): void
}>()
const changeValue = (val: any) => {
  emits('changeLayer', val)
}

defineProps({
  activeLayer: {}
})

const tabs: types.tabsType[] = [
  {
    label: '配置',
    name: 'config'
  }, {
    label: '数据',
    name: 'data'
  }, {
    label: '坐标',
    name: 'location'
  },
]
const activeName = ref<string>(tabs[0]?.name)
const form = ref('')
let fontColor = ref('red')
const handleClick = () => {
  fontColor.value = 'green'
}

</script>

<style scoped lang="less">
.icon-bt {
  width: 200px;
  color: green;
}

.config_item {
  display: flex;
  white-space: nowrap;
  align-items: center;
  padding: 0 10px;
  margin-top: 10px;
}

:deep(.config_form ) {
  .el-form-item {
    margin-bottom: 8px;
    width: 100%;
  }

  .el-form-item__label {
    justify-content: flex-start;
    //color: v-bind(fontColor)
  }

  .el-form-item__content {
    /*width: 100%;*/
    flex: 1;

    .el-input-number, .el-select {
      width: 100%;
    }
  }
}
</style>
