import FormDesigner from 'packages/designer/index.js'
import FormParser from 'packages/parser/index.js'

const components = [FormDesigner, FormParser]

const install = function (Vue, optiosn = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  FormDesigner,
  FormParser,
}
