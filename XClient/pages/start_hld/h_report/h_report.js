// pages/start_hld/start_hld.js
import * as echarts from '../../../ec-canvas/echarts';
var person_type_data=[];
var reality_add ;
var research_add ;
var rt_add ;
var social_add ;
var enterprise_add ;
var routine_add ;
var Max_size=[];
var Max_size_2=[];
var Max;
var New_arr=[];
var type_name=[];
var real_type_name=[]
var occupational_interest=[];
var OCU_F=[]
var OCU_S=[]
var OCU_T=[]
var R;
var Y;
var A;
var S;
var E;
var O;
var X;
var F;
var chart=[];
const app = getApp();
//定义记录初始屏幕宽度比例，便于初始化
var windowW=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type_name:[],
    person_type_data:[],
    occupational_interest:[],
    X:0,
    ecBar: {
      lazyLoad: true // 延迟加载
      },
      
      ecScatter: {
      lazyLoad: true
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let info = decodeURIComponent(options.info);
    let person_type_data =JSON.parse(info);//上一级页面还有就是先转为字符串，到下一个页面再转为数组  参考文献https://www.cnblogs.com/lishuang2243/p/12653246.html
    console.log("我是person",person_type_data);
    var that =this;
    this.setData({
      person_type_data:person_type_data
     })
 
    console.log("我是现实",this.data.person_type_data[0].reality_add)
    console.log("我是数组2",this.data.person_type_data[1])
    R=this.data.person_type_data[0].reality_add
    Y=this.data.person_type_data[1].research_add
    A=this.data.person_type_data[2].rt_add
    S=this.data.person_type_data[3].social_add
    E=this.data.person_type_data[4].enterprise_add
    O=this.data.person_type_data[5].routine_add
    New_arr=[R,Y,A,S,E,O]
    console.log("我是新数组",New_arr)
    Max=Math.max.apply(Math,New_arr)
    // Max = Object.getOwnPropertyNames([this.data.person_type_data[0] , this.data.person_type_data[1] ,this.data.person_type_data[2] ,this.data.person_type_data[3] , this.data.person_type_data[4] , this.data.person_type_data[5] ])//参考文献https://blog.csdn.net/weixin_38897313/article/details/100977462 //https://www.cnblogs.com/joyho/articles/5499169.html
    // console.log(type_name)                                                                    
        console.log("我是最大数",Max)
        
    Max_size=New_arr.sort(function(a,b){return b-a}) 
    Max_size_2=this.data.person_type_data.sort(function(a,b){return b-a})
    console.log("我是排序数组",Max_size)
    console.log("我是排序数组",Max_size_2)
    if(Max_size[0]==this.data.person_type_data[0].reality_add){//=赋值  ==等于
      type_name.push("reality_add")
    } ;
    if(Max_size[0]==this.data.person_type_data[1].research_add){
      type_name.push("research_add")
    } ;
    if(Max_size[0]==this.data.person_type_data[2].rt_add){
      type_name.push("rt_add")
    } ;
    if(Max_size[0]==this.data.person_type_data[3].social_add){
      type_name.push("social_add")
    } ;
    if(Max_size[0]==this.data.person_type_data[4].enterprise_add){
      type_name.push("enterprise_add")
    } ;
    if(Max_size[0]==this.data.person_type_data[5].routine_add){
      type_name.push("routine_add")
    };

    if(Max_size[1]==this.data.person_type_data[0].reality_add){//=赋值  ==等于
      type_name.push("reality_add")
    } ;
    if(Max_size[1]==this.data.person_type_data[1].research_add){
      type_name.push("research_add")
    } ;
    if(Max_size[1]==this.data.person_type_data[2].rt_add){
      type_name.push("rt_add")
    } ;
    if(Max_size[1]==this.data.person_type_data[3].social_add){
      type_name.push("social_add")
    } ;
    if(Max_size[1]==this.data.person_type_data[4].enterprise_add){
      type_name.push("enterprise_add")
    } ;
    if(Max_size[1]==this.data.person_type_data[5].routine_add){
      type_name.push("routine_add")
    };

    if(Max_size[2]==this.data.person_type_data[0].reality_add){//=赋值  ==等于
      type_name.push("reality_add")
    } ;
    if(Max_size[2]==this.data.person_type_data[1].research_add){
      type_name.push("research_add")
    } ;
    if(Max_size[2]==this.data.person_type_data[2].rt_add){
      type_name.push("rt_add")
    } ;
    if(Max_size[2]==this.data.person_type_data[3].social_add){
      type_name.push("social_add")
    } ;
    if(Max_size[2]==this.data.person_type_data[4].enterprise_add){
      type_name.push("enterprise_add")
    } ;
    if(Max_size[2]==this.data.person_type_data[5].routine_add){
      type_name.push("routine_add")
    };
    F=type_name[0]
    console.log("我是type_name",type_name)

    real_type_name.push(type_name[0])
    real_type_name.push(type_name[1])
    if(type_name[0]==type_name[2]||type_name[1]==type_name[3]){
      real_type_name.push(type_name[4])
    };
    if(type_name[0]!=type_name[2]||type_name[1]!=type_name[3]){
      real_type_name.push(type_name[2])
    };
    console.log("我是最后的数组-------",real_type_name)
    const db = wx.cloud.database();
    wx.cloud.callFunction({
      name:"HLD_ocup",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        for(var i=0;i<6;i++){
          if(res.result.data[i]._id==real_type_name[0]){
            OCU_F=res.result.data[i]
            break
          }
        }
        for(var i=0;i<6;i++){
          if(res.result.data[i]._id==real_type_name[1]){
            OCU_S=res.result.data[i]
            break
          }
        }
        for(var i=0;i<6;i++){
          if(res.result.data[i]._id==real_type_name[2]){
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
    this.setData({
      type_name:type_name,
      real_type_name:real_type_name,
      R:R,
      Y:Y,
      A:A,
      S:S,
      E:E,
      O:O,
      imageWidth: wx.getSystemInfoSync().windowWidth
    })//要想把变量拿到外面，必须this.setData
      windowW = this.data.imageWidth/375;

        
        // console.log(this.data.occupational_interest[0])
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
        title: {
          
      },
      tooltip: {},
     
      radar: {
          // shape: 'circle',
          name: {
              textStyle: {
                  color: '#fff',
                  backgroundColor: '#999',
                  borderRadius: 3,
                  padding: [3, 5]
              }
          },
          indicator: [
              { name: '现实型', max: 45},
              { name: '研究型', max: 45},
              { name: '艺术型', max: 45},
              { name: '社会型', max: 45},
              { name: '企业型', max: 45},
              { name: '常规型', max: 45}
          ]
      },
      series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
              {
                  value: [R, Y, A, S, E, O],
                  name: '预算分配（Allocated Budget）',
                  label: {
                      normal: {
                          show: true,
                          formatter:function(params) {
                              return params.value;
                          }
                      }
                  }
                  
              },
             
          ]
      }]
      };
      },
      getScaOption:function(){
        return {
          title: {
            text: "霍兰德数据可视化图表",
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
            data: ['现实型', '研究型', '艺术型', '社会型', '企业型', '常规型']
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
                                      var colorList = ['#ff4844','#9ac3e5','#66ac52','#ffc032','#549bd3','#f47e39'];
                                      return colorList[params.dataIndex];
                                  }
        
                                 }
                             },
                name: '分数',
                type: 'bar',
                data: [R, Y, A, S, E, O]
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
    type_name=[]
    real_type_name=[]
    this.setData({
      type_name:type_name,
      real_type_name:real_type_name
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