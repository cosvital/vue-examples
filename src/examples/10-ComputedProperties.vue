<script>
export default {
  data() {
    return {
      dogsitter: {
        name: 'John',
        dogs: ['Paco', 'Maia', 'Zeus']
      }
    }
  },
  computed: {
    isTakingCareOfDogsMessage() {
      return this.dogsitter.dogs.length > 0
        ? `${this.dogsitter.dogs.length} crazy dogs now.`
        : '0 dogs.'
    }
  }
}
</script>

<template>
  <p>{{ dogsitter.name }} is taking care of:</p>
  <br />
  <span class="bg-orange-300">{{ isTakingCareOfDogsMessage }}</span>
</template>
