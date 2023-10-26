import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { SketchRule } from 'vue3-sketch-ruler'
import 'vue3-sketch-ruler/lib/style.css'
import SvgIcon from './components/SvgIcon/index.vue'
import 'virtual:svg-icons-register'
import Vue3DraggableResizable from 'vue3-draggable-resizable'
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'

const app = createApp(App)
app
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(Vue3DraggableResizable)
  .component('svg-icon', SvgIcon)
  .component('SketchRule', SketchRule)
  .mount('#app')
