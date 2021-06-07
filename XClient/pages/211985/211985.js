// pages/211985/211985.js
var n=0
var score=0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    n:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '加载中....',
      icon:'loading',
      duration:2000
    })
    wx.cloud.callFunction({
      name:"get_timemanagement",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        this.setData({
          queslist:  res.result.data,
        })
      },
    })
  },
  if_A:function(){
    n++
    score+=4
    var info_score = encodeURIComponent(JSON.stringify(score))
    if (n>14) {
      wx.redirectTo({
        url: '../211985/time_ma/time_ma?info_DYZ_score='+info_score
      })
    }
    if(n>14){
      score=0,
      n=0
    }
    this.setData({
      score:score,
      n:n
    })
  },
  if_B:function(){
    n++
    score+=3
    var info_score = encodeURIComponent(JSON.stringify(score))
    if (n>14) {
      wx.redirectTo({
        url: '../211985/time_ma/time_ma?info_DYZ_score='+info_score
      })
    }
    if(n>14){
      score=0,
      n=0
    }
    this.setData({
      score:score,
      n:n
    })
  },

  if_C:function(){
    n++
    score+=2
    var info_score = encodeURIComponent(JSON.stringify(score))
    if (n>14) {
      wx.redirectTo({
        url: '../211985/time_ma/time_ma?info_DYZ_score='+info_score
      })
    }
    if(n>14){
      score=0,
      n=0
    }
    this.setData({
      score:score,
      n:n
    })
  },

  if_D:function(){
    n++
    score+=1
    var info_score = encodeURIComponent(JSON.stringify(score))
    if (n>14) {
      wx.redirectTo({
        url: '../211985/time_ma/time_ma?info_DYZ_score='+info_score
      })
    }
    if(n>14){
      score=0,
      n=0
    }
    this.setData({
      score:score,
      n:n
    })
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
    n=0,
   score=0
    
    this.setData({
      n:n,
      score:score
    })
    wx.navigateTo({
      url: '../index/index'
    })

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