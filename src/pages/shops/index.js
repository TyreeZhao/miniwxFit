//index.js
//获取应用实例
const app = getApp()
const pageConfig = {
  data: {
    toView: 'red',
    showRegionSelectionView: false
  },
  onLoad: function () {
  },
  upper: function (e) {
    // console.log(e)
  },
  lower: function (e) {
    // console.log(e)
  },
  scroll: function (e) {
    // console.log(e)
  }
}

Page(pageConfig)
