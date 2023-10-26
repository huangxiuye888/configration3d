export const getDomTopLeftById = (id: string) => {
  const dom = document.getElementById(id)
  let top = 0
  let left = 0
  if (dom != null) {
    top = dom.getBoundingClientRect().top
    left = dom.getBoundingClientRect().left
  }
  return { top, left }
}
export const handleDefaultValue = (widgetJson: any) => {
  for (const key in widgetJson) {
    if (key == 'options') {
      // collapse、data、position、setup
      // setup 处理
      for (let i = 0; i < widgetJson.options.setup.length; i++) {
        const item = widgetJson.options.setup[i]
        if (Object.prototype.toString.call(item) == '[object Object]') {
          widgetJson.value.setup[item.name] = item.value
        } else if (Object.prototype.toString.call(item) == '[object Array]') {
          for (let j = 0; j < item.length; j++) {
            const list = item[j].list
            list.forEach((el) => {
              widgetJson.value.setup[el.name] = el.value
            })
          }
        }
      }
      // position
      for (let i = 0; i < widgetJson.options.position.length; i++) {
        const item = widgetJson.options.position[i]
        if (item.value) {
          widgetJson.value.position[item.name] = item.value
        }
      }
      // data 处理
      if (widgetJson.options.data && widgetJson.options.data.length > 0) {
        for (let i = 0; i < widgetJson.options.data.length; i++) {
          const item = widgetJson.options.data[i]
          if (item.value) {
            widgetJson.value.data[item.name] = item.value
          }
        }
      }
    }
  }
  return widgetJson
}
