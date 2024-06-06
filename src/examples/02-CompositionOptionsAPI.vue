<script>
import { ref } from 'vue'
export default {
  setup() {
    const name = ref('John')

    return {
      name
    }
  }
}
</script>

<template>
  <p>{{ name }}, this is an example of a Vue component</p>
</template>

<style scoped>
p {
  font-weight: bold;
  color: red;
}
</style>
