// pages/ceping_report/ceping_report.js
var arr=[1,2,3,4]
var ceping_list=[]
var text=[]
var H_text=[]
var text_2
var text_3
var H
var S_dele
var L_dele
var H_dele
var Z_dele
var L
var S
var Z
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    var S =wx.getStorageSync('biology')||[];
    var H =wx.getStorageSync('chemistry')||[];
    var L =wx.getStorageSync('history')||[]; 
    var Z =wx.getStorageSync('politic')||[];

    console.log("我是生物",S.shengwu)
    // console.log("我是数组里的生物",text[0].shengwu)
    // console.log("我是数组里的化学",H_text[0].huaxue)
    // ceping_list.push(text[0].shengwu)
    // ceping_list.push(H_text[0].huaxue)
    // console.log("我是被添加的数组",ceping_list)
    // text_3=text[0].shengwu+1
    // console.log("我是测试运算的测试2",ceping_list.length)
    // console.log("我应该是5",text_3)

    for(var h=0;h<arr.length;h++){
      if(H.huaxue == arr[h] ){
        ceping_list.push([{"subject":"化学"},{"src":"../ceping_report/huaxue_history/huaxue_history"}])
      }
      }

    for(var h=0;h<arr.length;h++){
      // for(var a=0;a<ceping_list.length;a++){
      //   if(ceping_list[a][0].subject=="生物"){
      //     H_dele=a
      //     ceping_list.splice(H_dele,1); //删除起始下标为1，长度为1的一个值(len设置1，如果为0，则数组不变) 
      //   }
      // }
      if(S.shengwu == arr[h] ){
        ceping_list.push([{"subject":"生物"},{"src":"../ceping_report/shengwu_history/shengwu_history"}])
      }
      }

    for(var h=0;h<arr.length;h++){
      if(L.lishi == arr[h] ){
        ceping_list.push([{"subject":"历史"},{"src":"../ceping_report/lishi_history/lishi_history"}])
      }
    }

    for(var h=0;h<arr.length;h++){
      if(Z.zhengzhi == arr[h] ){
        ceping_list.push([{"subject":"政治"},{"src":"../../pages/ceping_report/zhengzhi_history/zhengzhi_history"}])
      }
    }
   
    console.log("我是被添加进去的数组",ceping_list)
    console.log(ceping_list[0][0].subject)
    this.setData({
      ceping_list:ceping_list
    })
    console.log("前",ceping_list)
    for(var a=0;a<ceping_list.length;a++){
      if(ceping_list[a][0].subject=="生物"){
        S_dele=a
        ceping_list.splice(S_dele,1); //删除起始下标为1，长度为1的一个值(len设置1，如果为0，则数组不变) 
      }
    }
    for(var a=0;a<ceping_list.length;a++){
      if(ceping_list[a][0].subject=="历史"){
        L_dele=a
        ceping_list.splice(L_dele,1); //删除起始下标为1，长度为1的一个值(len设置1，如果为0，则数组不变) 
      }
    }
    for(var a=0;a<ceping_list.length;a++){
      if(ceping_list[a][0].subject=="化学"){
        H_dele=a
        ceping_list.splice(H_dele,1); //删除起始下标为1，长度为1的一个值(len设置1，如果为0，则数组不变) 
      }
    }
    for(var a=0;a<ceping_list.length;a++){
      if(ceping_list[a][0].subject=="政治"){
        Z_dele=a
        ceping_list.splice(Z_dele,1); //删除起始下标为1，长度为1的一个值(len设置1，如果为0，则数组不变) 
      }
    }
    console.log("后",ceping_list)

    // for(var a=0;a<ceping_list.length;a++){
      //   if(ceping_list[a][0].subject=="化学"){
      //     H_dele=a
      //     ceping_list.splice(H_dele,1); //删除起始下标为1，长度为1的一个值(len设置1，如果为0，则数组不变) 
      //   }
      // }
    // wx.getStorage({
    //   key: 'chemistry',
    //   success (res) {
    //     console.log(res.data)
    //     console.log(res.data[0].huaxue)
    //     H=res.data[0].huaxue
    //   }
    // })
    // console.log("我是化学",H)
    // // for(var h=0;h<arr.length;h++){
    // //   if(H == arr[h] ){
    // //     ceping_list.push("化学")
    // //   }
    // // }
    // wx.getStorage({
    //   key: 'history',
    //   success (res) {
    //     console.log(res.data)
    //     console.log(res.data[0].lishi)
    //     L=res.data[0].lishi
    //     this.setData({
    //       L:L
    //     })
    //   }
    // })
    // console.log("我是历史",L)

    // wx.getStorage({
    //   key: 'biology',
    //   success (res) {
    //     console.log(res.data)
    //     console.log(res.data[0].shengwu)
    //     S=res.data[0].shengwu
    //   }
    // })
    // console.log("我是生物",S)
   
   
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