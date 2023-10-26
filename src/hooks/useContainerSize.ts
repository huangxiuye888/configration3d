import { ref, onMounted } from 'vue'
export const useContainerSize = () => {
  const x = ref(0)
  const y = ref(0)
  const getContainer = () => {
    x.value = document.body.scrollWidth - 400
    y.value = document.body.scrollHeight - 50
  }
  onMounted(() => {
    getContainer()
    window.addEventListener('resize', getContainer)
  })
  return { x, y }
}
