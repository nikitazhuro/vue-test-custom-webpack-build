<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "app-button",
  }
</script>

<style scoped>
.button {
  padding: 5px 10px;
  background-color: transparent;
  color: rgb(65, 184, 131);
  border: 1px solid rgb(65, 184, 131);
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: rgb(65, 184, 131);
  color: white;
}
</style>