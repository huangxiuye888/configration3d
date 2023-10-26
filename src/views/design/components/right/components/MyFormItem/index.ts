import { defineAsyncComponent } from 'vue'
import input from './myInput.vue'
import inputNumber from './myInputNumber.vue'
import select from './mySelect.vue'
import colorPicker from './myColorPicker.vue'
import inputTextarea from './myInputTextarea.vue'
import inputFile from './myInputFile.vue'

export {
  input,
  inputNumber,
  select,
  colorPicker,
  inputTextarea,
  inputFile
}

/*export default {
  input: defineAsyncComponent(() =>
    import('./input.vue'),
  ),
  inputNumber: defineAsyncComponent(() =>
    import('./inputNumber.vue'),
  ),
  select: defineAsyncComponent(() =>
    import('./select.vue'),
  ),
  colorPicker: defineAsyncComponent(() =>
    import('./colorPicker.vue'),
  ),
}*/


