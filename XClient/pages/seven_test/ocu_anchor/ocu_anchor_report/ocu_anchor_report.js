// pages/start_hld/start_hld.js
var ZYM_num;

var windowW=0;
var Max_size=[];
var pria_arr=[];
var DYZ_type_name=[];
var DYZ_fianl_arr=[];
var OCU_F=[];
var OCU_S=[];
var OCU_T=[];
import * as echarts from '../../../../ec-canvas/echarts';

const app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    ZYM_num:[],
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
    let info = decodeURIComponent(options.info_ZYM_score);
    let ZYM_num =JSON.parse(info);//上一级页面还有就是先转为字符串，到下一个页面再转为数组  参考文献https://www.cnblogs.com/lishuang2243/p/12653246.html
    // console.log(DYZ_num);
    this.setData({
      ZYM_num:ZYM_num,
      imageWidth: wx.getSystemInfoSync().windowWidth
     })
    console.log(this.data.ZYM_num) 
    pria_arr=[this.data.ZYM_num[0].a_s,this.data.ZYM_num[1].b_s,this.data.ZYM_num[2].c_s,this.data.ZYM_num[3].d_s,this.data.ZYM_num[4].A_s,this.data.ZYM_num[5].f_s,this.data.ZYM_num[6].g_s,this.data.ZYM_num[7].h_s]   

    Max_size=pria_arr.sort(function(a,b){return b-a})   
    console.log("我是max_size数组",Max_size)
    if(Max_size[0]==this.data.ZYM_num[0].a_s){//=赋值  ==等于
      DYZ_type_name.push("a_s")
      DYZ_fianl_arr.push(0)
    } ;
    if(Max_size[0]==this.data.ZYM_num[1].b_s){
      DYZ_type_name.push("b_s")
      DYZ_fianl_arr.push(1)
    } ;
    if(Max_size[0]==this.data.ZYM_num[2].c_s){
      DYZ_type_name.push("c_s")
      DYZ_fianl_arr.push(2)
    } ;
    if(Max_size[0]==this.data.ZYM_num[3].d_s){
      DYZ_type_name.push("d_s")
      DYZ_fianl_arr.push(3)
    } ;
    if(Max_size[0]==this.data.ZYM_num[4].A_s){
      DYZ_type_name.push("A_s")
      DYZ_fianl_arr.push(4)
    } ;
    if(Max_size[0]==this.data.ZYM_num[5].f_s){
      DYZ_type_name.push("f_s")
      DYZ_fianl_arr.push(5)
    };       
    if(Max_size[0]==this.data.ZYM_num[6].g_s){
      DYZ_type_name.push("g_s")
      DYZ_fianl_arr.push(6)
    };     
    if(Max_size[0]==this.data.ZYM_num[7].h_s){
      DYZ_type_name.push("h_s")
      DYZ_fianl_arr.push(7)
    };  
    //--------------------2---------------------
    if(Max_size[1]==this.data.ZYM_num[0].a_s){//=赋值  ==等于
      DYZ_type_name.push("a_s")
      DYZ_fianl_arr.push(0)
    } ;
    if(Max_size[1]==this.data.ZYM_num[1].b_s){
      DYZ_type_name.push("b_s")
      DYZ_fianl_arr.push(1)
    } ;
    if(Max_size[1]==this.data.ZYM_num[2].c_s){
      DYZ_type_name.push("c_s")
      DYZ_fianl_arr.push(2)
    } ;
    if(Max_size[1]==this.data.ZYM_num[3].d_s){
      DYZ_type_name.push("d_s")
      DYZ_fianl_arr.push(3)
    } ;
    if(Max_size[1]==this.data.ZYM_num[4].A_s){
      DYZ_type_name.push("A_s")
      DYZ_fianl_arr.push(4)
    } ;
    if(Max_size[1]==this.data.ZYM_num[5].f_s){
      DYZ_type_name.push("f_s")
      DYZ_fianl_arr.push(5)
    };       
    if(Max_size[1]==this.data.ZYM_num[6].g_s){
      DYZ_type_name.push("g_s")
      DYZ_fianl_arr.push(6)
    };     
    if(Max_size[1]==this.data.ZYM_num[7].h_s){
      DYZ_type_name.push("h_s")
      DYZ_fianl_arr.push(7)
    };  
    //------------------------------------3----------------------------------------------------
    if(Max_size[2]==this.data.ZYM_num[0].a_s){//=赋值  ==等于
      DYZ_type_name.push("a_s")
      DYZ_fianl_arr.push(0)
    } ;
    if(Max_size[2]==this.data.ZYM_num[1].b_s){
      DYZ_type_name.push("b_s")
      DYZ_fianl_arr.push(1)
    } ;
    if(Max_size[2]==this.data.ZYM_num[2].c_s){
      DYZ_type_name.push("c_s")
      DYZ_fianl_arr.push(2)
    } ;
    if(Max_size[2]==this.data.ZYM_num[3].d_s){
      DYZ_type_name.push("d_s")
      DYZ_fianl_arr.push(3)
    } ;
    if(Max_size[2]==this.data.ZYM_num[4].A_s){
      DYZ_type_name.push("A_s")
      DYZ_fianl_arr.push(4)
    } ;
    if(Max_size[2]==this.data.ZYM_num[5].f_s){
      DYZ_type_name.push("f_s")
      DYZ_fianl_arr.push(5)
    };       
    if(Max_size[2]==this.data.ZYM_num[6].g_s){
      DYZ_type_name.push("g_s")
      DYZ_fianl_arr.push(6)
    };     
    if(Max_size[2]==this.data.ZYM_num[7].h_s){
      DYZ_type_name.push("h_s")
      DYZ_fianl_arr.push(7)
    };  

    for(var i=0;i<DYZ_type_name.length;i++){
      if(DYZ_type_name[0]==DYZ_type_name[i+1]){
        DYZ_type_name.splice(i+1,1)
      }
    }
    for(var i=1;i<DYZ_type_name.length;i++){
      if(DYZ_type_name[1]==DYZ_type_name[i+1]){
        DYZ_type_name.splice(i+1,1)
      }
    }
    for(var i=2;i<DYZ_type_name.length;i++){
      if(DYZ_type_name[2]==DYZ_type_name[i+1]){
        DYZ_type_name.splice(i+1,1)
      }
    }
    for(var i=3;i<DYZ_type_name.length;i++){
      if(DYZ_type_name[3]==DYZ_type_name[i+1]){
        DYZ_type_name.splice(i+1,1)
      }
    }
    console.log("我是DYZ_type_name",DYZ_type_name)        
    console.log(DYZ_fianl_arr)                                                                                                              
    this.setData({
      DYZ_type_name:DYZ_type_name,
      DYZ_fianl_arr:DYZ_fianl_arr
    })
    const db = wx.cloud.database();
    wx.cloud.callFunction({
      name:"ZYM_report",
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
          data: ['技术', '管理', '自主', '安全', '创造', '服务', '挑战','生活']
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
          data: [this.data.ZYM_num[0].a_s,this.data.ZYM_num[1].b_s,this.data.ZYM_num[2].c_s,this.data.ZYM_num[3].d_s,this.data.ZYM_num[4].A_s,this.data.ZYM_num[5].f_s,this.data.ZYM_num[6].g_s,this.data.ZYM_num[7].h_s],
          type: 'line'
      }]
      };
      },
      getScaOption:function(){
        return {
          title: {
            text: "职业锚据统计",
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
            data: ['技术╱职能型', '管理型', '自主╱独立型', '安全╱稳定型', '创造╱创业型', '服务型','挑战型','生活型']
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
                data: [this.data.ZYM_num[0].a_s,this.data.ZYM_num[1].b_s,this.data.ZYM_num[2].c_s,this.data.ZYM_num[3].d_s,this.data.ZYM_num[4].A_s,this.data.ZYM_num[5].f_s,this.data.ZYM_num[6].g_s,this.data.ZYM_num[7].h_s]
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
