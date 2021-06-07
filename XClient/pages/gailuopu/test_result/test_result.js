// pages/XUEKE/lishi_result/lishi_result.js
var Max_size=[];
var string_num=[];
var string_name=[];
var image_score;
var all_arr_string=[];
var all_arr_score=[];
var copy_all_arr_score=[];
var final_s=[];
var all_arr_array=[]
var final_score;
var final_result;
var interest_score;
var interest_result;
var a;
var b;
var c;
var d;
var e;
var a_;
var b_;
var c_;
var d_;
var e_;
var a_s;
var b_s;
var c_s;
var d_s;
var e_s;
var OCU_F;
var OCU_S;
var OCU_T;
var OCU_A;
var OCU_D;
var array_=[]


import * as echarts from '../../../ec-canvas/echarts';
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
    var all_arr_string =wx.getStorageSync('gailuopu_string')||[];
    var all_arr_score =wx.getStorageSync('gailuopu_score')||[];
    var all_arr_array =wx.getStorageSync('gailuopu_array')||[];

    console.log("我是all_arr_string",all_arr_string)
    console.log("我是all_arr_score",all_arr_score)
    console.log("我是all_arr_array",all_arr_array)
    for(var i=0;i<all_arr_score.length;i++){ 
      copy_all_arr_score.push(all_arr_score[i])
    }
    console.log("我是copy_all_arr_score第一次",copy_all_arr_score)
    Max_size=all_arr_score.sort(function(a,b){return b-a})   
    console.log("我是Max_size",Max_size)
    console.log("我是copy_all_arr_score[0]",copy_all_arr_score[0])
    
    for(var i=0;i<all_arr_array.length;i++){
      if(Max_size[0]==all_arr_array[i].socre){
        string_num.push(i)
        string_name.push(all_arr_array[i].name)
      }
    }
    for(var i=0;i<copy_all_arr_score.length;i++){
      if(Max_size[1]==all_arr_array[i].socre){
        string_num.push(i)
        string_name.push(all_arr_array[i].name)
      }
    }
    for(var i=0;i<copy_all_arr_score.length;i++){
      if(Max_size[2]==copy_all_arr_score[i]){
        string_num.push(i)
        string_name.push(all_arr_array[i].name)
      }
    }
    for(var i=0;i<copy_all_arr_score.length;i++){
      if(Max_size[3]==copy_all_arr_score[i]){
        string_num.push(i)
        string_name.push(all_arr_array[i].name)
      }
    }
    for(var i=0;i<copy_all_arr_score.length;i++){
      if(Max_size[4]==copy_all_arr_score[i]){
        string_num.push(i)
        string_name.push(all_arr_array[i].name)
      }
    }

    console.log("我是string_num",string_num)
    console.log("我是string_name",string_name)


    for(var i=0;i<string_name.length;i++){
      if(string_name[0]==string_name[i+1]){
        string_name.splice(i+1,1)
      }
    }
    for(var i=1;i<string_name.length;i++){
      if(string_name[1]==string_name[i+1]){
        string_name.splice(i+1,1)
      }
    }
    for(var i=2;i<string_name.length;i++){
      if(string_name[2]==string_name[i+1]){
        string_name.splice(i+1,1)
      }
    }
    for(var i=3;i<string_name.length;i++){
      if(string_name[3]==string_name[i+1]){
        string_name.splice(i+1,1)
      }
    }
    for(var i=4;i<string_name.length;i++){
      if(string_name[4]==string_name[i+1]){
        string_name.splice(i+1,1)
      }
    }
    for(var i=5;i<string_name.length;i++){
      if(string_name[5]==string_name[i+1]){
        string_name.splice(i+1,1)
      }
    }
   
    console.log("我是string_name",string_name)

    for(var i=0;i<all_arr_array.length;i++){
      if(string_name[0]==all_arr_array[i].name){
        final_s.push(all_arr_array[i].socre)
      }
    }
    for(var i=0;i<all_arr_array.length;i++){
      if(string_name[1]==all_arr_array[i].name){
        final_s.push(all_arr_array[i].socre)
      }
    }
    for(var i=0;i<all_arr_array.length;i++){
      if(string_name[2]==all_arr_array[i].name){
        final_s.push(all_arr_array[i].socre)
      }
    }

    for(var i=0;i<all_arr_array.length;i++){
      if(string_name[3]==all_arr_array[i].name){
        final_s.push(all_arr_array[i].socre)
      }
    }
    for(var i=0;i<all_arr_array.length;i++){
      if(string_name[4]==all_arr_array[i].name){
        final_s.push(all_arr_array[i].socre)
      }
    }
    console.log("我是final_s",final_s)
    a=string_num[0]
    b=string_num[1]
    c=string_num[2]
    d=string_num[3]
    e=string_num[4]
    a_=string_name[0]
    b_=string_name[1]
    c_=string_name[2]
    d_=string_name[3]
    e_=string_name[4]
    a_s=final_s[0]
    b_s=final_s[1]
    c_s=final_s[2]
    d_s=final_s[3]
    e_s=final_s[4]
    console.log("我是a_",a_)
    console.log("我是b_",b_)
    console.log("我是c_",c_)
    console.log("我是d_",d_)
    console.log("我是e_",e_)
    console.log("我是a_s",a_s)
    console.log("我是b_s",b_s)
    console.log("我是c_s",c_s)
    console.log("我是d_s",d_s)
    console.log("我是e_s",e_s)
    const db = wx.cloud.database();
    wx.cloud.callFunction({
      name:"get_hld_detail",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        array_=res.result.data
        for(var i=0;i<res.result.data.length;i++){
          if(res.result.data[i].type==string_name[0]){
            OCU_F=res.result.data[i]._id
            break
          }
        }
        for(var i=0;i<res.result.data.length;i++){
          if(res.result.data[i].type==string_name[1]){
            OCU_S=res.result.data[i]._id
            break
          }
        }
        for(var i=0;i<res.result.data.length;i++){
          if(res.result.data[i].type==string_name[2]){
            OCU_T=res.result.data[i]._id
            break
          }
        }
        for(var i=0;i<res.result.data.length;i++){
          if(res.result.data[i].type==string_name[3]){
            OCU_A=res.result.data[i]._id
            break
          }
        }
        for(var i=0;i<res.result.data.length;i++){
          if(res.result.data[i].type==string_name[4]){
            OCU_D=res.result.data[i]._id
            break
          }
        }
      
        console.log("我是OCU_F",OCU_F)
        console.log("我是OCU_S",OCU_S)
        console.log("我是OCU_T",OCU_T)
        console.log("我是OCU_A",OCU_A)
        console.log("我是OCU_D",OCU_D)
        this.setData({
          OCU_F:OCU_F,
          OCU_S:OCU_S,
          OCU_T:OCU_T,
          OCU_A:OCU_A,
          OCU_D:OCU_D,
          array_:array_
        })
      },
    })  
    this.setData({
   
      imageWidth: wx.getSystemInfoSync().windowWidth
     })
     windowW = this.data.imageWidth/375;
    
     this.setData({
      all_arr_string:all_arr_string,
      all_arr_score:all_arr_score,
      Max_size:Max_size,
      string_num:string_num,
      all_arr_array:all_arr_array,
      final_s:final_s,
      string_name:string_name,
      a_:a_,
      b_:b_,
      c_:c_,
      d_:d_,
      e_:e_,
      a_s:a_s,
      b_s:b_s,
      c_s:c_s,
      d_s:d_s,
      e_s:e_s,
    
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
        data: [this.data.a_, this.data.b_, this.data.c_, this.data.d_, this.data.e_]
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
                              var colorList = ['#ff4844','#9ac3e5','#66ac52','#ffc032','#549bd3'];
                              return colorList[params.dataIndex];
                          }

                         }
                     },
        data: [this.data.a_s, this.data.b_s, this.data.c_s, this.data.d_s, this.data.e_s],
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
    final_s=[]
    copy_all_arr_score=[]
    string_nsum=[]
    string_name=[]
    this.setData({
      copy_all_arr_score:copy_all_arr_score,
      string_num:string_num,
      string_name:string_name,
      final_s:final_s
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