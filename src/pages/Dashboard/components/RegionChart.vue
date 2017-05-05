<template>
  <div class="chart">
    <highcharts style="height:256px" :options="options" ref="highcharts" />
  </div>
</template>

<script>

export default {
  data() {
    return {
      chartData: {},
      options: {}
    }
  },
  computed: {

  },
  created() {
    this.chartData = this.$store.getters.regionChartData
    this.options = {
      credits: { enabled: false },
      chart: { type: 'bar' },
      title: { text: '全国地区分布图' },
      xAxis: { type: 'category' },
      yAxis: { category: ['广东', '北京'] },
      series: [this.chartData]
    }
  },
  components: {
  },
  props: {
  }
}
</script>

<style scoped>

</style>
