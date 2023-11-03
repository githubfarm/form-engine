import Vue from 'vue';
import App from './app';
import VueRouter from 'vue-router';
import Element from 'element-ui';
import hljs from 'highlight.js';
import routes from './router/route.config';
import MainHeader from './components/header';
import SideNav from './components/side-nav';
import demoBlock from './components/demo-block';

import 'element-ui/lib/theme-chalk/index.css';
import './demo-styles/index.scss';
import './assets/styles/common.css';
import './assets/styles/fonts/style.css';

Vue.use(Element);
Vue.use(VueRouter);
Vue.component('demo-block', demoBlock);
Vue.component('main-header', MainHeader);
Vue.component('side-nav', SideNav);

const globalEle = new Vue({
  data: { $isEle: false } 
});

Vue.mixin({
  computed: {
    $isEle: {
      get: () => (globalEle.$data.$isEle),
      set: (data) => {globalEle.$data.$isEle = data;}
    }
  }
});

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});

new Vue({ // eslint-disable-line
  render: (h) => h(App),
  router
}).$mount('#app');
