// pages/XUEKE/lishi/lishi.js
var take_detail=[];
var Lishi=[];
var a=[0,10,20,30,40];
var b=[1,11,21,31,41];//
var c=[2,12,22,32,42];
var d=[3,13,23,33,43];
var e=[4,14,24,34,44];//
var f=[5,15,25,35,45];
var g=[6,16,26,36,46];
var h=[7,17,27,37,47];
var l=[8,18,28,38,48];//
var m=[9,19,29,39,49];
var i=0;
var n=0;
var b_score=0;
var e_score=0;
var l_score=0;
var A=[2,6,12,22,27,32,33];
var B=[0,10,15,25,29,30,39,43];
var C=[5,9,13,16,17,19,20,23,26,35,36,40,42,49];
var D=[3,7,37,45,46,47];

var wrong_list=[]

var A_score=0;
var B_score=0;
var C_score=0;
var D_score=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    i:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:"biology_data",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        this.setData({
          take_detail:  res.result.data,
        })
      },
    })   
  },

  if_A:function(){
    n++
    for(var v=0;v<A.length;v++){
      if(this.data.take_detail[i].id == A[v] ){
        A_score+=2
      }
    }
    console.log("我是A",A_score)
    for(var q=0;q<B.length;q++){
      if(this.data.take_detail[i].id == B[q] ){
        wrong_list.push(this.data.take_detail[i].id)
      }
    }
    for(var h=0;h<C.length;h++){
      if(this.data.take_detail[i].id == C[h] ){
        wrong_list.push(this.data.take_detail[i].id)
      }
    }
    for(var f=0;f<D.length;f++){
      if(this.data.take_detail[i].id == D[f] ){
        wrong_list.push(this.data.take_detail[i].id)
      }
    }
  
    if(this.data.take_detail[i].id == b[this.data.take_detail[i].arr] ){
      b_score+=2
    }
    
    if(this.data.take_detail[i].id == e[this.data.take_detail[i].arr] ){
      e_score+=2
    }
    
    if(this.data.take_detail[i].id == l[this.data.take_detail[i].arr] ){
      l_score+=2
    }
    i++
    if(i==50){
      i=0
    }
    Lishi=[{"b_score":b_score},{"e_score":e_score},{"l_score":l_score},{"A_score":A_score},{"B_score":B_score},{"C_score":C_score},{"D_score":D_score},{"wrong_list":wrong_list}]
    var info = encodeURIComponent(JSON.stringify(Lishi));
    if (n > 49) {
      wx.redirectTo({
        url: '../shengwu_result/shengwu_result?info='+info
      })
      
    }
    if(n==50){
      n=0,
      A_score=0,
      B_score=0,
      C_score=0,
      D_score=0,
      b_score=0,
      e_score=0,
      l_score=0,
      wrong_list=[]
    }

    this.setData({
      i:i,
      A_score:A_score,
      wrong_list:wrong_list,
      b_score:b_score,
      e_score:e_score,
      l_score:l_score,
      n:n
    })
     
  },


  if_B:function(){
    n++
    for(var v=0;v<B.length;v++){
      if(this.data.take_detail[i].id == B[v] ){
        B_score+=2
      }
    }
    console.log("我是B",B_score)

    for(var q=0;q<A.length;q++){
      if(this.data.take_detail[i].id == A[q] ){
        wrong_list.push(this.data.take_detail[i].id)
      }
    }
    for(var h=0;h<C.length;h++){
      if(this.data.take_detail[i].id == C[h] ){
        wrong_list.push(this.data.take_detail[i].id)
      }
    }
    for(var f=0;f<D.length;f++){
      if(this.data.take_detail[i].id == D[f] ){
        wrong_list.push(this.data.take_detail[i].id)
      }
    }

    if(this.data.take_detail[i].id == b[this.data.take_detail[i].arr] ){
      b_score+=1.5
    }
    
    if(this.data.take_detail[i].id == e[this.data.take_detail[i].arr] ){
      e_score+=1.5
    }
    
    if(this.data.take_detail[i].id == l[this.data.take_detail[i].arr] ){
      l_score+=1.5
    }
    i++
    if(i==50){
      i=0
    }
    Lishi=[{"b_score":b_score},{"e_score":e_score},{"l_score":l_score},{"A_score":A_score},{"B_score":B_score},{"C_score":C_score},{"D_score":D_score},{"wrong_list":wrong_list}]
    var info = encodeURIComponent(JSON.stringify(Lishi));
    if (n > 49) {
      wx.redirectTo({
        url: '../shengwu_result/shengwu_result?info='+info
      })
    }
    if(n==50){
      n=0,
      A_score=0,
      B_score=0,
      C_score=0,
      D_score=0,
      b_score=0,
      e_score=0,
      l_score=0,
      wrong_list=[]
    }


    this.setData({
      i:i,
      B_score:B_score,
      wrong_list:wrong_list,
      b_score:b_score,
      e_score:e_score,
      l_score:l_score,
      n:n
    })
     
  },


  if_C:function(){
    n++
    for(var v=0;v<C.length;v++){
      if(this.data.take_detail[i].id == C[v] ){
        C_score+=2
      }
    }
    console.log("我是C",C_score)
    for(var q=0;q<B.length;q++){
      if(this.data.take_detail[i].id == B[q] ){
        wrong_list.push(this.data.take_detail[i].id)
      }
    }
    for(var h=0;h<A.length;h++){
      if(this.data.take_detail[i].id == A[h] ){
        wrong_list.push(this.data.take_detail[i].id)
      }
    }
    for(var f=0;f<D.length;f++){
      if(this.data.take_detail[i].id == D[f] ){
        wrong_list.push(this.data.take_detail[i].id)
      }
    }
    if(this.data.take_detail[i].id == b[this.data.take_detail[i].arr] ){
      b_score+=1
    }
    
    if(this.data.take_detail[i].id == e[this.data.take_detail[i].arr] ){
      e_score+=1
    }
    
    if(this.data.take_detail[i].id == l[this.data.take_detail[i].arr] ){
      l_score+=1
    }
    i++
    if(i==50){
      i=0
    }
    Lishi=[{"b_score":b_score},{"e_score":e_score},{"l_score":l_score},{"A_score":A_score},{"B_score":B_score},{"C_score":C_score},{"D_score":D_score},{"wrong_list":wrong_list}]
    var info = encodeURIComponent(JSON.stringify(Lishi));
    if (n > 49) {
      wx.redirectTo({
        url: '../shengwu_result/shengwu_result?info='+info
      })
    }
    if(n==50){
      n=0,
      A_score=0,
      B_score=0,
      C_score=0,
      D_score=0,
      b_score=0,
      e_score=0,
      l_score=0,
      wrong_list=[]
    }

    this.setData({
      i:i,
      C_score:C_score,
      wrong_list:wrong_list,
      b_score:b_score,
      e_score:e_score,
      l_score:l_score,
      n:n
    })
     
  },

  if_D:function(){
    
    n++

    for(var a=0;a<D.length;a++){
      if(this.data.take_detail[i].id == D[a] ){
        D_score+=2
      }
    }
    console.log("我是D",D_score)
    for(var q=0;q<B.length;q++){
      if(this.data.take_detail[i].id == B[q] ){
        wrong_list.push(this.data.take_detail[i].id)
      }
    }
    for(var h=0;h<C.length;h++){
      if(this.data.take_detail[i].id == C[h] ){
        wrong_list.push(this.data.take_detail[i].id)
      }
    }
    for(var f=0;f<A.length;f++){
      if(this.data.take_detail[i].id == A[f] ){
        wrong_list.push(this.data.take_detail[i].id)
      }
    }
    if(this.data.take_detail[i].id == b[this.data.take_detail[i].arr] ){
      b_score+=0.5
    }
    
    if(this.data.take_detail[i].id == e[this.data.take_detail[i].arr] ){
      e_score+=0.5
    }
    
    if(this.data.take_detail[i].id == l[this.data.take_detail[i].arr] ){
      l_score+=0.5
    }
    i++
    if(i==50){
      i=0
    }
    Lishi=[{"b_score":b_score},{"e_score":e_score},{"l_score":l_score},{"A_score":A_score},{"B_score":B_score},{"C_score":C_score},{"D_score":D_score},{"wrong_list":wrong_list}]
    var info = encodeURIComponent(JSON.stringify(Lishi));
    if (n > 49) {
      wx.redirectTo({
        url: '../shengwu_result/shengwu_result?info='+info
      })
    }
    if(n==50){
      n=0,
      A_score=0,
      B_score=0,
      C_score=0,
      D_score=0,
      b_score=0,
      e_score=0,
      l_score=0,
      wrong_list=[]
    }


    this.setData({
      i:i,
      D_score:D_score,
      wrong_list:wrong_list,
      b_score:b_score,
      e_score:e_score,
      l_score:l_score,
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