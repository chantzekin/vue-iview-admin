<template>
  <div>
    <transition name="fade">
      <Row v-if="!loading" class="dashboard-grid" :gutter="16">
        <Col :md="6" :sm="12" v-for="num in numbers" :key="num.key">
          <NumberCard
            :title="num.title"
            :color="num.color"
            :number="num.number"
            :icon="num.icon"
          />
        </Col>
        <Col :md="14" :sm="24">
          <Card>
            <RegionChart
              :title="region.title"
              :data="region.data"
            />
          </Card>
        </Col>
        <Col :md="10" :sm="24">
          <Card>
            <OSChart
              :title="os.title"
              :data="os.data"
            />
          </Card>
        </Col>
        <Col :md="10" :sm="24">
          <Card>
            <OSChart
              :title="terminal.title"
              :data="terminal.data"
            />
          </Card>
        </Col>
        <Col :md="14" :sm="24">
          <Card>
            <AgeChart
              :title="age.title"
              :data="age.data"
            />
          </Card>
        </Col>
      </Row>
    </transition>
    <LoadingMarker v-if="loading" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import LoadingMarker from './LoadingMarker'
import NumberCard from './components/NumberCard'
import RegionChart from './components/RegionChart'
import AgeChart from './components/AgeChart'
import OSChart from './components/OSChart'

export default {
  data() {
    return {
      loading: true
    }
  },
  created() {
    this.$store.dispatch('fetchDashboard')
    setTimeout(() => { this.loading = false }, 2000)
  },
  computed: {
    ...mapGetters({
      numbers: 'statisticsNumbers',
      region: 'regionChartData',
      age: 'ageChartData',
      os: 'osChartData',
      terminal: 'terminalChartData'
    })
  },
  methods: {
  },
  components: {
    LoadingMarker,
    NumberCard,
    RegionChart,
    AgeChart,
    OSChart
  }
}
</script>

<style scoped>
.dashboard-grid .ivu-col {
  margin-bottom: 16px;
}
</style>
