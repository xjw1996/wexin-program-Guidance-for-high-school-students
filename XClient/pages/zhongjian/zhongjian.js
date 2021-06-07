var echarts = require("../../ec-canvas/echarts.js");

const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    angleAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [1, 2, 3, 4, 3, 5, 1],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a',
        color:'#ff4844',
         label: {
                         show: true,
                         position: 'top',
                         textStyle: {
                             color: '#800080'
                         }
                     },
    }, {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
    }, {
        type: 'bar',
        data: [1, 2, 3, 4, 1, 2, 5],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a',
        color: "#EEE8AA"
    }],
    legend: {
        show: true,
        data: ['A', 'B', 'C']
    }
    // backgroundColor: '#2c343c',

    // title: {
    //     text: 'Customized Pie',
    //     left: 'center',
    //     top: 20,
    //     textStyle: {
    //         color: '#ccc'
    //     }
    // },

    // tooltip: {
    //     trigger: 'item',
    //     formatter: '{a} <br/>{b} : {c} ({d}%)'
    // },

    // visualMap: {
    //     show: false,
    //     min: 80,
    //     max: 600,
    //     inRange: {
    //         colorLightness: [0, 1]
    //     }
    // },
    // series: [
    //     {
    //         name: '访问来源',
    //         type: 'pie',
    //         radius: '55%',
    //         center: ['50%', '50%'],
    //         data: [
    //             {value: 335, name: '直接访问335'},
    //             {value: 310, name: '邮件营销310'},
    //             {value: 274, name: '联盟广告274'},
    //             {value: 235, name: '视频广告235'},
    //             {value: 400, name: '搜索引擎400'}
    //         ].sort(function (a, b) { return a.value - b.value; }),
    //         roseType: 'radius',
    //         label: {
    //             color: 'rgba(255, 255, 255, 0.3)'
    //         },
    //         labelLine: {
    //             lineStyle: {
    //                 color: 'rgba(255, 255, 255, 0.3)'
    //             },
    //             smooth: 0.2,
    //             length: 10,
    //             length2: 20
    //         },
    //         itemStyle: {
    //              normal: {
    //                                      label: {
    //                                          show: true,
    //                                          position: 'top',
    //                                          textStyle: {
    //                                              color: '#000000'
    //                                          }
    //                                      },
    //                                     color: function (params){
    //                                       var colorList = ['#ff4844','#9ac3e5','#66ac52','#ffc032','#549bd3'];
    //                                       return colorList[params.dataIndex];
    //                                   }
            
    //                                  }
    //         },

    //         animationType: 'scale',
    //         animationEasing: 'elasticOut',
    //         animationDelay: function (idx) {
    //             return Math.random() * 200;
    //         }
    //     }
    // ]

  };

  chart.setOption(option);
  return chart;
}

Page({
  
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
  }
});
// normal: {
//                          label: {
//                              show: true,
//                              position: 'top',
//                              textStyle: {
//                                  color: '#800080'
//                              }
//                          },
//                         color: function (params){
//                           var colorList = ['#ff4844','#9ac3e5','#66ac52','#ffc032','#549bd3'];
//                           return colorList[params.dataIndex];
//                       }

//                      }