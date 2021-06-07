// pages/ocu_think/ocu_think.js
const ocu_think = require('../../utils/ocu_think.js');
var nn=0;
var num=0;
var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
var f=0;
var g=0;
var h=0;
var i=0;
var j=0;
var k=0;
var l=0;
var m=0;
var c_1=0;
var c_2=0;
var c_3=0;
var c_4=0;
var c_5=0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nn:0,
    num:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var subjects = ocu_think.getSubjectData();
    var item = ocu_think.getabilityTopicalData();
    
    this.setData({
      subjects:subjects,
      item:item
    });
  },

  if_A:function(){
    nn++;
    num++;
    if(num===1){
      c_1+=5
    }
    console.log("我是c_1",c_1)

    for(var v=0;v<this.data.item[0].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[0].questionNumbers[v] ){
        a+=5
      }
    }

    for(var v=0;v<this.data.item[1].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[1].questionNumbers[v] ){
        b+=5
      }
    }

    for(var v=0;v<this.data.item[2].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[2].questionNumbers[v] ){
        c+=5
      }
    }


    for(var v=0;v<this.data.item[3].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[3].questionNumbers[v] ){
        d+=5
      }
    }

    for(var v=0;v<this.data.item[4].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[4].questionNumbers[v] ){
        e+=5
      }
    }

    for(var v=0;v<this.data.item[5].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[5].questionNumbers[v] ){
        f+=5
      }
    }

    for(var v=0;v<this.data.item[6].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[6].questionNumbers[v] ){
        g+=5
      }
    }

    for(var v=0;v<this.data.item[7].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[7].questionNumbers[v] ){
        h+=5
      }
    }

    for(var v=0;v<this.data.item[8].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[8].questionNumbers[v] ){
        i+=5
      }
    }

    for(var v=0;v<this.data.item[9].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[9].questionNumbers[v] ){
        j+=5
      }
    }

    for(var v=0;v<this.data.item[10].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[10].questionNumbers[v] ){
        k+=5
      }
    }

    for(var v=0;v<this.data.item[11].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[11].questionNumbers[v] ){
        l+=5
      }
    }

    for(var v=0;v<this.data.item[12].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[12].questionNumbers[v] ){
        m+=5
      }
    }

     // console.log("我是index",this.data.subjects[nn].index)
    //  console.log("我是a",a)
    //  console.log("我是b",b)
     console.log("我是c",c)
    //  console.log("我是d",d)
    //  console.log("我是e",e)
    //  console.log("我是f",f)
    //  console.log("我是g",g)
    //  console.log("我是h",h)
    //  console.log("我是i",i)
    //  console.log("我是j",j)
    //  console.log("我是k",k)
    //  console.log("我是l",l)
    //  console.log("我是m",m)
 
    console.log("nn",nn)

    if(nn>51){
      if(c_1!=0){
        c=c+c_1
      }
      if(c_2!=0){
        c=c+c_2
      }
      if(c_3!=0){
        c=c+c_3
      }
      if(c_4!=0){
        c=c+c_4
      }
      if(c_5!=0){
        c=c+c_5
      }
      wx.setStorageSync('ocuthink_array', [{"name":"利他主义","socre":a},{"name":"美感","socre":b},{"name":"智力刺激","socre":c},{"name":"成就感","socre":d},{"name":"独立性","socre":e},{"name":"社会地位","socre":f},{"name":"管理权","socre":g},{"name":"经济报酬","socre":h},{"name":"社会交往","socre":i},{"name":"安全感","socre":j},{"name":"舒适","socre":k},{"name":"人际关系","socre":l},{"name":"变异性","socre":m}]);
      wx.setStorageSync('ocuthink_num', [a,b,c,d,e,f,g,h,i,j,k,l,m]);
      wx.redirectTo({
        url: '../ocu_think/ocu_report/ocu_report',
      })
    a=0;
    b=0;
    c=0;
    d=0;
    e=0;
    f=0;
    g=0;
    h=0;
    i=0;
    j=0;
    k=0;
    l=0;
    m=0;
    nn=0;
    num=0;
    c_1=0;
    c_2=0;
    c_3=0;
    c_4=0;
    c_5=0;
    }

    this.setData({
      a:a,
      b:b,
      c:c,
      d:d,
      e:e,
      f:f,
      g:g,
      h:h,
      i:i,
      j:j,
      k:k,
      l:l,
      m:m,
      nn:nn,
      num:num,
      c_1:c_1,
      c_2:c_2,
      c_3:c_3,
      c_4:c_4,
      c_5:c_5,
    })
  },


  if_B:function(){
    nn++;
    num++;
    if(num===1){
      c_2+=4
    }
    for(var v=0;v<this.data.item[0].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[0].questionNumbers[v] ){
        a+=4
      }
    }

    for(var v=0;v<this.data.item[1].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[1].questionNumbers[v] ){
        b+=4
      }
    }

    for(var v=0;v<this.data.item[2].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[2].questionNumbers[v] ){
        c+=4
      }
    }


    for(var v=0;v<this.data.item[3].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[3].questionNumbers[v] ){
        d+=4
      }
    }

    for(var v=0;v<this.data.item[4].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[4].questionNumbers[v] ){
        e+=4
      }
    }

    for(var v=0;v<this.data.item[5].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[5].questionNumbers[v] ){
        f+=4
      }
    }

    for(var v=0;v<this.data.item[6].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[6].questionNumbers[v] ){
        g+=4
      }
    }

    for(var v=0;v<this.data.item[7].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[7].questionNumbers[v] ){
        h+=4
      }
    }

    for(var v=0;v<this.data.item[8].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[8].questionNumbers[v] ){
        i+=4
      }
    }

    for(var v=0;v<this.data.item[9].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[9].questionNumbers[v] ){
        j+=4
      }
    }

    for(var v=0;v<this.data.item[10].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[10].questionNumbers[v] ){
        k+=5
      }
    }

    for(var v=0;v<this.data.item[11].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[11].questionNumbers[v] ){
        l+=4
      }
    }

    for(var v=0;v<this.data.item[12].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[12].questionNumbers[v] ){
        m+=4
      }
    }
    console.log("nn",nn)
    console.log("我是a",a)
    console.log("我是b",b)
    console.log("我是c",c)
    console.log("我是d",d)
    console.log("我是e",e)
    console.log("我是f",f)
    console.log("我是g",g)
    console.log("我是h",h)
    console.log("我是i",i)
    console.log("我是j",j)
    console.log("我是k",k)
    console.log("我是l",l)
    console.log("我是m",m)

    if(nn>52){
      if(c_1!=0){
        c=c+c_1
      }
      if(c_2!=0){
        c=c+c_2
      }
      if(c_3!=0){
        c=c+c_3
      }
      if(c_4!=0){
        c=c+c_4
      }
      if(c_5!=0){
        c=c+c_5
      }
      wx.setStorageSync('ocuthink_array', [{"name":"利他主义","socre":a},{"name":"美感","socre":b},{"name":"智力刺激","socre":c},{"name":"成就感","socre":d},{"name":"独立性","socre":e},{"name":"社会地位","socre":f},{"name":"管理权","socre":g},{"name":"经济报酬","socre":h},{"name":"社会交往","socre":i},{"name":"安全感","socre":j},{"name":"舒适","socre":k},{"name":"人际关系","socre":l},{"name":"变异性","socre":m}]);
      wx.setStorageSync('ocuthink_num', [a,b,c,d,e,f,g,h,i,j,k,l,m]);
      wx.redirectTo({
        url: '../ocu_think/ocu_report/ocu_report'
      })
    a=0;
    b=0;
    c=0;
    d=0;
    e=0;
    f=0;
    g=0;
    h=0;
    i=0;
    j=0;
    k=0;
    l=0;
    m=0;
    nn=0;
    num=0;
    c_1=0;
    c_2=0;
    c_3=0;
    c_4=0;
    c_5=0;
    }

    this.setData({
      a:a,
      b:b,
      c:c,
      d:d,
      e:e,
      f:f,
      g:g,
      h:h,
      i:i,
      j:j,
      k:k,
      l:l,
      m:m,
      nn:nn,
      c_1:c_1,
      c_2:c_2,
      c_3:c_3,
      c_4:c_4,
      c_5:c_5,
    })
  },

  if_C:function(){
    nn++;
    num++;
    if(num===1){
      c_3+=3
    }
    for(var v=0;v<this.data.item[0].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[0].questionNumbers[v] ){
        a+=3
      }
    }

    for(var v=0;v<this.data.item[1].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[1].questionNumbers[v] ){
        b+=3
      }
    }

    for(var v=0;v<this.data.item[2].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[2].questionNumbers[v] ){
        c+=3
      }
    }


    for(var v=0;v<this.data.item[3].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[3].questionNumbers[v] ){
        d+=3
      }
    }

    for(var v=0;v<this.data.item[4].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[4].questionNumbers[v] ){
        e+=3
      }
    }

    for(var v=0;v<this.data.item[5].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[5].questionNumbers[v] ){
        f+=3
      }
    }

    for(var v=0;v<this.data.item[6].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[6].questionNumbers[v] ){
        g+=3
      }
    }

    for(var v=0;v<this.data.item[7].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[7].questionNumbers[v] ){
        h+=3
      }
    }

    for(var v=0;v<this.data.item[8].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[8].questionNumbers[v] ){
        i+=3
      }
    }

    for(var v=0;v<this.data.item[9].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[9].questionNumbers[v] ){
        j+=3
      }
    }

    for(var v=0;v<this.data.item[10].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[10].questionNumbers[v] ){
        k+=3
      }
    }

    for(var v=0;v<this.data.item[11].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[11].questionNumbers[v] ){
        l+=3
      }
    }

    for(var v=0;v<this.data.item[12].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[12].questionNumbers[v] ){
        m+=3
      }
    }
    console.log("我是a",a)
    console.log("我是b",b)
    console.log("我是c",c)
    console.log("我是d",d)
    console.log("我是e",e)
    console.log("我是f",f)
    console.log("我是g",g)
    console.log("我是h",h)
    console.log("我是i",i)
    console.log("我是j",j)
    console.log("我是k",k)
    console.log("我是l",l)
    console.log("我是m",m)

    if(nn>52){
      if(c_1!=0){
        c=c+c_1
      }
      if(c_2!=0){
        c=c+c_2
      }
      if(c_3!=0){
        c=c+c_3
      }
      if(c_4!=0){
        c=c+c_4
      }
      if(c_5!=0){
        c=c+c_5
      }
      wx.setStorageSync('ocuthink_array', [{"name":"利他主义","socre":a},{"name":"美感","socre":b},{"name":"智力刺激","socre":c},{"name":"成就感","socre":d},{"name":"独立性","socre":e},{"name":"社会地位","socre":f},{"name":"管理权","socre":g},{"name":"经济报酬","socre":h},{"name":"社会交往","socre":i},{"name":"安全感","socre":j},{"name":"舒适","socre":k},{"name":"人际关系","socre":l},{"name":"变异性","socre":m}]);
      wx.setStorageSync('ocuthink_num', [a,b,c,d,e,f,g,h,i,j,k,l,m]);
      wx.redirectTo({
        url: '../ocu_think/ocu_report/ocu_report'
      })
    a=0;
    b=0;
    c=0;
    d=0;
    e=0;
    f=0;
    g=0;
    h=0;
    i=0;
    j=0;
    k=0;
    l=0;
    m=0;
    nn=0;
    num=0;
    c_1=0;
    c_2=0;
    c_3=0;
    c_4=0;
    c_5=0;
    }

    this.setData({
      a:a,
      b:b,
      c:c,
      d:d,
      e:e,
      f:f,
      g:g,
      h:h,
      i:i,
      j:j,
      k:k,
      l:l,
      m:m,
      nn:nn,
      c_1:c_1,
      c_2:c_2,
      c_3:c_3,
      c_4:c_4,
      c_5:c_5,
    })
  },


  if_D:function(){
    nn++;
    num++;
    if(num===1){
      c_4+=2
    }
    for(var v=0;v<this.data.item[0].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[0].questionNumbers[v] ){
        a+=2
      }
    }

    for(var v=0;v<this.data.item[1].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[1].questionNumbers[v] ){
        b+=2
      }
    }

    for(var v=0;v<this.data.item[2].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[2].questionNumbers[v] ){
        c+=2
      }
    }


    for(var v=0;v<this.data.item[3].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[3].questionNumbers[v] ){
        d+=2
      }
    }

    for(var v=0;v<this.data.item[4].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[4].questionNumbers[v] ){
        e+=2
      }
    }

    for(var v=0;v<this.data.item[5].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[5].questionNumbers[v] ){
        f+=2
      }
    }

    for(var v=0;v<this.data.item[6].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[6].questionNumbers[v] ){
        g+=2
      }
    }

    for(var v=0;v<this.data.item[7].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[7].questionNumbers[v] ){
        h+=2
      }
    }

    for(var v=0;v<this.data.item[8].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[8].questionNumbers[v] ){
        i+=2
      }
    }

    for(var v=0;v<this.data.item[9].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[9].questionNumbers[v] ){
        j+=2
      }
    }

    for(var v=0;v<this.data.item[10].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[10].questionNumbers[v] ){
        k+=2
      }
    }

    for(var v=0;v<this.data.item[11].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[11].questionNumbers[v] ){
        l+=2
      }
    }

    for(var v=0;v<this.data.item[12].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[12].questionNumbers[v] ){
        m+=2
      }
    }
    console.log("我是a",a)
    console.log("我是b",b)
    console.log("我是c",c)
    console.log("我是d",d)
    console.log("我是e",e)
    console.log("我是f",f)
    console.log("我是g",g)
    console.log("我是h",h)
    console.log("我是i",i)
    console.log("我是j",j)
    console.log("我是k",k)
    console.log("我是l",l)
    console.log("我是m",m)

    if(nn>52){
      if(c_1!=0){
        c=c+c_1
      }
      if(c_2!=0){
        c=c+c_2
      }
      if(c_3!=0){
        c=c+c_3
      }
      if(c_4!=0){
        c=c+c_4
      }
      if(c_5!=0){
        c=c+c_5
      }
      wx.setStorageSync('ocuthink_array', [{"name":"利他主义","socre":a},{"name":"美感","socre":b},{"name":"智力刺激","socre":c},{"name":"成就感","socre":d},{"name":"独立性","socre":e},{"name":"社会地位","socre":f},{"name":"管理权","socre":g},{"name":"经济报酬","socre":h},{"name":"社会交往","socre":i},{"name":"安全感","socre":j},{"name":"舒适","socre":k},{"name":"人际关系","socre":l},{"name":"变异性","socre":m}]);
      wx.setStorageSync('ocuthink_num', [a,b,c,d,e,f,g,h,i,j,k,l,m]);
      wx.redirectTo({
        url: '../ocu_think/ocu_report/ocu_report'
      })
    a=0;
    b=0;
    c=0;
    d=0;
    e=0;
    f=0;
    g=0;
    h=0;
    i=0;
    j=0;
    k=0;
    l=0;
    m=0;
    nn=0;
    num=0;
    c_1=0;
    c_2=0;
    c_3=0;
    c_4=0;
    c_5=0;
    }

    this.setData({
      a:a,
      b:b,
      c:c,
      d:d,
      e:e,
      f:f,
      g:g,
      h:h,
      i:i,
      j:j,
      k:k,
      l:l,
      m:m,
      nn:nn,
      c_1:c_1,
      c_2:c_2,
      c_3:c_3,
      c_4:c_4,
      c_5:c_5,
    })
  },


  if_E:function(){
    nn++;
    num++;
    if(num===1){
      c_5+=2
    }
    for(var v=0;v<this.data.item[0].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[0].questionNumbers[v] ){
        a+=1
      }
    }

    for(var v=0;v<this.data.item[1].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[1].questionNumbers[v] ){
        b+=1
      }
    }

    for(var v=0;v<this.data.item[2].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[2].questionNumbers[v] ){
        c+=1
      }
    }


    for(var v=0;v<this.data.item[3].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[3].questionNumbers[v] ){
        d+=1
      }
    }

    for(var v=0;v<this.data.item[4].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[4].questionNumbers[v] ){
        e+=1
      }
    }

    for(var v=0;v<this.data.item[5].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[5].questionNumbers[v] ){
        f+=1
      }
    }

    for(var v=0;v<this.data.item[6].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[6].questionNumbers[v] ){
        g+=1
      }
    }

    for(var v=0;v<this.data.item[7].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[7].questionNumbers[v] ){
        h+=1
      }
    }

    for(var v=0;v<this.data.item[8].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[8].questionNumbers[v] ){
        i+=1
      }
    }

    for(var v=0;v<this.data.item[9].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[9].questionNumbers[v] ){
        j+=1
      }
    }

    for(var v=0;v<this.data.item[10].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[10].questionNumbers[v] ){
        k+=1
      }
    }

    for(var v=0;v<this.data.item[11].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[11].questionNumbers[v] ){
        l+=1
      }
    }

    for(var v=0;v<this.data.item[12].questionNumbers.length;v++){
      if(this.data.subjects[nn].index === this.data.item[12].questionNumbers[v] ){
        m+=1
      }
    }
    console.log("我是a",a)
    console.log("我是b",b)
    console.log("我是c",c)
    console.log("我是d",d)
    console.log("我是e",e)
    console.log("我是f",f)
    console.log("我是g",g)
    console.log("我是h",h)
    console.log("我是i",i)
    console.log("我是j",j)
    console.log("我是k",k)
    console.log("我是l",l)
    console.log("我是m",m)


   

    if(nn>52){
      if(c_1!=0){
        c=c+c_1
      }
      if(c_2!=0){
        c=c+c_2
      }
      if(c_3!=0){
        c=c+c_3
      }
      if(c_4!=0){
        c=c+c_4
      }
      if(c_5!=0){
        c=c+c_5
      }
      wx.setStorageSync('ocuthink_array', [{"name":"利他主义","socre":a},{"name":"美感","socre":b},{"name":"智力刺激","socre":c},{"name":"成就感","socre":d},{"name":"独立性","socre":e},{"name":"社会地位","socre":f},{"name":"管理权","socre":g},{"name":"经济报酬","socre":h},{"name":"社会交往","socre":i},{"name":"安全感","socre":j},{"name":"舒适","socre":k},{"name":"人际关系","socre":l},{"name":"变异性","socre":m}]);
      wx.setStorageSync('ocuthink_num', [a,b,c,d,e,f,g,h,i,j,k,l,m]);
      wx.redirectTo({
        url: '../ocu_think/ocu_report/ocu_report'
      })
    a=0;
    b=0;
    c=0;
    d=0;
    e=0;
    f=0;
    g=0;
    h=0;
    i=0;
    j=0;
    k=0;
    l=0;
    m=0;
    nn=0;
    num=0;
    c_1=0;
    c_2=0;
    c_3=0;
    c_4=0;
    c_5=0;
    }

    this.setData({
      a:a,
      b:b,
      c:c,
      d:d,
      e:e,
      f:f,
      g:g,
      h:h,
      i:i,
      j:j,
      k:k,
      l:l,
      m:m,
      nn:nn,
      c_1:c_1,
      c_2:c_2,
      c_3:c_3,
      c_4:c_4,
      c_5:c_5,
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
    a=0;
    b=0;
    c=0;
    d=0;
    e=0;
    f=0;
    g=0;
    h=0;
    i=0;
    j=0;
    k=0;
    l=0;
    m=0;
    nn=0;
    num=0;
    c_1=0;
    c_2=0;
    c_3=0;
    c_4=0;
    c_5=0;

    this.setData({
      a:a,
      b:b,
      c:c,
      d:d,
      e:e,
      f:f,
      g:g,
      h:h,
      i:i,
      j:j,
      k:k,
      l:l,
      m:m,
      nn:nn,
      c_1:c_1,
      c_2:c_2,
      c_3:c_3,
      c_4:c_4,
      c_5:c_5,
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