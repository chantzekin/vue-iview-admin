<template>
  <div class="login">
    <Form class="form" ref="loginForm" :model="formValidate" :rules="ruleValidate">
      <div class="logo">
        <img :src="logoUrl" alt="logo">
        <span>{{appName}}</span>
      </div>
      <Form-item prop="username">
        <Input type="text" v-model="formValidate.username" placeholder="Username" icon="ios-person-outline" @on-enter="handleSubmit"></Input>
      </Form-item>
      <Form-item prop="password">
        <Input type="password" v-model="formValidate.password" placeholder="Password" icon="ios-locked-outline" @on-enter="handleSubmit"></Input>
      </Form-item>
      <Form-item>
        <Button type="primary" @click="handleSubmit" :loading="loading" long>
          <span v-if="!loading">Sign in</span>
          <span v-else>Please wait...</span>
        </Button>
      </Form-item>
    </Form>
  </div>
</template>

<script>
import config from '../../constants/config'

export default {
  data() {
    return {
      logoUrl: config.logoUrl,
      appName: config.appName,
      loading: false,
      formValidate: {
        username: '',
        password: ''
      },
      ruleValidate: {
        username: [
          { required: true, message: 'username is required', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'password is required', trigger: 'blur' },
          { type: 'string', min: 6, message: 'password length >= 6', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('user/login', this.formValidate)
            .then(() => {
              const fromPath = this.$route.query.redirect || '/'
              this.loading = false
              this.$router.push({ path: fromPath })
              this.formValidate.username = ''
              this.formValidate.password = ''
            })
            .catch(err => {
              this.$Message.error(err)
              this.loading = false
            })
        }
      })
    }
  }
}
</script>

<style scoped>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  position: absolute;
  width: 320px;
  height: 320px;
  padding: 36px;
  top: 50%;
  left: 50%;
  margin-left: -160px;
  margin-top: -160px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.08)
}

.logo {
  text-align: center;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  margin-bottom: 40px;
}

.logo img {
  width: 40px;
  margin-right: 8px;
}

.logo span {
  vertical-align: text-bottom;
  font-size: 16px;
  text-transform: uppercase;
  display: inline-block;
}
</style>
<style>
html,
body {
  height: 100%;
  overflow-y: hidden;
  background-color: #f8f8f8;
}
</style>
