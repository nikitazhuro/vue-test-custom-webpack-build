<template>
  <div class="main">
    <img width="300" height="300" src="../../public/logo.png" alt="logo">
    <h1 class="main__title">Home page</h1>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapState } from 'vuex';

  export default {
    computed: {
      ...mapState({
        counter: state => state.counter.counter,
      }),
      ...mapGetters({
        doubleCounter: "counter/counter",
      })
    },
    methods: {
      ...mapMutations({
        increment: "counter/increment",
        decrement: 'counter/decrement',
        changeByAmount: 'counter/changeByAmount',
      }),
    }
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