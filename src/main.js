// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import './common/css/basic.css'
import './common/font/iconfont.css'

// // 引用API文件
// import api from './api/index.js'
// // 将API方法绑定到全局
// Vue.prototype.$api = api
// Vue.config.productionTip = false

// 引入mockjs
require('./mock.js')

Vue.use(Mint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.filter('getYMD', function (input) {
  return input.split(' ')[0]
})
