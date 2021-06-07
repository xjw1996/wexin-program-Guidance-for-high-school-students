// pages/ocu_think/ocu_report/ocu_report.js
import * as echarts from '../../../ec-canvas/echarts';

var Max_size=[]
var Max=[]
var string_num=[]
var string_name=[]
var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var i;
var j;
var k;
var l;
var m;
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
    var all_arr_string =wx.getStorageSync('ocuthink_array')||[];
    var all_arr_num =wx.getStorageSync('ocuthink_num')||[];
    console.log("我是all_arr_string",all_arr_string)
    console.log("我是all_arr_num",all_arr_num)
    console.log("我是a",a)


    Max_size=all_arr_num.sort(function(a,b){return b-a})   
    console.log("我是Max_size",Max_size)


    for(var i=0;i<all_arr_num.length;i++){
      if(Max_size[0]===all_arr_string[i].socre){
        string_num.push(i)
        string_name.push(all_arr_string[i].name)
      }
    }
    for(var i=0;i<all_arr_num.length;i++){
      if(Max_size[1]===all_arr_string[i].socre){
        string_num.push(i)
        string_name.push(all_arr_string[i].name)
      }
    }
    for(var i=0;i<all_arr_num.length;i++){
      if(Max_size[2]===all_arr_string[i].socre){
        string_num.push(i)
        string_name.push(all_arr_string[i].name)
      }
    }
    console.log("我是sting_num",string_num)
    console.log("我是sting_name",string_name)

    for(var i=0;i<string_name.length;i++){
      if(string_name[0]==string_name[i+1]){
        string_name.splice(i+1,1)
        string_num.splice(i+1,1)
      }
    }
    for(var i=1;i<string_name.length;i++){
      if(string_name[1]==string_name[i+1]){
        string_name.splice(i+1,1)
        string_num.splice(i+1,1)
      }
    }
    for(var i=2;i<string_name.length;i++){
      if(string_name[2]==string_name[i+1]){
        string_name.splice(i+1,1)
        string_num.splice(i+1,1)
      }
    }
    for(var i=3;i<string_name.length;i++){
      if(string_name[3]==string_name[i+1]){
        string_name.splice(i+1,1)
        string_num.splice(i+1,1)
      }
    }
    for(var i=4;i<string_name.length;i++){
      if(string_name[4]==string_name[i+1]){
        string_name.splice(i+1,1)
        string_num.splice(i+1,1)
      }
    }
    for(var i=5;i<string_name.length;i++){
      if(string_name[5]==string_name[i+1]){
        string_name.splice(i+1,1)
        string_num.splice(i+1,1)
      }
    }

    console.log("我是sting_num",string_num)
    console.log("我是sting_name",string_name)
    this.setData({
      string_num:string_num,
      string_name:string_name,
      all_arr_string:all_arr_string,
      Max_size:Max_size
    })

    this.barComponent = this.selectComponent('#mychart-dom-multi-bar');
    this.scaComponnet = this.selectComponent('#mychart-dom-multi-scatter');
    this.init_bar();
    this.init_sca();

  },

  init_bar: function (){
    this.barComponent.init((canvas, width, height) => {
    // 初始化图表
    const barChart = echarts.init(canvas, null, {
    width: width,
    height: height
    });
    barChart.setOption(this.getBarOption());
    // 注意这里一定要返回 chart 实例，否则会影响事件处理等
    return barChart;
    });
    },
  init_sca: function () {
    this.scaComponnet.init((canvas, width, height) => {
    // 初始化图表
    const scaChart = echarts.init(canvas, null, {
    width: width,
    height: height
    });
    scaChart.setOption(this.getScaOption());
    // 注意这里一定要返回 chart 实例，否则会影响事件处理等
    return scaChart;
    });
    },
    // this.data.string_name[0], this.data.string_name[1], this.data.string_name[2]
    // this.data.Max_size[0],this.data.Max_size[1],this.data.Max_size[2]
    getBarOption:function(){
      //return 请求数据
      return {
        xAxis: {
          type: 'category',
          data: [this.data.string_name[0], this.data.string_name[1], this.data.string_name[2]]
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
          data: [this.data.Max_size[0],this.data.Max_size[1],this.data.Max_size[2]],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
          }
      
      }]
      };
      },
      getScaOption:function(){
        return {
          title: {
            text: "职业价值观数据统计",
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
            data: [this.data.all_arr_string[0].name, this.data.all_arr_string[1].name, this.data.all_arr_string[2].name, this.data.all_arr_string[3].name, this.data.all_arr_string[4].name, this.data.all_arr_string[5].name, this.data.all_arr_string[6].name, this.data.all_arr_string[7].name, this.data.all_arr_string[8].name, this.data.all_arr_string[9].name, this.data.all_arr_string[10].name, this.data.all_arr_string[11].name, this.data.all_arr_string[12].name]
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
                                      var colorList = ['#ff4844','#9ac3e5','#66ac52','#ffc032','#549bd3','#f47e39','#00FA9A','#FF1493','#FF5511',	'#9999FF','#9900FF','#FF0000',	'#FF0088'];
                                      return colorList[params.dataIndex];
                                  }
        
                                 }
                             },
                name: '分数',
                type: 'bar',
                data: [this.data.all_arr_string[0].socre, this.data.all_arr_string[1].socre, this.data.all_arr_string[2].socre, this.data.all_arr_string[3].socre, this.data.all_arr_string[4].socre, this.data.all_arr_string[5].socre, this.data.all_arr_string[6].socre, this.data.all_arr_string[7].socre, this.data.all_arr_string[8].socre, this.data.all_arr_string[9].socre, this.data.all_arr_string[10].socre, this.data.all_arr_string[11].socre, this.data.all_arr_string[12].socre]
            },
          
        ]
        };
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