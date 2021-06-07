// pages/start_hld/start_hld.js
var reality = [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, 78, 84];  //现实型
var research = [1, 7, 13, 19, 25, 31, 37, 43, 49, 55, 61, 67, 73, 79, 85];// 研究型
var art = [2, 8, 14, 20, 26, 32, 38, 44, 50, 56, 62, 68, 74, 80, 86];  // 艺术型
var social = [3, 9, 15, 21, 27, 33, 39, 45, 51, 57, 63, 69, 75, 81, 87];  // 社会型
var enterprise = [4, 10, 16, 22, 28, 34, 40, 46, 52, 58, 64, 70, 76, 82, 88];  // 企业型
var routine = [5, 11, 17, 23, 29, 35, 41, 47, 53, 59, 65, 71, 77, 83, 89];  // 常规型
var reality_add = 0;
var research_add = 0;
var rt_add = 0;
var social_add = 0;
var enterprise_add = 0;
var routine_add = 0;
var num_bool =0 ;//是否count
var i;
var sed;//答题第二条开始
var new_content;//切换的题目内容
var question_num = 1;//题目序号
var n=0;
var data;
var reality_score;
var type_data=[];
var value ;
var info;
var arr=1;
Page({
  

  /**
   * 页面的初始数据
   */
  data: {
    queslist:[],
    n : 0,
    data:[],
    type_data:[],
    percent:0,
    arr : 1
    
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
      name:"get_hld_data",
      complete: res => {
        console.log('callFunction test result: ', res.result.data)
        this.setData({
          queslist:  res.result.data,
          n:n,
          arr:arr
        })
      },
    })   
  },

  

  //点击下一道题
  //是
  if_A:function(e){
    
  //   console.log(question_num)
  //  console.log("=======")
  //  //sed = i+1;
  //  //n   = i+1;
  arr++;
   if(this.data.queslist[n]._id ==reality[this.data.queslist[n].arr_num] ){
    reality_add=reality_add+3
  }
  if(this.data.queslist[n]._id == research[this.data.queslist[n].arr_num]){
    research_add=research_add+3
  } 
  if(this.data.queslist[n]._id == art[this.data.queslist[n].arr_num]){
    rt_add=rt_add+3
  }
  if(this.data.queslist[n]._id == social[this.data.queslist[n].arr_num]){
    social_add=social_add+3
  }
  if(this.data.queslist[n]._id == enterprise[this.data.queslist[n].arr_num]){
    enterprise_add=enterprise_add+3
  }
  if(this.data.queslist[n]._id == routine[this.data.queslist[n].arr_num]){
    routine_add=routine_add+3
  }
  n++
   console.log(reality_add)
   console.log(research_add)
   console.log(rt_add)
   console.log(social_add) 
   console.log(enterprise_add)
   console.log(routine_add)
   console.log('-------------------------------------------------')
   console.log('-------------------------------------------------')
   type_data=[{"reality_add":reality_add},{"research_add":research_add},{"rt_add":rt_add},{"social_add":social_add},{"enterprise_add":enterprise_add},{"routine_add":routine_add}]
   var info = encodeURIComponent(JSON.stringify(type_data));
   if (n == 90) {
     wx.redirectTo({
       url: '../start_hld/h_report/h_report?info='+info
     })
   }

   if(n > 89){
    reality_add=0,
    type_data=0,
    research_add=0,
    rt_add=0,
    social_add=0,
    enterprise_add=0,
    routine_add=0,
    n=0,
    arr=0
   }
   this.setData({
     question_num:question_num,
     reality_add:reality_add,
     type_data: type_data,
     research_add:research_add,
     rt_add:rt_add,
     social_add:social_add,
     enterprise_add:enterprise_add,
     routine_add:routine_add,
     n:n,
     i:i,
     num_bool:num_bool,
     arr:arr
   })
 },

  //否


  if_B:function(e){
    
    //   console.log(question_num)
    //  console.log("=======")
    //  //sed = i+1;
    //  //n   = i+1;
    arr++;
     if(this.data.queslist[n]._id ==reality[this.data.queslist[n].arr_num] ){
      reality_add=reality_add+2
    }
    if(this.data.queslist[n]._id == research[this.data.queslist[n].arr_num]){
      research_add=research_add+2
    } 
    if(this.data.queslist[n]._id == art[this.data.queslist[n].arr_num]){
      rt_add=rt_add+2
    }
    if(this.data.queslist[n]._id == social[this.data.queslist[n].arr_num]){
      social_add=social_add+2
    }
    if(this.data.queslist[n]._id == enterprise[this.data.queslist[n].arr_num]){
      enterprise_add=enterprise_add+2
    }
    if(this.data.queslist[n]._id == routine[this.data.queslist[n].arr_num]){
      routine_add=routine_add+2
    }
    n++
     console.log(reality_add)
     console.log(research_add)
     console.log(rt_add)
     console.log(social_add) 
     console.log(enterprise_add)
     console.log(routine_add)
     console.log('-------------------------------------------------')
     console.log('-------------------------------------------------')
     type_data=[{"reality_add":reality_add},{"research_add":research_add},{"rt_add":rt_add},{"social_add":social_add},{"enterprise_add":enterprise_add},{"routine_add":routine_add}]
     var info = encodeURIComponent(JSON.stringify(type_data));
     if (n == 90) {
       wx.redirectTo({
         url: '../start_hld/h_report/h_report?info='+info
       })
     }
  
     if(n > 89){
      reality_add=0,
      type_data=0,
      research_add=0,
      rt_add=0,
      social_add=0,
      enterprise_add=0,
      routine_add=0,
      n=0,
      arr=0
     }
     this.setData({
       question_num:question_num,
       reality_add:reality_add,
       type_data: type_data,
       research_add:research_add,
       rt_add:rt_add,
       social_add:social_add,
       enterprise_add:enterprise_add,
       routine_add:routine_add,
       n:n,
       i:i,
       num_bool:num_bool,
       arr:arr
     })
   },
   if_C:function(e){
    
    //   console.log(question_num)
    //  console.log("=======")
    //  //sed = i+1;
    //  //n   = i+1;
    arr++;
     if(this.data.queslist[n]._id ==reality[this.data.queslist[n].arr_num] ){
      reality_add=reality_add+1
    }
    if(this.data.queslist[n]._id == research[this.data.queslist[n].arr_num]){
      research_add=research_add+1
    } 
    if(this.data.queslist[n]._id == art[this.data.queslist[n].arr_num]){
      rt_add=rt_add+1
    }
    if(this.data.queslist[n]._id == social[this.data.queslist[n].arr_num]){
      social_add=social_add+1
    }
    if(this.data.queslist[n]._id == enterprise[this.data.queslist[n].arr_num]){
      enterprise_add=enterprise_add+1
    }
    if(this.data.queslist[n]._id == routine[this.data.queslist[n].arr_num]){
      routine_add=routine_add+1
    }
    n++
     console.log(reality_add)
     console.log(research_add)
     console.log(rt_add)
     console.log(social_add) 
     console.log(enterprise_add)
     console.log(routine_add)
     console.log('-------------------------------------------------')
     console.log('-------------------------------------------------')
     type_data=[{"reality_add":reality_add},{"research_add":research_add},{"rt_add":rt_add},{"social_add":social_add},{"enterprise_add":enterprise_add},{"routine_add":routine_add}]
     var info = encodeURIComponent(JSON.stringify(type_data));
     if (n == 90) {
       wx.redirectTo({
         url: '../start_hld/h_report/h_report?info='+info
       })
     }
  
     if(n > 89){
      reality_add=0,
      type_data=0,
      research_add=0,
      rt_add=0,
      social_add=0,
      enterprise_add=0,
      routine_add=0,
      n=0,
      arr=0
     }
     this.setData({
       question_num:question_num,
       reality_add:reality_add,
       type_data: type_data,
       research_add:research_add,
       rt_add:rt_add,
       social_add:social_add,
       enterprise_add:enterprise_add,
       routine_add:routine_add,
       n:n,
       i:i,
       num_bool:num_bool,
       arr:arr
     })
   },
   if_D:function(e){

    arr++
    n++
     console.log(reality_add)
     console.log(research_add)
     console.log(rt_add)
     console.log(social_add) 
     console.log(enterprise_add)
     console.log(routine_add)
     console.log('-------------------------------------------------')
     console.log('-------------------------------------------------')
     type_data=[{"reality_add":reality_add},{"research_add":research_add},{"rt_add":rt_add},{"social_add":social_add},{"enterprise_add":enterprise_add},{"routine_add":routine_add}]
     var info = encodeURIComponent(JSON.stringify(type_data));
     if (n == 90) {
       wx.redirectTo({
         url: '../start_hld/h_report/h_report?info='+info
       })
     }
  
     if(n > 89){
      reality_add=0,
      type_data=0,
      research_add=0,
      rt_add=0,
      social_add=0,
      enterprise_add=0,
      routine_add=0,
      n=0,
      arr=0
     }
     this.setData({
       question_num:question_num,
       reality_add:reality_add,
       type_data: type_data,
       research_add:research_add,
       rt_add:rt_add,
       social_add:social_add,
       enterprise_add:enterprise_add,
       routine_add:routine_add,
       n:n,
       i:i,
       num_bool:num_bool,
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
      reality_add=0,
      type_data=0,
      research_add=0,
      rt_add=0,
      social_add=0,
      enterprise_add=0,
      routine_add=0,
      n=0,
      arr=0
    this.setData({
      i:i,
      question_num:question_num,
      n:n,
      num_bool:num_bool,
      reality_add:reality_add,
      type_data: type_data,
      research_add:research_add,
      rt_add:rt_add,
      social_add:social_add,
      enterprise_add:enterprise_add,
      routine_add:routine_add,
      arr:arr
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

  },

})