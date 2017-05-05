<template>
  <div>
    <transition name="fade">
      <Row v-if="!loading" class="dashboard-grid" :gutter="16">
        <Col :md="6" :sm="12" v-for="num in numbers" :key="num.key">
        <NumberCard :title="num.title" :color="num.color" :number="num.number" :icon="num.icon" />
        </Col>
        <Col :md="12" :sm="24">
        <Card>
          <RegionChart />
        </Card>
        </Col>
        <Col :md="12" :sm="24">
        <Card style="height: 288px" />
        </Col>
      </Row>
    </transition>
    <Row v-if="loading" class="dashboard-grid" :gutter="16">
      <Col :md="6" :sm="12" v-for="(num, index) in [1,2,3,4]" :key="index">
      <Card style="height: 88px" />
      </Col>
      <Col :md="12" :sm="24">
      <Card style="height: 288px" />
      </Col>
      <Col :md="12" :sm="24">
      <Card style="height: 288px" />
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
      loading: true
    }
  },
  created() {
    this.$store.dispatch('fetchDashboard')
    setTimeout(() => { this.loading = false }, 2000)
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
