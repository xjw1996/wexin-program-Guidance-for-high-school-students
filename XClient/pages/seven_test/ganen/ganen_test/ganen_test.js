var G=[]
var n=0;
var a=0;
var b=0;
var c=0;
var d=0;
var LL=0;
var f=0;
var g=0;
var h=0;
var i=0;
var j=0;
var final_score;
var arr=1;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    n:0,
    arr:1
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
      name:"get_ganen",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        this.setData({
          G:  res.result.data,
        })
      },
    })   
  },

  if_A : function(e){
    arr++
    console.log("第",n,"题")
    console.log(n)
    if(this.data.G[0]._id==n){
      a++
    }
    if(this.data.G[1]._id==n){
      b++
    }
    if(this.data.G[2]._id==n){
      c=c+7
    }
    if(this.data.G[3]._id==n){
      d++
    }
    if(this.data.G[4]._id==n){
      LL++
    }
    if(this.data.G[5]._id==n){
      f=f+7
    }
    if(this.data.G[6]._id==n){
      g++
    }
    if(this.data.G[7]._id==n){
      h=h+7
    }
    if(this.data.G[8]._id==n){
      i++
    }
    if(this.data.G[9]._id==n){
      j++
    }
    console.log("a",a)
    console.log("b",b)
    console.log("c",c)
    console.log("d",d)
    console.log("LL",LL)
    console.log("f",f)
    console.log("g",g)
    console.log("h",h)
    console.log("i",i)
    console.log("j",j)
    n++;
    console.log(n)
    final_score=(a+b+c+d+LL+f+g+h+i+j)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (n==10) {
      wx.navigateTo({
        url: '../ganen_report/ganen_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(n==10){
      n=0,
      a=0,
      b=0,
      c=0,
      d=0,
      LL=0,
      f=0,
      g=0,
      h=0,
      i=0,
      j=0,
      arr=1
    }
    
    this.setData({
      a:a,
      b:b,
      c:c,
      d:d,
      LL:LL,
      f:f,
      g:g,
      h:h,
      i:i,
      j:j,
      n:n,
      arr:arr
      
    })
  },

  if_B : function(e){
    arr++
    console.log("第",n,"题")
    console.log(n)
    if(this.data.G[0]._id==n){
      a=a+2
    }
    if(this.data.G[1]._id==n){
      b=b+2
    }
    if(this.data.G[2]._id==n){
      c=c+6
    }
    if(this.data.G[3]._id==n){
      d=d+2
    }
    if(this.data.G[4]._id==n){
      LL=LL+2
    }
    if(this.data.G[5]._id==n){
      f=f+6
    }
    if(this.data.G[6]._id==n){
      g=g+2
    }
    if(this.data.G[7]._id==n){
      h=h+6
    }
    if(this.data.G[8]._id==n){
      i=i+2
    }
    if(this.data.G[9]._id==n){
      j=j+2
    }
    console.log("a",a)
    console.log("b",b)
    console.log("c",c)
    console.log("d",d)
    console.log("LL",LL)
    console.log("f",f)
    console.log("g",g)
    console.log("h",h)
    console.log("i",i)
    console.log("j",j)
    n++;
    final_score=(a+b+c+d+LL+f+g+h+i+j)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (n==10) {
      wx.navigateTo({
        url: '../ganen_report/ganen_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(n==10){
      n=0,
      a=0,
      b=0,
      c=0,
      d=0,
      LL=0,
      f=0,
      g=0,
      h=0,
      i=0,
      j=0,
      arr=1
    }

    this.setData({
      a:a,
      b:b,
      c:c,
      d:d,
      LL:LL,
      f:f,
      g:g,
      h:h,
      i:i,
      j:j,
      n:n,
      arr:arr
      
    })
  },

  if_C : function(e){
    arr++
    console.log("第",n,"题")
    console.log(n)
    if(this.data.G[0]._id==n){
      a=a+3
    }
    if(this.data.G[1]._id==n){
      b=b+3
    }
    if(this.data.G[2]._id==n){
      c=c+5
    }
    if(this.data.G[3]._id==n){
      d=d+3
    }
    if(this.data.G[4]._id==n){
      LL=LL+3
    }
    if(this.data.G[5]._id==n){
      f=f+5
    }
    if(this.data.G[6]._id==n){
      g=g+3
    }
    if(this.data.G[7]._id==n){
      h=h+5
    }
    if(this.data.G[8]._id==n){
      i=i+3
    }
    if(this.data.G[9]._id==n){
      j=j+3
    }
    console.log("a",a)
    console.log("b",b)
    console.log("c",c)
    console.log("d",d)
    console.log("LL",LL)
    console.log("f",f)
    console.log("g",g)
    console.log("h",h)
    console.log("i",i)
    console.log("j",j)
    n++;
   
    final_score=(a+b+c+d+LL+f+g+h+i+j)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (n==10) {
      wx.navigateTo({
        url: '../ganen_report/ganen_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(n==10){
      n=0,
      a=0,
      b=0,
      c=0,
      d=0,
      LL=0,
      f=0,
      g=0,
      h=0,
      i=0,
      j=0,
      arr=1
    }

    this.setData({
      a:a,
      b:b,
      c:c,
      d:d,
      LL:LL,
      f:f,
      g:g,
      h:h,
      i:i,
      j:j,
      n:n,
      arr:arr
      
    })
  },

  if_D : function(e){
    arr++
    console.log("第",n,"题")
    console.log(n)
    if(this.data.G[0]._id==n){
      a=a+4
    }
    if(this.data.G[1]._id==n){
      b=b+4
    }
    if(this.data.G[2]._id==n){
      c=c+4
    }
    if(this.data.G[3]._id==n){
      d=d+4
    }
    if(this.data.G[4]._id==n){
      LL=LL+4
    }
    if(this.data.G[5]._id==n){
      f=f+4
    }
    if(this.data.G[6]._id==n){
      g=g+4
    }
    if(this.data.G[7]._id==n){
      h=h+4
    }
    if(this.data.G[8]._id==n){
      i=i+4
    }
    if(this.data.G[9]._id==n){
      j=j+4
    }
    console.log("a",a)
    console.log("b",b)
    console.log("c",c)
    console.log("d",d)
    console.log("LL",LL)
    console.log("f",f)
    console.log("g",g)
    console.log("h",h)
    console.log("i",i)
    console.log("j",j)
    n++;
    
    final_score=(a+b+c+d+LL+f+g+h+i+j)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (n==10) {
      wx.navigateTo({
        url: '../ganen_report/ganen_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(n==10){
      n=0,
      a=0,
      b=0,
      c=0,
      d=0,
      LL=0,
      f=0,
      g=0,
      h=0,
      i=0,
      j=0,
      arr=1
    }

    this.setData({
      a:a,
      b:b,
      c:c,
      d:d,
      LL:LL,
      f:f,
      g:g,
      h:h,
      i:i,
      j:j,
      n:n,
      arr:arr
      
    })
  },

  if_E : function(e){
    arr++
    console.log("第",n,"题")
    console.log(n)
    if(this.data.G[0]._id==n){
      a=a+5
    }
    if(this.data.G[1]._id==n){
      b=b+5
    }
    if(this.data.G[2]._id==n){
      c=c+3
    }
    if(this.data.G[3]._id==n){
      d=d+5
    }
    if(this.data.G[4]._id==n){
      LL=LL+5
    }
    if(this.data.G[5]._id==n){
      f=f+3
    }
    if(this.data.G[6]._id==n){
      g=g+5
    }
    if(this.data.G[7]._id==n){
      h=h+3
    }
    if(this.data.G[8]._id==n){
      i=i+5
    }
    if(this.data.G[9]._id==n){
      j=j+5
    }
    console.log("a",a)
    console.log("b",b)
    console.log("c",c)
    console.log("d",d)
    console.log("LL",LL)
    console.log("f",f)
    console.log("g",g)
    console.log("h",h)
    console.log("i",i)
    console.log("j",j)
    n++;
   
    console.log(n)
    final_score=(a+b+c+d+LL+f+g+h+i+j)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (n==10) {
      wx.navigateTo({
        url: '../ganen_report/ganen_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(n==10){
      n=0,
      a=0,
      b=0,
      c=0,
      d=0,
      LL=0,
      f=0,
      g=0,
      h=0,
      i=0,
      j=0,
      arr=1
    }
    this.setData({
      a:a,
      b:b,
      c:c,
      d:d,
      LL:LL,
      f:f,
      g:g,
      h:h,
      i:i,
      j:j,
      n:n,
      arr:arr
      
    })
  },

  if_F : function(e){
    arr++
    console.log("第",n,"题")
    console.log(n)
    if(this.data.G[0]._id==n){
      a=a+6
    }
    if(this.data.G[1]._id==n){
      b=b+6
    }
    if(this.data.G[2]._id==n){
      c=c+2
    }
    if(this.data.G[3]._id==n){
      d=d+6
    }
    if(this.data.G[4]._id==n){
      LL=LL+6
    }
    if(this.data.G[5]._id==n){
      f=f+2
    }
    if(this.data.G[6]._id==n){
      g=g+6
    }
    if(this.data.G[7]._id==n){
      h=h+2
    }
    if(this.data.G[8]._id==n){
      i=i+6
    }
    if(this.data.G[9]._id==n){
      j=j+6
    }
    console.log("a",a)
    console.log("b",b)
    console.log("c",c)
    console.log("d",d)
    console.log("LL",LL)
    console.log("f",f)
    console.log("g",g)
    console.log("h",h)
    console.log("i",i)
    console.log("j",j)
    n++;
  
    console.log(n)
    final_score=(a+b+c+d+LL+f+g+h+i+j)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (n==10) {
      wx.navigateTo({
        url: '../ganen_report/ganen_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(n==10){
      n=0,
      a=0,
      b=0,
      c=0,
      d=0,
      LL=0,
      f=0,
      g=0,
      h=0,
      i=0,
      j=0,
      arr=1
    }

    this.setData({
      a:a,
      b:b,
      c:c,
      d:d,
      LL:LL,
      f:f,
      g:g,
      h:h,
      i:i,
      j:j,
      n:n,
      arr:arr
      
    })
  },


  if_G : function(e){
    arr++
    console.log("第",n,"题")
    console.log(n)
    if(this.data.G[0]._id==n){
      a=a+7
    }
    if(this.data.G[1]._id==n){
      b=b+7
    }
    if(this.data.G[2]._id==n){
      c=c+1
    }
    if(this.data.G[3]._id==n){
      d=d+7
    }
    if(this.data.G[4]._id==n){
      LL=LL+7
    }
    if(this.data.G[5]._id==n){
      f=f+1
    }
    if(this.data.G[6]._id==n){
      g=g+7
    }
    if(this.data.G[7]._id==n){
      h=h+1
    }
    if(this.data.G[8]._id==n){
      i=i+7
    }
    if(this.data.G[9]._id==n){
      j=j+7
    }
    console.log("a",a)
    console.log("b",b)
    console.log("c",c)
    console.log("d",d)
    console.log("LL",LL)
    console.log("f",f)
    console.log("g",g)
    console.log("h",h)
    console.log("i",i)
    console.log("j",j)
    n++;
 
    console.log(n)
    final_score=(a+b+c+d+LL+f+g+h+i+j)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (n==10) {
      wx.navigateTo({
        url: '../ganen_report/ganen_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(n==10){
      n=0,
      a=0,
      b=0,
      c=0,
      d=0,
      LL=0,
      f=0,
      g=0,
      h=0,
      i=0,
      j=0,
      arr=1
    }

    this.setData({
      a:a,
      b:b,
      c:c,
      d:d,
      LL:LL,
      f:f,
      g:g,
      h:h,
      i:i,
      j:j,
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
    n=0,
      a=0,
      b=0,
      c=0,
      d=0,
      LL=0,
      f=0,
      g=0,
      h=0,
      i=0,
      j=0,
      arr=1
     
     this.setData({
      a:a,
      b:b,
      c:c,
      d:d,
      LL:LL,
      f:f,
      g:g,
      h:h,
      i:i,
      j:j,
      n:n,
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