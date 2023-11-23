# Cascader

级联选择

```js
{
  __config__: {
    layout: 'colFormItem',
    span: 24,
    tag: 'el-cascader',
    tagIcon: 'cascader',
    label: '级联选择',
    labelWidth: null,
    showLabel: true,
    defaultValue: [],
    required: true,
    regList: [],
    changeTag: true,
    dataType: 'dynamic',
    url: 'https://www.fastmock.site/mock/9f2b117624476d9636213358c586406c/mock/cascaderList',
    method: 'get',
    dataPath: 'list',
    dataConsumer: 'options',
  },
  options: [{
    id: 1,
    value: 1,
    label: '选项1',
    children: [{
      id: 2,
      value: 2,
      label: '选项1-1'
    }]
  }],
  disabled: false,
  clearable: true,
  placeholder: '请选择',
  style: { width: '100%' },
  props: {
    props: {
      multiple: false,
      label: 'label',
      value: 'value',
      children: 'children'
    }
  },
  'show-all-levels': true,
  filterable: false,
  separator: '/'
}
```
