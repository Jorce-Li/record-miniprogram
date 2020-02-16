//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    data: [
      {
        src: './Logistic  Regression_icon.svg',
        text: 'Logistic Regression',
        score: '70%'
      },
      {
        src: './Decision Tress_icon.svg',
        text: 'Decision Tress',
        score: '57%'
      },
      {
        src: './Naive  Bayesian  Classification_icon.svg',
        text: 'Naive Bayesian Classification',
        score: '57%'
      },
      {
        src: './Ordinary Least  Squares  Regression_icon.svg',
        text: 'Ordinary Least Squares Regression',
        score: '57%'
      },
      {
        src: './Ensemble  Methods_icon.svg',
        text: 'Ensemble Methods',
        score: '70%'
      },
    ]
  },
  //事件处理函数
  goBack: function() {
    wx.navigateBack(-1);
  },
  onLoad: function () {
  },
})
