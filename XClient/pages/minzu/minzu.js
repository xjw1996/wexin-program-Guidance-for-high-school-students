// pages/minzu/minzu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [{
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
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  swiperclick: function (e) {
    var picid=e.currentTarget.id;
    console.log(picid)
    if(picid==1){
      wx.navigateTo({
        url: '../../pages/XUEKE/shengwu/shengwu',
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