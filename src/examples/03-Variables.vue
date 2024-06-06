<script>
export default {
  data() {
    return {
      name: 'John',
      lastName: 'Doe',
      age: 71
    }
  }
}
</script>

<template>
  <p>My name is: {{ name }} {{ lastName }} and I'm {{ age }} years old.</p>
</template>
