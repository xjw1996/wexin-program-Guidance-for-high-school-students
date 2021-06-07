// pages/XUEKE/lishi_result/lishi_result.js
var lishui_score=[];
var wrong_arr=[];
var image_score;
var call_database=[];
var all_arr=[];
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
      name:"chemistry_data",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        this.setData({
          call_database:  res.result.data,
        })
      },
    })   
    // console.log(options);
    // let info = decodeURIComponent(options.info);
 
    // let lishui_score =JSON.parse(info);//上一级页面还有就是先转为字符串，到下一个页面再转为数组  参考文献https://www.cnblogs.com/lishuang2243/p/12653246.html
  
    // console.log(lishui_score);
    var all_arr =wx.getStorageSync('chemi_result')||[];
    final_score=all_arr[1].final_score;
    final_result=all_arr[0].final_result;
    interest_score=all_arr[3].interest_score;
    interest_result=all_arr[2].interest_result;
    wrong_arr=all_arr[4].wrong_list;
    this.setData({
      lishui_score:lishui_score,
      imageWidth: wx.getSystemInfoSync().windowWidth
     })
     windowW = this.data.imageWidth/375;
    //  console.log(this.data.lishui_score)
     
    //  final_score=this.data.lishui_score[0].b_score+this.data.lishui_score[1].e_score+this.data.lishui_score[2].l_score+this.data.lishui_score[3].A_score+this.data.lishui_score[4].B_score+this.data.lishui_score[5].C_score+this.data.lishui_score[6].D_score
    //  console.log(final_score)
    //  interest_score=this.data.lishui_score[0].b_score+this.data.lishui_score[1].e_score+this.data.lishui_score[2].l_score
    //  console.log(interest_score)
    //  if(interest_score>24){
    //   interest_result="非常感兴趣"
    //  }
    //  if(interest_score<=24){
    //   interest_result="比较感兴趣"
    //  }
    //  if(interest_score<=18){
    //   interest_result="兴趣一般"
    //  }
    //  if(interest_score<=12){
    //   interest_result="不太感兴趣"
    //  }
    //  if(interest_score<=7.5){
    //   interest_result="很不感兴趣"
    //  }
    //  console.log(interest_result)
    //  if(final_score>75){
    //   final_result="优势学科"
    //  }
    //  if(interest_score<=75){
    //   final_result="胜任学科"
    //  }
    //  if(final_score<=60){
    //   final_result="弱势学科"
    //  }
    //  if(final_score<=45){
    //   final_result="洗洗睡吧"
    //  }
    //  wx.setStorageSync('chemistry', {"huaxue":2});
    //  wx.setStorageSync('chemi_result', [{"final_result":final_result},{"final_score":final_score},{"interest_result":interest_result},{"interest_score":interest_score},{"wrong_list":this.data.lishui_score[7].wrong_list}]);
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
        name: '大于24 对化学学科非常感兴趣',
        data: 12,
        stroke: false
      },{
        name: '18与24之间 对化学学科比较感兴趣',
        data: 6,
        stroke: false
      }, {
        name: '12与18之间 对化学兴趣一般',
        data: 6,
        stroke: false
      }, {
        name: '7.5与12之间 对化学不太感兴趣',
        data: 6,
        stroke: false
      },{
        name: '小于7.5 对化学很不感兴趣',
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