# 公共说明

## 表单 JSON 基础参数

| First Field  | Second Field   | Required | Type    | Descriptions                                                                                         |   Default   |
| :----------: | -------------- | :------: | ------- | ---------------------------------------------------------------------------------------------------- | :---------: |
| `__config__` | -              |    是    | Object  | 控件属性配置                                                                                         |             |
|      ├       | `layout`       |    否    | String  | 布局方式（colFormItem：生成 el-col 包裹的组件布局 或 rowFormItem：生成一个空的 el-row）;             | colFormItem |
|      ├       | `span`         |    是    | Number  | 栅格布局 el-col 的属性（取值范围 1-24，表示组件的栅格数）                                            |             |
|      ├       | `tag`          |    是    | String  | 元素                                                                                                 |             |
|      ├       | `tagIcon`      |    是    | String  | svg 图标名称                                                                                         |             |
|      ├       | `label`        |    是    | String  | 控件 label                                                                                           |             |
|      ├       | `labelWidth`   |    是    | String  | 控件 label 宽度（px）                                                                                |             |
|      ├       | `showLabel`    |    是    | Boolean | 是否显示表单 label                                                                                   |             |
|      ├       | `defaultValue` |    否    | any     | 默认值。与`__vModel__`对应使用，可指定表单字段的默认值；可用于表单数据回填                           |             |
|      ├       | `required`     |    是    | Boolean | 是否进行表单校验                                                                                     |             |
|      ├       | `regList`      |    否    | Array   | 与`required`属性关联，表单校验规则                                                                   |             |
|      ├       | `changeTag`    |    是    | Boolean | 是否允许显示切换组件面板                                                                             |             |
|      ├       | `children`     |    否    | Array   | 子控件。                                                                                             |             |
|      ├       | `layoutTree`   |    否    | String  | 是否显示布局树                                                                                       |             |
| `__vModel__` | -              |    是    | String  | 表单字段的属性名，可自定义                                                                           |             |
|  `__slot__`  | -              |    否    | String  | 对应，需在工程文件夹 src\components\render\slots 中添加与`__config__.tag` 同名的.js 文件解析该配置。 |             |
|  `其余属性`  | -              |   可选   | -       |                                                                                                      |             |

## regList item 属性

| Field   | Required | Type   | Descriptions | Default |
| ------- | :------: | ------ | ------------ | :-----: |
| pattern |    是    | String | 正则         |         |
| trigger |    否    | String | 触发事件     |         |
| message |    是    | String | 提示语句     |         |

## 其余属性 说明

根据不同组件的属性灵活配置（如：使用的是 element 的 input 组件，那么就可以传入 input 的各种属性进来）

组件属性位置与`__config__`同级。

若需自定义属性以达到控制右侧面板或其他目的的，可在`__config__`中自定义属性（如：`__config__`.showLabel）
