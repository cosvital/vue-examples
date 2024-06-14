<script>
export default {
  data() {
    return {
      title: ' Practicando metodos con Vue',
      buttonTitles: ['Botón 1', 'Botón 2', 'Botón 3', 'Botón 4'],
      buttonText: 'Clic aquí'
    }
  },
  methods: {
    changeButtonText() {
      const randomIndex = Math.floor(Math.random() * this.buttonTitles.length)
      this.buttonText = this.buttonTitles[randomIndex]
    }
  }
}
</script>

<template>
  <div id="app">
    <h1>{{ title }}</h1>

    <!-- Botón que cambia de texto -->
    <button @click="changeButtonText">{{ buttonText }}</button>
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  margin: 20px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>
