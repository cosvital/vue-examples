<script>
export default {
  data() {
    return {
      name: 'John'
    }
  },
  created() {
    console.log(`Component created by ${this.name}`)
  },
  mounted() {
    console.log(`Component mounted by ${this.name}`)
  }
}
</script>

<template>
  <p>My name is: {{ name }}.</p>
</template>
