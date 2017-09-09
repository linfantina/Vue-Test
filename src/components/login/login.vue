<template>
  <div class="login-max-box">
    <img src="./login.png" class="img_box">
    <p class="yanzhen">48小时内系统会对信息进行验证，该帐号将被禁用</p>
      <div class="field_box" >
        <mt-field label="姓名" placeholder="请输入用户名"    v-model="user.name"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel"  v-model="user.phone"></mt-field>
        <mt-field label="验证码" type="tel" placeholder="请输入验证码"  v-model="user.code" >
          <span class="code_btn" v-on:click="Code"  v-show="flag">获取验证码</span>
          <span class="code_btn1"  v-show="!flag" >倒计时{{count}}s</span>
          <!--<img src="../../assets/logo.png" height="45px" width="100px">-->
        </mt-field>
        <mt-field label="车牌" placeholder="请输入车牌" v-model="user.car"></mt-field>

      </div>
      <div class="login_box">
        <span class="login" @click="add">登陆</span>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { Toast } from 'mint-ui'
  const TIME_COUNT = 60
  export default {
    data () {
      return {
        flag: true,
        count: '',
        timer: null,
        user: {name: '', phone: '', code: '', car: ''}
      }
    },
    methods: {
      add: function () {
        if (this.user.name === '') {
          Toast({
            message: '姓名不能为空',
            duration: 1000
          })
          return
        }
        if (this.user.phone === '') {
          Toast({
            message: '手机号不能为空',
            duration: 1000
          })
          return
        }
        if (this.user.code === '') {
          Toast({
            message: '验证码不能为空',
            duration: 1000
          })
          return
        }
        if (this.user.car === '') {
          Toast({
            message: '车牌不能为空',
            duration: 1000
          })
          return
        } else {
          this.$router.push('/index')
        }
      },
      Code: function () {
        if (this.user.phone === '') {
          Toast({
            message: '手机号不能为空',
            duration: 1000
          })
        } else {
          if (!this.timer) {
            this.count = TIME_COUNT
            this.flag = false
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--
              } else {
                this.flag = true
                clearInterval(this.timer)
                this.timer = null
              }
            }, 1000)
          }
        }
      }
    }
  }
</script>
<style scoped>
  @import './login.css';
</style>
