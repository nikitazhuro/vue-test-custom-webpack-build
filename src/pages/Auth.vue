<template>
  <div class="main">
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from '../modules/loginForm';

  export default {
    data() {
        return {
          counter: 0,
        };
    },
    components: { LoginForm },
}
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 80px);
}
</style>