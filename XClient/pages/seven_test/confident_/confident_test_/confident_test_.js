var ZXX=[]
var positive=[1,4,5,6,11,14,15,16,17,18,19,20,35,36,37,38,39]
var negative=[2,3,7,8,9,10,12,13,21,22,23,24,25,26,27,28,29,30,31,32,33,34,40]
var Y=0
var N=0
var n=0
var final_score
var arr=1
Page({

  /**
   * 页面的初始数据
   */
  data: {
    n:0,
    arr:1
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
      name:"get_zxx",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        this.setData({
          ZXX :  res.result.data,
        })
      },
    })   
  },
  if_A:function(){
    arr++
    for(var i=0;i<positive.length;i++){
      if(this.data.ZXX[n].id==positive[i]){
        Y++
      }
    }
    n++
    console.log(n)
    final_score=(N+Y)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (n>39) {
      wx.navigateTo({
        url: '../confident_report_/confident_report_?info_DYZ_score='+info_DYZ_score
      })
    }
    if(n>39){
      n=0,
      N=0,
      Y=0,
      arr=1
    }
    console.log("Y",Y)
    this.setData({
      n:n,
      Y:Y,
      N:N,
      arr:arr
    })
  },
  if_B:function(){
    arr++
    for(var i=0;i<positive.length;i++){
      if(this.data.ZXX[n].id==negative[i]){
        N++
      }
    }
    n++
    console.log(n)
    console.log("N",N)
    n++
    final_score=(N+Y)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (n>39) {
      wx.navigateTo({
        url: '../confident_report_/confident_report_?info_DYZ_score='+info_DYZ_score
      })
    }
    if(n>39){
      n=0,
      N=0,
      Y=0,
      arr=1
    }
    this.setData({
      n:n,
      Y:Y,
      N:N,
      arr:arr
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
    n=0
    N=0
    Y=0
    arr=1
    this.setData({
      n:n,
      N:N,
      Y:Y,
      arr:arr
    })
    wx.reLaunch({
      url: '../../../../pages/index/index'
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