<template>
  <div class="tradeList">
    <div class="h10"></div>
    <div class="cardDiv">
      <input type="hidden" id="select_card_no" value=""/>
      <div class="checkCard" v-on:click="showCardLayer">
        <div class="fl"><label class="show_card_no">{{selectCardNo=='0'?'所有卡片':selectCardNo}}</label></div>
        <div class="fr"><i class="fa fa-angle-down"></i></div>
        <div class="clear_f"></div>
      </div>
      <div class="recharge-card-div" v-if="isShowCardLayer">
        <div class="layer-mask-recharge" style="top:101px;" v-on:click="closeCardLayer"></div>
        <div class="layer-recharge-card" v-if="isShowCardLayer">
          <div class="content">
            <div class="list list2 chargecardlist">
              <ul>
                <li>
                  <div class="item item2" :class="{'check':selectCardNo==='0'}" v-on:click="selectCard('0')"><i class="fa fa-credit-card"></i><label>所有卡片</label>
                  </div>
                </li>
                <li v-for="(item,key) in cardList">
                <div class="item item2 " :class="{'check':selectCardNo===item.cardNo}" v-on:click="selectCard(item.cardNo)">
                <i class="fa fa-credit-card"></i>
                <label>{{item.cardNo}}</label>
                </div>
            </li>
              </ul>
            </div>
            <div class="clear_f"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="h10"></div>
    <div class="record_list">
      <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="0">
        <li v-for="(item,key) in tradeList" class='type1' v-on:click="showDetail(1,1,'2323','交易成功','')">
          <div class='fl imgDiv'>
            <i class='el el-store'></i>
          </div>
          <div class='fl content'>
            <div class='name'>
              <div class='fl'><label class='money'>{{item.money}}元</label></div>
              <div class='fr'><label class='status'>扫码消费</label></div>
            </div>
            <div class='details'>
              <div class='fl'>{{item.name}}</div>
              <div class='fr'>{{item.date}}</div>
              <div class='clear_f'></div>
            </div>
          </div>
          <div class='clear_f'></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
  @import "list.css";
</style>
<script>
  import api from '../../axios/api.js'

  export default {
    data () {
      return {
        allLoaded: false,
        tradeList: [],
        cardList: [],
        isShowCardLayer: false,
        selectCardNo: '0'
      }
    },
    created () {
      this.getTradeList()
      this.getCardList()
    },
    methods: {
      getTradeList: function () {
        api.JH_news('/trade/getTradeList', null)
          .then(res => {
            this.tradeList = res.tradeList
          })
      },
      getCardList () {
        api.JH_news('/trade/getCardList', null)
          .then(res => {
            this.cardList = res.cardList
          })
      },
      showDetail (type, tradeId, caseNo, status, fromTable) {
        if (type === 1) {
          this.$router.push({ path: '/trade/casedetail?tradeId=' + tradeId + '&caseNo=' + caseNo + '&status=' + status })
        } else if (type === 2) {
          this.$router.push({ path: '/trade/casedetail?tradeId=' + tradeId + '&status=' + status + '&from=' + fromTable })
        } else {

        }
      },
      showCardLayer () {
        this.isShowCardLayer = true
      },
      closeCardLayer () {
        this.isShowCardLayer = false
      },
      selectCard (cardno) {
        this.selectCardNo = cardno
        this.isShowCardLayer = false
        this.getTradeList()
      },
      loadMore () {
        this.loading = true
        setTimeout(() => {
          api.JH_news('/trade/getTradeList', null)
          .then(res => {
            this.tradeList.push(...res.tradeList)
          })
          this.loading = false
          console.log('加载完更多！！！')
        }, 2500)
      }
    }
  }

</script>
