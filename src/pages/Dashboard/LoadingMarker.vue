<template>
  <Row class="dashboard-grid" :gutter="16">
    <Col :md="6" :sm="12" v-for="(num, index) in [1,2,3,4]" :key="index">
      <Card style="height: 88px" />
    </Col>
    <Col :md="14" :sm="24">
      <Card style="height: 284px" />
    </Col>
    <Col :md="10" :sm="24">
      <Card style="height: 284px" />
    </Col>
  </Row>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.dashboard-grid .ivu-col {
  margin-bottom: 16px;
}
</style>
