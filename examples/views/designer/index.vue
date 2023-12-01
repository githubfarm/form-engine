<template>
  <div>
    <FormDesigner
      ref="formDesigner"
      clearable
      create-json
      create-code
      action-export
      :comp-fields = "[
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
        'upload',
      ]"
      :formdata = "formData"
    >
      <template slot="action">
        <el-button type="text" @click="save">保存</el-button>
      </template>
    </FormDesigner>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: this.getFormData()
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
              document: 'https://element.eleme.cn/#/zh-CN/component/input',
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
              document: 'https://element.eleme.cn/#/zh-CN/component/input',
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
    save() {
      this.$refs['formDesigner'].getJson()
    },
  },
}
</script>

<style lang="scss" scoped></style>
