# Time

时间选择

```js
{
  __config__: {
    layout: 'colFormItem',
    span: 24,
    tag: 'el-time-picker',
    tagIcon: 'time',
    label: '时间选择',
    labelWidth: null,
    showLabel: true,
    defaultValue: null,
    required: true,
    regList: [],
    changeTag: true,
  },
  disabled: false,
  clearable: true,
  placeholder: '请选择',
  style: { width: '100%' },
  'picker-options': {
    selectableRange: '00:00:00-23:59:59'
  },
  format: 'HH:mm:ss',
  'value-format': 'HH:mm:ss'
}
```
