<template>
  <svg :class="svgClass">
    <use :href="iconName"></use>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  name: string
  className: string
}>()
const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => {
  if (props.className) return `svg-icon ${props.className}`
  return 'svg-icon'
})
</script>

<style scoped>
.svg-icon {
  width: 2em;
  height: 2em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
