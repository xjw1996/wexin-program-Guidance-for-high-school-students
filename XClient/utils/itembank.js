/**
 * 获取所有题目数据
 */


var subjectData = [{
  index: 1,
  titileA: "我乐于助人",
  titileB: "我喜欢把东西拆开，了解其工作原理和运作的奥妙"
}, {
  index: 2,
  titileA: "我喜欢与关注未来的人交往",
  titileB: "我喜欢和历史学家交往"
}, {
  index: 3,
  titileA: "我想要每个人都喜欢我",
  titileB: "我想要人们崇拜我"
}, {
  index: 4,
  titileA: "我力争第一",
  titileB: "我重在参与"
}, {
  index: 5,
  titileA: "我一贯努力工作",
  titileB: "我做事进展较慢，但确保成效"
}, {
  index: 6,
  titileA: "我思考自身的长处",
  titileB: "我思考有待改进之处"
}, {
  index: 7,
  titileA: "我是一个偏重情感的人",
  titileB: "我是一个偏重理智的人"
}, {
  index: 8,
  titileA: "我了解别人的个性特点",
  titileB: "我能够接受各种类型的人"
}, {
  index: 9,
  titileA: "主动与人交谈使我为难",
  titileB: "与陌生人攀谈使我兴奋"
}, {
  index: 10,
  titileA: "我对生活感觉极好",
  titileB: "我认为我自己很能干"
}, {
  index: 11,
  titileA: "我喜欢与人合作",
  titileB: "我喜欢个人奋斗"
}, {
  index: 12,
  titileA: "我能使别人有成就感",
  titileB: "我能使别人感到我对他们很重要"
}, {
  index: 13,
  titileA: "我按照自己的世界观去生活",
  titileB: "我按照自己的理想去生活"
}, {
  index: 14,
  titileA: "成为他人的知己使我满足",
  titileB: "我希望成为他人的领导"
}, {
  index: 15,
  titileA: "我不在意别人对我的所作所为怎么看，我做对自己有利的事",
  titileB: "我始终清楚别人对我的看法"
}, {
  index: 16,
  titileA: "我致力于发展",
  titileB: "我信守自己的价值观"
}, {
  index: 17,
  titileA: "我要自己的生活保持平衡",
  titileB: "我希望我的家庭过最好的生活"
}, {
  index: 18,
  titileA: "我每天多次谈到自己对未来的展望",
  titileB: "我愿腾出时间思考未来"
}, {
  index: 19,
  titileA: "我能够使别人兴奋起来",
  titileB: "我能够使别人平静下来"
}, {
  index: 20,
  titileA: "我一旦作出决定就必须付诸行动",
  titileB: "我在行动之前需要确认自己行动无误"
}, {
  index: 21,
  titileA: "我比大多数人更加专心去做要完成的事",
  titileB: "我统观全局顺其自然"
}, {
  index: 22,
  titileA: "我认为世上没有巧合，一切都事出有因",
  titileB: "对我来说巧合指运气、机遇、侥幸、偶然"
}, {
  index: 23,
  titileA: "我善于交谈",
  titileB: "我善于倾听"
}, {
  index: 24,
  titileA: "我喜欢表扬别人",
  titileB: "我喜欢受到表扬"
}, {
  index: 25,
  titileA: "我喜欢竞赛",
  titileB: "我喜欢工作"
}, {
  index: 26,
  titileA: "我思考问题脚踏实地，善于借助专家寻找正确答案善于借助专家寻找正确答案",
  titileB: "我思考问题善于创造，且有战略眼光，对规律和问题一目了然"
}, {
  index: 27,
  titileA: "我充满活力，满怀喜悦和欢乐",
  titileB: "我了解影响形势的所有因素"
}, {
  index: 28,
  titileA: "我想成为一家大公司的总裁",
  titileB: "我为别人牵线搭桥"
}, {
  index: 29,
  titileA: "我有时会威逼别人",
  titileB: "我在大人物面前感到渺小"
}, {
  index: 30,
  titileA: "我能设身处地为别着想",
  titileB: "我能够爱别人，爱所有的人"
}, {
  index: 31,
  titileA: "我推动别人成功",
  titileB: "我使别人快乐"
}, {
  index: 32,
  titileA: "我是一个无忧无虑的人",
  titileB: "我比我的朋友、同事更成熟"
}, {
  index: 33,
  titileA: "我尽量与别人一起做事",
  titileB: "我喜欢为别人张罗"
}, {
  index: 34,
  titileA: "通过研究我的历史我可以预测未来",
  titileB: "我的过去与我的未来无关"
}, {
  index: 35,
  titileA: "我属于超越自我的宏观世界",
  titileB: "我是一个脚踏实地的人"
}, {
  index: 36,
  titileA: "我要我的工作和生活融为一体",
  titileB: "工作只是一种谋生的手段"
}, {
  index: 37,
  titileA: "有人不喜欢我时，我会感到沮丧",
  titileB: "如果自己认为不对的事，就会感到内疚"
}, {
  index: 38,
  titileA: "我组织",
  titileB: "我分析"
}, {
  index: 39,
  titileA: "我能把握对别人的谈话要点，使他们感觉良好",
  titileB: "我通过倾听，使人们感觉获得理解"
}, {
  index: 40,
  titileA: "我喜欢富于哲理的人",
  titileB: "我喜欢和勤奋而富有成效的人交往"
}, {
  index: 41,
  titileA: "我乐于使别人认识其自身的价值",
  titileB: "我乐于使别人有成就感"
}, {
  index: 42,
  titileA: "我靠直觉解决问题",
  titileB: "我使用来源可靠的准确信息"
}, {
  index: 43,
  titileA: "我对生活持有一种健康的怀疑态度",
  titileB: "我相信自己与全人类相连"
}, {
  index: 44,
  titileA: "我的朋友请我讲故事",
  titileB: "我的朋友请我出主意"
}, {
  index: 45,
  titileA: "我在上午工作效率最高",
  titileB: "我在晚上工作效率最高"
}, {
  index: 46,
  titileA: "我与大多数人比不相上下，无需工作更努力，更持久",
  titileB: "我精力充沛，始终比大多数人工作更努力，更持久"
}, {
  index: 47,
  titileA: "任何与体育有关的事都会强烈吸引我   ",
  titileB: "任何与人文思想有关的事都会强烈吸引我"
}, {
  index: 48,
  titileA: "我是一个十分整洁的人",
  titileB: "我非常固执"
}, {
  index: 49,
  titileA: "我通过与别人分享而成长",
  titileB: "我通过学习而成长"
}, {
  index: 50,
  titileA: "我按照自己对未来的书面规划而行动",
  titileB: "我走一步，看一步"
}, {
  index: 51,
  titileA: "我注重未来可能取得的成就",
  titileB: "我注重应对未来可能发生的事件"
}, {
  index: 52,
  titileA: "我不排斥任何人，从而不伤害他们的感情",
  titileB: "我仔细挑选我的朋友"
}, {
  index: 53,
  titileA: "我不自负，不在乎别人是否把我视为可信、专业化或成功人士",
  titileB: "别人是否把我视为可信、专业化或成功人士对我很重要"
}, {
  index: 54,
  titileA: "我喜欢了解大战的起因",
  titileB: "我喜欢了解50年后的世界经济"
}, {
  index: 55,
  titileA: "我对我生活中的遇到事件进行分析",
  titileB: "我对影响我生活的事件充满激情"
}, {
  index: 56,
  titileA: "我通过发挥自身的才干取得进步",
  titileB: "我通过克服自身的弱点取得进步"
}, {
  index: 57,
  titileA: "对我来说每件事都必须事先计划",
  titileB: "我喜欢顺其自然"
}, {
  index: 58,
  titileA: "我寻找各种不同的做事方法",
  titileB: "我确立常规的做事方法"
}, {
  index: 59,
  titileA: "我讨厌爱发脾气的人",
  titileB: "我认为必要时可以发脾气"
}, {
  index: 60,
  titileA: "我喜欢放松",
  titileB: "我喜欢清扫"
}, {
  index: 61,
  titileA: "有钱就是幸福",
  titileB: "有钱不等于幸福"
}, {
  index: 62,
  titileA: "我征求别人的意见",
  titileB: "别人征求我的意见"
}, {
  index: 63,
  titileA: "我认为平等对待所有人，并制定明确的规则至关重要     ",
  titileB: "我认为应了解每个人的特点，并进行个别激励"
}, {
  index: 64,
  titileA: "我借助专家寻找正确答案",
  titileB: "我对答案和问题一目了然"
}, {
  index: 65,
  titileA: "我非常慷慨地称赞别人",
  titileB: "我有选择地称赞别人"
}, {
  index: 66,
  titileA: "我只有在竞争中赢得第一才能感到完全满意",
  titileB: "我只要在比赛中名列前茅就感到高兴"
}, {
  index: 67,
  titileA: "我善于使截然不同的人相互合作",
  titileB: "我有平等对待人的天赋"
}, {
  index: 68,
  titileA: "我尽量不离开自己舒适的领地",
  titileB: "我是一个寻求刺激的人"
}, {
  index: 69,
  titileA: "我能够体会同事的感受",
  titileB: "我喜欢和同事们高谈阔论"
}, {
  index: 70,
  titileA: "我关注人们的特点，而不在乎我是否喜欢他们",
  titileB: "我不喜欢某些人，他们和我格格不入"
}, {
  index: 71,
  titileA: "我凭感觉进行重要决策",
  titileB: "我凭理智进行重要决策"
}, {
  index: 72,
  titileA: "我随着事情的发生采取行动",
  titileB: "我分清事情的轻重缓急，然后采取行动"
}, {
  index: 73,
  titileA: "我喜欢每个人",
  titileB: "我要每个人都喜欢我"
}, {
  index: 74,
  titileA: "根据当前的需要，我主要专著做好眼前的事",
  titileB: "我着眼于未来的发展"
}, {
  index: 75,
  titileA: "我每周设定业绩目标",
  titileB: "我的工作根据当日需求而定"
}, {
  index: 76,
  titileA: "我必须强迫自己才能学习",
  titileB: "我对自己感兴趣的事能集中注意力"
}, {
  index: 77,
  titileA: "我喜欢要求精确性的工作",
  titileB: "我喜欢团队合作"
}, {
  index: 78,
  titileA: "我研究别人的行为根源",
  titileB: "我惯于自我反思"
}, {
  index: 79,
  titileA: "我按部就班",
  titileB: "我热情洋溢"
}, {
  index: 80,
  titileA: "我对教育满怀热忱",
  titileB: "我对消除暴利满怀热忱"
}, {
  index: 81,
  titileA: "我喜欢别人听我讲话",
  titileB: "我喜欢听别人讲话"
}, {
  index: 82,
  titileA: "我很会讲故事",
  titileB: "我善于辅导"
}, {
  index: 83,
  titileA: "我喜欢讲话",
  titileB: "我喜欢思考"
}, {
  index: 84,
  titileA: "我是个完美主义者",
  titileB: "我是个实干家"
}, {
  index: 85,
  titileA: "我思考问题脚踏实地,广泛调查分析",
  titileB: "我思考问题善于创造，且具有战略眼光"
}, {
  index: 86,
  titileA: "我总是描准最出色的同行去改进自己",
  titileB: "我愿意与欣赏我的长处的人交往"
}, {
  index: 87,
  titileA: "我能同时照顾好几件事",
  titileB: "我愿意为别人作出牺牲"
}, {
  index: 88,
  titileA: "我善于交际",
  titileB: "我喜欢与朋友一道努力工作"
}, {
  index: 89,
  titileA: "我思维敏捷,经常提出独特的观点",
  titileB: "我的谈话使人愉快"
}, {
  index: 90,
  titileA: "我热爱学习",
  titileB: "我喜欢外出"
}, {
  index: 91,
  titileA: "我喜欢一切按照规章制度办事",
  titileB: "我喜欢反复检查，确保一切井井有条"
}, {
  index: 92,
  titileA: "我善于观察人们之间的区别",
  titileB: "我平等对待所有人"
}, {
  index: 93,
  titileA: "我的成功之道在于克服弱点，弥补缺陷",
  titileB: "我的成功之道在于增强自身的才干"
}, {
  index: 94,
  titileA: "在遇到困难，而必须圆满完成任务时，我往往亲自动手干",
  titileB: "在遇到困难，而必须圆满完成任务时，我往往依靠团队成员的各自优势，而不事必躬亲"
}, {
  index: 95,
  titileA: "我的性格外向",
  titileB: "在必要时我能够作到开朗大方"
}, {
  index: 96,
  titileA: "我喜欢解释事情",
  titileB: "我喜欢做事情"
}, {
  index: 97,
  titileA: "有时也可以歪曲事实",
  titileB: "永远没有理由说谎"
}, {
  index: 98,
  titileA: "我的工作已经满负荷",
  titileB: "我还有很大潜力"
}, {
  index: 99,
  titileA: "我以严谨著称",
  titileB: "我以幽默感著称"
}, {
  index: 100,
  titileA: "我正在创造我的未来",
  titileB: "我正在研究我的未来"
}, {
  index: 101,
  titileA: "我喜欢挑战别人",
  titileB: "我喜欢鼓励别人"
}, {
  index: 102,
  titileA: "我是一个非常在意隐私的人",
  titileB: "我的生活如同一本开启的书"
}, {
  index: 103,
  titileA: "我慷慨",
  titileB: "我节俭"
}, {
  index: 104,
  titileA: "我是一名领导者",
  titileB: "我是一名很有成就的人"
}, {
  index: 105,
  titileA: "我有时会奉承别人",
  titileB: "我为人正直"
}, {
  index: 106,
  titileA: "我能根据需要长时间学习",
  titileB: "我能够集中注意力的时间很短"
}, {
  index: 107,
  titileA: "我避免过分赞扬人，因此当我这样做时就显得很有份量",
  titileB: "我慷慨地赞扬我的同事"
}, {
  index: 108,
  titileA: "我愿意了解新事物",
  titileB: "我的价值观很稳定"
}, {
  index: 109,
  titileA: "我的生活有目的",
  titileB: "我的生活充满欢乐"
}, {
  index: 110,
  titileA: "我喜欢富有哲理的讨论",
  titileB: "我喜欢制定目标的会议"
}, {
  index: 111,
  titileA: "我喜欢独处",
  titileB: "我想念我的朋友"
}, {
  index: 112,
  titileA: "我想象未来",
  titileB: "我理解造成当前情形的原因"
}, {
  index: 113,
  titileA: "我能够实事求是地看待自己",
  titileB: "我难于坦诚地看待自己"
}, {
  index: 114,
  titileA: "我愿意花大量的时间和朋友们在一起",
  titileB: "我喜欢专心做我认为重要的事情"
}, {
  index: 115,
  titileA: "我小时候喜欢和一大帮朋友们一起玩",
  titileB: "我小时候循规蹈矩从不给同伴或大人惹麻烦"
}, {
  index: 116,
  titileA: "我喜欢招待别人",
  titileB: "我答应别人的事一定要完成"
}, {
  index: 117,
  titileA: "我讨厌受控制",
  titileB: "我喜欢制定规矩"
}, {
  index: 118,
  titileA: "我是一个好老师",
  titileB: "我是一个好顾问"
}, {
  index: 119,
  titileA: "我躲避大大咧咧的人",
  titileB: "我不与不诚实的人交往"
}, {
  index: 120,
  titileA: "情况不明时我会向心中有数的人求教",
  titileB: "无论何时何地我总能悟出该作什么"
}, {
  index: 121,
  titileA: "目标不明的人使我厌烦",
  titileB: "我不喜欢和无法放松的相处"
}, {
  index: 122,
  titileA: "我厌恶期限",
  titileB: "我的责任感给我动力"
}, {
  index: 123,
  titileA: "我鼓励别人",
  titileB: "我强化别人"
}, {
  index: 124,
  titileA: "我过于轻信别人",
  titileB: "我过于雄心勃勃"
}, {
  index: 125,
  titileA: "过去发生的事激励我",
  titileB: "未来可能取得的成就激励我"
}, {
  index: 126,
  titileA: "最后一刻压力使我思想高度集中",
  titileB: "当我能提前完成任务时，我的思维更清晰"
}, {
  index: 127,
  titileA: "我认为只要环境合适，大多数人都会偷窃",
  titileB: "我认为偷窃的人应受到惩罚"
}, {
  index: 128,
  titileA: "我的最大愿望是做自己热爱的工作",
  titileB: "我的最大需求是被别人接受"
}, {
  index: 129,
  titileA: "我是一个通情达理的人",
  titileB: "我是一个有责任心的人"
}, {
  index: 130,
  titileA: "我主要关注此时此地",
  titileB: "我通过研究过去，增长见识"
}, {
  index: 131,
  titileA: "我尽力而为使我感到满足",
  titileB: "我立志有所建树"
}, {
  index: 132,
  titileA: "我有强烈的求知欲",
  titileB: "我需要被别人认知和理解"
}, {
  index: 133,
  titileA: "我经常考虑因果关系",
  titileB: "我遇到事情及时应对"
}, {
  index: 134,
  titileA: "寻找失败的原因",
  titileB: "享受目前的成功"
}, {
  index: 135,
  titileA: "我喜欢收藏",
  titileB: "我只收集我认为十分精美或特别有价值的东西"
}, {
  index: 136,
  titileA: "我常常能提出建设性的意见",
  titileB: "当解决了难题、排除了故障时我感到特有成就感"
}, {
  index: 137,
  titileA: "我待人随和",
  titileB: "我善于发挥不同的人的长处"
}, {
  index: 138,
  titileA: "我花较多的时间考虑如何取得竞争优势",
  titileB: "我花更多时间考虑如何应对未来可能发生的问题"
}, {
  index: 139,
  titileA: "我认为竞争才能发挥人的最大潜能，所以我刺激我的员工相互竞争",
  titileB: "我能使很多人在一起同甘共苦相互合作，并建立很深的友谊"
}, {
  index: 140,
  titileA: "我常常从失败中总结教训",
  titileB: "我只关注如何把我最擅长的事做得尽善尽美"
}, {
  index: 141,
  titileA: "我尽力使别发挥其特长",
  titileB: "我尽力使每个人得到进步"
}, {
  index: 142,
  titileA: "把晚间、周末工作时间加起来，我通常一周工作40-50小时",
  titileB: "把晚间、周末工作时间加起来，我通常一周工作60超过小时"
}, {
  index: 143,
  titileA: "我轻松愉快",
  titileB: "我严肃认真"
}, {
  index: 144,
  titileA: "开始新任务对我很容易",
  titileB: "我的问题是做事有始有终"
}, {
  index: 145,
  titileA: "我能和所有的人和睦相处",
  titileB: "我仔细分析我的合作伙伴,尽可能了解每个人的个性和背景"
}, {
  index: 146,
  titileA: "我兴趣广泛，好奇心强",
  titileB: "我专注把握我感兴趣的事做好，"
}, {
  index: 147,
  titileA: "我观察生活",
  titileB: "我主宰自己的生活"
}, {
  index: 148,
  titileA: "为了解决一个问题，我常契而不舍地长时间工作",
  titileB: "我最多只能集中精力工作学习一个小时左右"
}, {
  index: 149,
  titileA: "我的成就非凡",
  titileB: "我一贯创造积极成果"
}, {
  index: 150,
  titileA: "我比别人更机智",
  titileB: "我在很多人面前感到渺小"
}, {
  index: 151,
  titileA: "我善于高效率地同时作几件事",
  titileB: "我习惯于一次只做一件事"
}, {
  index: 152,
  titileA: "我希望经常与我的上司和同事沟通",
  titileB: "我希望有更多的自己独立支配的时间"
}, {
  index: 153,
  titileA: "我善于构思并发起一个新项目",
  titileB: "我善于组织落实"
}, {
  index: 154,
  titileA: "我经常思考数字",
  titileB: "我喜欢思考宏观形象的事情"
}, {
  index: 155,
  titileA: "我偏爱讨论思想",
  titileB: "我偏爱体育运动"
}, {
  index: 156,
  titileA: "我的词汇富于哲理",
  titileB: "我的词汇偏重实用"
}, {
  index: 157,
  titileA: "我使用简短的词汇",
  titileB: "我常用复杂抽象的词汇"
}, {
  index: 158,
  titileA: "我的大脑不停地思考",
  titileB: "我的身体需要经常活动"
}, {
  index: 159,
  titileA: "我喜欢听讲",
  titileB: "我喜欢小组讨论"
}, {
  index: 160,
  titileA: "帮助别人解决难题，排除故障使我感到快乐",
  titileB: "从数据中发现规律使我感到兴奋"
}, {
  index: 161,
  titileA: "我关注分析时事",
  titileB: "我不花时间去关注时事"
}, {
  index: 162,
  titileA: "我总能及时完成任务",
  titileB: "我言而有信，说到做到"
}, {
  index: 163,
  titileA: "一个新创意会使我激动不已",
  titileB: "完成一件交给我的任务会使我激动不已"
}, {
  index: 164,
  titileA: "和别人一起时我觉得我的点子最多",
  titileB: "我喜欢和别人一起讨论解决问题的办法"
}, {
  index: 165,
  titileA: "我能详细解释复杂过程",
  titileB: "我有化繁为简的天赋"
}, {
  index: 166,
  titileA: "我能一晚读完200页的书",
  titileB: "我阅读速度缓慢，因为我要琢磨理解书中的内容"
}, {
  index: 167,
  titileA: "取胜最重要",
  titileB: "按规矩做事最重要"
}, {
  index: 168,
  titileA: "我的哲学指引我的生活",
  titileB: "我的主导自己的生活"
}, {
  index: 169,
  titileA: "我每周至少花5个小时独自思考",
  titileB: "我喜欢和别人在一起"
}, {
  index: 170,
  titileA: "我了解自身长处超过弱点",
  titileB: "我了解自身弱点超过长处"
}, {
  index: 171,
  titileA: "我不在胡别人是否喜欢我",
  titileB: "我热爱人们"
}, {
  index: 172,
  titileA: "我喜欢和别人谈起我的旅行经历",
  titileB: "我不断策划我的下一个旅行目标"
}, {
  index: 173,
  titileA: "我经常以我的亲身经历教育别人",
  titileB: "我喜欢树立榜样激励别人"
}, {
  index: 174,
  titileA: "我认为一个好的领导就是要能够调动别人做事",
  titileB: "我认为一个好的领导就是要帮助别人更好地做事"
}, {
  index: 175,
  titileA: "我善于处理纷繁复杂的事务",
  titileB: "我喜欢制定统一的常规制度"
}, {
  index: 176,
  titileA: "我习惯于根据统计数字预测未来",
  titileB: "我习惯于根据当前形势预测未来"
}, {
  index: 177,
  titileA: "我特别善于通过例举过去已取得的成就来鼓舞别人",
  titileB: "我特别善于通过描绘未来远景鼓励别人"
}, {
  index: 178,
  titileA: "我有几个特别要好的老朋友",
  titileB: "我认识的很多朋友，但几乎没有交情很深的"
}, {
  index: 179,
  titileA: "我习惯于事先想好将要采购商品的标准，只要看到基本符合我需求的商品立刻就买",
  titileB: "我事先不考虑太多，到了商场现场，调查一遍之后，再决定购买"
}, {
  index: 180,
  titileA: "遇到故障或困难时，我常常一马当先           ",
  titileB: "遇到故障或困难时,我往往首先想到找个能人来解决"
}];


