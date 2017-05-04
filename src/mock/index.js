//
//

import Mock from 'mockjs'

export default Mock.mock(
  '/api/dashboard',
  {
    "success": true,
    "data": {
      "numbers": [{
        "key": "active",
        "title": "实时激活路由器",
        "icon": "ios-lightbulb-outline",
        "color": "#8fc9fb",
        "number": 11240
      }, {
        "key": "online",
        "title": "日活跃终端",
        "icon": "ios-analytics-outline",
        "color": "#64ea91",
        "number": 26288
      }, {
        "key": "connect",
        "title": "累计连接终端",
        "icon": "ios-pulse",
        "color": "#d897eb",
        "number": 134889
      }, {
        "key": "view",
        "title": "浏览量",
        "icon": "ios-eye-outline",
        "color": "#f69899",
        "number": 58023
      }],
      "regionChartData": [{
        "name": "广东",
        "present": 17
      }, {
        "name": "上海",
        "present": 16.9
      }, {
        "name": "福建",
        "present": 19.5
      }, {
        "name": "江苏",
        "present": 14.5
      }, {
        "name": "江西",
        "present": 18.2
      }, {
        "name": "山西",
        "present": 11.5
      }, {
        "name": "四川",
        "present": 15.2
      }],
      "osChartData": [{
        "name": "手机",
        "value": 1098
      }, {
        "name": "平板",
        "value": 50
      }, {
        "name": "电脑",
        "value": 239
      }, {
        "name": "其他",
        "value": 64
      }],
      "terminalChartData": [{
        "name": "苹果系统",
        "value": 297
      }, {
        "name": "微软系统",
        "value": 223
      }, {
        "name": "安卓系统",
        "value": 862
      }, {
        "name": "其他",
        "value": 69
      }],
      "ageChartData": [{
        "name": "<19",
        "present": 20.36
      }, {
        "name": "19-24",
        "present": 12.7
      }, {
        "name": "24-30",
        "present": 32.27
      }, {
        "name": "30-40",
        "present": 19.15
      }, {
        "name": ">40",
        "present": 14.52
      }]
    }
  }
)
