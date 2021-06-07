// pages/gailuopu/test/test.js
const itembank = require('../../../utils/itembank.js');
var score_for_item=[];
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
var n=0;
var o=0;
var p=0;
var q=0;
var r=0;
var s=0;
var t=0;
var u=0;
var v=0;
var w=0;
var x=0;
var y=0;
var z=0;
var aa=0;
var bb=0;
var cc=0;
var dd=0;
var ee=0;

var ff=0;
var gg=0;
var hh=0;
var nn=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nn:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var subjects = itembank.getSubjectData();
    var score_for_item = itembank.getabilityTopicalData();
    
    this.setData({
      subjects:subjects,
      score_for_item:score_for_item
    });
  },
  if_A:function(){
    nn++;
    console.log(this.data.subjects)
    console.log(nn+"|A")
    console.log("hello",this.data.score_for_item[0].questionNumbers[nn])
    for(var v=0;v<this.data.score_for_item[0].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[0].questionNumbers[v] ){
        a+=4
      }
    }
    
    for(var v=0;v<this.data.score_for_item[1].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[1].questionNumbers[v] ){
        b+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[2].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[2].questionNumbers[v] ){
        c+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[3].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[3].questionNumbers[v] ){
        d+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[4].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[4].questionNumbers[v] ){
        e+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[5].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[5].questionNumbers[v] ){
        f+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[6].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[6].questionNumbers[v] ){
        g+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[7].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[7].questionNumbers[v] ){
        h+=4
      }
    }

    for(var v=0;v<this.data.score_for_item[8].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[8].questionNumbers[v] ){
        i+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[9].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[9].questionNumbers[v] ){
        j+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[10].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[10].questionNumbers[v] ){
        k+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[11].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[11].questionNumbers[v] ){
        l+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[12].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[12].questionNumbers[v] ){
        m+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[13].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[13].questionNumbers[v] ){
        n+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[14].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[14].questionNumbers[v] ){
        o+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[15].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[15].questionNumbers[v] ){
        p+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[16].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[16].questionNumbers[v] ){
        q+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[17].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[17].questionNumbers[v] ){
        r+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[18].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[18].questionNumbers[v] ){
        s+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[19].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[19].questionNumbers[v] ){
        t+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[20].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[20].questionNumbers[v] ){
        u+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[21].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[21].questionNumbers[v] ){
        v+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[22].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[22].questionNumbers[v] ){
        w+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[23].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[23].questionNumbers[v] ){
        x+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[24].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[24].questionNumbers[v] ){
        y+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[25].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[25].questionNumbers[v] ){
        z+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[26].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[26].questionNumbers[v] ){
      aa+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[27].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[27].questionNumbers[v] ){
        bb+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[28].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[28].questionNumbers[v] ){
        cc+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[29].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[29].questionNumbers[v] ){
        dd+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[30].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[30].questionNumbers[v] ){
        ee+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[31].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[31].questionNumbers[v] ){
        ff+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[32].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[32].questionNumbers[v] ){
        gg+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[33].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[33].questionNumbers[v] ){
        hh+=4
      }
    }
    

    if (nn == 180) {
      wx.setStorageSync('gailuopu_string', ["成就","行动","适应","分析","统筹","信仰","统率","沟通","竞争","关联","回顾","审慎","伯乐","纪律","体谅","公平","专注","前瞻","和谐","理念","包容","个别","搜集","思维","学习","完美","积极","交往","责任","排难","自信","追求","战略","取悦"]);
      wx.setStorageSync('gailuopu_score', [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,bb,cc,dd,ee,ff,gg,hh]);
      wx.setStorageSync('gailuopu_array', [{"name":"成就","socre":a},{"name":"行动","socre":b},{"name":"适应","socre":c},{"name":"分析","socre":d},{"name":"统筹","socre":e},{"name":"信仰","socre":f},{"name":"统率","socre":g},{"name":"沟通","socre":h},{"name":"竞争","socre":i},{"name":"关联","socre":j},{"name":"回顾","socre":k},{"name":"审慎","socre":l},{"name":"伯乐","socre":m},{"name":"纪律","socre":n},{"name":"体谅","socre":o},{"name":"公平","socre":p},{"name":"专注","socre":q},{"name":"前瞻","socre":r},{"name":"和谐","socre":s},{"name":"理念","socre":t},{"name":"包容","socre":u},{"name":"个别","socre":v},{"name":"搜集","socre":w},{"name":"思维","socre":x},{"name":"学习","socre":y},{"name":"完美","socre":z},{"name":"积极","socre":aa},{"name":"交往","socre":bb},{"name":"责任","socre":cc},{"name":"排难","socre":dd},{"name":"自信","socre":ee},{"name":"追求","socre":ff},{"name":"战略","socre":gg},{"name":"取悦","socre":hh}]);
      wx.redirectTo({
        url: '../test_result/test_result'
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
    n=0;
    o=0;
    p=0;
    q=0;
    r=0;
    s=0;
    t=0;
    u=0;
    v=0;
    w=0;
    x=0;
    y=0;
    z=0;
    aa=0;
    bb=0;
    cc=0;
    dd=0;
    ee=0;

    ff=0;
    gg=0;
    hh=0;
    nn=0;
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
      n:n,
      o:o,
      p:p,
      q:q,
      r:r,
      s:s,
      t:t,
      u:u,
      v:v,
      w:w,
      x:x,
      y:y,
      z:z,
      aa:aa,
      bb:bb,
      cc:cc,
      dd:dd,
      ee:ee,
      ff:ff,
      gg:gg,
      hh:hh,
      nn:nn
    })
  },

  if_B:function(){
    nn++;
    console.log(this.data.score_for_item.length)
    console.log(nn+"|A")
    console.log("hello",this.data.score_for_item[0].questionNumbers[nn])
    for(var v=0;v<this.data.score_for_item[0].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[0].questionNumbers[v] ){
        a+=1
      }
    }
    
    for(var v=0;v<this.data.score_for_item[1].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[1].questionNumbers[v] ){
        b+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[2].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[2].questionNumbers[v] ){
        c+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[3].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[3].questionNumbers[v] ){
        d+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[4].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[4].questionNumbers[v] ){
        e+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[5].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[5].questionNumbers[v] ){
        f+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[6].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[6].questionNumbers[v] ){
        g+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[7].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[7].questionNumbers[v] ){
        h+=1
      }
    }

    for(var v=0;v<this.data.score_for_item[8].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[8].questionNumbers[v] ){
        i+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[9].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[9].questionNumbers[v] ){
        j+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[10].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[10].questionNumbers[v] ){
        k+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[11].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[11].questionNumbers[v] ){
        l+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[12].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[12].questionNumbers[v] ){
        m+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[13].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[13].questionNumbers[v] ){
        n+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[14].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[14].questionNumbers[v] ){
        o+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[15].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[15].questionNumbers[v] ){
        p+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[16].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[16].questionNumbers[v] ){
        q+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[17].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[17].questionNumbers[v] ){
        r+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[18].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[18].questionNumbers[v] ){
        s+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[19].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[19].questionNumbers[v] ){
        t+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[20].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[20].questionNumbers[v] ){
        u+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[21].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[21].questionNumbers[v] ){
        v+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[22].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[22].questionNumbers[v] ){
        w+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[23].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[23].questionNumbers[v] ){
        x+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[24].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[24].questionNumbers[v] ){
        y+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[25].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[25].questionNumbers[v] ){
        z+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[26].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[26].questionNumbers[v] ){
      aa+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[27].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[27].questionNumbers[v] ){
        bb+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[28].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[28].questionNumbers[v] ){
        cc+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[29].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[29].questionNumbers[v] ){
        dd+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[30].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[30].questionNumbers[v] ){
        ee+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[31].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[31].questionNumbers[v] ){
        ff+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[32].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[32].questionNumbers[v] ){
        gg+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[33].questionNumbers.length;v++){
      if(nn+"|A" === this.data.score_for_item[33].questionNumbers[v] ){
        hh+=1
      }
    }
    

    if (nn == 180) {
      wx.setStorageSync('gailuopu_string', ["成就","行动","适应","分析","统筹","信仰","统率","沟通","竞争","关联","回顾","审慎","伯乐","纪律","体谅","公平","专注","前瞻","和谐","理念","包容","个别","搜集","思维","学习","完美","积极","交往","责任","排难","自信","追求","战略","取悦"]);
      wx.setStorageSync('gailuopu_score', [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,bb,cc,dd,ee,ff,gg,hh]);
      wx.setStorageSync('gailuopu_array', [{"name":"成就","socre":a},{"name":"行动","socre":b},{"name":"适应","socre":c},{"name":"分析","socre":d},{"name":"统筹","socre":e},{"name":"信仰","socre":f},{"name":"统率","socre":g},{"name":"沟通","socre":h},{"name":"竞争","socre":i},{"name":"关联","socre":j},{"name":"回顾","socre":k},{"name":"审慎","socre":l},{"name":"伯乐","socre":m},{"name":"纪律","socre":n},{"name":"体谅","socre":o},{"name":"公平","socre":p},{"name":"专注","socre":q},{"name":"前瞻","socre":r},{"name":"和谐","socre":s},{"name":"理念","socre":t},{"name":"包容","socre":u},{"name":"个别","socre":v},{"name":"搜集","socre":w},{"name":"思维","socre":x},{"name":"学习","socre":y},{"name":"完美","socre":z},{"name":"积极","socre":aa},{"name":"交往","socre":bb},{"name":"责任","socre":cc},{"name":"排难","socre":dd},{"name":"自信","socre":ee},{"name":"追求","socre":ff},{"name":"战略","socre":gg},{"name":"取悦","socre":hh}]);
      wx.redirectTo({
        url: '../test_result/test_result'
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
    n=0;
    o=0;
    p=0;
    q=0;
    r=0;
    s=0;
    t=0;
    u=0;
    v=0;
    w=0;
    x=0;
    y=0;
    z=0;
    aa=0;
    bb=0;
    cc=0;
    dd=0;
    ee=0;

    ff=0;
    gg=0;
    hh=0;
    nn=0;
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
      n:n,
      o:o,
      p:p,
      q:q,
      r:r,
      s:s,
      t:t,
      u:u,
      v:v,
      w:w,
      x:x,
      y:y,
      z:z,
      aa:aa,
      bb:bb,
      cc:cc,
      dd:dd,
      ee:ee,
      ff:ff,
      gg:gg,
      hh:hh,
      nn:nn
    })
  },
  if_C:function(){
    nn++;
    console.log(this.data.score_for_item.length)
    // console.log(nn+"|A")
    // console.log("hello",this.data.score_for_item[0].questionNumbers[nn])
    for(var v=0;v<this.data.score_for_item[0].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[0].questionNumbers[v] ){
        a+=1
      }
    }
    
    for(var v=0;v<this.data.score_for_item[1].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[1].questionNumbers[v] ){
        b+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[2].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[2].questionNumbers[v] ){
        c+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[3].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[3].questionNumbers[v] ){
        d+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[4].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[4].questionNumbers[v] ){
        e+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[5].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[5].questionNumbers[v] ){
        f+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[6].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[6].questionNumbers[v] ){
        g+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[7].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[7].questionNumbers[v] ){
        h+=1
      }
    }

    for(var v=0;v<this.data.score_for_item[8].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[8].questionNumbers[v] ){
        i+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[9].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[9].questionNumbers[v] ){
        j+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[10].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[10].questionNumbers[v] ){
        k+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[11].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[11].questionNumbers[v] ){
        l+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[12].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[12].questionNumbers[v] ){
        m+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[13].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[13].questionNumbers[v] ){
        n+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[14].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[14].questionNumbers[v] ){
        o+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[15].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[15].questionNumbers[v] ){
        p+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[16].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[16].questionNumbers[v] ){
        q+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[17].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[17].questionNumbers[v] ){
        r+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[18].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[18].questionNumbers[v] ){
        s+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[19].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[19].questionNumbers[v] ){
        t+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[20].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[20].questionNumbers[v] ){
        u+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[21].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[21].questionNumbers[v] ){
        v+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[22].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[22].questionNumbers[v] ){
        w+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[23].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[23].questionNumbers[v] ){
        x+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[24].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[24].questionNumbers[v] ){
        y+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[25].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[25].questionNumbers[v] ){
        z+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[26].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[26].questionNumbers[v] ){
      aa+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[27].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[27].questionNumbers[v] ){
        bb+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[28].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[28].questionNumbers[v] ){
        cc+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[29].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[29].questionNumbers[v] ){
        dd+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[30].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[30].questionNumbers[v] ){
        ee+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[31].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[31].questionNumbers[v] ){
        ff+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[32].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[32].questionNumbers[v] ){
        gg+=1
      }
    }
    for(var v=0;v<this.data.score_for_item[33].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[33].questionNumbers[v] ){
        hh+=1
      }
    }
    

    if (nn == 180) {
      wx.setStorageSync('gailuopu_string', ["成就","行动","适应","分析","统筹","信仰","统率","沟通","竞争","关联","回顾","审慎","伯乐","纪律","体谅","公平","专注","前瞻","和谐","理念","包容","个别","搜集","思维","学习","完美","积极","交往","责任","排难","自信","追求","战略","取悦"]);
      wx.setStorageSync('gailuopu_score', [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,bb,cc,dd,ee,ff,gg,hh]);
      wx.setStorageSync('gailuopu_array', [{"name":"成就","socre":a},{"name":"行动","socre":b},{"name":"适应","socre":c},{"name":"分析","socre":d},{"name":"统筹","socre":e},{"name":"信仰","socre":f},{"name":"统率","socre":g},{"name":"沟通","socre":h},{"name":"竞争","socre":i},{"name":"关联","socre":j},{"name":"回顾","socre":k},{"name":"审慎","socre":l},{"name":"伯乐","socre":m},{"name":"纪律","socre":n},{"name":"体谅","socre":o},{"name":"公平","socre":p},{"name":"专注","socre":q},{"name":"前瞻","socre":r},{"name":"和谐","socre":s},{"name":"理念","socre":t},{"name":"包容","socre":u},{"name":"个别","socre":v},{"name":"搜集","socre":w},{"name":"思维","socre":x},{"name":"学习","socre":y},{"name":"完美","socre":z},{"name":"积极","socre":aa},{"name":"交往","socre":bb},{"name":"责任","socre":cc},{"name":"排难","socre":dd},{"name":"自信","socre":ee},{"name":"追求","socre":ff},{"name":"战略","socre":gg},{"name":"取悦","socre":hh}]);
      wx.redirectTo({
        url: '../test_result/test_result'
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
    n=0;
    o=0;
    p=0;
    q=0;
    r=0;
    s=0;
    t=0;
    u=0;
    v=0;
    w=0;
    x=0;
    y=0;
    z=0;
    aa=0;
    bb=0;
    cc=0;
    dd=0;
    ee=0;

    ff=0;
    gg=0;
    hh=0;
    nn=0;
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
      n:n,
      o:o,
      p:p,
      q:q,
      r:r,
      s:s,
      t:t,
      u:u,
      v:v,
      w:w,
      x:x,
      y:y,
      z:z,
      aa:aa,
      bb:bb,
      cc:cc,
      dd:dd,
      ee:ee,
      ff:ff,
      gg:gg,
      hh:hh,
      nn:nn
    })
  },

  if_D:function(){
    nn++;
    console.log(this.data.score_for_item.length)
    // console.log(nn+"|A")
    // console.log("hello",this.data.score_for_item[0].questionNumbers[nn])
    for(var v=0;v<this.data.score_for_item[0].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[0].questionNumbers[v] ){
        a+=4
      }
    }
    
    for(var v=0;v<this.data.score_for_item[1].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[1].questionNumbers[v] ){
        b+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[2].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[2].questionNumbers[v] ){
        c+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[3].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[3].questionNumbers[v] ){
        d+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[4].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[4].questionNumbers[v] ){
        e+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[5].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[5].questionNumbers[v] ){
        f+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[6].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[6].questionNumbers[v] ){
        g+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[7].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[7].questionNumbers[v] ){
        h+=4
      }
    }

    for(var v=0;v<this.data.score_for_item[8].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[8].questionNumbers[v] ){
        i+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[9].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[9].questionNumbers[v] ){
        j+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[10].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[10].questionNumbers[v] ){
        k+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[11].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[11].questionNumbers[v] ){
        l+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[12].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[12].questionNumbers[v] ){
        m+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[13].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[13].questionNumbers[v] ){
        n+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[14].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[14].questionNumbers[v] ){
        o+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[15].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[15].questionNumbers[v] ){
        p+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[16].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[16].questionNumbers[v] ){
        q+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[17].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[17].questionNumbers[v] ){
        r+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[18].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[18].questionNumbers[v] ){
        s+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[19].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[19].questionNumbers[v] ){
        t+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[20].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[20].questionNumbers[v] ){
        u+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[21].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[21].questionNumbers[v] ){
        v+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[22].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[22].questionNumbers[v] ){
        w+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[23].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[23].questionNumbers[v] ){
        x+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[24].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[24].questionNumbers[v] ){
        y+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[25].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[25].questionNumbers[v] ){
        z+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[26].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[26].questionNumbers[v] ){
      aa+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[27].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[27].questionNumbers[v] ){
        bb+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[28].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[28].questionNumbers[v] ){
        cc+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[29].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[29].questionNumbers[v] ){
        dd+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[30].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[30].questionNumbers[v] ){
        ee+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[31].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[31].questionNumbers[v] ){
        ff+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[32].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[32].questionNumbers[v] ){
        gg+=4
      }
    }
    for(var v=0;v<this.data.score_for_item[33].questionNumbers.length;v++){
      if(nn+"|B" === this.data.score_for_item[33].questionNumbers[v] ){
        hh+=4
      }
    }
    

    if (nn == 180) {
      wx.setStorageSync('gailuopu_string', ["成就","行动","适应","分析","统筹","信仰","统率","沟通","竞争","关联","回顾","审慎","伯乐","纪律","体谅","公平","专注","前瞻","和谐","理念","包容","个别","搜集","思维","学习","完美","积极","交往","责任","排难","自信","追求","战略","取悦"]);
      wx.setStorageSync('gailuopu_score', [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,bb,cc,dd,ee,ff,gg,hh]);
      wx.setStorageSync('gailuopu_array', [{"name":"成就","socre":a},{"name":"行动","socre":b},{"name":"适应","socre":c},{"name":"分析","socre":d},{"name":"统筹","socre":e},{"name":"信仰","socre":f},{"name":"统率","socre":g},{"name":"沟通","socre":h},{"name":"竞争","socre":i},{"name":"关联","socre":j},{"name":"回顾","socre":k},{"name":"审慎","socre":l},{"name":"伯乐","socre":m},{"name":"纪律","socre":n},{"name":"体谅","socre":o},{"name":"公平","socre":p},{"name":"专注","socre":q},{"name":"前瞻","socre":r},{"name":"和谐","socre":s},{"name":"理念","socre":t},{"name":"包容","socre":u},{"name":"个别","socre":v},{"name":"搜集","socre":w},{"name":"思维","socre":x},{"name":"学习","socre":y},{"name":"完美","socre":z},{"name":"积极","socre":aa},{"name":"交往","socre":bb},{"name":"责任","socre":cc},{"name":"排难","socre":dd},{"name":"自信","socre":ee},{"name":"追求","socre":ff},{"name":"战略","socre":gg},{"name":"取悦","socre":hh}]);
      wx.redirectTo({
        url: '../test_result/test_result'
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
    n=0;
    o=0;
    p=0;
    q=0;
    r=0;
    s=0;
    t=0;
    u=0;
    v=0;
    w=0;
    x=0;
    y=0;
    z=0;
    aa=0;
    bb=0;
    cc=0;
    dd=0;
    ee=0;

    ff=0;
    gg=0;
    hh=0;
    nn=0;
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
      n:n,
      o:o,
      p:p,
      q:q,
      r:r,
      s:s,
      t:t,
      u:u,
      v:v,
      w:w,
      x:x,
      y:y,
      z:z,
      aa:aa,
      bb:bb,
      cc:cc,
      dd:dd,
      ee:ee,
      ff:ff,
      gg:gg,
      hh:hh,
      nn:nn
    })  
  },

  if_E:function(){
    nn++;
    if (nn == 180) {
      wx.setStorageSync('gailuopu_string', ["成就","行动","适应","分析","统筹","信仰","统率","沟通","竞争","关联","回顾","审慎","伯乐","纪律","体谅","公平","专注","前瞻","和谐","理念","包容","个别","搜集","思维","学习","完美","积极","交往","责任","排难","自信","追求","战略","取悦"]);
      wx.setStorageSync('gailuopu_score', [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,bb,cc,dd,ee,ff,gg,hh]);
      wx.setStorageSync('gailuopu_array', [{"name":"成就","socre":a},{"name":"行动","socre":b},{"name":"适应","socre":c},{"name":"分析","socre":d},{"name":"统筹","socre":e},{"name":"信仰","socre":f},{"name":"统率","socre":g},{"name":"沟通","socre":h},{"name":"竞争","socre":i},{"name":"关联","socre":j},{"name":"回顾","socre":k},{"name":"审慎","socre":l},{"name":"伯乐","socre":m},{"name":"纪律","socre":n},{"name":"体谅","socre":o},{"name":"公平","socre":p},{"name":"专注","socre":q},{"name":"前瞻","socre":r},{"name":"和谐","socre":s},{"name":"理念","socre":t},{"name":"包容","socre":u},{"name":"个别","socre":v},{"name":"搜集","socre":w},{"name":"思维","socre":x},{"name":"学习","socre":y},{"name":"完美","socre":z},{"name":"积极","socre":aa},{"name":"交往","socre":bb},{"name":"责任","socre":cc},{"name":"排难","socre":dd},{"name":"自信","socre":ee},{"name":"追求","socre":ff},{"name":"战略","socre":gg},{"name":"取悦","socre":hh}]);
      wx.redirectTo({
        url: '../test_result/test_result'
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
    n=0;
    o=0;
    p=0;
    q=0;
    r=0;
    s=0;
    t=0;
    u=0;
    v=0;
    w=0;
    x=0;
    y=0;
    z=0;
    aa=0;
    bb=0;
    cc=0;
    dd=0;
    ee=0;

    ff=0;
    gg=0;
    hh=0;
    nn=0;
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
      n:n,
      o:o,
      p:p,
      q:q,
      r:r,
      s:s,
      t:t,
      u:u,
      v:v,
      w:w,
      x:x,
      y:y,
      z:z,
      aa:aa,
      bb:bb,
      cc:cc,
      dd:dd,
      ee:ee,
      ff:ff,
      gg:gg,
      hh:hh,
      nn:nn
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
    n=0;
    o=0;
    p=0;
    q=0;
    r=0;
    s=0;
    t=0;
    u=0;
    v=0;
    w=0;
    x=0;
    y=0;
    z=0;
    aa=0;
    bb=0;
    cc=0;
    dd=0;
    ee=0;
    ff=0;
    gg=0;
    hh=0;
    nn=0;
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
      n:n,
      o:o,
      p:p,
      q:q,
      r:r,
      s:s,
      t:t,
      u:u,
      v:v,
      w:w,
      x:x,
      y:y,
      z:z,
      aa:aa,
      bb:bb,
      cc:cc,
      dd:dd,
      ee:ee,
      ff:ff,
      gg:gg,
      hh:hh,
      nn:nn
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