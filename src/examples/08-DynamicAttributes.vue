<script>
export default {
  data() {
    return {
      myId: 'test-id',
      titleClass: 'title',
      isActive: true,
      hasError: true,
      errorClass: 'error',
      fontSize: '30px',
      color: 'green'
    }
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<template>
  <div class="flex flex-col gap-5">
    <div v-bind:id="myId">This div has a dynamic id: {{ myId }}, inspect it!</div>
    <h1 :class="titleClass">This is a title with a dynamic class</h1>
    <p :class="{ 'active-title': isActive }" @click="toggleActive">
      This is a text that changes the color if it's active. Click it to toggle it!
    </p>
    <h1 :class="[hasError ? errorClass : '', titleClass]">This is a title with an error state</h1>
    <h1 :style="{ color: color, fontSize: fontSize }">
      This is a title using inline dynamic styles
    </h1>
  </div>
</template>

<style>
.title {
  font-size: 22px;
}
.active-title {
  color: green;
}
.title {
}
.error {
  color: red;
}
</style>
