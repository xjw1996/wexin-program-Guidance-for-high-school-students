// pages/DuoZhiYuan/DuoZhiYuan.js
var DYZ=[];
var n=1;
var language=0;
var math=0;
var vision=0;
var body=0;
var music=0;
var human_communication=0;
var introspection=0;
var nature=0;
var final_score=[];
var arr=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    DYZ:[],
    n:1,
    arr : 0
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
      name:"get_DYZ_data",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        this.setData({
          DYZ:  res.result.data,
          n:n,
          arr:arr
        })
      },
    })   
  },


  if_A : function(e){
    console.log("第",n,"题")
    n++;
    console.log(n)
    if(this.data.DYZ[arr]._id<10){
      language++;
    }
    console.log("lalalala",language)
    if(this.data.DYZ[arr]._id>9&&this.data.DYZ[arr]._id<20){
      math++;
    }
    if(this.data.DYZ[arr]._id>19&&this.data.DYZ[arr]._id<30){
      vision++;
    }
    if(this.data.DYZ[arr]._id>29&&this.data.DYZ[arr]._id<40){
      body++;
    }
    if(this.data.DYZ[arr]._id>39&&this.data.DYZ[arr]._id<50){
      music++;
    }
    if(this.data.DYZ[arr]._id>49&&this.data.DYZ[arr]._id<60){
      human_communication++;
    }
    if(this.data.DYZ[arr]._id>59&&this.data.DYZ[arr]._id<70){
      introspection++;
    }
    if(this.data.DYZ[arr]._id>69){
      nature++;
    }

    console.log("我是_id",this.data.DYZ[arr]._id)
    arr++;
    
    console.log("我是语言",language)
    console.log(math)
    console.log(vision)
    console.log(body)
    console.log(music)
    console.log(human_communication)
    console.log(introspection)
    console.log(nature)
    
    // console.log("___________________________________________________")
    final_score=[{"language":language},{"math":math},{"vision":vision},{"body":body},{"music":music},{"human_communication":human_communication},{"introspection":introspection},{"nature":nature}]
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (n>79) {
      wx.redirectTo({
        url: '../DuoZhiYuan/DYZ_report/DYZ_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(n==80){
      language=0,
      math=0,
      vision=0,
      body=0,
      music=0,
      human_communication=0,
      introspection=0,
      nature=0,
      n=1,
      arr=0
    }
    this.setData({
      language:language,
      math:math,
      vision:vision,
      body:body,
      music:music,
      human_communication:human_communication,
      introspection:introspection,
      nature:nature,
      n:n,
      arr:arr
    })
  },
  
  if_B : function(e){
    console.log("第",n,"题")
    n++;
    console.log(n)
    if(this.data.DYZ[arr]._id<10){
      language=language+2;
    }
    if(this.data.DYZ[arr]._id>9&&this.data.DYZ[arr]._id<20){
      math=math+2;
    }
    if(this.data.DYZ[arr]._id>19&&this.data.DYZ[arr]._id<30){
      vision=vision+2;
    }
    if(this.data.DYZ[arr]._id>29&&this.data.DYZ[arr]._id<40){
      body=body+2;
    }
    if(this.data.DYZ[arr]._id>39&&this.data.DYZ[arr]._id<50){
      music=music+2;
    }
    if(this.data.DYZ[arr]._id>49&&this.data.DYZ[arr]._id<60){
      human_communication=human_communication+2;
    }
    if(this.data.DYZ[arr]._id>59&&this.data.DYZ[arr]._id<70){
      introspection=introspection+2;
    }
    if(this.data.DYZ[arr]._id>69){
      nature=nature+2;
    }

    arr++;
    console.log("我是语言",language)
    console.log(math)
    console.log(vision)
    console.log(body)
    console.log(music)
    console.log(human_communication)
    console.log(introspection)
    console.log(nature)
   

    final_score=[{"language":language},{"math":math},{"vision":vision},{"body":body},{"music":music},{"human_communication":human_communication},{"introspection":introspection},{"nature":nature}]
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (n>79) {
      wx.redirectTo({
        url: '../DuoZhiYuan/DYZ_report/DYZ_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(n==80){
      language=0,
      math=0,
      vision=0,
      body=0,
      music=0,
      human_communication=0,
      introspection=0,
      nature=0,
      n=1,
      arr=0
    }
    this.setData({
      language:language,
      math:math,
      vision:vision,
      body:body,
      music:music,
      human_communication:human_communication,
      introspection:introspection,
      nature:nature,
      n:n,
      arr:arr
    })
  },

  if_C : function(e){
    console.log("第",n,"题")
    n++;
    console.log(n)
    if(this.data.DYZ[arr]._id<10){
      language=language+3;
    }
    if(this.data.DYZ[arr]._id>9&&this.data.DYZ[arr]._id<20){
      math=math+3;
    }
    if(this.data.DYZ[arr]._id>19&&this.data.DYZ[arr]._id<30){
      vision=vision+3;
    }
    if(this.data.DYZ[arr]._id>29&&this.data.DYZ[arr]._id<40){
      body=body+3;
    }
    if(this.data.DYZ[arr]._id>39&&this.data.DYZ[arr]._id<50){
      music=music+3;
    }
    if(this.data.DYZ[arr]._id>49&&this.data.DYZ[arr]._id<60){
      human_communication=human_communication+3;
    }
    if(this.data.DYZ[arr]._id>59&&this.data.DYZ[arr]._id<70){
      introspection=introspection+3;
    }
    if(this.data.DYZ[arr]._id>69){
      nature=nature+3;
    }
    arr++;
    console.log("我是语言",language)
    console.log(math)
    console.log(vision)
    console.log(body)
    console.log(music)
    console.log(human_communication)
    console.log(introspection)
    console.log(nature)
   

    final_score=[{"language":language},{"math":math},{"vision":vision},{"body":body},{"music":music},{"human_communication":human_communication},{"introspection":introspection},{"nature":nature}]
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (n>79) {
      wx.redirectTo({
        url: '../DuoZhiYuan/DYZ_report/DYZ_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(n==80){
      language=0,
      math=0,
      vision=0,
      body=0,
      music=0,
      human_communication=0,
      introspection=0,
      nature=0,
      n=1,
      arr=0
    }
    this.setData({
      language:language,
      math:math,
      vision:vision,
      body:body,
      music:music,
      human_communication:human_communication,
      introspection:introspection,
      nature:nature,
      n:n,
      arr:arr
    })
  },

  if_D : function(e){
    console.log("第",n,"题")
    n++;
    console.log(n)
    if(this.data.DYZ[arr]._id<10){
      language=language+4;
    }
    if(this.data.DYZ[arr]._id>9&&this.data.DYZ[arr]._id<20){
      math=math+4;
    }
    if(this.data.DYZ[arr]._id>19&&this.data.DYZ[arr]._id<30){
      vision=vision+4;
    }
    if(this.data.DYZ[arr]._id>29&&this.data.DYZ[arr]._id<40){
      body=body+4;
    }
    if(this.data.DYZ[arr]._id>39&&this.data.DYZ[arr]._id<50){
      music=music+4;
    }
    if(this.data.DYZ[arr]._id>49&&this.data.DYZ[arr]._id<60){
      human_communication=human_communication+4;
    }
    if(this.data.DYZ[arr]._id>59&&this.data.DYZ[arr]._id<70){
      introspection=introspection+4;
    }
    if(this.data.DYZ[arr]._id>69){
      nature=nature+4;
    }

    arr++;
    console.log("我是语言",language)
    console.log(math)
    console.log(vision)
    console.log(body)
    console.log(music)
    console.log(human_communication)
    console.log(introspection)
    console.log(nature)
   

    final_score=[{"language":language},{"math":math},{"vision":vision},{"body":body},{"music":music},{"human_communication":human_communication},{"introspection":introspection},{"nature":nature}]
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (n>79) {
      wx.redirectTo({
        url: '../DuoZhiYuan/DYZ_report/DYZ_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(n==80){
      language=0,
      math=0,
      vision=0,
      body=0,
      music=0,
      human_communication=0,
      introspection=0,
      nature=0,
      n=1,
      arr=0
    }
    this.setData({
      language:language,
      math:math,
      vision:vision,
      body:body,
      music:music,
      human_communication:human_communication,
      introspection:introspection,
      nature:nature,
      n:n,
      arr:arr
    })
  },

  if_E : function(e){
    console.log("第",n,"题")
    n++;
    console.log(n)
    if(this.data.DYZ[arr]._id<10){
      language=language+5;
    }
    if(this.data.DYZ[arr]._id>9&&this.data.DYZ[arr]._id<20){
      math=math+5;
    }
    if(this.data.DYZ[arr]._id>19&&this.data.DYZ[arr]._id<30){
      vision=vision+5;
    }
    if(this.data.DYZ[arr]._id>29&&this.data.DYZ[arr]._id<40){
      body=body+5;
    }
    if(this.data.DYZ[arr]._id>39&&this.data.DYZ[arr]._id<50){
      music=music+5;
    }
    if(this.data.DYZ[arr]._id>49&&this.data.DYZ[arr]._id<60){
      human_communication=human_communication+5;
    }
    if(this.data.DYZ[arr]._id>59&&this.data.DYZ[arr]._id<70){
      introspection=introspection+5;
    }
    if(this.data.DYZ[arr]._id>69){
      nature=nature+5;
    }
    arr++;
    console.log("我是语言",language)
    console.log(math)
    console.log(vision)
    console.log(body)
    console.log(music)
    console.log(human_communication)
    console.log(introspection)
    console.log(nature)
   

    final_score=[{"language":language},{"math":math},{"vision":vision},{"body":body},{"music":music},{"human_communication":human_communication},{"introspection":introspection},{"nature":nature}]
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (n>79) {
      wx.redirectTo({
        url: '../DuoZhiYuan/DYZ_report/DYZ_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(n==80){
      language=0,
      math=0,
      vision=0,
      body=0,
      music=0,
      human_communication=0,
      introspection=0,
      nature=0,
      n=1,
      arr=0
    }
    this.setData({
      language:language,
      math:math,
      vision:vision,
      body:body,
      music:music,
      human_communication:human_communication,
      introspection:introspection,
      nature:nature,
      n:n,
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


    language=0,
    math=0,
    vision=0,
    body=0,
    music=0,
    human_communication=0,
    introspection=0,
    nature=0,
    n=1,
    arr=0
    
    this.setData({
      language:language,
      math:math,
      vision:vision,
      body:body,
      music:music,
      human_communication:human_communication,
      introspection:introspection,
      nature:nature,
      n:n,
      arr:arr
    })
    wx.navigateTo({
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