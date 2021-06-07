// pages/start_hld/start_hld.js
var DYZ_num;

var windowW=0;
var Max_size=[];
var pria_arr=[];
var DYZ_type_name=[];
var DYZ_fianl_arr=[];
var OCU_F=[];
var OCU_S=[];
var OCU_T=[];
import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    DYZ_num:[],
    Max_size:[],
    pria_arr:[],
    DYZ_type_name:[],
    DYZ_fianl_arr:[],
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
    // console.log(DYZ_num);
    this.setData({
      DYZ_num:DYZ_num,
      imageWidth: wx.getSystemInfoSync().windowWidth
     })
    console.log(this.data.DYZ_num) 
    console.log(this.data.DYZ_num[1].math)
    pria_arr=[this.data.DYZ_num[0].language,this.data.DYZ_num[1].math,this.data.DYZ_num[2].vision,this.data.DYZ_num[3].body,this.data.DYZ_num[4].music,this.data.DYZ_num[5].human_communication,this.data.DYZ_num[6].introspection,this.data.DYZ_num[7].nature]   

    Max_size=pria_arr.sort(function(a,b){return b-a})   
    console.log("我是max_size数组",Max_size)
    if(Max_size[0]==this.data.DYZ_num[0].language){//=赋值  ==等于
      DYZ_type_name.push("language")
      DYZ_fianl_arr.push(0)
    } ;
    if(Max_size[0]==this.data.DYZ_num[1].math){
      DYZ_type_name.push("math")
      DYZ_fianl_arr.push(1)
    } ;
    if(Max_size[0]==this.data.DYZ_num[2].vision){
      DYZ_type_name.push("vision")
      DYZ_fianl_arr.push(2)
    } ;
    if(Max_size[0]==this.data.DYZ_num[3].body){
      DYZ_type_name.push("body")
      DYZ_fianl_arr.push(3)
    } ;
    if(Max_size[0]==this.data.DYZ_num[4].music){
      DYZ_type_name.push("music")
      DYZ_fianl_arr.push(4)
    } ;
    if(Max_size[0]==this.data.DYZ_num[5].human_communication){
      DYZ_type_name.push("human_communication")
      DYZ_fianl_arr.push(5)
    };       
    if(Max_size[0]==this.data.DYZ_num[6].introspection){
      DYZ_type_name.push("introspection")
      DYZ_fianl_arr.push(6)
    };     
    if(Max_size[0]==this.data.DYZ_num[7].nature){
      DYZ_type_name.push("nature")
      DYZ_fianl_arr.push(7)
    };  
    //--------------------2---------------------
    if(Max_size[1]==this.data.DYZ_num[0].language){//=赋值  ==等于
      DYZ_type_name.push("language")
      DYZ_fianl_arr.push(0)
    } ;
    if(Max_size[1]==this.data.DYZ_num[1].math){
      DYZ_type_name.push("math")
      DYZ_fianl_arr.push(1)
    } ;
    if(Max_size[1]==this.data.DYZ_num[2].vision){
      DYZ_type_name.push("vision")
      DYZ_fianl_arr.push(2)
    } ;
    if(Max_size[1]==this.data.DYZ_num[3].body){
      DYZ_type_name.push("body")
      DYZ_fianl_arr.push(3)
    } ;
    if(Max_size[1]==this.data.DYZ_num[4].music){
      DYZ_type_name.push("music")
      DYZ_fianl_arr.push(4)
    } ;
    if(Max_size[1]==this.data.DYZ_num[5].human_communication){
      DYZ_type_name.push("human_communication")
      DYZ_fianl_arr.push(5)
    };       
    if(Max_size[1]==this.data.DYZ_num[6].introspection){
      DYZ_type_name.push("introspection")
      DYZ_fianl_arr.push(6)
    };     
    if(Max_size[1]==this.data.DYZ_num[7].nature){
      DYZ_type_name.push("nature")
      DYZ_fianl_arr.push(7)
    };            
    //------------------------------------3----------------------------------------------------
    if(Max_size[2]==this.data.DYZ_num[0].language){//=赋值  ==等于
      DYZ_type_name.push("language")
      DYZ_fianl_arr.push(0)
    } ;
    if(Max_size[2]==this.data.DYZ_num[1].math){
      DYZ_type_name.push("math")
      DYZ_fianl_arr.push(1)
    } ;
    if(Max_size[2]==this.data.DYZ_num[2].vision){
      DYZ_type_name.push("vision")
      DYZ_fianl_arr.push(2)
    } ;
    if(Max_size[2]==this.data.DYZ_num[3].body){
      DYZ_type_name.push("body")
      DYZ_fianl_arr.push(3)
    } ;
    if(Max_size[2]==this.data.DYZ_num[4].music){
      DYZ_type_name.push("music")
      DYZ_fianl_arr.push(4)
    } ;
    if(Max_size[2]==this.data.DYZ_num[5].human_communication){
      DYZ_type_name.push("human_communication")
      DYZ_fianl_arr.push(5)
    };       
    if(Max_size[2]==this.data.DYZ_num[6].introspection){
      DYZ_type_name.push("introspection")
      DYZ_fianl_arr.push(6)
    };     
    if(Max_size[2]==this.data.DYZ_num[7].nature){
      DYZ_type_name.push("nature")
      DYZ_fianl_arr.push(7)
    };  
    console.log("我是DYZ_type_name",DYZ_type_name)        
    console.log(DYZ_fianl_arr)                                                                                                              
    this.setData({
      DYZ_type_name:DYZ_type_name,
      DYZ_fianl_arr:DYZ_fianl_arr
    })
    const db = wx.cloud.database();
    wx.cloud.callFunction({
      name:"GET_DYZN_report",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        for(var i=0;i<9;i++){
          if(res.result.data[i]._id==DYZ_type_name[0]){
            OCU_F=res.result.data[i]
            break
          }
        }
        for(var i=0;i<9;i++){
          if(res.result.data[i]._id==DYZ_type_name[1]){
            OCU_S=res.result.data[i]
            break
          }
        }
        for(var i=0;i<9;i++){
          if(res.result.data[i]._id==DYZ_type_name[2]){
            OCU_T=res.result.data[i]
            break
          }
        }
      
        console.log("我是OCU_F",OCU_F)
        console.log("我是OCU_S",OCU_S)
        console.log("我是OCU_T",OCU_T)
        this.setData({
          OCU_F:OCU_F,
          OCU_S:OCU_S,
          OCU_T:OCU_T,
        })
      },
    })  
    console.log(this.data.imageWidth)
 
    //计算屏幕宽度比列
    windowW = this.data.imageWidth/375
    console.log(windowW)
     //.sort(function(a,b){return b-a})
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

    getBarOption:function(){
      //return 请求数据
      return {
        xAxis: {
          type: 'category',
          data: ['语言', '数理', '视觉', '音乐', '身体', '人际', '自省','自然']
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
                                     
                                   }
                               },
          data: [this.data.DYZ_num[0].language, this.data.DYZ_num[1].math, this.data.DYZ_num[2].vision, this.data.DYZ_num[4].music, this.data.DYZ_num[3].body, this.data.DYZ_num[5].human_communication, this.data.DYZ_num[6].introspection,this.data.DYZ_num[7].nature],
          type: 'line'
      }]
      };
      },
      getScaOption:function(){
        return {
          title: {
            text: "多元智能数据统计",
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
            data: ['语言智能', '数理智能', '视觉智能', '音乐智能', '身体智能', '人际智能', '自省智能','自然智能']
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
                data: [this.data.DYZ_num[0].language, this.data.DYZ_num[1].math, this.data.DYZ_num[2].vision, this.data.DYZ_num[4].music, this.data.DYZ_num[3].body, this.data.DYZ_num[5].human_communication, this.data.DYZ_num[6].introspection,this.data.DYZ_num[7].nature]
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
    DYZ_type_name=[]
    DYZ_fianl_arr=[]
    this.setData({
      DYZ_type_name:DYZ_type_name,
      DYZ_fianl_arr:DYZ_fianl_arr
    })
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
