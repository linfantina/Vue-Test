<template>
  <div class="page_index">
    <div class="message_box">
      <div class="news">
        <div class="left">
          <i class="el el-shouye-lanse-3 color_ffb124"></i>
        </div>
        <span>恭喜您已完成实名验证</span>
        <div class="right" id="newsClose">
          <i class="el el-shouye-lanse-2 color_ffb124"></i>
        </div>
      </div>
      <div class="headDiv">
        <div class="layer">
          <div class="fl w25" >
            <div class="imgDiv"><i class="el el-scan"></i></div>
            <div class="text">扫一扫</div>
          </div>
          <div class="fl w25">
            <div class="imgDiv"><i class="el el-qrcode"></i></div>
            <div class="text">付款码</div>
          </div>
          <div class="fl w25">
            <div class="imgDiv"><i class="el el-sweep-card"></i></div>
            <div class="text">扫卡查余额</div>
          </div>
          <div class="fl w25">
            <div class="imgDiv"><i class="el el-transfer"></i></div>
            <div class="text">卡卡转账</div>
          </div>
          <div class="clear_f"></div>
        </div>
      </div>
    </div>
    <div class="content" style="background-color: white;">
      <ul>
        <li>
          <a>
            <div class="imgDiv">
              <i class="el el-shouye-lanse- color_16a8a1 bold"></i>
            </div>
            <div class="title">会员信息</div>
          </a>
        </li>
        <li>
          <a>
            <div class="imgDiv">
              <i class="el el-weibiaoti--9 color_6ab03d "></i>
            </div>
            <div class="title">卡片充值</div>
          </a>
        </li>
        <li>
          <a>
            <div class="imgDiv">
              <i class="el el-weibiaoti-- color_ffb21e "></i>
            </div>
            <div class="title">车队卡管理</div>
          </a>
        </li>
        <li>
          <a>
            <div class="imgDiv">
              <i class="el el-weibiaoti--6 color_478fd1 bold"></i>
            </div>
            <div class="title">商户网点</div>
          </a>
        </li>
        <li>
          <router-link to="/trade/index">
           <a>
              <div class="imgDiv">
                <i class="el el-weibiaoti--8 color_478fd1 bold"></i>
              </div>
              <div class="title">交易记录</div>
          </a>
          </router-link>
        </li>
        <li>
          <a>
            <div class="imgDiv">
              <i class="el el-shouye-lanse-1 color_ffb21e"></i>
            </div>
            <div class="title">卡包</div>
          </a>
        </li>
        <li>
          <a>
            <div class="imgDiv">
              <i class="el el-weibiaoti--1 color_16a8a1"></i>
            </div>
            <div class="title">手机</div>
          </a>
        </li>
        <li>
          <a>
            <div class="imgDiv">
              <i class="el el-weibiaoti--2 color_f1705e"></i>
            </div>
            <div class="title">保险</div>
          </a>
        </li>
      </ul>
      <div class="clear_f"></div>
    </div>
    <div class="h10"></div>
    <div class="amountDiv">
    <div class="all">
        <div class="allamount">
          <div class="text"><label>账户总余额</label></div>
          <div class="money">{{newsListShow[0].money+newsListShow[0].integral}}元</div>
        </div>
        <div class="detail">
          <div class="fl amount"><label class="text">现金金额：</label><label class="money">{{newsListShow[0].money}} 元</label></div>
          <div class="fl score"><label class="text">账户积分：</label><label class="money">{{newsListShow[0].integral}}分</label></div>
          <div class="clear_f"></div>
        </div>
      </div>
  </div>
    <div class="h10"></div>
    <div class="last">
      <div class="top">
        <div class="fl imgDiv">
          <i class="el el-recently-a-deal" style="font-size:34px;color:#9cdfaf"></i>
        </div>
        <div class="fl show">
          <div class="title">最后一笔交易记录</div>
          <div class="time last_time">{{newsListShow[0].date}}</div>
        </div>
        <div class="clear_f"></div>
      </div>
      <div class="bottom">
        <div class="money last_money"><span>¥ {{newsListShow[0].Newmoney}}</span></div>
        <div class="text last_text">易捷乐购手机</div>
      </div>
    </div>
  </div>
</template>
<style>
  @import "index.css";
</style>
<script>
  import api from '../../axios/api'
  export default {
    data () {
      return {
        newsListShow: {}
      }
    },
    created () {
      this.setNewsApi()
    },
    methods: {
      setNewsApi: function () {
        api.JH_news('http://el.szeltec.com/dev/wxapi', 'type=top&key=123456')
          .then(res => {
            console.log(res)
            this.newsListShow = res.articles
          })
      }
    }
//    created () {
//      this.send()
//      console.log(this.newsListShow)
//    },
//    methods: {
//      send () {
//        this.$htttp.get('https://api.github.com/users/tangyang8942')
//          .then(resp => {
//            this.newsListShow = resp.data
//            console.log(resp.data)
//          }).catch(err => {
//            console.log('dffff', err)
//          })
//      }
//    }
  }
</script>
