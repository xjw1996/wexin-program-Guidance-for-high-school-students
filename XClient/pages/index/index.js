//index.js
//获取应用实例
const app = getApp()

Page({
  data: { cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'cloud://xue-vi5yk.7875-xue-vi5yk-1301765406/ad1.png',
    }, {
      id: 1,
        type: 'image',
        url: 'cloud://xue-vi5yk.7875-xue-vi5yk-1301765406/ad2.png',
    }, {
      id: 2,
      type: 'image',
      url: 'cloud://xue-vi5yk.7875-xue-vi5yk-1301765406/ad3.png',
    }, {
      id: 3,
      type: 'image',
      url: 'cloud://xue-vi5yk.7875-xue-vi5yk-1301765406/ad4.png',
    }],
    imgList:[
      'cloud://xue-vi5yk.7875-xue-vi5yk-1301765406/ad1.png',
      'cloud://xue-vi5yk.7875-xue-vi5yk-1301765406/ad2.png',
      'cloud://xue-vi5yk.7875-xue-vi5yk-1301765406/ad3.png',
      'cloud://xue-vi5yk.7875-xue-vi5yk-1301765406/ad4.png',
    ],
    nameList: [{
      name: 'MBTI职业性格测试',
    }, {
      name: '霍兰德兴趣测试',
    }, {
      name: '多元智能测试',
    }, {
      name: '学科测试',
    }, {
      name: '盖洛普优势测评',
    }, {
      name: '意志力测试',
    }, {
      name: '自控力测试',
    }, {
      name: '你会提问么？',
    }, {
      name: '七个习惯测评',
    }, {
      name: '感恩水平测试',
    }, {
      name: '责任心测评',
    }, {
      name: '自信心测评',
    }, {
      name: '职业锚测试',
    }, {
      name: 'DISC职业测试',
    }],
    swiperCurrent: 0,
  },
  //轮播图改变事件
  swiperChange: function(e){
    //console.log(e.detail.current);
    this.setData({
     swiperCurrent: e.detail.current//获取当前轮播图片的下标
    })
   },
  swiperclick: function (e) {
  var picid=e.currentTarget.id;
  console.log(picid)
  if(picid==0){
    wx.navigateTo({
      url: '../index_swiper/one/one?index=0',
    })
  }

  if(picid==1){
    wx.navigateTo({
      url: '../index_swiper/one/one?index=1',
    })
  }

  if(picid==2){
    wx.navigateTo({
      url: '../index_swiper/one/one?index=2',
    })
  }

  if(picid==3){
    wx.navigateTo({
      url: '../index_swiper/one/one?index=3',
    })
  }

  
  
  },
 
  onLoad: function () {
    wx.cloud.callFunction({
      name:"get_indexswiper",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        this.setData({
          words:  res.result.data,
        })
      },
    })   


   
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
    
  },
  
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

  namelick: function (e) {
    var N_id=e.currentTarget.id;
    console.log(N_id)
    if(N_id==0){
      wx.navigateTo({
        url: '../MBTI_detail/MBTI_detail',
      })
    }
    if(N_id==1){
      wx.navigateTo({
        url: '../HuoLanDe/HuoLanDe',
      })
    }
    if(N_id==2){
      wx.navigateTo({
        url: '../DuoZhiYuan/start_des/start_des',
      })
    }
    if(N_id==3){
      wx.navigateTo({
        url: '../XUEKE/XUEKE',
      })
    }
    if(N_id==4){
      wx.navigateTo({
        url: '../gailuopu/gailuopu',
      })
    }
    if(N_id==5){
      wx.navigateTo({
        url: '../seven_test/yizhili/yizhili',
      })
    }
    if(N_id==6){
      wx.navigateTo({
        url: '../seven_test/zikongli/zikongli',
      })
    }
    if(N_id==7){
      wx.navigateTo({
        url: '../seven_test/Are_youquestion/Are_youquestion',
      })
    }
    if(N_id==8){
      wx.navigateTo({
        url: '../seven_test/seven_XG/seven_XG',
      })
    }
    if(N_id==9){
      wx.navigateTo({
        url: '../seven_test/ganen/ganen',
      })
    }
    if(N_id==10){
      wx.navigateTo({
        url: '../seven_test/duty/duty',
      })
    }
    if(N_id==11){
      wx.navigateTo({
        url: '../seven_test/confident/confident',
      })
    }
    if(N_id==12){
      wx.navigateTo({
        url: '../seven_test/ocu_anchor/ocu_anchor',
      })
    }
    if(N_id==13){
      wx.navigateTo({
        url: '../seven_test/DISC/DISC',
      })
    }
    
    },
  ChooseCheckbox(e) {
    let items = this.data.checkbox;
    let values = e.currentTarget.dataset.value;
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      if (items[i].value == values) {
        items[i].checked = !items[i].checked;
        break
      }
    }
    this.setData({
      checkbox: items
    })
  },

})
