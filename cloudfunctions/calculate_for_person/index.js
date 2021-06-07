// 云函数入口文件
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
const cloud = require('wx-server-sdk')
cloud.init()
var num;
var arr_num;
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  if(event.num == reality[event.arr_num]){
    reality_add++
  }
  if(event.num == research[event.arr_num]){
    research_add++
  } 
  if(event.num == art[event.arr_num]){
    rt_add++
  }
  if(event.num == social[event.arr_num]){
    social_add++
  }
  if(event.num == enterprise[event.arr_num]){
    enterprise_add++
  }
  if(event.num == routine[event.arr_num]){
    routine_add++
  }

  

  return {
    event,
    reality_add:reality_add,
    research_add:research_add,
    rt_add:rt_add,
    social_add:social_add,
    enterprise_add:enterprise_add,
    routine_add:routine_add
  }
}