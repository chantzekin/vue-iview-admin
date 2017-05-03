<template>
  <div class="layout">
    <aside class="sider">
      <div class="logo">
        <img src="https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png" alt="logo">
        <span>MDMP</span>
      </div>
      <Menu theme="light" width="auto" active-name="dashboard">
        <Menu-item name="dashboard">
          <Icon type="stats-bars"></Icon>
          <span class="layout-text">Dashboard</span>
        </Menu-item>
        <Menu-item name="task">
          <Icon type="person-stalker"></Icon>
          <span class="layout-text">Task</span>
        </Menu-item>
      </Menu>
    </aside>
    <div class="main">
      <header class="header"></header>
      <Breadcrumb class="breadcrumb">
        <Breadcrumb-item href="/">Home</Breadcrumb-item>
        <Breadcrumb-item>Dashboard</Breadcrumb-item>
      </Breadcrumb>
      <div class="container">
        <div class="content"></div>
      </div>
      <footer class="footer">wiair mdmp © 2017</footer>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.layout {
  position: relative;
  height: 100vh;
}

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

.main {
  margin-left: 224px;
  overflow: auto;
  height: 100vh;
  transition: all .3s ease-out;
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
    text-transform: uppercase;
    display: inline-block;
  }
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
  background-color: #fff;
}

.breadcrumb {
  height: 64px;
  line-height: 64px;
  padding: 0 24px;
}

.container {
  margin: 24px;
}

.content {
  min-height: calc(100vh - 207px);
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

.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
  background-color: #ecf6fd;
}
</style>
