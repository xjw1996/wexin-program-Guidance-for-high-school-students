// pages/start_MBTI/start_MBTI.js
var E_I=[];
var all_arr=0;
var E_num=0;
var I_num=0;
var S_num=0;
var N_num=0;
var T_num=0;
var F_num=0;
var J_num=0;
var P_num=0;
var final_score=[];
var info_EI_score;
var n=1;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    all_arr:0,
    final_score:[],
    n:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '加载中....',
      icon:'loading',
      duration:3000
    })
    wx.cloud.callFunction({
      name:"get_MBTI_data",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        this.setData({
          E_I:  res.result.data,
          n:n
        })
      },
    })   
  },

  if_A : function(){
    console.log("第",n,"题")
    n++;
    console.log("我是_id",this.data.E_I[all_arr]._id)
    if(this.data.E_I[all_arr]._id<21){
      console.log(this.data.E_I._id)
      E_num++;
    }
    if(this.data.E_I[all_arr]._id>21&&this.data.E_I[all_arr]._id<21<49){
      S_num++;
    }
    if(this.data.E_I[all_arr]._id>48&&this.data.E_I[all_arr]._id<72){
      T_num++;
    }
    if(this.data.E_I[all_arr]._id>72){
      J_num++;
    }
    
    console.log("_id",this.data.E_I[all_arr]._id)
    all_arr++;
    console.log("我是E",E_num)
    console.log("我是S",S_num)
    console.log("我是T",T_num)
    console.log("我是J",J_num)
    // console.log(all_arr)
    console.log("___________________________________________________")
    final_score=[{"E_score":E_num},{"I_score":I_num},{"S_score":S_num},{"N_score":N_num},{"T_score":T_num},{"F_score":F_num},{"J_score":J_num},{"P_score":P_num}]
    var info_final_score = encodeURIComponent(JSON.stringify(final_score))
    if (n>93) {
      wx.redirectTo({
        url: '../start_MBTI/MBTI_report/MBTI_report?info_final_score='+info_final_score
      })
    }
    if(n>93){
      n=1,
      E_num=0,
      I_num=0,
      S_num=0,
      N_num=0,
      T_num=0,
      F_num=0,
      J_num=0,
      P_num=0,
      all_arr=0
    }

    
    this.setData({
      all_arr:all_arr,
      E_num:E_num,
      I_num:I_num,
      S_num:S_num,
      N_num:N_num,
      T_num:T_num,
      F_num:F_num,
      J_num:J_num,
      P_num:P_num,
      n:n
    })
  },
  
  if_B : function(){
    n++
    if(this.data.E_I[all_arr]._id<21){
      I_num++;
    }
    if(this.data.E_I[all_arr]._id>21&&this.data.E_I[all_arr]._id<49){
      N_num++;
    }
    if(this.data.E_I[all_arr]._id>48&&this.data.E_I[all_arr]._id<72){
      F_num++;
    }
    if(this.data.E_I[all_arr]._id>72){
      P_num++;
    }
   
    all_arr++;
    console.log("我是I",I_num)
    console.log("我是N",N_num)
    console.log("我是F",F_num)
    console.log("我是P",P_num)
    // console.log(EI_arr)
    final_score=[{"E_score":E_num},{"I_score":I_num},{"S_score":S_num},{"N_score":N_num},{"T_score":T_num},{"F_score":F_num},{"J_score":J_num},{"P_score":P_num}]
    var info_final_score = encodeURIComponent(JSON.stringify(final_score))
    if (n>93) {
      wx.redirectTo({
        url: '../start_MBTI/MBTI_report/MBTI_report?info_final_score='+info_final_score
      })
    }
    if(n>93){
      n=1,
      E_num=0,
      I_num=0,
      S_num=0,
      N_num=0,
      T_num=0,
      F_num=0,
      J_num=0,
      P_num=0,
      all_arr=0
    }

    
    this.setData({
      all_arr:all_arr,
      E_num:E_num,
      I_num:I_num,
      S_num:S_num,
      N_num:N_num,
      T_num:T_num,
      F_num:F_num,
      J_num:J_num,
      P_num:P_num,
      n:n
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
    n =1
    all_arr=0
    this.setData({
      n:n,
      all_arr:all_arr
    })
    wx.reLaunch({
      url: '../../pages/index/index'
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