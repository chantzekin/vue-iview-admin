<template>
  <Breadcrumb class="breadcrumb">
    <Breadcrumb-item
      v-for="(item, index) in list"
      :href="item.path"
      :key="item.name"
    >
      {{item.meta.title}}
    </Breadcrumb-item>
  </Breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.updateBreadcrumbs()
  },
  methods: {
    updateBreadcrumbs() {
      let matched = this.$route.matched.filter(
        item => item.name
      )
      let first = matched[0]
      let last = matched[matched.length - 1]
      if (first && (first.name !== 'Index' || first.path !== '')) {
        matched = [{ name: 'Home', path: '/', meta: { title: 'Home' } }].concat(matched)
      }
      if (last && last.path !== '') {
        last.path = ''
      }
      for (var index in matched) {
        let item = matched[index]
        if (item.meta.isSubmenu) {
          item.path = ''
        }
      }
      this.list = matched
    }
  },
  watch: {
    $route() {
      this.updateBreadcrumbs()
    }
  }
}
</script>

<style scope>
.breadcrumb {
  height: 64px;
  line-height: 64px;
  padding: 0 24px;
  margin-bottom: -24px;
}
</style>
