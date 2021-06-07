// pages/news/news.js
var logged=false;
const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    logged:false,
    starCount: 0,
    forksCount: 0,
    visitTotal: 0,
  
  },
   /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorage({
      data: 1,
      key: 'test',
    })
    var that=this
    wx.getUserInfo({
      success: function(res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var T = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        console.log(T)
        that.setData({
          T:T,
          userInfo:userInfo
        })
      }
    })
  
  },
  showQrcode:function() {
    wx.previewImage({//在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。
      urls: ['https://7875-xuejingwei-m9vpp-1302778999.tcb.qcloud.la/gsvshc/wxprogra_qrcode.jpg?sign=889ab501115b92efd88ed1ad30bd1895&t=1602144422'],
      current: 'https://7875-xuejingwei-m9vpp-1302778999.tcb.qcloud.la/gsvshc/wxprogra_qrcode.jpg?sign=889ab501115b92efd88ed1ad30bd1895&t=1602144422' // 当前显示图片的http链接      
    })
  },

  bindGetUserinfo:function(e){
    console.log(e.detail.userInfo)
    const {userInfo}=e.detail;
    var T=e.detail.userInfo.avatarUrl
  
    wx.setStorageSync('userInfo', userInfo);
  
    logged=true
    wx.setStorageSync('logged', logged);
    wx.setStorageSync('logged', logged);
    var that=this
    that.setData({
      userInfo:userInfo,
      logged:logged,
      T:T

    })
  },


  attached() {
    console.log("success")
    let that = this;
    wx.showLoading({
      title: '数据加载中',
      mask: true,
    })
    let i = 0;
    numDH();
    function numDH() {
      if (i < 200000) {
        setTimeout(function () {
          that.setData({
            starCount: i,
            forksCount: i,
            visitTotal: i
          })
          i++
          numDH();
        }, 20)
      } else {
        that.setData({
          starCount: that.coutNum(0),
          forksCount: that.coutNum(0),
          visitTotal: that.coutNum(0)
        })
      }
    }
    wx.hideLoading()
    this.setData({
      starCount:starCount,
      forksCount:forksCount,
      visitTotal:visitTotal
    })
  },


  methods: {
    coutNum(e) {
      if (e > 1000 && e < 10000) {
        e = (e / 1000).toFixed(1) + 'k'
      }
      if (e > 10000) {
        e = (e / 10000).toFixed(1) + 'W'
      }
      return e
    },
    CopyLink(e) {
      wx.setClipboardData({
        data: e.currentTarget.dataset.link,
        success: res => {
          wx.showToast({
            title: '已复制',
            duration: 1000,
          })
        }
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
    // showQrcode() {
    //   wx.previewImage({
    //     urls: ['https://7875-xuejingwei-m9vpp-1302778999.tcb.qcloud.la/gsvshc/wxprogra_qrcode.jpg?sign=889ab501115b92efd88ed1ad30bd1895&t=1602144422'],
    //     current: 'https://7875-xuejingwei-m9vpp-1302778999.tcb.qcloud.la/gsvshc/wxprogra_qrcode.jpg?sign=889ab501115b92efd88ed1ad30bd1895&t=1602144422' // 当前显示图片的http链接      
    //   })
    // },
  },
  options: {
    addGlobalClass: true,
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})




