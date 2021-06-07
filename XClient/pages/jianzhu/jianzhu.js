import * as echarts from '../../ec-canvas/echarts';

Page({
 
  data: {
    ecBar: {
      lazyLoad: true // 延迟加载
      },
      
      ecScatter: {
      lazyLoad: true
      }
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
  hideModal_(e) {
    wx.navigateTo({
      url: '../../pages/start_MBTI/start_MBTI',
    })
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
  onLoad(){
    this.barComponent = this.selectComponent('#mychart-dom-multi-bar');
    this.scaComponnet = this.selectComponent('#mychart-dom-multi-scatter');
    this.init_bar();
    this.init_sca();
    },
  onReady() {
  },
  init_bar: function (){
    this.barComponent.init((canvas, width, height) => {
    // 初始化图表
    const barChart = echarts.init(canvas, null, {
    width: width,
    height: height
    });
    barChart.setOption(this.getBarOption());
    // 注意这里一定要返回 chart 实例，否则会影响事件处理等
    return barChart;
    });
    },
    init_sca: function () {
    this.scaComponnet.init((canvas, width, height) => {
    // 初始化图表
    const scaChart = echarts.init(canvas, null, {
    width: width,
    height: height
    });
    scaChart.setOption(this.getScaOption());
    // 注意这里一定要返回 chart 实例，否则会影响事件处理等
    return scaChart;
    });
    },
    getBarOption:function(){
    //return 请求数据
    return {
      title: {
        text: '霍兰德雷达图'
    },
    tooltip: {},
   
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '现实型', max: 45},
            { name: '研究型', max: 45},
            { name: '艺术型', max: 45},
            { name: '社会型', max: 45},
            { name: '企业型', max: 45},
            { name: '常规型', max: 45}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [R, Y, A, S, E, O],
                name: '预算分配（Allocated Budget）',
                label: {
                    normal: {
                        show: true,
                        formatter:function(params) {
                            return params.value;
                        }
                    }
                }
                
            },
           
        ]
    }]
    };
    },
    getScaOption:function(){
    return {
      title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
      
    ]
    };
    },
});

