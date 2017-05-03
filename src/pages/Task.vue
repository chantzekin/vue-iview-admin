<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Checkbox v-model="single">Checkbox</Checkbox>
  </div>
</template>

<script>
import Checkbox from 'iview/src/components/checkbox';

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      single: false
    }
  },
  components: {
    Checkbox
  }
}
</script>

<style scoped>
</style>
