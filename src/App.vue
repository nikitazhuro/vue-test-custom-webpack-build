<template>
    <app-navbar></app-navbar>
  <router-view></router-view>
</template>

<script>
import './global.css';

import NavBar from '@/components/navbar/NavBar'

export default {
  components: {
    "app-navbar": NavBar,
  }
};
</script>

<style scoped>

</style>
