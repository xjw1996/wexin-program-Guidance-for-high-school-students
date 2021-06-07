/**
 * 获取所有题目数据
 */


var subjectData = [{
  index: 1,
  titileA: "1.你的工作必须经常解决新的问题。"
}, {
  index: 2,
  titileA: "2.你的工作能为社会带来看得见的效果。"
}, {
  index: 3,
  titileA: "3.你的工作奖金很高。"
}, {
  index: 4,
  titileA: "4.你的工作内容经常变换。"
}, {
  index: 5,
  titileA: "5.你能在你的工作范围内自由发挥。"
}, {
  index: 6,
  titileA: "6.工作能使你的同学、朋友非常羡慕你。"
}, {
  index: 7,
  titileA: "7.工作带有艺术性。"
}, {
  index: 8,
  titileA: "8.你的工作能使人感觉到你是团体中的一分子。"
}, {
  index: 9,
  titileA: "9.不论你怎么干，你总能和大多数人一样晋级和长工资。"
}, {
  index: 10,
  titileA: "10.你的工作使你有可能经常变换工作地点、场所或方式。"
}, {
  index: 11,
  titileA: "11.在工作中你能接触到各种不同的人。"
}, {
  index: 12,
  titileA: "12.你的工作上下班时间比较随便、自由。"
}, {
  index: 13,
  titileA: "13.你的工作使你不断获得成功的感觉。"
}, {
  index: 14,
  titileA: "14.工作赋予你高于别人的权力。"
}, {
  index: 15,
  titileA: "15.在工作中，你能试行一些自己的新想法。"
}, {
  index: 16,
  titileA: "16.在工作中你不会因为身体或能力等因素，被人瞧不起。"
}, {
  index: 17,
  titileA: "17.你能从工作的成果中，知道自己做得不错。"
}, {
  index: 18,
  titileA: "18.经常要外出，参加各种集会和活动。"
}, {
  index: 19,
  titileA: "19.只要做这份工作，就不想被调到其他意想不到的单位。"
}, {
  index: 20,
  titileA: "20.工作能使世界更美丽。"
}, {
  index: 21,
  titileA: "21.在你的工作中，不会有人常来打扰你。"
}, {
  index: 22,
  titileA: "22.只要努力，你的工资会高于其他同年龄的人。"
}, {
  index: 23,
  titileA: "23.你的工作是一项对智力的挑战。"
}, {
  index: 24,
  titileA: "24.你的工作要求你把一些事物管理得井井有条。"
}, {
  index: 25,
  titileA: "25.工作单位有舒适的休息区、更衣室、浴室。"
}, {
  index: 26,
  titileA: "26.你的工作有可能结识各行各业的知名人物。"
}, {
  index: 27,
  titileA: "27.在工作中，能与同事建立良好的关系。"
}, {
  index: 28,
  titileA: "28.在别人眼中，你的工作是很重要的。"
}, {
  index: 29,
  titileA: "29.在工作中你经常接触到新鲜的事物。"
}, {
  index: 30,
  titileA: "30.你的工作使你常常能帮助别人。"
}, {
  index: 31,
  titileA: "31.你的工作组织中，有可能经常变换工作内容。"
}, {
  index: 32,
  titileA: "32.你的工作作风使你被别人尊重。"
}, {
  index: 33,
  titileA: "33.你的工作组织的同事和领导人品较好，相处比较随便。"
}, {
  index: 34,
  titileA: "34.你的工作会使许多人认识你，相处比较随便。"
}, {
  index: 35,
  titileA: "35.你的工作场所很好，比如有适度的灯光，舒适的座椅，安静、清洁的环境，宽敞的工作间甚至恒温，恒湿等优越的条件。"
}, {
  index: 36,
  titileA: "36.在工作中，你为他人服务，使他人感到满意，你自己也就很高兴。我要我的工作和生活融为一体"
}, {
  index: 37,
  titileA: "37.你的工作需要机会和组织安排别人的工作。"
}, {
  index: 38,
  titileA: "38.你的工作需要敏锐的思考。"
}, {
  index: 39,
  titileA: "39.你的工作可以使你获得较多的额外收入，比如 ：常发实物，常购买打折的商品，常发紧俏商品的购货券，有机会购买进口货等。"
}, {
  index: 40,
  titileA: "40.在工作中，你是不受别人差遣的。"
}, {
  index: 41,
  titileA: "41.你的工作结果应该是一种艺术品而不是一般的产品。"
}, {
  index: 42,
  titileA: "42.在工作中，你不必担心会因为所做的事情领导不满意而受到训斥或经济惩罚。"
}, {
  index: 43,
  titileA: "43.在工作中，你能和领导有融洽的合作关系。"
}, {
  index: 44,
  titileA: "44.你可以看见你努力工作的成果。"
}, {
  index: 45,
  titileA: "45.工作中常常需要你提出新的想法。"
}, {
  index: 46,
  titileA: "46.由于你的工作，经常有许多人来感谢你。"
}, {
  index: 47,
  titileA: "47.你的工作成果常常能得到上级、同事或社会的肯定。"
}, {
  index: 48,
  titileA: "48.在工作中，你会成为负责人，虽然可能只领导很少几个人，你信奉“宁做兵头、不做将尾”的俗语。"
}, {
  index: 49,
  titileA: "49.你从事的那一种工作，经常在报刊、电视中被提到，因而在人们心中很有地位。"
}, {
  index: 50,
  titileA: "50.你的工作有数量可观的夜班费，加班费，保健费或营养费等。"
}, {
  index: 51,
  titileA: "51.你的比较轻松，精神上也不紧张。"
}, {
  index: 52,
  titileA: "52.你的工作需要和电影、电视、戏剧、音乐、美术、文学等艺术打交道"
}, {
  index: 53,
  titileA: " "
}, {
  index: 54,
  titileA: " "
}];


var factor = [{
    topic: "利他主义",
    questionNumbers: [2,30,36,46],
  },{
    topic: "美感",
    questionNumbers: [7,20,41,52],
  },{
    topic: "智力刺激",
    questionNumbers: [1,23,38,45],
  },{
    topic: "成就感",
    questionNumbers: [13,17,44,47],
  },{
    topic: "独立性",
    questionNumbers: [5,15,21,40],
  },{
    topic: "社会地位",
    questionNumbers: [6,28,32,49],
  },{
    topic: "管理权",
    questionNumbers: [14,24,37,48],
  },{
    topic: "经济报酬",
    questionNumbers: [3,22,39,50],
  },{
    topic: "社会交往",
    questionNumbers: [11,18,26,34],
  },{
    topic: "安全感",
    questionNumbers: [9,16,19,42],
  },{
    topic: "舒适",
    questionNumbers: [12,25,35,51],
  },{
    topic: "人际关系",
    questionNumbers: [8,27,33,43],
  },{
    topic: "变异性",
    questionNumbers: [4,10,29,31],
  }
  
];


function getSubjectData() {
  return subjectData;
}
function getabilityTopicalData() {
  return factor;
}


module.exports = {
  getSubjectData: getSubjectData,
  getabilityTopicalData:getabilityTopicalData,
};

