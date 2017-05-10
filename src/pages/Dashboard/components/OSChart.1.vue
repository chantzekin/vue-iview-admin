<template>
  <div class="chart-box">
    <chart
      :option="chartOpts"
      resizable
    />
  </div>
</template>

<script>
import ECharts from 'vue-echarts-v3/src/lite.vue'

import 'echarts/lib/chart/Pie'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'

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
    console.log(data)

    this.chartOpts.title.text = this.title
    this.chartOpts.series[0].data = data
  },
  data: () => ({
    chartOpts: {
      color: ['#d897eb', '#64ea91', '#8fc9fb', '#f69899'],
      title: {
        text: '',
        textStyle: {
          color: '#666',
          fontWeight: 'normal',
          fontSize: 16
        },
      },
      tooltip: {},
      series: [{
        name: '系统',
        type: 'pie',
        radius: '55%',
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
