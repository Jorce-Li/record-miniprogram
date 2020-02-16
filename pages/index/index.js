//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  goDetail(){
    wx.navigateTo({
      url: '../detail/index'
    })
  }
})
