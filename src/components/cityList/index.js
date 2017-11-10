//index.js
//获取应用实例
const app = getApp()

const pageConfig = {
  data: {
    motto: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
  },
  onLoad: function () {
  },
  getUserInfo: function (e) {
  }
}

Page(pageConfig)
