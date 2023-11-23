# Table

表格

```js
{
  __config__: {
    layout: 'colFormItem',
    span: 24,
    tag: 'el-table',
    tagIcon: 'table',
    label: '表格',
    labelWidth: null,
    showLabel: true,
    changeTag: true,
    dataType: 'dynamic',
    url: 'https://www.fastmock.site/mock/9f2b117624476d9636213358c586406c/mock/table',
    method: 'get',
    dataPath: 'list',
    dataConsumer: 'data',
    formId: 101,
    renderKey: 1595761764203,
    componentName: 'row101',
    children: [{
      __config__: {
        layout: 'raw',
        tag: 'el-table-column',
        renderKey: 15957617660153
      },
      prop: 'date',
      label: '日期'
    }, {
      __config__: {
        layout: 'raw',
        tag: 'el-table-column',
        renderKey: 15957617660152
      },
      prop: 'address',
      label: '地址'
    }, {
      __config__: {
        layout: 'raw',
        tag: 'el-table-column',
        renderKey: 15957617660151
      },
      prop: 'name',
      label: '名称'
    }, {
      __config__: {
        layout: 'raw',
        tag: 'el-table-column',
        renderKey: 1595774496335,
        children: [
          {
            __config__: {
              label: '按钮',
              tag: 'el-button',
              tagIcon: 'button',
              layout: 'raw',
              renderKey: 1595779809901
            },
            __slot__: {
              default: '主要按钮'
            },
            type: 'primary',
            icon: 'el-icon-search',
            round: false,
            size: 'medium'
          }
        ]
      },
      label: '操作'
    }]
  },
  data: [],
  directives: [{
    name: 'loading',
    value: true
  }],
  border: true,
  type: 'default',
  justify: 'start',
  align: 'top'
}
```
