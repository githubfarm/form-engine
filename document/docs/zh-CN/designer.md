# Designer

表单设计器

## 基础用法

控制操作栏按钮的显示与隐藏

```html
<template>
  <div>
    <FormDesigner clearable create-json create-code action-export></FormDesigner>
  </div>
</template>
```

## 自定义控制栏

通过插槽 action 可以动态插入一些按钮

```html
<template>
  <div>
    <FormDesigner ref="formDesigner" clearable create-json create-code action-export>
      <template slot="action">
        <el-button type="text" @click="save">保存</el-button>
      </template>
    </FormDesigner>
  </div>
</template>
```

## 根据传入的控件字段，控制控件的显示与隐藏

```html
<template>
  <div>
    <FormDesigner
      clearable
      create-json
      create-code
      action-export
      :comp-fields="[
        'button',
        'cascader',
        'checkbox',
        'color',
        'date',
        'dateRange',
        'designer',
        'input',
        'number',
        'password',
        'radio',
        'rate',
        'row',
        'select',
        'slider',
        'switch',
        'table',
        'textarea',
        'time',
        'timeRange',
        'upload'
      ]"
    ></FormDesigner>
  </div>
</template>
```

## 从外部传入表单数据

```html
<template>
  <div>
    <FormDesigner
      clearable
      create-json
      create-code
      action-export
      :formdata="formData"
    ></FormDesigner>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formData: this.getFormData(),
      }
    },
    methods: {
      getFormData() {
        return {
          fields: [
            {
              __config__: {
                label: '单行文本',
                labelWidth: null,
                showLabel: true,
                changeTag: true,
                tag: 'el-input',
                tagIcon: 'input',
                required: true,
                layout: 'colFormItem',
                span: 24,
                regList: [],
                formId: 101,
                renderKey: '1011701139990636',
              },
              __slot__: {
                prepend: '',
                append: '',
              },
              placeholder: '请输入单行文本单行文本',
              style: {
                width: '100%',
              },
              clearable: true,
              'prefix-icon': '',
              'suffix-icon': '',
              maxlength: null,
              'show-word-limit': false,
              readonly: false,
              disabled: false,
              __vModel__: 'field101',
            },
            {
              __config__: {
                label: '密码',
                showLabel: true,
                labelWidth: null,
                changeTag: true,
                tag: 'el-input',
                tagIcon: 'password',
                layout: 'colFormItem',
                span: 24,
                required: true,
                regList: [],
                formId: 102,
                renderKey: '1021701139992443',
              },
              __slot__: {
                prepend: '',
                append: '',
              },
              placeholder: '请输入密码',
              'show-password': true,
              style: {
                width: '100%',
              },
              clearable: true,
              'prefix-icon': '',
              'suffix-icon': '',
              maxlength: null,
              'show-word-limit': false,
              readonly: false,
              disabled: false,
              __vModel__: 'field102',
            },
          ],
          formRef: 'elForm1',
          formModel: 'formData',
          size: 'medium',
          labelPosition: 'right',
          labelWidth: 100,
          formRules: 'rules',
          gutter: 15,
          disabled: false,
          span: 24,
          formBtns: true,
        }
      },
    },
  }
</script>
```

## API

### 字段

| Field           | Required | Type     | Descriptions               | Default |
| --------------- | :------: | -------- | -------------------------- | :-----: |
| `clearable`     |   可选   | Boolean  | 是否展示清空按钮           |    -    |
| `create-json`   |   可选   | Boolean  | 是否展示生成 json 按钮     |    -    |
| `action-export` |   可选   | Boolean  | 是否展示导出 vue 文件按钮  |    -    |
| `create-code`   |   可选   | Boolean  | 是否展示导生成代码按钮     |    -    |
| `comp-fields`   |   可选   | String[] | 传入需要展示的控件列表名称 |    -    |
| `formdata`     |   可选   | Object   | 表单数据                   |    -    |

### 插槽

| Slot Name | Descriptions | Default |
| --------- | ------------ | :-----: |
| action    | 自定义操作栏 |         |

### ref 对象方法

| Name    | Descriptions | Default |
| ------- | ------------ | :-----: |
| getJSON | 获取 json    |         |
