// pages/news/news.js
var horizontal=[];
var content=[];
var n=0;
var queslist=[];
var whether;

var list_1=[];
var list_2=[];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    scrollLeft:0,
    whether:false,
    n:0,
    horizontal: [{
      id: 0,
      name: "理科",
    }, {
      id: 1,
        name: "文科",

    }],

    // list_1=[{
    //   "year":this.data.content[0].year,
    //   "recruit":this.data.content[0].recruit,
    //   "max":this.data.content[0].max,
    //   "min":this.data.content[0].min,
    //   "average":this.data.content[0].average,
    //   "enroll":this.data.content[0].enroll,
    //   "low":this.data.content[0].low
    // },{
    //   "year":this.data.content[1].year,
    //   "recruit":this.data.content[1].recruit,
    //   "max":this.data.content[1].max,
    //   "min":this.data.content[1].min,
    //   "average":this.data.content[1].average,
    //   "enroll":this.data.content[1].enroll,
    //   "low":this.data.content[1].low
    // },{
    //   "year":this.data.content[2].year,
    //   "recruit":this.data.content[2].recruit,
    //   "max":this.data.content[2].max,
    //   "min":this.data.content[2].min,
    //   "average":this.data.content[2].average,
    //   "enroll":this.data.content[2].enroll,
    //   "low":this.data.content[2].low
    // },{
    //   "year":this.data.content[3].year,
    //   "recruit":this.data.content[3].recruit,
    //   "max":this.data.content[3].max,
    //   "min":this.data.content[3].min,
    //   "average":this.data.content[3].average,
    //   "enroll":this.data.content[3].enroll,
    //   "low":this.data.content[3].low
    // },{
    //   "year":this.data.content[4].year,
    //   "recruit":this.data.content[4].recruit,
    //   "max":this.data.content[4].max,
    //   "min":this.data.content[4].min,
    //   "average":this.data.content[4].average,
    //   "enroll":this.data.content[4].enroll,
    //   "low":this.data.content[4].low
    // },{
    //   "year":this.data.content[5].year,
    //   "recruit":this.data.content[5].recruit,
    //   "max":this.data.content[5].max,
    //   "min":this.data.content[5].min,
    //   "average":this.data.content[5].average,
    //   "enroll":this.data.content[5].enroll,
    //   "low":this.data.content[5].low
    // },{
    //   "year":this.data.content[6].year,
    //   "recruit":this.data.content[6].recruit,
    //   "max":this.data.content[6].max,
    //   "min":this.data.content[6].min,
    //   "average":this.data.content[6].average,
    //   "enroll":this.data.content[6].enroll,
    //   "low":this.data.content[6].low
    // }],

    // list_2=[{
    //   "year":this.data.content[0].year,
    //   "recruit":this.data.content[0].s_recruit,
    //   "max":this.data.content[0].s_max,
    //   "min":this.data.content[0].s_min,
    //   "average":this.data.content[0].s_average,
    //   "enroll":this.data.content[0].s_enroll,
    //   "low":this.data.content[0].s_low
    // },{
    //   "year":this.data.content[1].year,
    //   "recruit":this.data.content[1].s_recruit,
    //   "max":this.data.content[1].s_max,
    //   "min":this.data.content[1].s_min,
    //   "average":this.data.content[1].s_average,
    //   "enroll":this.data.content[1].s_enroll,
    //   "low":this.data.content[1].s_low
    // },{
    //   "year":this.data.content[2].year,
    //   "recruit":this.data.content[2].s_recruit,
    //   "max":this.data.content[2].s_max,
    //   "min":this.data.content[2].s_min,
    //   "average":this.data.content[2].s_average,
    //   "enroll":this.data.content[2].s_enroll,
    //   "low":this.data.content[2].s_low
    // },{
    //   "year":this.data.content[3].year,
    //   "recruit":this.data.content[3].s_recruit,
    //   "max":this.data.content[3].s_max,
    //   "min":this.data.content[3].s_min,
    //   "average":this.data.content[3].s_average,
    //   "enroll":this.data.content[3].s_enroll,
    //   "low":this.data.content[3].s_low
    // },{
    //   "year":this.data.content[4].year,
    //   "recruit":this.data.content[4].s_recruit,
    //   "max":this.data.content[4].s_max,
    //   "min":this.data.content[4].s_min,
    //   "average":this.data.content[4].s_average,
    //   "enroll":this.data.content[4].s_enroll,
    //   "low":this.data.content[4].s_low
    // },{
    //   "year":this.data.content[5].year,
    //   "recruit":this.data.content[5].s_recruit,
    //   "max":this.data.content[5].s_max,
    //   "min":this.data.content[5].s_min,
    //   "average":this.data.content[5].s_average,
    //   "enroll":this.data.content[5].s_enroll,
    //   "low":this.data.content[5].s_low
    // },{
    //   "year":this.data.content[6].year,
    //   "recruit":this.data.content[6].s_recruit,
    //   "max":this.data.content[6].s_max,
    //   "min":this.data.content[6].s_min,
    //   "average":this.data.content[6].s_average,
    //   "enroll":this.data.content[6].s_enroll,
    //   "low":this.data.content[6].s_low
    // }]
  },

  
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.horizontal)
    wx.cloud.callFunction({
      name:"get_Beijing_detail",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        console.log(res.result.data[0].year)
        this.setData({
          content:  res.result.data,
        })
      },
    })   

  },
  tabSelect(e) {
    console.log(e)
    
    if(e.currentTarget.id==0){
      content=this.data.list_1
    }
    if(e.currentTarget.id==1){
      content=this.data.list_2
    }
    if(e.currentTarget.id==2){
      variation=""
    }
    if(e.currentTarget.id==3){
      variation=""
    }
    if(e.currentTarget.id==0){
      whether="true"
    }
    if(e.currentTarget.id==1){
      whether="false"
    }
    console.log(whether)

    this.setData({
      TabCur: e.currentTarget.dataset.id,
      content:content,
      scrollLeft: (e.currentTarget.dataset.id-1)*60,
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