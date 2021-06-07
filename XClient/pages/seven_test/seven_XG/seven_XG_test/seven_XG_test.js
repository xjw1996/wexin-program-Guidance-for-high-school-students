// pages/DuoZhiYuan/DuoZhiYuan.js
var XG=[];
var S=0;
var final_score;
var b;
var q_n=0;
var A=[1,2,3]
var B=[4,5,6]
var C=[7,8,9]
var D=[10,11,12]
var E=[13,14,15]
var F=[16,17,18]
var G=[19,20,21]
var A_s=0
var B_s=0
var C_s=0
var D_s=0
var E_s=0
var F_s=0
var G_s=0
var arr=1
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
      name:"get_xiguan_data",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        this.setData({
          XG:  res.result.data,
        })
      },
    })   
  },


  if_A : function(e){
    arr++
    console.log("我是刚刚进来的题号",q_n)
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==A[i]){
        A_s++
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==B[i]){
        B_s++
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==C[i]){
        C_s++
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==D[i]){
        D_s++
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==E[i]){
        E_s++
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==F[i]){
        F_s++
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==G[i]){
        G_s++
      }
    }
    console.log("A_s",A_s)
    console.log("B_s",B_s)
    console.log("C_s",C_s)
    console.log("D_s",D_s)
    console.log("E_s",E_s)
    console.log("F_s",F_s)
    console.log("G_s",G_s)
    
    q_n++;
    console.log("我是分数",S)
    console.log("我是加1之后的分数",q_n)
   
    final_score=[{"A_s":A_s},{"B_s":B_s},{"C_s":C_s},{"D_s":D_s},{"E_s":E_s},{"F_s":F_s},{"G_s":G_s}]
    console.log("我是final_score",final_score)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (q_n>20) {
      wx.navigateTo({
        url: '../seven_XG_report/seven_XG_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(q_n>20){
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
    arr++
    console.log("我是刚刚进来的题号",q_n)
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==A[i]){
        A_s=A_s+2
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==B[i]){
        B_s=B_s+2
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==C[i]){
        C_s=C_s+2
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==D[i]){
        D_s=D_s+2
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==E[i]){
        E_s=E_s+2
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==F[i]){
        F_s=F_s+2
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==G[i]){
        G_s=G_s+2
      }
    }
    console.log("A_s",A_s)
    console.log("B_s",B_s)
    console.log("C_s",C_s)
    console.log("D_s",D_s)
    console.log("E_s",E_s)
    console.log("F_s",F_s)
    console.log("G_s",G_s)
    q_n++;
    console.log("我是分数",S)
    console.log("我是加1之后的分数",q_n)
   
    final_score=[{"A_s":A_s},{"B_s":B_s},{"C_s":C_s},{"D_s":D_s},{"E_s":E_s},{"F_s":F_s},{"G_s":G_s}]
    console.log("我是final_score",final_score)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (q_n>20) {
      wx.navigateTo({
        url: '../seven_XG_report/seven_XG_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(q_n>20){
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
    arr++
    console.log("我是刚刚进来的题号",q_n)
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==A[i]){
        A_s=A_s+3
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==B[i]){
        B_s=B_s+3
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==C[i]){
        C_s=C_s+3
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==D[i]){
        D_s=D_s+3
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==E[i]){
        E_s=E_s+3
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==F[i]){
        F_s=F_s+3
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==G[i]){
        G_s=G_s+3
      }
    }
    console.log("A_s",A_s)
    console.log("B_s",B_s)
    console.log("C_s",C_s)
    console.log("D_s",D_s)
    console.log("E_s",E_s)
    console.log("F_s",F_s)
    console.log("G_s",G_s)
    q_n++;
    console.log("我是分数",S)
    console.log("我是加1之后的分数",q_n)
   
    final_score=[{"A_s":A_s},{"B_s":B_s},{"C_s":C_s},{"D_s":D_s},{"E_s":E_s},{"F_s":F_s},{"G_s":G_s}]
    console.log("我是final_score",final_score)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (q_n>20) {
      wx.navigateTo({
        url: '../seven_XG_report/seven_XG_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(q_n>20){
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
  

  if_D : function(e){
    arr++
    console.log("我是刚刚进来的题号",q_n)
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==A[i]){
        A_s=A_s+4
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==B[i]){
        B_s=B_s+4
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==C[i]){
        C_s=C_s+4
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==D[i]){
        D_s=D_s+4
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==E[i]){
        E_s=E_s+4
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==F[i]){
        F_s=F_s+4
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==G[i]){
        G_s=G_s+4
      }
    }
    console.log("A_s",A_s)
    console.log("B_s",B_s)
    console.log("C_s",C_s)
    console.log("D_s",D_s)
    console.log("E_s",E_s)
    console.log("F_s",F_s)
    console.log("G_s",G_s)
    q_n++;
    console.log("我是分数",S)
    console.log("我是加1之后的分数",q_n)
   
    final_score=[{"A_s":A_s},{"B_s":B_s},{"C_s":C_s},{"D_s":D_s},{"E_s":E_s},{"F_s":F_s},{"G_s":G_s}]
    console.log("我是final_score",final_score)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (q_n>20) {
      wx.navigateTo({
        url: '../seven_XG_report/seven_XG_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(q_n>20){
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
  
  if_E : function(e){
    arr++
    console.log("我是刚刚进来的题号",q_n)
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==A[i]){
        A_s=A_s+5
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==B[i]){
        B_s=B_s+5
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==C[i]){
        C_s=C_s+5
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==D[i]){
        D_s=D_s+5
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==E[i]){
        E_s=E_s+5
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==F[i]){
        F_s=F_s+5
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==G[i]){
        G_s=G_s+5
      }
    }
    console.log("A_s",A_s)
    console.log("B_s",B_s)
    console.log("C_s",C_s)
    console.log("D_s",D_s)
    console.log("E_s",E_s)
    console.log("F_s",F_s)
    console.log("G_s",G_s)
    q_n++;
    console.log("我是分数",S)
    console.log("我是加1之后的分数",q_n)
   
    final_score=[{"A_s":A_s},{"B_s":B_s},{"C_s":C_s},{"D_s":D_s},{"E_s":E_s},{"F_s":F_s},{"G_s":G_s}]
    console.log("我是final_score",final_score)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (q_n>20) {
      wx.navigateTo({
        url: '../seven_XG_report/seven_XG_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(q_n>20){
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
  
  if_F : function(e){
    arr++
    console.log("我是刚刚进来的题号",q_n)
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==A[i]){
        A_s=A_s+6
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==B[i]){
        B_s=B_s+6
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==C[i]){
        C_s=C_s+6
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==D[i]){
        D_s=D_s+6
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==E[i]){
        E_s=E_s+6
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==F[i]){
        F_s=F_s+6
      }
    }
    for(var i=0;i<3;i++){
      if(this.data.XG[q_n].id==G[i]){
        G_s=G_s+6
      }
    }
    console.log("A_s",A_s)
    console.log("B_s",B_s)
    console.log("C_s",C_s)
    console.log("D_s",D_s)
    console.log("E_s",E_s)
    console.log("F_s",F_s)
    console.log("G_s",G_s)
    q_n++;
    console.log("我是分数",S)
    console.log("我是加1之后的分数",q_n)
   
    final_score=[{"A_s":A_s},{"B_s":B_s},{"C_s":C_s},{"D_s":D_s},{"E_s":E_s},{"F_s":F_s},{"G_s":G_s}]
    console.log("我是final_score",final_score)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (q_n>20) {
      wx.navigateTo({
        url: '../seven_XG_report/seven_XG_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(q_n>20){
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