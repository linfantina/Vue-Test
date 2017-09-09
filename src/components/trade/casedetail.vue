<template>
  <div class="wal">
    <div class="page_expenses_record_detail">
      <div style="padding:3%;">
        <div class="content">
          <div class="panel1">
            <div class="imgDiv"><i style="font-size: 3em;" class='el el-store'></i></div>
            <div class="name"><label>{{detailModel.name}}</label></div>
          </div>
          <div class="panel2">
            <div class="money">¥{{detailModel.money}}<label>元</label></div>
            <div class="tips">{{detailModel.status}}</div>
          </div>
          <div class="panel3">
            <ul>
              <li><label>交易单号：</label>{{detailModel.caseno}}</li>
              <li><label>会员卡号：</label>{{detailModel.cardno}}</li>
              <li><label>积分抵扣：</label>{{detailModel.rebatepaid}}</li>
              <li><label>余额支付：</label>{{detailModel.cashpaid}}</li>
              <li><label>优惠金额：</label>{{detailModel.couponpaid}}</li>
              <li><label>现金券抵扣：</label>{{detailModel.cashvoucherpaid}}</li>
              <li><label>积分奖励：</label>{{detailModel.rebate}}</li>
              <li><label>交易时间：</label>{{detailModel.date}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  @import "casedetail.css";
</style>

<script>
  import api from '../../axios/api.js'

  export default {
    data () {
      return {
        detailModel: {}
      }
    },
    created () {
      this.setNewsApi()
    },
    methods: {
      setNewsApi: function () {
        api.JH_news('/trade/getCaseDetail', 'type=top&key=123456')
          .then(res => {
            this.detailModel = res.detailmodel
          })
      }
    }
  }

</script>
