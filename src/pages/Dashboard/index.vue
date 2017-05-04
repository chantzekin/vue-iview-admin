<template>
  <div>
    <Row :gutter="16">
      <Col span="6" v-for="num in numbers" :key="num.key">
      <NumberCard :title="num.title" :color="num.color" :number="num.number" :icon="num.icon" />
      </Col>
    </Row>
    <div class="a"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import NumberCard from './components/NumberCard'

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
      numbers: 'dashboardNumbers'
    })
  },
  methods: {
  },
  components: {
    NumberCard,
  }
}
</script>

<style scoped>

</style>
