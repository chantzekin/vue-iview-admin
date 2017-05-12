<template>
  <div class="layout">
    <Sider />
    <div class="main">
      <header class="header">
        <Button class="btn" type="text">
          <i class="icon iconfont icon-msg"></i>
        </Button>

        <Dropdown class="user-dropdown" @on-click="handleDropdownClick">
          <Button type="text" class="user-button">
            <!--<Icon type="person" class="icon"></Icon>-->
            <i class="icon iconfont icon-user"></i>
            <span class="name">{{name}}</span>
          </Button>
          <Dropdown-menu slot="list">
            <Dropdown-item>个人中心</Dropdown-item>
            <Dropdown-item divided>设置</Dropdown-item>
            <Dropdown-item name="logout">注销</Dropdown-item>
          </Dropdown-menu>
        </Dropdown>
      </header>
      <Bread />
      <div class="container">
        <div class="content">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
      <footer class="footer">mdmp © 2017</footer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Sider from '../components/Layout/Sider'
import Bread from '../components/Layout/Bread'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['name'])
  },
  components: {
    Sider,
    Bread
  },
  mounted() {
  },
  methods: {
    handleDropdownClick(name) {
      if (name === 'logout') {
        this.logout()
      }
    },
    logout() {
      const curPath = this.$router.currentRoute.fullPath || '/'
      this.$store
        .dispatch('user/logout')
        .then(() =>
          this.$router.push({
            path: '/login',
            query: { redirect: curPath }
          })
        )
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  height: 100vh;
  z-index: 500;
}

.main {
  margin-left: 224px;
  overflow: auto;
  height: 100vh;
  transition: all .3s ease-out;
}

.header {
  box-shadow: 4px 4px 40px 0 rgba(0, 0, 0, 0.05);
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 47px;
  line-height: 47px;
  background-color: #fff;
  padding: 0 24px;
  justify-content: flex-end;
  .btn {
    height: 100%;
    margin-left: 8px;
    margin-right: 8px;
    border-radius: 0;
    transition: all .2s ease-in;
    &:hover {
      background-color: #ecf6fd;
    }
  }
}

.user-dropdown {}

.user-button {
  font-size: 14px;
  height: 47px;
  padding-top: 0;
  padding-bottom: 0;
  .icon {
    margin-right: 16px;
  }
}


.container {
  margin: 24px;
}

.content {
  min-height: calc(100vh - 187px);
  position: relative;
  .content__inner {
    background: #fff;
    padding: 24px;
    box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, .01);
    min-height: calc(100vh - 184px);
  }
}

.footer {
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 12px;
  color: #999;
  background: #fff;
  box-shadow: 4px 4px 40px 0 rgba(0, 0, 0, 0.05);
  width: 100%;
}
</style>
<style lang="scss">
.user-button {
  position: relative;
  &:after {
    opacity: 0;
    position: absolute;
    content: '';
    height: 2px;
    background-color: #39f;
    bottom: -1px;
    left: 0;
    right: 0;
    transition: all .2s ease-in;
  }
  &>span {
    display: flex;
    align-items: center;
  }
}

.user-dropdown {
  &:hover {
    .user-button::after {
      opacity: 1;
    }
  }
}
</style>
