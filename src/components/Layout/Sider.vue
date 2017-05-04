<template>
  <aside class="sider">
    <div class="logo">
      <img :src="logoUrl" alt="logo">
      <span>{{appName}}</span>
    </div>
    <Menu theme="light" width="auto" :active-name="activeTab" @on-select="handleMenuSelectChange" :open-names="openTab">
      <template v-for="menu in menus">
        <Menu-item :name="menu.key" v-if="!menu.children">
          <Icon :type="menu.icon"></Icon>
          <span>{{menu.title}}</span>
        </Menu-item>
        <!--has submenu-->
        <Submenu :name="menu.key" v-else>
          <template slot="title">
            <Icon :type="menu.icon"></Icon>
            {{menu.title}}
          </template>
          <Menu-item v-for="sub in menu.children" :name="sub.key" :key="sub.key">
            <Icon :type="sub.icon"></Icon>
            <span>{{sub.title}}</span>
          </Menu-item>
        </Submenu>
      </template>
    </Menu>
  </aside>
</template>

<script>
import config, { menus } from '../../constants/config'

export default {
  data() {
    return {
      logoUrl: config.logoUrl,
      appName: config.appName,
      menus,
      activeTab: '',
      openTab: [''],
    }
  },
  watch: {
    '$route'(to, from) {
      var pathname = to.path.split('/')[1]
      if (to.path === '/' || pathname === 'index') {
        this.activeTab = config.defaultPage
      }
    }
  },
  created() {
    var path = this.$router.currentRoute.path;
    if (path) {
      var paths = path.split('/');
      var isDefaultPage = path === '/'
        || paths[1] === 'index'
      if (paths.length > 2) {
        this.openTab = ['/' + paths[1]]
      }

      var pathname = isDefaultPage
        ? config.defaultPage
        : path;
      this.activeTab = pathname;
    }
  },
  methods: {
    handleMenuSelectChange(key) {
      this.$router.push(key)
      this.activeTab = key
    }
  }
}
</script>

<style lang="scss" scope>
.sider {
  width: 224px;
  background: #fff;
  position: absolute;
  overflow: visible;
  height: 100vh;
  transition: all .3s ease-out;
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.01);
  z-index: 520;
  color: #999;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background: #d7dde4;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
}

.logo {
  text-align: center;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  margin: 28px 0;
  transition: all 0.3s ease-out;
  overflow: hidden;
  img {
    width: 40px;
    margin-right: 8px;
    transition: all 0.3s ease-out;
  }
  span {
    vertical-align: text-bottom;
    font-size: 16px;
    line-height: 40px;
    text-transform: uppercase;
    display: inline-block;
  }
}

.ivu-menu-light.ivu-menu-vertical {
  .ivu-menu-item-active:not(.ivu-menu-submenu) {
    background-color: #ecf6fd;
  }
}
</style>
