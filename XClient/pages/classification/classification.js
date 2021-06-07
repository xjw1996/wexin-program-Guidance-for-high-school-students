// pages/classification/classification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   

  level: [{
    id: 0,
    name: "高一上册",
    src: "../textbook/one_fallsemester/one_fallsemester"
  }, {
    id: 1,
      name: "高一下册",
      src: "../textbook/one_springsemester/one_springsemester"

  }, {
    id: 2,
    name: "高二上册",
    src: "../textbook/two_fallsemester/two_fallsemester"
  }, {
    id: 3,
    name: "高二下册",
    src: "../textbook/two_springsemester/two_springsemester"
  }],

  // swiperList : [{
  //   id: 0,
  //   type: 'image',
  //   url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3393556609,1386191998&fm=26&gp=0.jpg'
  // }, {
  //   id: 1,
  //     type: 'image',
  //     url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=986329956,2397128956&fm=11&gp=0.jpg',
  // }, {
  //   id: 2,
  //   type: 'image',
  //   url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4160957617,491559095&fm=26&gp=0.jpg'
  // }, {
  //   id: 3,
  //   type: 'image',
  //   url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3992179276,787409621&fm=26&gp=0.jpg'
  // }, {
  //   id: 4,
  //   type: 'image',
  //   url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4021500044,1611398011&fm=26&gp=0.jpg'
  // }, {
  //   id: 5,
  //   type: 'image',
  //   url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=891346183,3085789282&fm=26&gp=0.jpg'
  // }, {
  //   id: 6,
  //   type: 'image',
  //   url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1927779009,2911234904&fm=26&gp=0.jpg'
  // }],


  list: [{
    title: '',
    url: 'https://7875-xuejingwei-m9vpp-1302778999.tcb.qcloud.la/partoftest/gcyi11111111111111.png?sign=e007b750bb9c262e56a5c168e99dc4a9&t=1600964618',
    path: '../textbook/one_fallsemester/one_fallsemester'
},
  {
    title: '',
    url: 'https://7875-xuejingwei-m9vpp-1302778999.tcb.qcloud.la/partoftest/gcyixxce.png?sign=e4edf7e4ac964c5e4896e0fe0ac114d6&t=1600966527',
    path: '../textbook/one_springsemester/one_springsemester'
  },
  {
    title: '',
    url: 'https://7875-xuejingwei-m9vpp-1302778999.tcb.qcloud.la/partoftest/gceruhce.png?sign=4e275f7a85a0cf1418260c5add5923ee&t=1600966555',
    path: '../textbook/two_fallsemester/two_fallsemester'
  },
  {
    title: '',
    url: 'https://7875-xuejingwei-m9vpp-1302778999.tcb.qcloud.la/partoftest/gcerxxce2.png?sign=7a8a5a9e405f73586db561ba9e2fda3b&t=1600966669',
    path: '../textbook/two_springsemester/two_springsemester'
  }
]
},



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:"get_classi_pic",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        this.setData({
          swiperList:  res.result.data,
        })
        this.towerSwiper('swiperList')
      },
    }) 
    // this.towerSwiper('swiperList')
  },
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },

  toChild(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },

  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
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