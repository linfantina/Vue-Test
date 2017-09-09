import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login.vue'
import index from '@/components/index/index'
import TradeIndex from '@/components/trade/index'
import TradeList from '@/components/trade/list'
import CaseDetail from '@/components/trade/casedetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/trade/index',
      name: 'TradeIndex',
      component: TradeIndex
    },
    {
      path: '/trade/list',
      name: 'TradeList',
      component: TradeList
    },
    {
      path: '/trade/casedetail',
      name: 'CaseDetail',
      component: CaseDetail
    }
  ]
})
