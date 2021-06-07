// pages/start_MBTI/start_MBTI.js
var E_I=[];
var all_arr=0;
var D_num=0;
var S_num=0;
var I_num=0;
var C_num=0;

var final_score=[];
var info_EI_score;
var n=1;
jump:false

Page({

  /**
   * 页面的初始数据
   */
  data: {
    all_arr:0,
    final_score:[],
    n:1,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '加载中....',
      icon:'loading',
      duration:4000
    })
    wx.cloud.callFunction({
      name:"DISC",
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
    D_num++;
  
    console.log("_id",this.data.E_I[all_arr]._id)
    all_arr++;
   
   
    // console.log(all_arr)
    console.log("___________________________________________________")
    final_score=[{"D_score":D_num},{"S_score":S_num},{"I_score":I_num},{"C_score":C_num}]
    var info_final_score = encodeURIComponent(JSON.stringify(final_score))
    if (n>40) {
      wx.navigateTo({
        url: '../DISC_R/DISC_R?info_final_score='+info_final_score
      })
    }
    if(n>40){
      n=1
      D_num=0
      S_num=0
      I_num=0
      C_num=0
      all_arr=0
    }

    
    this.setData({
      all_arr:all_arr,
      D_num:D_num,
      S_num:S_num,
      I_num:I_num,
      C_num:C_num,
      n:n
    })
  },
  
  if_B : function(){
    console.log("第",n,"题")
    n++;
    S_num++;
  
    console.log("_id",this.data.E_I[all_arr]._id)
    all_arr++;
   
   
    final_score=[{"D_score":D_num},{"S_score":S_num},{"I_score":I_num},{"C_score":C_num}]
    var info_final_score = encodeURIComponent(JSON.stringify(final_score))
    if (n>40) {
      wx.navigateTo({
        url: '../DISC_R/DISC_R?info_final_score='+info_final_score
      })
    }
    if(n>40){
      n=1
      D_num=0
      S_num=0
      I_num=0
      C_num=0
      all_arr=0
    }

    
    this.setData({
      all_arr:all_arr,
      D_num:D_num,
      S_num:S_num,
      I_num:I_num,
      C_num:C_num,
      
      n:n
    })
  },
  if_C : function(){
    console.log("第",n,"题")
    n++;
    I_num++;
  
    console.log("_id",this.data.E_I[all_arr]._id)
    all_arr++;
   
   
    final_score=[{"D_score":D_num},{"S_score":S_num},{"I_score":I_num},{"C_score":C_num}]
    var info_final_score = encodeURIComponent(JSON.stringify(final_score))
    if (n>40) {
      wx.navigateTo({
        url: '../DISC_R/DISC_R?info_final_score='+info_final_score
      })
    }
    if(n>40){
      n=1
      D_num=0
      S_num=0
      I_num=0
      C_num=0
      all_arr=0
    }
    
    this.setData({
      all_arr:all_arr,
      D_num:D_num,
      S_num:S_num,
      I_num:I_num,
      C_num:C_num,
      n:n
    })
  },

  if_D : function(){
    console.log("第",n,"题")
    n++;
    C_num++;
  
    console.log("_id",this.data.E_I[all_arr]._id)
    all_arr++;
   
   
    final_score=[{"D_score":D_num},{"S_score":S_num},{"I_score":I_num},{"C_score":C_num}]
    var info_final_score = encodeURIComponent(JSON.stringify(final_score))
    if (n>40) {
      wx.navigateTo({
        url: '../DISC_R/DISC_R?info_final_score='+info_final_score
      })
    }
    if(n>40){
      n=1
      D_num=0
      S_num=0
      I_num=0
      C_num=0
      all_arr=0
    }

    
    this.setData({
      all_arr:all_arr,
      D_num:D_num,
      S_num:S_num,
      I_num:I_num,
      C_num:C_num,
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
    D_num=0
    S_num=0
    I_num=0
    C_num=0
    all_arr=0
    this.setData({
      n:n,
      D_num:D_num,
      S_num:S_num,
      I_num:I_num,
      C_num:C_num,
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