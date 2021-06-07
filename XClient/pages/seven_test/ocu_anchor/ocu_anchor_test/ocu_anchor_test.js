var final_score=[]
var logged=false;
var type=["技术╱职能型","管理型","自主╱独立型","安全╱稳定型","创造╱创业型","服务型","挑战型","生活型"]
var a=[1,9,17,25,33]
var b=[2,10,18,26,34]
var c=[3,11,19,27,35]
var d=[4,12,20,28,36]
var A=[5,13,21,29,37]
var f=[6,14,22,30,38]
var g=[7,15,23,31,39]
var h=[8,16,24,32,40]
var a_s=0
var b_s=0
var c_s=0
var d_s=0
var A_s=0
var f_s=0
var g_s=0
var h_s=0
var n=0
var arr=1

var ZYM=[]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    n:0,
    arr:1,
    checkboxArr: [{
      name: '技术╱职能型',
      checked: false
     }, {
      name: '管理型',
      checked: false
     }, {
      name: '自主╱独立型',
      checked: false
     }, {
      name: '安全╱稳定型',
      checked: false
     }, {
      name: '创造╱创业型',
      checked: false
     }, {
      name: '服务型',
      checked: false
     }, {
       name: '挑战型',
       checked: false
      }, {
       name: '生活型',
       checked: false
      }],
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
      name:"get_anchor",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        this.setData({
          ZYM:  res.result.data,
        })
      },
    })   
  },


  if_A : function(e){
    arr++
    console.log("第",n,"题")
    console.log(n)
    if(this.data.ZYM[n].id == a[this.data.ZYM[n].arr] ){
      a_s+=1
    }

    if(this.data.ZYM[n].id == b[this.data.ZYM[n].arr] ){
      b_s+=1
    }

    if(this.data.ZYM[n].id == c[this.data.ZYM[n].arr] ){
      c_s+=1
    }

    if(this.data.ZYM[n].id == d[this.data.ZYM[n].arr] ){
      d_s+=1
    }

    if(this.data.ZYM[n].id == A[this.data.ZYM[n].arr] ){
      A_s+=1
    }

    if(this.data.ZYM[n].id == f[this.data.ZYM[n].arr] ){
      f_s+=1
    }

    if(this.data.ZYM[n].id == g[this.data.ZYM[n].arr] ){
      g_s+=1
    }

    if(this.data.ZYM[n].id == h[this.data.ZYM[n].arr] ){
      h_s+=1
    }
    
    console.log("a_s",a_s)
    console.log("b_s",b_s)
    console.log("c_s",c_s)
    console.log("d_s",d_s)
    console.log("A_s",A_s)
    console.log("f_s",f_s)
    console.log("g_s",g_s)
    console.log("h_s",h_s)
    n++;
    if(n==40){
      logged=true
      n=0
      arr=1
    }
    console.log(n)
    // // console.log("___________________________________________________")
    // final_score=[{"language":language},{"math":math},{"vision":vision},{"body":body},{"music":music},{"human_communication":human_communication},{"introspection":introspection},{"nature":nature}]
    // var info_DYZ_score = encodeURIComponent(JSON.stringify(final_score))
    // if (n>79) {
    //   wx.redirectTo({
    //     url: '../DuoZhiYuan/DYZ_report/DYZ_report?info_DYZ_score='+info_DYZ_score
    //   })
    // }
   

    this.setData({
      logged:logged,
      n:n,
      a_s:a_s,
      b_s:b_s,
      c_s:c_s,
      d_s:d_s,
      A_s:A_s,
      f_s:f_s,
      g_s:g_s,
      h_s:h_s,
      arr:arr
      
    })
  },

  if_B : function(e){
    arr++
    console.log("第",n,"题")
    console.log(n)
    if(this.data.ZYM[n].id == a[this.data.ZYM[n].arr] ){
      a_s+=2
    }

    if(this.data.ZYM[n].id == b[this.data.ZYM[n].arr] ){
      b_s+=2
    }

    if(this.data.ZYM[n].id == c[this.data.ZYM[n].arr] ){
      c_s+=2
    }

    if(this.data.ZYM[n].id == d[this.data.ZYM[n].arr] ){
      d_s+=2
    }

    if(this.data.ZYM[n].id == A[this.data.ZYM[n].arr] ){
      A_s+=2
    }

    if(this.data.ZYM[n].id == f[this.data.ZYM[n].arr] ){
      f_s+=2
    }

    if(this.data.ZYM[n].id == g[this.data.ZYM[n].arr] ){
      g_s+=2
    }

    if(this.data.ZYM[n].id == h[this.data.ZYM[n].arr] ){
      h_s+=2
    }
    
    console.log("a_s",a_s)
    console.log("b_s",b_s)
    console.log("c_s",c_s)
    console.log("d_s",d_s)
    console.log("A_s",A_s)
    console.log("f_s",f_s)
    console.log("g_s",g_s)
    console.log("h_s",h_s)
    n++;
    if(n==40){
      logged=true
      n=0
      arr=1
    }
    console.log(n)
   
    this.setData({
      logged:logged,
      n:n,
      a_s:a_s,
      b_s:b_s,
      c_s:c_s,
      d_s:d_s,
      A_s:A_s,
      f_s:f_s,
      g_s:g_s,
      h_s:h_s,
      arr:arr
    })
  },

  if_C : function(e){
    arr++
    console.log("第",n,"题")
    console.log(n)
    if(this.data.ZYM[n].id == a[this.data.ZYM[n].arr] ){
      a_s+=3
    }

    if(this.data.ZYM[n].id == b[this.data.ZYM[n].arr] ){
      b_s+=3
    }

    if(this.data.ZYM[n].id == c[this.data.ZYM[n].arr] ){
      c_s+=3
    }

    if(this.data.ZYM[n].id == d[this.data.ZYM[n].arr] ){
      d_s+=3
    }

    if(this.data.ZYM[n].id == A[this.data.ZYM[n].arr] ){
      A_s+=3
    }

    if(this.data.ZYM[n].id == f[this.data.ZYM[n].arr] ){
      f_s+=3
    }

    if(this.data.ZYM[n].id == g[this.data.ZYM[n].arr] ){
      g_s+=3
    }

    if(this.data.ZYM[n].id == h[this.data.ZYM[n].arr] ){
      h_s+=3
    }
    
    console.log("a_s",a_s)
    console.log("b_s",b_s)
    console.log("c_s",c_s)
    console.log("d_s",d_s)
    console.log("A_s",A_s)
    console.log("f_s",f_s)
    console.log("g_s",g_s)
    console.log("h_s",h_s)
    n++;
    if(n==40){
      logged=true
      n=0
      arr=1
    }
    console.log(n)
   
    this.setData({
      logged:logged,
      n:n,
      a_s:a_s,
      b_s:b_s,
      c_s:c_s,
      d_s:d_s,
      A_s:A_s,
      f_s:f_s,
      g_s:g_s,
      h_s:h_s,
      arr:arr
    })
  },

  if_D : function(e){
    arr++
    console.log("第",n,"题")
    console.log(n)
    if(this.data.ZYM[n].id == a[this.data.ZYM[n].arr] ){
      a_s+=4
    }

    if(this.data.ZYM[n].id == b[this.data.ZYM[n].arr] ){
      b_s+=4
    }

    if(this.data.ZYM[n].id == c[this.data.ZYM[n].arr] ){
      c_s+=4
    }

    if(this.data.ZYM[n].id == d[this.data.ZYM[n].arr] ){
      d_s+=4
    }

    if(this.data.ZYM[n].id == A[this.data.ZYM[n].arr] ){
      A_s+=4
    }

    if(this.data.ZYM[n].id == f[this.data.ZYM[n].arr] ){
      f_s+=4
    }

    if(this.data.ZYM[n].id == g[this.data.ZYM[n].arr] ){
      g_s+=4
    }

    if(this.data.ZYM[n].id == h[this.data.ZYM[n].arr] ){
      h_s+=4
    }
    
    console.log("a_s",a_s)
    console.log("b_s",b_s)
    console.log("c_s",c_s)
    console.log("d_s",d_s)
    console.log("A_s",A_s)
    console.log("f_s",f_s)
    console.log("g_s",g_s)
    console.log("h_s",h_s)
    n++;
    if(n==40){
      logged=true
      n=0
      arr=1
    }
    console.log(n)
   
    this.setData({
      logged:logged,
      n:n,
      a_s:a_s,
      b_s:b_s,
      c_s:c_s,
      d_s:d_s,
      A_s:A_s,
      f_s:f_s,
      g_s:g_s,
      h_s:h_s,
      arr:arr
    })
  },

  if_E : function(e){
    arr++
    console.log("第",n,"题")
    console.log(n)
    if(this.data.ZYM[n].id == a[this.data.ZYM[n].arr] ){
      a_s+=5
    }

    if(this.data.ZYM[n].id == b[this.data.ZYM[n].arr] ){
      b_s+=5
    }

    if(this.data.ZYM[n].id == c[this.data.ZYM[n].arr] ){
      c_s+=5
    }

    if(this.data.ZYM[n].id == d[this.data.ZYM[n].arr] ){
      d_s+=5
    }

    if(this.data.ZYM[n].id == A[this.data.ZYM[n].arr] ){
      A_s+=5
    }

    if(this.data.ZYM[n].id == f[this.data.ZYM[n].arr] ){
      f_s+=5
    }

    if(this.data.ZYM[n].id == g[this.data.ZYM[n].arr] ){
      g_s+=5
    }

    if(this.data.ZYM[n].id == h[this.data.ZYM[n].arr] ){
      h_s+=5
    }
    
    console.log("a_s",a_s)
    console.log("b_s",b_s)
    console.log("c_s",c_s)
    console.log("d_s",d_s)
    console.log("A_s",A_s)
    console.log("f_s",f_s)
    console.log("g_s",g_s)
    console.log("h_s",h_s)
    n++;
    if(n==40){
      logged=true
      n=0
      arr=1
    }
    console.log(n)
   
    this.setData({
      logged:logged,
      n:n,
      a_s:a_s,
      b_s:b_s,
      c_s:c_s,
      d_s:d_s,
      A_s:A_s,
      f_s:f_s,
      g_s:g_s,
      h_s:h_s,
      arr:arr
    })
  },
  if_F : function(e){
    arr++
    console.log("第",n,"题")
    console.log(n)
    if(this.data.ZYM[n].id == a[this.data.ZYM[n].arr] ){
      a_s+=6
    }

    if(this.data.ZYM[n].id == b[this.data.ZYM[n].arr] ){
      b_s+=6
    }

    if(this.data.ZYM[n].id == c[this.data.ZYM[n].arr] ){
      c_s+=6
    }

    if(this.data.ZYM[n].id == d[this.data.ZYM[n].arr] ){
      d_s+=6
    }

    if(this.data.ZYM[n].id == A[this.data.ZYM[n].arr] ){
      A_s+=6
    }

    if(this.data.ZYM[n].id == f[this.data.ZYM[n].arr] ){
      f_s+=6
    }

    if(this.data.ZYM[n].id == g[this.data.ZYM[n].arr] ){
      g_s+=6
    }

    if(this.data.ZYM[n].id == h[this.data.ZYM[n].arr] ){
      h_s+=6

    }
    
    console.log("a_s",a_s)
    console.log("b_s",b_s)
    console.log("c_s",c_s)
    console.log("d_s",d_s)
    console.log("A_s",A_s)
    console.log("f_s",f_s)
    console.log("g_s",g_s)
    console.log("h_s",h_s)
    n++;
    if(n==40){
      logged=true
      n=0
      arr=1
    }
    console.log(n)
   
    this.setData({
      logged:logged,
      n:n,
      a_s:a_s,
      b_s:b_s,
      c_s:c_s,
      d_s:d_s,
      A_s:A_s,
      f_s:f_s,
      g_s:g_s,
      h_s:h_s,
      arr:arr
    })
  },

  checkbox: function (e) {
    var index = e.currentTarget.dataset.index;//获取当前点击的下标
    var checkboxArr = this.data.checkboxArr;//选项集合
    checkboxArr[index].checked = !checkboxArr[index].checked;//改变当前选中的checked值
    this.setData({
     checkboxArr: checkboxArr
    });
    },
    checkboxChange: function (e) {
    var checkValue = e.detail.value;
    this.setData({
     checkValue: checkValue
    });
    },
    confirm: function() {// 提交
    console.log("a_s",a_s)
    console.log("b_s",b_s)
    console.log("c_s",c_s)
    console.log("d_s",d_s)
    console.log("A_s",A_s)
    console.log("f_s",f_s)
    console.log("g_s",g_s)
    console.log("h_s",h_s)
    console.log(this.data.checkValue)//所有选中的项的value

    logged=false
    if(this.data.checkValue[0]==type[0]){
      a_s=a_s+4
    }
    if(this.data.checkValue[0]==type[1]){
      b_s=b_s+4
    }
    if(this.data.checkValue[0]==type[2]){
      c_s=c_s+4
    }
    if(this.data.checkValue[0]==type[3]){
      d_s=d_s+4
    }
    if(this.data.checkValue[0]==type[4]){
      A_s=A_s+4
    }
    if(this.data.checkValue[0]==type[5]){
      f_s=f_s+4
    }
    if(this.data.checkValue[0]==type[6]){
      g_s=g_s+4
    }
    if(this.data.checkValue[0]==type[7]){
      h_s=h_s+4
    }
    

    if(this.data.checkValue[1]==type[0]){
      a_s=a_s+4
    }
    if(this.data.checkValue[1]==type[1]){
      b_s=b_s+4
    }
    if(this.data.checkValue[1]==type[2]){
      c_s=c_s+4
    }
    if(this.data.checkValue[1]==type[3]){
      d_s=d_s+4
    }
    if(this.data.checkValue[1]==type[4]){
      A_s=A_s+4
    }
    if(this.data.checkValue[1]==type[5]){
      f_s=f_s+4
    }
    if(this.data.checkValue[1]==type[6]){
      g_s=g_s+4
    }
    if(this.data.checkValue[1]==type[7]){
      h_s=h_s+4
    }


    if(this.data.checkValue[2]==type[0]){
      a_s=a_s+4
    }
    if(this.data.checkValue[2]==type[1]){
      b_s=b_s+4
    }
    if(this.data.checkValue[2]==type[2]){
      c_s=c_s+4
    }
    if(this.data.checkValue[2]==type[3]){
      d_s=d_s+4
    }
    if(this.data.checkValue[2]==type[4]){
      A_s=A_s+4
    }
    if(this.data.checkValue[2]==type[5]){
      f_s=f_s+4
    }
    if(this.data.checkValue[2]==type[6]){
      g_s=g_s+4
    }
    if(this.data.checkValue[2]==type[7]){
      h_s=h_s+4
    }

    
    
    console.log("a_s",a_s)
    console.log("b_s",b_s)
    console.log("c_s",c_s)
    console.log("d_s",d_s)
    console.log("A_s",A_s)
    console.log("f_s",f_s)
    console.log("g_s",g_s)
    console.log("h_s",h_s)
    a_s=(a_s/5)
    b_s=(b_s/5)
    c_s=(c_s/5)
    d_s=(d_s/5)
    A_s=(A_s/5)
    f_s=(f_s/5)
    g_s=(g_s/5)
    h_s=(h_s/5)
    console.log("avea_s",a_s)
    console.log("aveb_s",b_s)
    console.log("avec_s",c_s)
    console.log("aved_s",d_s)
    console.log("aveA_s",A_s)
    console.log("avef_s",f_s)
    console.log("aveg_s",g_s)
    console.log("aveh_s",h_s)

    final_score=[{"a_s":a_s},{"b_s":b_s},{"c_s":c_s},{"d_s":d_s},{"A_s":A_s},{"f_s":f_s},{"g_s":g_s},{"h_s":h_s}]
    var info_ZYM_score = encodeURIComponent(JSON.stringify(final_score))
    a_s=0,
    b_s=0,
    c_s=0,
    d_s=0,
    A_s=0,
    f_s=0,
    g_s=0,
    h_s=0,
    this.setData({
    
      a_s:a_s,
      b_s:b_s,
      c_s:c_s,
      d_s:d_s,
      A_s:A_s,
      f_s:f_s,
      g_s:g_s,
      h_s:h_s,
    })
    wx.redirectTo({
      url: '../ocu_anchor_report/ocu_anchor_report?info_ZYM_score='+info_ZYM_score
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
    a_s=0,
    b_s=0,
    c_s=0,
    d_s=0,
    A_s=0,
    f_s=0,
    g_s=0,
    h_s=0,
    arr=1
    
    this.setData({
      n:n,
      a_s:a_s,
      b_s:b_s,
      c_s:c_s,
      d_s:d_s,
      A_s:A_s,
      f_s:f_s,
      g_s:g_s,
      h_s:h_s,
      arr:arr
    })

    wx.navigateTo({
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