import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/pages/test1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test1',
      name: 'Test',
      component: Test
    }
  ]
})
