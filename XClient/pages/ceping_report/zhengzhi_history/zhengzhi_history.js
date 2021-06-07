// pages/XUEKE/lishi_result/lishi_result.js
var lishui_score=[];
var wrong_arr=[];
var image_score;
var all_arr=[];
var call_database=[];
var final_score;
var final_result;
var interest_score;
var interest_result;
var wxCharts = require("../../../utils/wxcharts.js");
//定义记录初始屏幕宽度比例，便于初始化
var windowW=0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_score
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:"politic_data",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        this.setData({
          call_database:  res.result.data,
        })
      },
    })   
    
    var all_arr =wx.getStorageSync('zhengzhi_result')||[];
    final_score=all_arr[1].final_score;
    final_result=all_arr[0].final_result;
    interest_score=all_arr[3].interest_score;
    interest_result=all_arr[2].interest_result;
    wrong_arr=all_arr[4].wrong_list;


    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth
     })
     windowW = this.data.imageWidth/375;
     
     this.setData({
      final_result:final_result,
      final_score:final_score,
      interest_result:interest_result,
      interest_score:interest_score,
      wrong_arr:wrong_arr
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
        name: this.data.final_score,
        color: '#7cb5ec',
        fontSize: 20
      },
      subtitle: {
        name: this.data.final_result,
        color: '#666666',
        fontSize: 14
      },
      series: [{
        name: '大于75 优势学科',
        data: 35,
        stroke: false
      },{
        name: '60与75之间 胜任学科',
        data: 15,
        stroke: false
      },{
        name: '45与60之间 弱势学科',
        data: 15,
        stroke: false
      },{
        name: '小于45 洗洗睡吧',
        data: 45,
        stroke: false
      }],
      disablePieStroke: true,
      width: (375 * windowW),
      height: (200 * windowW),
      dataLabel: false,
      legend: true,
      padding: 0
    });

    new wxCharts({
      animation: true,
      canvasId: 'ringCanvas2',
      type: 'ring',
      extra: {
        ringWidth: 25,
        pie: {
          offsetAngle: -45
        }
      },
      title: {
        name: this.data.interest_score,
        color: '#7cb5ec',
        fontSize: 15
      },
      subtitle: {
        name: this.data.interest_result,
        color: '#666666',
        fontSize: 10
      },
      series: [{
        name: '大于24 对政治学科非常感兴趣',
        data: 12,
        stroke: false
      },{
        name: '18与24之间 对政治历史学科比较感兴趣',
        data: 6,
        stroke: false
      }, {
        name: '12与18之间 对政治学科兴趣一般',
        data: 6,
        stroke: false
      }, {
        name: '7.5与12之间 对政治学科不太感兴趣',
        data: 6,
        stroke: false
      },{
        name: '小于7.5 对政治学科很不感兴趣',
        data: 7.5,
        stroke: false
      },],
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