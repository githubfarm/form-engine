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
    >
      <template slot="action">
        <el-button type="text">保存</el-button>
      </template>
    </FormDesigner>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped></style>
