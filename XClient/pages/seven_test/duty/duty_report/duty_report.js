var DYZ_num;
var wxCharts = require("../../../../utils/wxcharts.js");
var windowW=0;
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
    console.log(options);
    let info = decodeURIComponent(options.info_DYZ_score);
    let DYZ_num =JSON.parse(info);//上一级页面还有就是先转为字符串，到下一个页面再转为数组  参考文献https://www.cnblogs.com/lishuang2243/p/12653246.html
    console.log(DYZ_num);
    this.setData({
      DYZ_num:DYZ_num,
      imageWidth: wx.getSystemInfoSync().windowWidth
     })
     windowW = this.data.imageWidth/375;

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
    new wxCharts({
      animation: true,
      canvasId: 'ringCanvas',
      type: 'ring',
      extra: {
        ringWidth: 25,
        pie: {
          offsetAngle: -45
        }
      },
      title: {
        name: this.data.DYZ_num,
        color: '#7cb5ec',
        fontSize: 20
      },
      subtitle: {
        name: "您的成绩为",
        color: '#666666',
        fontSize: 14
      },
      series: [{
        name: '81-100分 非常有责任心',
        data: 25,
        stroke: false
      },{
        name: '61-80分 比较有责任心',
        data: 25,
        stroke: false
      },{
        name: '41-60分 责任心一般',
        data: 25,
        stroke: false
      },{
        name: '20-40分 责任心较差',
        data: 25,
        stroke: false
      }],
      disablePieStroke: true,
      width: (375 * windowW),
      height: (200 * windowW),
      dataLabel: false,
      legend: true,
      padding: 0
    });

    

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
    wx.reLaunch({
      url: '../../../index/index',
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