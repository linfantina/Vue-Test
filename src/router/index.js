import Vue from 'vue'
import Router from 'vue-router'
import TradeIndex from '@/components/trade/index'
import TradeList from '@/components/trade/list'
import CaseDetail from '@/components/trade/casedetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
