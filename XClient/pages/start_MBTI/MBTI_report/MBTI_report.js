// pages/start_MBTI/MBTI_report/MBTI_report.js
var eight_data=[];
var result=[];
var result_name=[];
var final_name;
var result_detail=[];
var R;//最终在画面显示的数组开头索引数字
var wxCharts = require("../../../utils/wxcharts.js");
var windowW=0;
var E;
var I;
var S;
var N;
var T;
var F;
var J;
var P;

import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();
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
    R,
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let info = decodeURIComponent(options.info_final_score);
    let eight_data =JSON.parse(info);//上一级页面还有就是先转为字符串，到下一个页面再转为数组  参考文献https://www.cnblogs.com/lishuang2243/p/12653246.html
    console.log("我是8个传来的数据",eight_data);
    this.setData({
      eight_data:eight_data
     })
    console.log("我是E的成绩",this.data.eight_data[0].E_score)
    if(this.data.eight_data[0].E_score>this.data.eight_data[1].I_score){
      result.push({"E":this.data.eight_data[0].E_score})
    }
    console.log("我是比较1",result[0])
    if(this.data.eight_data[0].E_score<this.data.eight_data[1].I_score){
      result.push({"I":this.data.eight_data[1].I_score})
    }
    console.log("我是比较2",result[1])
    if(this.data.eight_data[2].S_score>this.data.eight_data[3].N_score){
      result.push({"S":this.data.eight_data[2].S_score})
    }
    console.log("我是比较3",result[2])
    if(this.data.eight_data[2].S_score<this.data.eight_data[3].N_score){
      result.push({"N":this.data.eight_data[3].N_score})
    }
    console.log("我是比较4",result[3])
    if(this.data.eight_data[4].T_score>this.data.eight_data[5].F_score){
      result.push({"T":this.data.eight_data[4].T_score})
    }
    if(this.data.eight_data[4].T_score<this.data.eight_data[5].F_score){
      result.push({"F":this.data.eight_data[5].F_score})
    }
    if(this.data.eight_data[6].J_score>this.data.eight_data[7].P_score){
      result.push({"J":this.data.eight_data[6].J_score})
    }
    if(this.data.eight_data[6].J_score==this.data.eight_data[7].P_score){
      result.push({"P":this.data.eight_data[7].P_score})
    }
    if(this.data.eight_data[6].J_score<this.data.eight_data[7].P_score){
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
    console.log("我是E",E)
    console.log("我是I",I)
    console.log("我是S",S)
    console.log("我是N",N)
    console.log("我是T",T)
    console.log("我是F",F)
    console.log("我是J",J)
    console.log("我是P",P)

    result_name=[ Object.getOwnPropertyNames(result[0]),Object.getOwnPropertyNames(result[1]),Object.getOwnPropertyNames(result[2]),Object.getOwnPropertyNames(result[3])]
    final_name=result_name.join("")
    console.log("我是result数组",result)
    console.log("我是final_name",final_name)
    const db = wx.cloud.database();
    wx.cloud.callFunction({
      name:"MBTI_report",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        for(var i=0;i<16;i++){
          if(res.result.data[i]._id==final_name){
            R=i
            break
          }
        }
        result=[];
        console.log("我是R",R)
        this.setData({
          result:result,
          result_detail:res.result.data,
          R:R,
          imageWidth: wx.getSystemInfoSync().windowWidth,
        })
      },
    })   
    
    windowW = this.data.imageWidth/375;
    this.echartCanve=this.selectComponent('#mychart-dom-line');
    this.init();
  },
  init:function(){
    this.echartCanve.init((canvas,width,height,dpr)=>{
      const chart=echarts.init(canvas,null,{
        width:width,
        height:height,
        devicePixelRatio: dpr
      });
        chart.setOption(this.getOption())
        return cahrt;
    })
  },

  getOption:function(){
    var option={
      xAxis: {
        type: 'category',
        data: ['E', 'I', 'S', 'N', 'T', 'F', 'J','P']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
       itemStyle: {
                         normal: {
                             label: {
                                 show: true,
                                 position: 'top',
                                 textStyle: {
                                     color: '#800080'
                                 }
                             },
                            color: function (params){
                              var colorList = ['#ff4844','#9ac3e5','#66ac52','#ffc032','#549bd3','#f47e39','#03ffd5','#ff03ff'];
                              return colorList[params.dataIndex];
                          }

                         }
                     },
        data: [this.data.eight_data[0].E_score, this.data.eight_data[1].I_score, this.data.eight_data[2].S_score, this.data.eight_data[3].N_score, this.data.eight_data[4].T_score, this.data.eight_data[5].F_score, this.data.eight_data[6].J_score, this.data.eight_data[7].P_score],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
        }
    }]
    }
    return option;
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
   
    wx.reLaunch({
      url: '../../pages/index/index',
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