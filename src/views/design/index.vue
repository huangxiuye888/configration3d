<template>
  <div class="layout">
    <div class="layout-left">
      <el-tabs type="card" :stretch="true">
        <el-tab-pane label="工具栏">
          <el-tabs tab-position="left" class="demo-tabs">
            <el-tab-pane v-for="(item, index) in widgetTools" :key="index" :label="item.name">
              <li
                v-for="(it, key) in item.list"
                :key="key"
                draggable="true"
                @dragstart="dragStart(it.type)"
                @dragend="dragEnd()"
              >
                <div class="tools-item">
                  <span class="tools-item-icon">
                    <svg-icon class-name="icon-bt" name="aaa"></svg-icon>
                  </span>
                  <span class="tools-item-title">{{ it.label }}</span>
                </div>
              </li>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane class="layout-left-label" label="图层">
          <li v-for="(it, key) in list" :key="key">
            <div class="tools-item">
              <span class="tools-item-icon">
                <svg-icon class-name="icon-bt" name="aaa"></svg-icon>
              </span>
              <span class="tools-item-title">{{ it.label }}</span>
            </div>
          </li>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="layout-center">
      <div class="layout-center-top">
        <Top></Top>
      </div>
      <div class="layout-center-context">
        <div class="card">
          <SketchRule :thick="20" :scale="2" :width="x" :height="y" :startX="0" :startY="0">
          </SketchRule>
          <div
            id="workbench"
            class="card-context"
            @drop="widgetOnDragged($event)"
            @dragover="dragOver($event)"
          >
            <widget
              v-for="(item, index) in widgets"
              :key="index"
              :value="item"
              :type="item.type"
              @activeLayer="changeActiveLayer"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="layout-right">
      <Right :activeLayer="activeLayer" @changeLayer="changeLayer"></Right>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, toRefs } from 'vue'
