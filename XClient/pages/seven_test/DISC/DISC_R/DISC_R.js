// pages/seven_test/DISC/DISC_R/DISC_R.js
import * as echarts from '../../../../ec-canvas/echarts';
var four_data;
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
    let info = decodeURIComponent(options.info_final_score);
    let four_data =JSON.parse(info);//上一级页面还有就是先转为字符串，到下一个页面再转为数组  参考文献https://www.cnblogs.com/lishuang2243/p/12653246.html
    console.log("我是4个传来的数据",four_data);
    this.setData({
      four_data:four_data
     })

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
        data: ['支配型', '影响型', '稳健型', '服从型']
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
        data: [this.data.four_data[0].D_score, this.data.four_data[1].S_score, this.data.four_data[2].I_score, this.data.four_data[3].C_score],
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