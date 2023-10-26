<template>
  <Vue3DraggableResizable
    :initW="value.position.width"
    :initH="value.position.height"
    v-model:x="value.position.left"
    v-model:y="value.position.top"
    v-model:w="value.position.width"
    v-model:h="value.position.height"
    v-model:active="active"
    :draggable="true"
    :resizable="true"
    @activated="selectedLayer"
    @deactivated="print('deactivated')"
    @drag-start="print('drag-start')"
    @resize-start="print('resize-start')"
    @dragging="print('dragging')"
    @resizing="print('resizing')"
    @drag-end="print('drag-end')"
    @resize-end="print('resize-end')"
  >
    <component :is="comss[type]" :value="value"/>
  </Vue3DraggableResizable>
</template>
<script lang="ts" setup>
import { toRefs, ref } from 'vue'
import * as coms from '@/components/DesignComponents/index'

const comss = ref<{ [key: string]: any }>(coms)

interface comstype {
  type: string
  value: any
}

const props: comstype = defineProps({
  type: {
    type: String,
    default: ''
  },
  value: {
    type: Object,
    default: () => {}
  }
})
const active = ref(false)
const print = (val: any) => {
  // console.log(val)
}
const {type, } = toRefs(props)
const item= props.value
const value= props.value.value

const emits = defineEmits<{
  (e: 'activeLayer', data: any): void //事件名getData、 参数count
}>()

const selectedLayer = () => {
  emits('activeLayer',item)
}
</script>
