<template>
  <Card class="number-card">
    <Icon class="icon" :type="icon" :color="color"></Icon>
    <div class="content">
      <h3 class="title">{{title}}</h3>
      <p class="number">
        <countTo :endVal="number" :duration="1000" />
      </p>
    </div>
  </Card>
</template>

<script>
import countTo from 'vue-count-to'

export default {
  data() {
    return {
    }
  },
  components: {
    countTo
  },
  props: {
    icon: String,
    title: String,
    color: String,
    number: Number
  }
}
</script>

<style scoped>
.icon {
  float: left;
  font-size: 48px;
  line-height: 56px;
  width: 56px;
  text-align: center;
}

.content {
  width: 100%;
  padding-left: 62px;
}

.title {
  line-height: 16px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  height: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.number {
  line-height: 32px;
  font-size: 24px;
  height: 32px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
