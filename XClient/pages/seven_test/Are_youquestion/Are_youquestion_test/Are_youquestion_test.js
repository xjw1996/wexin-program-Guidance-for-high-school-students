// pages/DuoZhiYuan/DuoZhiYuan.js
var AQ=[];
var S=0;
var final_score;
var b;
var q_n=0;
var arr=1;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr:1,
    q_n:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '加载中....',
      icon:'loading',
      duration:2000
    })
    wx.cloud.callFunction({
      name:"get_AYQ_data",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        this.setData({
          AQ:  res.result.data,
        })
      },
    })   
  },


  if_A : function(e){
    console.log("我是刚刚进来的题号",q_n)
    S+=3;
    arr++;
    
    q_n++;
    console.log("我是分数",S)
    console.log("我是加1之后的分数",q_n)
   
    final_score=S
    console.log("我是final_score",final_score)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (q_n>9) {
      wx.navigateTo({
        url: '../Are_youquestion_report/Are_youquestion_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(q_n>9){
      q_n=0,
      S=0,
      arr=1
    }
    this.setData({
      q_n:q_n,
      S:S,
      arr:arr
    })
  },
  
  if_B : function(e){
    console.log("我是刚刚进来的题号",q_n)
    S+=2;
    arr++;
    q_n++;
    console.log("我是分数",S)
    console.log("我是加1之后的分数",q_n)
   
    final_score=S
    console.log("我是final_score",final_score)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (q_n>9) {
      wx.navigateTo({
        url: '../Are_youquestion_report/Are_youquestion_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(q_n>9){
      q_n=0,
      S=0,
      arr=1
    }
    this.setData({
      q_n:q_n,
      S:S,
      arr:arr
    })
  },

  if_C : function(e){
    console.log("我是刚刚进来的题号",q_n)
    S+=1;
    arr++;
    q_n++;
    console.log("我是分数",S)
    console.log("我是加1之后的分数",q_n)
   
    final_score=S
    console.log("我是final_score",final_score)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (q_n>9) {
      wx.navigateTo({
        url: '../Are_youquestion_report/Are_youquestion_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(q_n>9){
      q_n=0,
      S=0,
      arr=1
    }
    this.setData({
      q_n:q_n,
      S:S,
      arr:arr
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


   S=0,
   q_n=0,
   arr=1
    
    this.setData({
      q_n:q_n,
      S:S,
      arr:arr
    })
    wx.navigateTo({
      url: '../../../index/index'
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