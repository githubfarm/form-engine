import Vue from 'vue'
import { loadScriptQueue } from '@/utils/loadScript'
import axios from 'axios'
import Tinymce from '@/components/tinymce/index.vue'

import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(elementUI);

Vue.component('tinymce', Tinymce)
Vue.prototype.$axios = axios

const $previewApp = document.getElementById('previewApp')

const childAttrs = {
  file: '',
  dialog: ' width="600px" class="dialog-width" v-if="visible" :visible.sync="visible" :modal-append-to-body="false" '
}

window.addEventListener('message', init, false)

function init(event) {
  if (event.data.type === 'refreshFrame') {
    const code = event.data.data
    const attrs = childAttrs[code.generateConf.type]
    let links = ''

    if (Array.isArray(code.links) && code.links.length > 0) {
      links = buildLinks(code.links)
    }

    $previewApp.innerHTML = `${links}<style>${code.css}</style><div id="preview"></div>`

    if (Array.isArray(code.scripts) && code.scripts.length > 0) {
      loadScriptQueue(code.scripts, () => {
        newVue(attrs, code.js, code.html)
      })
    } else {
      newVue(attrs, code.js, code.html)
    }
  }
}

function buildLinks(links) {
  let strs = ''
  links.forEach(url => {
    strs += `<link href="${url}" rel="stylesheet">`
  })
  return strs
}


function newVue(attrs, main, html) {
  main = eval(`(${main})`)
  main.template = `<div>${html}</div>`

  new Vue({
    components: {
      child: main
    },
    data() {
      return {
        visible: true
      }
    },
    /**
     * https://blog.csdn.net/weixin_30415801/article/details/102444276
     */
    // render: (h) => {}
    template: `<div><child ${attrs}/></div>`
  }).$mount('#preview')
}
