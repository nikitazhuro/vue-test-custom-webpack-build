<template>
  <div class="main">
    <img width="300" height="300" src="../../public/logo.png" alt="logo">
    <h1 class="main__title">About</h1>
  </div>
</template>

<script>
  export default {
    
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

.main__title {
  font-size: 48px;
  color: rgb(65, 184, 131);
}
</style>