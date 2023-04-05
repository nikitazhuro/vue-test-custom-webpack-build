<template>
  <div class="input">
    <span class="input__title">{{ title }}</span>
    <input
      :value="modelValue"
      :type="type"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
  export default {
    name: "app-input",
    props: {
      placeholder: String,
      type: {
        type: String,
        default: 'text',
      },
      title: String,
      modelValue: String,
    },
  }
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
}

input {
  color: rgb(65, 184, 131);
  border-radius: 5px;
  border: 1px solid rgb(65, 184, 131);
  padding: 10px;
}
.input__title {
  color: gray;
  margin-bottom: 0.15rem;
}

</style>