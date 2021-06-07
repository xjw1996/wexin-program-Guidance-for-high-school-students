//entry.js
var words=[]
Page({
  // data
  data: {
    item: [],
    words:[]
  },
  // lifecycle
  onLoad: function (options) {
    wx.showToast({
      title: '加载中....',
      icon:'loading',
      duration:2000
    })
    console.log(options.index)
    wx.cloud.callFunction({
      name:"get_tv",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        console.log('callFunction test : ', res.result.data[options.index])
        this.setData({
          words:  res.result.data[options.index],
        })
      },
    })   

  
  },
  // methods

})
