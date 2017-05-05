<template>
  <div class="layout">
    <Sider />
    <div class="main">
      <header class="header">
        <Dropdown class="user-dropdown">
          <Button type="text" class="user-button">
            <Icon type="ios-person-outline" class="icon"></Icon>
            <span class="name">admin</span>
          </Button>
          <Dropdown-menu slot="list">
            <Dropdown-item>Logout</Dropdown-item>
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
import Sider from '../components/Layout/Sider'
import Bread from '../components/Layout/Bread'

export default {
  data() {
    return {
    }
  },
  components: {
    Sider,
    Bread
  }
}
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  height: 100vh;
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
}

.user-dropdown {}

.user-button {
  display: flex;
  align-items: center;
  font-size: 14px;
  height: 47px;
  .icon {
    margin-right: 8px;
  }
}


.container {
  margin: 24px;
}

.content {
  min-height: calc(100vh - 187px);
  position: relative;
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
