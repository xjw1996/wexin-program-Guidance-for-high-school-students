var words=[]
var news=[]
Page({
  // data
  data: {
    words: []
  },
  // lifecycle
  onLoad() {

    wx.cloud.callFunction({
        name:"timeline_get",
        complete: res => {
          console.log('callFunction test result: ', res.result.data)
          this.setData({
            words:  res.result.data,
          })
        },
      })   
      wx.cloud.callFunction({
        name:"get_newsswiper",
        complete: res => {
          console.log('callFunction test result: ', res.result.data)
          this.setData({
            news:  res.result.data,
          })
        },
      })   
     

  },

  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
    
  },


  swiperChange: function(e){
    //console.log(e.detail.current);
    this.setData({
     swiperCurrent: e.detail.current//获取当前轮播图片的下标
    })
   },

   swiperclick: function (e) {
    var picid=e.currentTarget.id;
    console.log(picid)
    if(picid==1){
      wx.navigateTo({
        url: '../../pages/XUEKE/shengwu/shengwu',
      })
    }
    },
   
  // methods
//   touchEntry(e) {
//     wx.navigateTo({
//       url: '../entry/entry?index=' + e.currentTarget.dataset.index
//     })
//   },
//   contentLimit(text) {
//     return text.substr(50)
//   }
})