import { useContainerSize } from '@/hooks/useContainerSize'
import { getDomTopLeftById, handleDefaultValue } from '@/utils/common'
import widget from './components/widget.vue'
import Right from './components/right/index.vue'
import Top from './components/top/index.vue'
const state = reactive({
  widgetTools: [
    {
      name: '文本栏',
      list: [
        {type: 'Text', icon: '', label: '文本'},
        {type: 'Atext', icon: '', label: '超链接'},
        {type: 'Table', icon: '', label: '表格'},
        {type: 'Time', icon: '', label: '当前时间'}
      ]
    },
    {
      name: '文本栏',
      list: [
        {type: 'Text', icon: '', label: '文本'},
        {type: 'Atext', icon: '', label: '超链接'},
        {type: 'Table', icon: '', label: '表格'},
        {type: 'Time', icon: '', label: '当前时间'}
      ]
    },
    {
      name: '文本栏',
      list: [
        {type: 'Text', icon: '', label: '文本'},
        {type: 'Atext', icon: '', label: '超链接'},
        {type: 'Table', icon: '', label: '表格'},
        {type: 'Time', icon: '', label: '当前时间'}
      ]
    },
    {
      name: '文本栏',
      list: [
        {type: 'Text', icon: '', label: '文本'},
        {type: 'Atext', icon: '', label: '超链接'},
        {type: 'Table', icon: '', label: '表格'},
        {type: 'Time', icon: '', label: '当前时间'}
      ]
    },
    {
      name: '文本栏',
      list: [
        {type: 'Text', icon: '', label: '文本'},
        {type: 'Atext', icon: '', label: '超链接'},
        {type: 'Table', icon: '', label: '表格'},
        {type: 'Time', icon: '', label: '当前时间'}
      ]
    }
  ],
  list: [
    {type: 'Text', icon: '', label: '文本'},
    {type: 'Text', icon: '', label: '超链接'},
    {type: 'Table', icon: '', label: '表格'},
    {type: 'Text', icon: '', label: '当前时间'}
  ],
  //是否需要数据
  widgets: [
    {
      id: 0,
      type: '',
      value: {
        config: {
          dynamicAddTable: [
            {prop: 'date', label: '日期', width: 200},
            {prop: 'name', label: '姓名', width: 200},
            {prop: 'address', label: '地址', width: 200}
          ]
        },
        position: {top: 130, left: 150, width: 600, height: 200},
        data: {
          dataType: 'staticData',
          dynamicData: '',
          refreshTime: 30000,
          staticData: [
            {
              date: '2016-05-03',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            },
            {
              date: '2016-05-02',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            },
            {
              date: '2016-05-04',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            },
            {
              date: '2016-05-01',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }
          ]
        }
      },
      options: {
        config: [
          {
            type: 'inputNumber',
            label: '大屏宽度',
            name: 'layerName',
            required: false,
            placeholder: '',
            value: '表格'
          },
          {
            type: 'inputNumber',
            label: '大屏高度',
            name: 'layerName',
            required: false,
            placeholder: '',
            value: '表格'
          },
          {
            type: 'input',
            label: '标题',
            name: 'layerName',
            required: false,
            placeholder: '',
            value: '表格'
          },
          {
            type: 'inputTextarea',
            label: '大屏简介',
            name: 'layerName',
            required: false,
            placeholder: '',
            value: '表格'
          },
          {
            type: 'colorPicker',
            label: '背景颜色',
            name: 'layerName',
            required: false,
            placeholder: '',
            value: '表格'
          },
          {
            type: 'inputFile',
            label: '图片地址',
            name: 'layerName',
            required: false,
            placeholder: '',
            value: '表格'
          }
        ]
      }
    },
    {
      id: 1,
      type: 'Text',
      value: {
        config: {},
        position: {top: 30, left: 50, width: 100, height: 30},
        data: {
          dataType: 'staticData',
          dynamicData: '',
          refreshTime: 30000,
          staticData: '我是测试文字'
        }
      },
      options: {
        data: [
          {
            type: 'el-radio-group',
            label: '数据类型',
            name: 'dataType',
            require: false,
            placeholder: '',
            selectValue: true,
            selectOptions: [
              {
                code: 'staticData',
                name: '静态数据'
              },
              {
                code: 'dynamicData',
                name: '动态数据'
              }
            ],
            value: 'staticData'
          },
          {
            type: 'inputNumber',
            label: '刷新时间(毫秒)',
            name: 'refreshTime',
            relactiveDom: 'dataType',
            relactiveDomValue: 'dynamicData',
            value: 5000
          },
          {
            type: 'el-button',
            label: '静态数据',
            name: 'staticData',
            required: false,
            placeholder: '',
            relactiveDom: 'dataType',
            relactiveDomValue: 'staticData',
            value: '文本框'
          },
          {
            type: 'dycustComponents',
            label: '',
            name: 'dynamicData',
            required: false,
            placeholder: '',
            relactiveDom: 'dataType',
            relactiveDomValue: 'dynamicData',
            chartType: 'widget-text',
            dictKey: 'TEXT_PROPERTIES',
            value: ''
          }
        ],
        position: [
          {
            label: '左边距',
            name: 'left',
            placeholder: '',
            required: false,
            type: 'inputNumber',
            value: 1427.5
          },
          {
            label: '上边距',
            name: 'top',
            placeholder: '',
            required: false,
            type: 'inputNumber',
            value: 1427.5
          },
          {
            label: '宽度',
            name: 'width',
            placeholder: '',
            required: false,
            type: 'inputNumber',
            value: 1427.5
          },
          {
            label: '高度',
            name: 'height',
            placeholder: '',
            required: false,
            type: 'inputNumber',
            value: 1427.5
          }
        ],
        config: [
          {
            type: 'input',
            label: '图层名称',
            name: 'layerName',
            required: false,
            placeholder: '',
            value: '文本框'
          },
          {
            type: 'input',
            label: '文本内容',
            name: 'text',
            required: false,
            placeholder: '',
            value: '文本框'
          },
          {
            type: 'inputNumber',
            label: '字体字号',
            name: 'fontSize',
            required: false,
            placeholder: '',
            value: '26'
          },
          {
            type: 'colorPicker',
            label: '字体颜色',
            name: 'color',
            required: false,
            placeholder: '',
            value: '#FAD400'
          },
          {
            type: 'inputNumber',
            label: '字体间距',
            name: 'letterSpacing',
            required: false,
            placeholder: '',
            value: '0'
          },
          {
            type: 'colorPicker',
            label: '字体背景',
            name: 'background',
            required: false,
            placeholder: '',
            value: 'rgba(115,170,229,.0)'
          },
          {
            type: 'select',
            label: '文字粗细',
            name: 'fontWeight',
            required: false,
            placeholder: '',
            selectOptions: [
              {code: 'normal', name: '正常'},
              {code: 'bold', name: '粗体'},
              {code: 'bolder', name: '特粗体'},
              {code: 'lighter', name: '细体'}
            ],
            value: 'normal'
          },
          {
            type: 'select',
            label: '对齐方式',
            name: 'textAlign',
            required: false,
            placeholder: '',
            selectOptions: [
              {code: 'center', name: '居中'},
              {code: 'left', name: '左对齐'},
              {code: 'right', name: '右对齐'}
            ],
            value: 'center'
          }
        ]
      }
    },
    {
      id: 2,
      type: 'Table',
      value: {
        config: {
          dynamicAddTable: [
            {prop: 'date', label: '日期', width: 200},
            {prop: 'name', label: '姓名', width: 200},
            {prop: 'address', label: '地址', width: 200}
          ]
        },
        position: {top: 130, left: 150, width: 600, height: 200},
        data: {
          dataType: 'staticData',
          dynamicData: '',
          refreshTime: 30000,
          staticData: [
            {
              date: '2016-05-03',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            },
            {
              date: '2016-05-02',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            },
            {
              date: '2016-05-04',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            },
            {
              date: '2016-05-01',
              name: 'Tom',
              address: 'No. 189, Grove St, Los Angeles'
            }
          ]
        }
      },
      options: {
        data: [
          {
            type: 'el-radio-group',
            label: '数据类型',
            name: 'dataType',
            require: false,
            placeholder: '',
            selectValue: true,
            selectOptions: [
              {
                code: 'staticData',
                name: '静态数据'
              },
              {
                code: 'dynamicData',
                name: '动态数据'
              }
            ],
            value: 'staticData'
          },
          {
            type: 'inputNumber',
            label: '刷新时间(毫秒)',
            name: 'refreshTime',
            relactiveDom: 'dataType',
            relactiveDomValue: 'dynamicData',
            value: 30000
          },
          {
            type: 'el-button',
            label: '静态数据',
            name: 'staticData',
            required: false,
            placeholder: '',
            relactiveDom: 'dataType',
            relactiveDomValue: 'staticData',
            value: [
              {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄0001'},
              {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄0002'},
              {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄0003'},
              {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄0004'},
              {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄0005'},
              {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄0006'},
              {date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄0007'}
            ]
          },
          {
            type: 'dycustComponents',
            label: '',
            name: 'dynamicData',
            required: false,
            placeholder: '',
            relactiveDom: 'dataType',
            relactiveDomValue: 'dynamicData',
            chartType: 'widget-table',
            dictKey: 'TEXT_PROPERTIES',
            value: ''
          }
        ],
        position: [
          {
            label: '左边距',
            name: 'left',
            placeholder: '',
            required: false,
            type: 'inputNumber',
            value: 1427.5
          },
          {
            label: '上边距',
            name: 'top',
            placeholder: '',
            required: false,
            type: 'inputNumber',
            value: 1427.5
          },
          {
            label: '宽度',
            name: 'width',
            placeholder: '',
            required: false,
            type: 'inputNumber',
            value: 1427.5
          },
          {
            label: '高度',
            name: 'height',
            placeholder: '',
            required: false,
            type: 'inputNumber',
            value: 1427.5
          }
        ],
        config: [
          {
            type: 'input',
            label: '图层名称',
            name: 'layerName',
            required: false,
            placeholder: '',
            value: '表格'
          },
          {
            type: 'select',
            label: '字体位置',
            name: 'textAlign',
            required: false,
            placeholder: '',
            selectOptions: [
              {code: 'center', name: '居中'},
              {code: 'left', name: '左对齐'},
              {code: 'right', name: '右对齐'}
            ],
            value: 'center'
          },
          {
            type: 'inputNumber',
            label: '字体字号',
            name: 'fontSize',
            required: false,
            placeholder: '',
            value: '16'
          },
          {
            type: 'inputNumber',
            label: '显示行数',
            name: 'vis',
            required: false,
            placeholder: '',
            value: '5'
          },
          {
            type: 'inputNumber',
            label: '行高',
            name: 'rowHeight',
            required: false,
            placeholder: '',
            value: '50'
          },
          {
            type: 'el-switch',
            label: '开启滚动',
            name: 'isRoll',
            required: false,
            placeholder: '',
            value: true
          },
          {
            type: 'select',
            label: '动画效果',
            name: 'effect',
            required: false,
            placeholder: '',
            selectOptions: [
              {code: 'top', name: '上滚动'},
              {code: 'topLoop', name: '上循环滚动'}
            ],
            value: 'topLoop'
          },
          {
            type: 'inputNumber',
            label: '滚动间隔(毫秒)',
            name: 'interTime',
            required: false,
            placeholder: '',
            value: 2500
          },
          {
            type: 'inputNumber',
            label: '动效时间(毫秒)',
            name: 'delayTime',
            required: false,
            placeholder: '',
            value: 500
          },
          {
            type: 'inputNumber',
            label: '滚动个数',
            name: 'scroll',
            required: false,
            placeholder: '',
            value: 1
          },
          {
            type: 'el-switch',
            label: '边框线',
            name: 'isLine',
            required: false,
            placeholder: '',
            value: false
          },
          {
            type: 'inputNumber',
            label: '边框宽度',
            name: 'borderWidth',
            required: false,
            placeholder: '',
            value: 1
          },
          {
            type: 'colorPicker',
            label: '边框颜色',
            name: 'borderColor',
            required: false,
            placeholder: '',
            value: '#fff'
          },
          [
            {
              name: '表头设置',
              list: [
                {
                  type: 'el-switch',
                  label: '表头显隐',
                  name: 'isHeader',
                  required: false,
                  placeholder: '',
                  value: true
                },
                {
                  type: 'colorPicker',
                  label: '表头颜色',
                  name: 'headColor',
                  require: false,
                  placeholder: '',
                  value: '#fff'
                },
                {
                  type: 'colorPicker',
                  label: '表头背景',
                  name: 'headBackColor',
                  require: false,
                  placeholder: '',
                  value: '#0a73ff'
                }
              ]
            },
            {
              name: '表体设置',
              list: [
                {
                  type: 'colorPicker',
                  label: '文字颜色',
                  name: 'bodyColor',
                  required: false,
                  placeholder: '',
                  value: '#fff'
                },
                {
                  type: 'colorPicker',
                  label: '表格背景色',
                  name: 'tableBgColor',
                  require: false,
                  placeholder: '',
                  value: ''
                },
                {
                  type: 'colorPicker',
                  label: '奇行颜色',
                  name: 'oldColor',
                  require: false,
                  placeholder: '',
                  value: '#0a2732'
                },
                {
                  type: 'colorPicker',
                  label: '偶行颜色',
                  name: 'eventColor',
                  required: false,
                  placeholder: '',
                  value: '#003b51'
                }
              ]
            }
          ],
          {
            type: 'dynamic-add-table',
            label: '',
            name: 'dynamicAddTable',
            required: false,
            placeholder: '',
            value: [
              {name: '日期', key: 'date', width: '50%'},
              {name: '姓名', key: 'name', width: '50%'},
              {name: '地址', key: 'address', width: '200%'}
            ]
          }
        ]
      }
    }
  ],
  dragWidgetCode: '',
  activeLayer:{}
})
const {x, y} = useContainerSize()
const dragStart = (widgetCode: string) => {
  state.dragWidgetCode = widgetCode
}
const dragEnd = () => {
  state.dragWidgetCode = ''
}
const dragOver = (evt: { preventDefault: () => void; stopPropagation: () => void }) => {
  evt.preventDefault()
  evt.stopPropagation()
}
const widgetOnDragged = (e: any) => {
  const widgetType = state.dragWidgetCode
  const eventX = e.clientX
  const eventY = e.clientY
  const {top, left} = getDomTopLeftById('workbench')
  const widgetTopInWorkbench = eventY - top
  const widgetLeftInWorkbench = eventX - left
  // 复制一个组件
  // let tool = getToolByCode(widgetType);
  const tool = {
    options: {}
  }
  const widgetJson = {
    type: widgetType,
    value: {
      config: {},
      data: {},
      position: {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      }
    },
    options: tool.options
  }
  //  需要根据不同的组件 处理不同的初始值
  const widgetJsonValue = handleDefaultValue(widgetJson)
  // 需要获取复制组件对应的默认值，对widgetJson赋值
  widgetJsonValue.value.position.top =
    widgetTopInWorkbench - widgetJsonValue.value.position.height / 2
  widgetJsonValue.value.position.left =
    widgetLeftInWorkbench - widgetJsonValue.value.position.width / 2
  state.widgets.push(widgetJsonValue)
}

const {widgetTools, list, widgets ,activeLayer} = toRefs(state)
 activeLayer.value = widgets.value[0]
const changeLayer = (data: any) => {
  console.log(1111);
  console.log(data);
  activeLayer.value= data
}

const changeActiveLayer = (data: any) => {
  console.log(222);
  console.log(data);
  activeLayer.value = data
}
</script>
<style scoped lang="less">
.layout {
  display: flex;
  height: 100vh;
  width: 100vw;

  &-left {
    width: 200px;
    height: 100%;
    // background-color: red;
    .tools-item {
      height: 40px;
      line-height: 40px;

      &-icon {
        margin-right: 10px;
        margin-left: 5px;
      }

      &-title {
        // margin-left:10px
      }
    }

    :deep(.el-tabs--border-card > .el-tabs__content) {
      padding: 0;
    }

    :deep(.el-tabs__item.is-left) {
      width: 60px;
      padding: 0 10px !important;
    }
  }

  &-center {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;

    &-top {
      height: 50px;
    }

    &-context {
      flex: 1;

      .card {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;

        &-context {
          height: 100%;
          width: 100%;
          position: relative;
        }
      }
    }
  }

  &-right {
    width: 300px;
    height: 100%;
  }
}
</style>
