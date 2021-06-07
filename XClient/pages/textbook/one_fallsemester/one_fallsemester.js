// pages/textbook/one_fallsemester/one_fallsemester.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // showModal:function(){
  //   wx.navigateTo({
  //     url: '../../index/index',
  //   })
  // },


  hld_MBTI:function(){
    wx.reLaunch({
      url: '../../../pages/index/index',
    })
  },

  getQrCode:function(){
    wx.cloud.callFunction({
      name:'one',
      data:{
        path:'pages/textbook/one_fallsemester/one_fallsemester?num=1',
        name:"高一上册"
      }
    }).then(res=>{
      console.log('成功',res)
    }).catch(res=>{
      console.log('失败',res)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("route = ", this.route);
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