// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock一组数据
const getTradeList = function () {
  let tradeList = []
  for (let i = 0; i < 10; i++) {
    let newTrade = {
      name: i + Random.cword(6, 15), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      money: Random.float(1, 999, 2, 2)
    }
    tradeList.push(newTrade)
  }
  return {
    tradeList: tradeList
  }
}
const getCardList = function () {
  let cardList = []
  for (let j = 0; j < 5; j++) {
    let newCard = {
      cardno: '98160000' + Random.natural(10000000000, 99999999999)
    }
    cardList.push(newCard)
  }
  return {
    cardList: cardList
  }
}
const getcasedetail = function () {
  let newTrade = {
    name: Random.cword(6, 15), // Random.cname() 随机生成一个常见的中文姓名
    date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    money: Random.float(1, 999, 2, 2),
    status: '交易成功',
    caseno: Random.natural(),
    cardno: '98160000' + Random.natural(10000000000, 99999999999),
    rebatepaid: '-' + Random.float(1, 99, 2, 2),
    cashpaid: '-' + Random.float(1, 999, 2, 2),
    couponpaid: '-' + Random.float(1, 99, 2, 2),
    cashvoucherpaid: '-' + Random.float(1, 9, 2, 2),
    rebate: '+' + Random.float(1, 50, 2, 2)
  }

  return {
    detailmodel: newTrade
  }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/trade/getTradeList', 'post', getTradeList)
Mock.mock('/trade/getCardList', 'post', getCardList)
Mock.mock('/trade/getcasedetail', 'post', getcasedetail)
