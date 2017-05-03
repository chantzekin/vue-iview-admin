<template>
  <div class="not-found">
    <Icon class="icon" type="sad-outline"></Icon>
    <h3>{{title}}</h3>
    <p>{{ msg }}</p>
  </div>
</template>

<script>

export default {
  name: 'hello',
  data() {
    return {
      title: '404 Not Found',
      msg: 'Opps...! You lost.',
    }
  },
  components: {
  },

}
</script>

<style scoped>
.not-found {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.not-found .icon{
  font-size: 56px;
  margin-bottom: 24px;
}

.not-found h3{
  font-size: 24px;
}
.not-found p{
  font-size: 16px;
}
</style>
