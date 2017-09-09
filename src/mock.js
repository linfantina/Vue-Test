// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random

// mock一组数据
const produceNewsData = function () {
  let articles = []
  for (let i = 0; i < 100; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      money: Random.float(60, 5000, 1, 3), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      integral: Random.integer(100, 1000), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      Newmoney: Random.float(-100, 300, 1, 2) // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles.push(newArticleObject)
  }

  return {
    articles: articles
  }
}

const produceNewsData1 = function () {
  let articles1 = []
  for (let i = 0; i < 10; i++) {
    let newArticleObject1 = {
      title: Random.csentence(5, 10), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片') // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      // author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      // date: Random.date() + ' ' + Random.time(), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      // money: Random.float( 60, 5000, 1,3) ,// Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      // integral: Random.integer( 100, 1000 ),// Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
      // Newmoney: Random.float( -100, 300, 1,2) // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles1.push(newArticleObject1)
  }
  return {
    articles1: articles1
  }
}
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
      cardNo: '98160000' + Random.natural(10000000000, 99999999999)
    }
    cardList.push(newCard)
  }
  return {
    cardList: cardList
  }
}
const getCaseDetail = function () {
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
Mock.mock('/trade/getCaseDetail', 'post', getCaseDetail)

// Mock.mock( url, post/get , 返回的数据)；
// Mock.mock('/news/index', 'post', produceNewsData)
Mock.mock('http://el.szeltec.com/dev/wxapi', 'post', produceNewsData)
Mock.mock('http://el.szeltec.com/dev/wxapi1', 'post', produceNewsData1)
