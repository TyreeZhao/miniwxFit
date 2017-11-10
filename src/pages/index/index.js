//index.js
//获取应用实例
const app = getApp()

const pageConfig = {
  data: {
    selected: true,
    selected1: false,
    selected2: false,
    selected3: false,
    showRegionSelectionView: false,
  },
  selected: function (e) {
    this.setData({
      selected: true,
      selected1: false,
      selected2: false,
      selected3: false
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true,
      selected2: false,
      selected3: false      
    })
  },
  selected2: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true,
      selected3: false   
    })
  },
  selected3: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: true   
    })
  },
  tap: function (e) {
    console.log('555')
    this.setData({
      showRegionSelectionView: true,
    })
  },
  closeCityList: function (e) {
    console.log(e)
    this.setData({
      showRegionSelectionView: false,
    })    
  }
}

Page(pageConfig)
