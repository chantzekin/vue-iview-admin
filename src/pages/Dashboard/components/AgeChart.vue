<template>
  <div class="chart-box">
    <chart
      :option="bar"
      resizable
    />
  </div>
</template>

<script>
import ECharts from 'vue-echarts-v3/src/lite.vue'

import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

export default {
  components: {
    chart: ECharts
  },
  props: {
    title: String,
    data: Array
  },
  watch: {
    data: (newValue) => {
    }
  },
  mounted() {
    let data = this.data
    let x = data.map(item => item.name)
    let seriesData = data.map(item =>item.percent)

    this.bar.title.text = this.title
    this.bar.xAxis.data = x
    this.bar.series[0].data = seriesData
  },
  data: () => ({
    bar: {
      color: ['#f69899'],
      title: {
        text: '',
        textStyle: {
          color: '#666',
          fontWeight: 'normal',
          fontSize: 16
        },
      },
       legend: {
        data: ['占比'],
        top: 'bottom'
      },
      tooltip: {},
      xAxis: {
        data: []
      },
      yAxis: {},
      series: [{
        name: '占比',
        type: 'bar',
        data: []
      }]
    }
  }),
};
</script>

<style scoped>
.chart-box {
  height: 250px;
  width: 100%;
}
</style>
