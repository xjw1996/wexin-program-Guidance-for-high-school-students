// pages/start_MBTI/MBTI_report/MBTI_report.js
var eight_data=[];
var result=[];
var result_name=[];
var final_name;
var result_detail=[];
var R;//最终在画面显示的数组开头索引数字
var wxCharts = require("../../utils/wxcharts.js");
var windowW=0;
var E;
var I;
var S;
var N;
var T;
var F;
var J;
var P;
//https://blog.csdn.net/hangGe0111/article/details/81633947?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-2&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-2
Page({

  /**
   * 页面的初始数据
   */
  data: {
    eight_data:[],
    result:[],
    result_name:[],
    final_name,
    result_detail:[],
    E,
    I,
    S,
    N,
    T,
    F,
    J,
    P,
    R
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let info = decodeURIComponent(options.info_final_score);
    let eight_data =JSON.parse(info);//上一级页面还有就是先转为字符串，到下一个页面再转为数组  参考文献https://www.cnblogs.com/lishuang2243/p/12653246.html
    console.log(eight_data);
    this.setData({
      eight_data:eight_data
     })
    console.log(this.data.eight_data[0].E_score)
    if(this.data.eight_data[0].E_score>this.data.eight_data[1].I_score){
      result.push({"E":this.data.eight_data[0].E_score})
    }else{
      result.push({"I":this.data.eight_data[1].I_score})
    }
    if(this.data.eight_data[2].S_score>this.data.eight_data[3].N_score){
      result.push({"S":this.data.eight_data[2].S_score})
    }else{
      result.push({"N":this.data.eight_data[3].N_score})
    }
    if(this.data.eight_data[4].T_score>this.data.eight_data[5].F_score){
      result.push({"T":this.data.eight_data[4].T_score})
    }else{
      result.push({"F":this.data.eight_data[5].F_score})
    }
    if(this.data.eight_data[6].J_score>this.data.eight_data[7].P_score){
      result.push({"J":this.data.eight_data[6].J_score})
    }else if(this.data.eight_data[6].J_score==this.data.eight_data[7].P_score){
      result.push({"P":this.data.eight_data[7].P_score})
    }else{
      result.push({"P":this.data.eight_data[7].P_score})
    }
    E=this.data.eight_data[0].E_score
    I=this.data.eight_data[1].I_score
    S=this.data.eight_data[2].S_score
    N=this.data.eight_data[3].N_score
    T=this.data.eight_data[4].T_score
    F=this.data.eight_data[5].F_score
    J=this.data.eight_data[6].J_score
    P=this.data.eight_data[7].P_score
    result_name=[ Object.getOwnPropertyNames(result[0]),Object.getOwnPropertyNames(result[1]),Object.getOwnPropertyNames(result[2]),Object.getOwnPropertyNames(result[3])]
    final_name=result_name.join("")
    console.log(result)
    console.log(final_name)
    const db = wx.cloud.database();
    
    db.collection("MBTI_Report").get({
      success:res=>{
        console.log('获取数据成功，',res.data)
        for(var i=0;i<16;i++){
          if(res.data[i]._id==final_name){
            R=i
            break
          }
        }
        console.log("我是R",R)
        // console.log(res.data[0])
        // console.log("我是finalname",final_name)
        this.setData({
          result_detail:res.data,
          R:R,
          imageWidth: wx.getSystemInfoSync().windowWidth,
          E,
          I,
          S,
          N,
          T,
          F,
          J,
          P
        })
      },fail:err=>{
        console.log('获取数据失败，',err)
      }
      
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
  //   new wxCharts({
  //     canvasId: 'columnCanvas',
  //     type: 'column',
  //     categories: ['EI', 'SN', 'TF', 'JP'],
  //     series: [{
  //         name: '成交量1',
  //         data: [E, S, T, J]
  //     }, {
  //         name: '成交量2',
  //         data: [I, N, F, P]
  //     }],
  //     yAxis: 23,
  //     width: 320,
  //     height: 200
  // });
  new wxCharts({
    canvasId: 'columnCanvas',
    type: 'column',
    animation: true,
    categories: [ 'Bottle','Bento','Can'],
    series: [ {
      name: 'Full',
      data: [38,0,0],
      format: function (val, name) {
        return val.toFixed(2);
      }
    }, {
      name: 'Normal',
      data: [25,0,0],
      format: function (val, name) {
        return val.toFixed(2);
      }
    },{
      name: 'Insufficient',
      data: [35,0,0],
      format: function (val, name) {
        return val.toFixed(2);
      }
    },],
    yAxis: {
      format: function (val) {
        return val ;
      },
      min: 0,
      max:100,
    },
    xAxis: {
      disableGrid: false,
      type: 'calibration'
    },
    extra: {
      column: {
        width:70
      }
    },
    width: 300,
    height: 180
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