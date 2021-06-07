// pages/HuoLanDe/HuoLanDe.js
Page({
  hld_start:function(){
    wx.navigateTo({
      url: '../start_hld/start_hld',
    })
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  hideModal_(e) {
    wx.navigateTo({
      url: '../start_hld/start_hld',
    })
  },


})