import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'designer',
    component:  () => import('examples/views/designer/index')
  },
  {
    path: '/parser',
    name: 'parser',
    component: () => import('packages/parser/index')
  },
  {
    path: '/tinymce',
    name: 'tinymce',
    component: () => import('packages/tinymce/index')
  }, 
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
