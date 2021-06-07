var DYZ_num;
var wxCharts = require("../../../../utils/wxcharts.js");
import * as echarts from '../../../../ec-canvas/echarts';
const app = getApp();
var windowW=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      lazyLoad: true
    }
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
      title: {
        text: "",
    },
    
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['不断更新', '统合综效', '知彼解己', '双赢思维', '要事第一', '以终为始','积极主动']
    },
    
    series: [
        {
           itemStyle: {
                             normal: {
                                 label: {
                                     show: true,
                                     position: 'right',
                                     textStyle: {
                                         color: '#800080'
                                     }
                                 },
                                color: function (params){
                                  var colorList = ['#ff4844','#9ac3e5','#66ac52','#ffc032','#549bd3','#f47e39','#00FA9A','#FF1493'];
                                  return colorList[params.dataIndex];
                              }
    
                             }
                         },
            name: '分数',
            type: 'bar',
            data: [this.data.DYZ_num[6].G_s, this.data.DYZ_num[5].F_s, this.data.DYZ_num[4].E_s, this.data.DYZ_num[3].D_s, this.data.DYZ_num[2].C_s, this.data.DYZ_num[1].B_s, this.data.DYZ_num[0].A_s]
        },
      
    ]
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