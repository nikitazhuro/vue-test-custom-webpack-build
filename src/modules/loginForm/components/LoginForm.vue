<template>
  <div class="loginForm">
    <h2 class="loginForm__title">Уже есть аккаунт?</h2>
    <div class="loginForm__content">
      <app-input
        title="Email"
        class="emailInput"
        v-model="loginState.email"
        placeholder="Введите email"
      ></app-input>
      <app-input
        title="Password"
        type="password"
        v-model="loginState.password"
        placeholder="Введите email"
      ></app-input>
      <div class="loginForm__content__btn">
        <app-button @click="login" class="loginBtn">Login</app-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginState: {
          email: '',
          password: '',
        }
      }
    },
    methods: {
      login() {
        console.log(this.loginState);
      }
    }
  }
</script>

<style scoped>
.loginForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.loginForm__title {
  color: rgb(65, 184, 131);
  margin-bottom: 0.5rem;
}
.loginForm__content {
  min-width: 400px;
  min-height: 200px;
  border: 1px solid rgb(65, 184, 131);
  border-radius: 5px;
  padding: 25px;
}
.loginBtn {
  margin-top: 0.5rem;
  padding: 10px 20px!important;
}

.loginForm__content__btn {
  display: flex;
  justify-content: end;
}
.emailInput {
  margin-bottom: 0.5rem;
}
</style>