var abilityTopicalData = [{
    userId: "",
    topic: "成就",
    questionNumbers: ["4|A", "5|A", "24|B", "28|A", "46|B", "66|A", "86|A", "104|B", "109|A", "110|B", "125|B", "131|B", "134|B", "136|B", "142|B", "143|B", "149|A", "160|A", "167|A"],
    myScore: 0,
    averageScore: 0,
    detail: "成就主题较强的人大都精力充沛，锲而不舍。他们乐于忙忙碌碌并有所作为。",
  },
  {
    userId: "",
    topic: "行动",
    questionNumbers: ["20|A", "35|B", "38|A", "40|B", "45|A", "47|A", "48|A", "84|B", "85|A", "90|B", "94|A", "96|B", "100|A", "133|B", "144|A", "153|B", "156|B", "158|B"],
    myScore: 0,
    averageScore: 0,
    detail: "行动主题较强的人能够将想法付诸行动。他们往往缺乏耐心。",
  },
  {
    userId: "",
    topic: "适应",
    questionNumbers: ["21|B", "22|B", "34|B", "36|B", "42|A", "50|B", "57|B", "72|A", "74|A", "75|B", "79|B", "97|A", "122|A", "127|A", "147|A", "152|A", "175|A", "179|B"],
    myScore: 0,
    averageScore: 0,
    detail: "适应性强的人倾向于“随大流”。他们活在“当前”，接受现实，随遇而安。",
  },
  {
    userId: "",
    topic: "分析",
    questionNumbers: ["1|B", "7|B", "27|B", "38|B", "42|B", "43|A", "55|A", "71|B", "78|A", "85|A", "112|B", "133|A", "134|A", "140|A", "147|A", "157|B", "160|B", "165|A", "166|A"],
    myScore: 0,
    averageScore: 0,
    detail: "分析能力强的人喜欢探究事物的来龙去脉。他们有能力思考可能影响局面的诸多因素。",
  },
  {
    userId: "",
    topic: "统筹",
    questionNumbers: ["7|B", "32|B", "33|B", "62|B", "72|B", "79|A", "87|A", "94|B", "126|A", "147|B", "150|A", "151|A", "153|B", "174|A", "175|A"],
    myScore: 0,
    averageScore: 0,
    detail: "统筹力强的人兼具组织能力及确保组织成功的灵活性。他们善于合理安排现有资源以实现最大功效。",
  },
  {
    userId: "",
    topic: "信仰",
    questionNumbers: ["1|A", "7|A", "13|A", "16|B", "30|B", "36|A", "80|A", "87|B", "97|B", "108|B", "119|B", "127|B", "128|A", "160|A", "162|B", "168|A", "171|B"],
    myScore: 0,
    averageScore: 0,
    detail: "有强烈信仰的人必定拥有某种经久不变的核心价值观，并由此形成明确的生活目标。",
  },
  {
    userId: "",
    topic: "统率",
    questionNumbers: ["7|B", "12|B", "14|B", "15|A", "28|A", "29|A", "29|-B", "38|A", "48|B", "59|B", "62|B", "81|A", "94|B", "104|A", "153|A", "154|B"],
    myScore: 0,
    averageScore: 0,
    detail: "统率力强的人有大将风度。他们运筹帷幄，指挥若定。",
  },
  {
    userId: "",
    topic: "沟通",
    questionNumbers: ["23|A", "39|A", "44|A", "69|B", "82|A", "83|A", "88|A", "89|B", "95|A", "99|B", "118|A", "139|B", "145|A", "152|A", "157|A", "177|B"],
    myScore: 0,
    averageScore: 0,
    detail: "沟通能力强的人善于将想法付诸言辞，他们是极佳的交谈者和生动的讲解者。",
  },
  {
    userId: "",
    topic: "竞争",
    questionNumbers: ["4|A", "25|A", "53|B", "66|A", "84|A", "86|A", "138|A", "139|A", "143|B", "145|A", "149|A", "150|A", "155|B", "167|A", "173|B"],
    myScore: 0,
    averageScore: 0,
    detail: "竞争性强的人参照他人的表现来衡量自身的进步。他们力争第一，陶醉于竞争的喜悦中。",
  },
  {
    userId: "",
    topic: "关联",
    questionNumbers: ["22|A", "26|A", "43|B", "53|A", "59|A", "61|B", "62|A", "78|A", "112|B", "113|A", "134|A", "139|B", "145|A", "152|A", "164|B", "169|B", "170|B", "180|B"],
    myScore: 0,
    averageScore: 0,
    detail: "关联主题较强的人深信世间万物都彼此关联。没有巧合，凡事必有成因。",
  },
  {
    userId: "",
    topic: "回顾",
    questionNumbers: ["2|B", "34|A", "54|A", "55|A", "56|B", "82|A", "112|B", "125|A", "130|B", "134|A", "140|A", "172|A", "173|A", "176|A", "177|A"],
    myScore: 0,
    averageScore: 0,
    detail: "回顾主题较强的人喜欢追溯从前。他们通过揣摩过去来了解当前。",
  },
  {
    userId: "",
    topic: "审慎",
    questionNumbers: ['7|B', '9|A', '17|A', '20|B', '27|A', '32|B', '42|B', '43|A', '51|B', '52|B', '65|B', '68|A', '70|B', '71|B', '91|B', '91|-A', '102|A', '103|A', '105|B', '107|A', '145|B'],
    myScore: 0,
    averageScore: 0,
    detail: "他们每做一个决定均慎之又慎，并设想所有的困难。",
  },
  {
    userId: "",
    topic: "伯乐",
    questionNumbers: ['12|A', '24|A', '28|B', '31|A', '33|B', '82|B', '101|B', '118|B', '123|A', '137|B', '141|A', '145|B', '173|A', '174|B', '177|A', '177|B', '180|B'],
    myScore: 0,
    averageScore: 0,
    detail: "他们善于赏识并发掘他人的潜能。他们能够察觉任何细微的进步，并乐在其中。",
  },
  {
    userId: "",
    topic: "纪律",
    questionNumbers: ['50|A', '57|A', '58|B', '60|B', '75|A', '77|A', '79|A', '91|A', '97|B', '99|A', '115|B', '117|B', '122|B', '143|B', '162|A', '167|B', '175|B'],
    myScore: 0,
    averageScore: 0,
    detail: "纪律性强的人做事井然有序，有章有法。他们建立规程，遵章守纪。",
  },
  {
    userId: "",
    topic: "体谅",
    questionNumbers: ['1|A', '7|A', '8|A', '15|B', '23|B', '30|A', '39|A', '69|A', '73|A', '81|B', '92|A', '95|B', '129|A', '145|A', '147|A'],
    myScore: 0,
    averageScore: 0,
    detail: "他们能够设身处地地体会他人的情感。",
  },
  {
    userId: "",
    topic: "公平",
    questionNumbers: ['7|A', '8|B', '30|B', '52|A', '58|B', '63|A', '67|B', '91|A', '92|B', '129|A', '137|A', '139|A', '141|B', '145|A', '167|B', '175|B'],
    myScore: 0,
    averageScore: 0,
    detail: "公平心强的人深知应平等待人。他们确立并坚持这一准则，即公平地对待每一个人。",
  },
  {
    userId: "",
    topic: "专注",
    questionNumbers: ['21|A', '74|A', '75|A', '76|B', '79|A', '106|A', '106|-B', '114|B', '130|A', '140|B', '140|B', '146|B', '148|A', '151|B', '154|A', '163|B', '165|A'],
    myScore: 0,
    averageScore: 0,
    detail: "专注力强的人能够确定方向，贯彻始终，及时调整，矢志不渝。他们先确定重点，再着手行动。",
  },
  {
    userId: "",
    topic: "前瞻",
    questionNumbers: ['2|A', '16|A', '18|A', '35|A', '51|A', '54|B', '55|B', '74|B', '75|A', '100|B', '112|A', '125|B', '138|B', '172|B', '176|B', '177|B'],
    myScore: 0,
    averageScore: 0,
    detail: "对于有较强前瞻力的人而言，未来令人心潮澎湃。他们用对未来的憧憬激励周围的人。",
  },
  {
    userId: "",
    topic: "和谐",
    questionNumbers: ['19|B', '29|B', '33|A', '50|B', '52|A', '62|A', '67|A', '69|A', '88|B', '131|A', '139|B', '145|A', '147|A', '150|B', '159|A', '169|B'],
    myScore: 0,
    averageScore: 0,
    detail: "和谐主题较强的人渴求协调一致。他们避免冲突，寻求共识。",
  },
  {
    userId: "",
    topic: "理念",
    questionNumbers: ['26|B', '40|A', '47|B', '85|B', '89|A', '110|A', '136|A', '147|B', '150|A', '153|A', '154|B', '155|A', '156|A', '158|A', '161|A', '163|A', '164|A', '165|B'],
    myScore: 0,
    averageScore: 0,
    detail: "他们痴迷于各种理念，能够从貌似毫无关联的现象中找出其相互联系。",
  },
  {
    userId: "",
    topic: "包容",
    questionNumbers: ['8|B', '11|A', '33|A', '62|A', '69|B', '77|B', '88|B', '115|A', '116|A', '123|A', '137|A', '139|B', '145|A', '152|A', '159|B', '164|B', '169|B'],
    myScore: 0,
    averageScore: 0,
    detail: "包容力强的人善于接纳人。他们关心那些被忽略的人们，并让他们溶入集体。",
  },
  {
    userId: "",
    topic: "个别",
    questionNumbers: ['8|A', '30|A', '41|A', '58|A', '63|B', '67|A', '69|A', '70|A', '92|A', '137|B', '141|A', '145|B', '152|A', '164|B', '167|A', '180|B'],
    myScore: 0,
    averageScore: 0,
    detail: "个别主题较强的人对每个人的与众不同之处兴趣盎然。他们善于琢磨如何将个性迥异的人组合在一起，创造出最大成效。",
  },
  {
    userId: "",
    topic: "搜集",
    questionNumbers: ['42|B', '49|B', '62|A', '64|A', '70|A', '85|A', '86|A', '90|B', '108|A', '120|A', '135|A', '145|B', '146|A', '152|A', '173|B', '177|A', '179|B'],
    myScore: 0,
    averageScore: 0,
    detail: "搜集主题较强的人充满好奇。他们通常喜欢搜集、整理各种各样的信息。",
  },
  {
    userId: "",
    topic: "思维",
    questionNumbers: ['11|B', '26|B', '45|B', '47|B', '49|B', '55|A', '64|B', '76|B', '78|B', '83|B', '111|A', '140|B', '146|B', '152|B', '155|A', '158|A', '161|A', '164|A', '165|A', '169|A'],
    myScore: 0,
    averageScore: 0,
    detail: "思维能力较强的人的最大特点是长于思考。他们勤于自省，敏于探讨。",
  },
  {
    userId: "",
    topic: "学习",
    questionNumbers: ['1|B', '4|B', '49|B', '66|B', '76|B', '86|A', '90|A', '106|A', '128|A', '131|A', '132|A', '140|B', '149|B', '155|A', '161|A', '166|B'],
    myScore: 0,
    averageScore: 0,
    detail: "学习能力强的人有旺盛的求知欲，渴望不断提高自我。尤其令他们激动的，是求知的过程而非结果。",
  },
  {
    userId: "",
    topic: "完美",
    questionNumbers: ['4|A', '6|A', '13|B', '17|B', '55|A', '56|B', '66|A', '84|A', '86|B', '93|B', '135|B', '137|B', '140|B', '141|A', '146|B', '149|A', '170|A'],
    myScore: 0,
    averageScore: 0,
    detail: "完美主题较强的人专注于激励个人和团体追求卓越。他们相信强中自有强中手。",
  },
  {
    userId: "",
    topic: "积极",
    questionNumbers: ['10|A', '19|A', '24|A', '27|A', '31|B', '32|A', '41|B', '55|B', '60|A', '61|A', '65|A', '66|B', '79|B', '99|B', '109|B', '121|B'],
    myScore: 0,
    averageScore: 0,
    detail: "积极的人浑身充满了富有感染力的热情。他们用快乐、向上来感召周围的人。",
  },
  {
    userId: "",
    topic: "交往",
    questionNumbers: ['1|A', '11|A', '14|A', '25|B', '49|A', '67|A', '77|B', '88|A', '89|B', '102|B', '103|A', '111|B', '114|A', '124|A', '139|B', '178|A'],
    myScore: 0,
    averageScore: 0,
    detail: "交往能力强的人喜欢人际间的亲密关系。他们最大的满足是与朋友一道为实现一个目标而同舟共济。",
  },
  {
    userId: "",
    topic: "责任",
    questionNumbers: ['5|B', '37|B', '93|A', '94|A', '104|A', '116|B', '119|B', '122|B', '126|A', '127|B', '129|B', '143|B', '144|B', '160|A', '162|B', '163|A'],
    myScore: 0,
    averageScore: 0,
    detail: "责任心强的人言必有信。他们信奉的价值观是诚实、忠诚。",
  },
  {
    userId: "",
    topic: "排难",
    questionNumbers: ['1|A', '33|B', '44|B', '80|B', '82|B', '118|B', '126|A', '136|B', '138|B', '139|A', '140|A', '148|A', '153|B', '160|A', '173|B', '180|A'],
    myScore: 0,
    averageScore: 0,
    detail: "排除故障的行家里手善于发现问题并解决问题。",
  },
  {
    userId: "",
    topic: "自信",
    questionNumbers: ['10|B', '11|B', '42|A', '46|A', '48|B', '68|B', '71|A', '98|B', '101|A', '113|B', '120|B', '124|B', '147|B', '149|A', '168|B', '171|A', '180|A'],
    myScore: 0,
    averageScore: 0,
    detail: "自信心强的人对自身的能力充满信心。他们有自己的处世准则，做决定时成竹在胸。",
  },
  {
    userId: "",
    topic: "追求",
    questionNumbers: ['3|B', '6|B', '17|B', '18|B', '24|B', '28|A', '133|A', '37|A', '53|B', '66|A', '86|A', '93|A', '101|A', '117|A', '121|A', '128|B', '131|B', '132|B', '152|B'],
    myScore: 0,
    averageScore: 0,
    detail: "追求主题较强的人希望在别人的眼中非同凡响。他们独立性强，渴望被承认。",
  },
  {
    userId: "",
    topic: "战略",
    questionNumbers: ['7|B', '18|B', '26|B', '32|B', '44|B', '51|B', '62|B', '71|B', '74|B', '85|B', '96|A', '100|B', '133|A', '138|B', '143|B', '150|A', '153|A', '154|B', '168|B', '179|A'],
    myScore: 0,
    averageScore: 0,
    detail: "战略主题较强的人足智多谋。针对不同的方案，能迅速找出相关的模式及结果。",
  },
  {
    userId: "",
    topic: "取悦",
    questionNumbers: ['3|A', '7|A', '9|B', '24|A', '33|B', '39|B', '69|B', '73|B', '88|A', '89|B', '95|A', '105|A', '107|B', '137|A', '145|A', '178|B'],
    myScore: 0,
    averageScore: 0,
    detail: "取悦主题较强的人喜欢结交新人并博取其欢心。能够在人际交往中打破坚冰、建立联系令他们倍感快慰。",
  }
];
var result = ["AB|1",
  "AB|1",
  "B|2",
  "B|2",
  "B|3",
  "B|3",
  "B|2",
  "AB|1",
  "A|2",
  "A|3",
  "A|2",
  "AB|1",
  "B|2",
  "B|3",
  "B|2",
  "B|2",
  "B|2",
  "B|2",
  "AB|1",
  "B|2",
  "B|3",
  "B|3",
  "B|3",
  "B|2",
  "B|2",
  "AB|1",
  "B|2",
  "B|3",
  "B|3",
  "B|2",
  "B|2",
  "B|2",
  "B|3",
  "B|3",
  "B|2",
  "B|2",
  "AB|1",
  "AB|1",
  "AB|1",
  "A|2",
  "A|2",
  "A|2",
  "A|2",
  "AB|1",
  "AB|1",
  "B|2",
  "B|2",
  "B|3",
  "B|3",
  "B|2",
  "B|2",
  "B|2",
  "AB|1",
  "AB|1",
  "AB|1",
  "B|2",
  "B|2",
  "B|2",
  "B|3",
  "B|3",
  "B|2",
  "AB|1",
  "B|2",
  "AB|1",
  "A|2",
  "AB|1",
  "A|3",
  "A|3",
  "A|2",
  "AB|1",
  "AB|1",
  "B|2",
  "B|2",
  "AB|1",
  "B|2",
  "AB|1",
  "A|2",
  "AB|1",
  "B|2",
  "B|2",
  "B|3",
  "B|2",
  "B|2",
  "AB|1",
  "AB|1",
  "B|2",
  "B|2",
  "B|2",
  "B|3",
  "B|3",
  "B|2",
  "B|3",
  "B|2",
  "AB|1",
  "A|2",
  "A|3",
  "A|2",
  "A|3",
  "A|2",
  "AB|1",
  "B|2",
  "B|2",
  "AB|1",
  "AB|1",
  "AB|1",
  "AB|1",
  "AB|1",
  "AB|1",
  "B|2",
  "B|2",
  "B|2",
  "B|3",
  "B|3",
  "B|2",
  "B|2",
  "B|2",
  "B|2",
  "B|2",
  "AB|1",
  "AB|1",
  "AB|1",
  "B|2",
  "B|2",
  "B|2",
  "B|2",
  "B|3",
  "B|2",
  "B|2",
  "B|3",
  "B|3",
  "B|2",
  "B|2",
  "B|2",
  "B|2",
  "B|3",
  "B|3",
  "B|3",
  "B|3",
  "B|3",
  "B|3",
  "B|2",
  "AB|1",
  "AB|1",
  "A|2",
  "A|2",
  "A|2",
  "A|2",
  "A|2",
  "A|2",
  "AB|1",
  "AB|1",
  "AB|1",
  "AB|1",
  "AB|1",
  "B|2",
  "B|2",
  "B|2",
  "B|2",
  "AB|1",
  "AB|1",
  "B|2",
  "B|2",
  "B|2",
  "B|2",
  "B|2",
  "B|2",
  "B|2",
  "AB|1",
  "AB|1",
  "AB|1",
  "AB|1",
  "AB|1",
  "B|2",
  "B|2",
  "B|3",
  "B|3",
  "B|3",
  "B|3",
  "B|3",
  "B|3"
]

