// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'


router.beforeEach((to, from, next) => {
  // ...
  console.log(to)
  next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
//   el: '#app',
  router,
//   template: '<App/>',
//   components: { App }
// })
  render: h => h(App)
}).$mount('#app')