<template>
  <div class="navbar">
    <router-link
      :class="{
        active: $router.currentRoute.value.path === '/',
      }"
      to="/"
    >
      Home
    </router-link>
    <router-link
      :class="{
        active: $router.currentRoute.value.path === '/about',
      }"
      to="/about"
    >
      About
    </router-link>
    <router-link
      :class="{
        active: $router.currentRoute.value.path === '/auth',
      }"
      to="/auth"
    >
      Auth
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 80px;
  background-color: rgb(65, 184, 131);
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0rem 1.5rem;
}

a {
  color: white;
  margin-left: 0.75rem;
  text-transform: uppercase;
  text-decoration: none;
}

.active {
  text-decoration: underline;
}
</style>