function marking(testPaper) {
  //var testPaper = result;
  var length = abilityTopicalData.length;
  for (var i = 0; i < length; i++) {
    var topic = abilityTopicalData[i];
    var questionNumbers = topic.questionNumbers;
    var score = 0;
    for (var j = 0; j < questionNumbers.length; j++) {
      var q = questionNumbers[j].split("|");
      var index = q[0]; //题目序号
      var r = testPaper[index - 1].split("|"); //选项结果
      var r2 = q[1];
      if (r2 === 'A') {
        if (r[0].indexOf('A') !== -1) {
          score += (r[1] * 1);
        }
      }
      if (r2 === '-A') {
        if (r[0].length == 2) {
          score += (r[1] * 1);
        } else if (r[0] == 'A') {
          score -= (r[1] * 1);
        }
      }
      if (r2 === 'B') {
        if (r[0].indexOf('B') !== -1) {
          score += (r[1] * 1);
        }
      }
      if (r2 === '-B') {
        if (r[0].length == 2) {
          score += (r[1] * 1);
        } else if (r[0] == 'B') {
          score -= (r[1] * 1);
        }
      }
    }
    //先带小数放大1000倍，减小计算误差。
    score = Math.round(score * 1000 / questionNumbers.length);
    //将原来的3000分制，调整成百分制。
    topic.myScore = Math.round(score * 100 / 3000);
  }
  return abilityTopicalData;
}

function getSubjectData() {
  return subjectData;
}
function getabilityTopicalData() {
  return abilityTopicalData;
}

module.exports = {
  getSubjectData: getSubjectData,
  getabilityTopicalData:getabilityTopicalData,
  marking: marking
};