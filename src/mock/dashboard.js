export default [
  {
    path: '/api/dashboard',
    type: 'get',
    data: () => dashboard
  }
]

const dashboard = {
  "success": true,
  "data": {
    "numbers": [
      { "key": "active", "title": "实时激活路由器", "icon": "ios-lightbulb-outline", "color": "#8fc9fb", "number": 11240 },
      { "key": "online", "title": "日活跃终端", "icon": "ios-analytics-outline", "color": "#64ea91", "number": 26288 },
      { "key": "connect", "title": "累计连接终端", "icon": "ios-pulse", "color": "#d897eb", "number": 134889 },
      { "key": "view", "title": "浏览量", "icon": "ios-eye-outline", "color": "#f69899", "number": 58023 }
    ],
    "regionChartData": {
      "title": '全国分布图',
      "data": [
        { "name": "广东", "percent": 17 },
        { "name": "上海", "percent": 16.9 },
        { "name": "福建", "percent": 19.5 },
        { "name": "江苏", "percent": 14.5 },
        { "name": "江西", "percent": 18.2 },
        { "name": "山西", "percent": 11.5 },
        { "name": "四川", "percent": 15.2 }
      ]
    },
    "terminalChartData": {
      "title": '用户终端分布图',
      "data": [
        { "name": "手机", "value": 1098 },
        { "name": "平板", "value": 50 },
        { "name": "电脑", "value": 239 },
        { "name": "其他", "value": 64 }
      ]
    }
    ,
    "osChartData": {
      "title": '用户系统分布图',
      "data": [
        { "name": "苹果系统", "value": 297 },
        { "name": "微软系统", "value": 223 },
        { "name": "安卓系统", "value": 862 },
        { "name": "其他", "value": 69 }
      ]
    },
    "ageChartData": {
      title: '用户年龄分布图',
      data: [
        { "name": "小于19岁", "percent": 20.36 },
        { "name": "19-24岁", "percent": 12.7 },
        { "name": "24-30岁", "percent": 32.27 },
        { "name": "30-40岁", "percent": 19.15 },
        { "name": "大于40岁", "percent": 14.52 }
      ]
    }
  }
}
