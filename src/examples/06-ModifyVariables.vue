<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment(value) {
      if (Number.isInteger(value)) {
        this.count = this.count + value
      } else {
        this.count++
      }
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-5 w-full items-center">
    <button
      class="w-32 border-2 rounded-lg bg-gray-100 hover:bg-blue-100 border-blue-400"
      v-on:click="increment"
    >
      Add one
    </button>
    <button
      class="w-32 border-2 rounded-lg bg-gray-100 hover:bg-blue-100 border-blue-400"
      v-on:click="increment(2)"
    >
      Add two!
    </button>
    <p>{{ count }}</p>
  </div>
</template>
