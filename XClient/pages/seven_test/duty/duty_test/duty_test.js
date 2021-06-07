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

var k=0;
var o=0;
var p=0;
var q=0;
var r=0;

var u=0;
var v=0;
var w=0;
var x=0;
var y=0;
var arr=1;


var final_score;
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
      duration:4000
    })
    wx.cloud.callFunction({
      name:"get_zrx",
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
      b=b+5
    }
    if(this.data.G[2]._id==n){
      c++
    }
    if(this.data.G[3]._id==n){
      d++
    }
    if(this.data.G[4]._id==n){
      LL++
    }
    if(this.data.G[5]._id==n){
      f++
    }
    if(this.data.G[6]._id==n){
      g=g+5
    }
    if(this.data.G[7]._id==n){
      h++
    }
    if(this.data.G[8]._id==n){
      i++
    }
    if(this.data.G[9]._id==n){
      j++
    }

    if(this.data.G[10]._id==n){
      k++
    }
    if(this.data.G[11]._id==n){
      o++
    }
    if(this.data.G[12]._id==n){
      p=p+5
    }
    if(this.data.G[13]._id==n){
      q++
    }
    if(this.data.G[14]._id==n){
      r++
    }
    if(this.data.G[15]._id==n){
      u++
    }
    if(this.data.G[16]._id==n){
      v++
    }
    if(this.data.G[17]._id==n){
      w=w+5
    }
    if(this.data.G[18]._id==n){
      x++
    }
    if(this.data.G[19]._id==n){
      y++
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
    console.log("k",k)
    console.log("o",o)
    console.log("p",p)
    console.log("q",q)
    console.log("r",r)
    console.log("u",u)
    console.log("v",v)
    console.log("w",w)
    console.log("x",x)
    console.log("y",y)
    n++;
    console.log(n)
    final_score=(a+b+c+d+LL+f+g+h+i+j+k+o+p+q+r+u+v+w+x+y)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (n==20) {
      wx.navigateTo({
        url: '../duty_report/duty_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(n==20){
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
      k=0,
      o=0,
      p=0,
      q=0,
      r=0,
      u=0,
      v=0,
      w=0,
      x=0,
      y=0,
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
      k:k,
      o:o,
      p:p,
      q:q,
      r:r,
      u:u,
      v:v,
      w:w,
      x:x,
      y:y,
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
      b=b+4
    }
    if(this.data.G[2]._id==n){
      c=c+2
    }
    if(this.data.G[3]._id==n){
      d=d+2
    }
    if(this.data.G[4]._id==n){
      LL=LL+2
    }
    if(this.data.G[5]._id==n){
      f=f+2
    }
    if(this.data.G[6]._id==n){
      g=g+4
    }
    if(this.data.G[7]._id==n){
      h=h+2
    }
    if(this.data.G[8]._id==n){
      i=i+2
    }
    if(this.data.G[9]._id==n){
      j=j+2
    }

    if(this.data.G[10]._id==n){
      k=k+2
    }
    if(this.data.G[11]._id==n){
      o=o+2
    }
    if(this.data.G[12]._id==n){
      p=p+4
    }
    if(this.data.G[13]._id==n){
      q=q+2
    }
    if(this.data.G[14]._id==n){
      r=r+2
    }
    if(this.data.G[15]._id==n){
      u=u+2
    }
    if(this.data.G[16]._id==n){
      v=v+2
    }
    if(this.data.G[17]._id==n){
      w=w+4
    }
    if(this.data.G[18]._id==n){
      x=x+2
    }
    if(this.data.G[19]._id==n){
      y=y+2
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
    console.log("k",k)
    console.log("o",o)
    console.log("p",p)
    console.log("q",q)
    console.log("r",r)
    console.log("u",u)
    console.log("v",v)
    console.log("w",w)
    console.log("x",x)
    console.log("y",y)
    n++;
    console.log(n)
    final_score=(a+b+c+d+LL+f+g+h+i+j+k+o+p+q+r+u+v+w+x+y)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (n==20) {
      wx.navigateTo({
        url: '../duty_report/duty_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(n==20){
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
      k=0,
      o=0,
      p=0,
      q=0,
      r=0,
      u=0,
      v=0,
      w=0,
      x=0,
      y=0,
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
      k:k,
      o:o,
      p:p,
      q:q,
      r:r,
      u:u,
      v:v,
      w:w,
      x:x,
      y:y,
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
      c=c+3
    }
    if(this.data.G[3]._id==n){
      d=d+3
    }
    if(this.data.G[4]._id==n){
      LL=LL+3
    }
    if(this.data.G[5]._id==n){
      f=f+3
    }
    if(this.data.G[6]._id==n){
      g=g+3
    }
    if(this.data.G[7]._id==n){
      h=h+3
    }
    if(this.data.G[8]._id==n){
      i=i+3
    }
    if(this.data.G[9]._id==n){
      j=j+3
    }

    if(this.data.G[10]._id==n){
      k=k+3
    }
    if(this.data.G[11]._id==n){
      o=o+3
    }
    if(this.data.G[12]._id==n){
      p=p+3
    }
    if(this.data.G[13]._id==n){
      q=q+3
    }
    if(this.data.G[14]._id==n){
      r=r+3
    }
    if(this.data.G[15]._id==n){
      u=u+3
    }
    if(this.data.G[16]._id==n){
      v=v+3
    }
    if(this.data.G[17]._id==n){
      w=w+3
    }
    if(this.data.G[18]._id==n){
      x=x+3
    }
    if(this.data.G[19]._id==n){
      y=y+3
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
    console.log("k",k)
    console.log("o",o)
    console.log("p",p)
    console.log("q",q)
    console.log("r",r)
    console.log("u",u)
    console.log("v",v)
    console.log("w",w)
    console.log("x",x)
    console.log("y",y)
    n++;
    console.log(n)
    final_score=(a+b+c+d+LL+f+g+h+i+j+k+o+p+q+r+u+v+w+x+y)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (n==20) {
      wx.navigateTo({
        url: '../duty_report/duty_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(n==20){
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
      k=0,
      o=0,
      p=0,
      q=0,
      r=0,
      u=0,
      v=0,
      w=0,
      x=0,
      y=0,
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
      k:k,
      o:o,
      p:p,
      q:q,
      r:r,
      u:u,
      v:v,
      w:w,
      x:x,
      y:y,
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
      b=b+2
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
      g=g+2
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

    if(this.data.G[10]._id==n){
      k=k+4
    }
    if(this.data.G[11]._id==n){
      o=o+4
    }
    if(this.data.G[12]._id==n){
      p=p+2
    }
    if(this.data.G[13]._id==n){
      q=q+4
    }
    if(this.data.G[14]._id==n){
      r=r+4
    }
    if(this.data.G[15]._id==n){
      u=u+4
    }
    if(this.data.G[16]._id==n){
      v=v+4
    }
    if(this.data.G[17]._id==n){
      w=w+2
    }
    if(this.data.G[18]._id==n){
      x=x+4
    }
    if(this.data.G[19]._id==n){
      y=y+4
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
    console.log("k",k)
    console.log("o",o)
    console.log("p",p)
    console.log("q",q)
    console.log("r",r)
    console.log("u",u)
    console.log("v",v)
    console.log("w",w)
    console.log("x",x)
    console.log("y",y)
    n++;
    console.log(n)
    final_score=(a+b+c+d+LL+f+g+h+i+j+k+o+p+q+r+u+v+w+x+y)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (n==20) {
      wx.navigateTo({
        url: '../duty_report/duty_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(n==20){
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
      k=0,
      o=0,
      p=0,
      q=0,
      r=0,
      u=0,
      v=0,
      w=0,
      x=0,
      y=0,
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
      k:k,
      o:o,
      p:p,
      q:q,
      r:r,
      u:u,
      v:v,
      w:w,
      x:x,
      y:y,
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
      b=b+1
    }
    if(this.data.G[2]._id==n){
      c=c+5
    }
    if(this.data.G[3]._id==n){
      d=d+5
    }
    if(this.data.G[4]._id==n){
      LL=LL+5
    }
    if(this.data.G[5]._id==n){
      f=f+5
    }
    if(this.data.G[6]._id==n){
      g=g+1
    }
    if(this.data.G[7]._id==n){
      h=h+5
    }
    if(this.data.G[8]._id==n){
      i=i+5
    }
    if(this.data.G[9]._id==n){
      j=j+5
    }

    if(this.data.G[10]._id==n){
      k=k+5
    }
    if(this.data.G[11]._id==n){
      o=o+5
    }
    if(this.data.G[12]._id==n){
      p=p+1
    }
    if(this.data.G[13]._id==n){
      q=q+5
    }
    if(this.data.G[14]._id==n){
      r=r+5
    }
    if(this.data.G[15]._id==n){
      u=u+5
    }
    if(this.data.G[16]._id==n){
      v=v+5
    }
    if(this.data.G[17]._id==n){
      w=w+1
    }
    if(this.data.G[18]._id==n){
      x=x+5
    }
    if(this.data.G[19]._id==n){
      y=y+5
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
    console.log("k",k)
    console.log("o",o)
    console.log("p",p)
    console.log("q",q)
    console.log("r",r)
    console.log("u",u)
    console.log("v",v)
    console.log("w",w)
    console.log("x",x)
    console.log("y",y)
    n++;
    console.log(n)
    final_score=(a+b+c+d+LL+f+g+h+i+j+k+o+p+q+r+u+v+w+x+y)
    var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    if (n==20) {
      wx.navigateTo({
        url: '../duty_report/duty_report?info_DYZ_score='+info_DYZ_score
      })
    }
    if(n==20){
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
      k=0,
      o=0,
      p=0,
      q=0,
      r=0,
      u=0,
      v=0,
      w=0,
      x=0,
      y=0,
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
      k:k,
      o:o,
      p:p,
      q:q,
      r:r,
      u:u,
      v:v,
      w:w,
      x:x,
      y:y,
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
    k=0,
    o=0,
    p=0,
    q=0,
    r=0,
    u=0,
    v=0,
    w=0,
    x=0,
    y=0
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
      k:k,
      o:o,
      p:p,
      q:q,
      r:r,
      u:u,
      v:v,
      w:w,
      x:x,
      y:y,
      arr:arr
      
    })
    wx.reLaunch({
      url: '../../../../pages/index/index'
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