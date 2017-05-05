<template>
  <div>
    <Row class="dashboard-grid" :gutter="16">
      <Col :md="6" :sm="12" v-for="num in numbers" :key="num.key">
      <NumberCard :title="num.title" :color="num.color" :number="num.number" :icon="num.icon" />
      </Col>
      <Col :md="12" :sm="24">
      <Card>
        <RegionChart />
      </Card>
      </Col>
      <Col :md="12" :sm="24">
      <Card />
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import NumberCard from './components/NumberCard'
import RegionChart from './components/RegionChart'

export default {
  data() {
    return {
    }
  },
  created() {
    this.$store.dispatch('fetchDashboard')
  },
  computed: {
    ...mapGetters({
      numbers: 'statisticsNumbers'
    })
  },
  methods: {
  },
  components: {
    NumberCard,
    RegionChart,
  }
}
</script>

<style scoped>
.dashboard-grid .ivu-col {
  margin-bottom: 16px;
}
</style>
