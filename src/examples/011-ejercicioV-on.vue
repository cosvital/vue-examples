<template>
  <div id="app">
    <h1>{{ title }}</h1>

    <!-- Texto cuyo color cambiará -->
    <p :style="{ color: textColor }">Este texto cambiará de color</p>

    <!-- Matriz de colores -->
    <div class="color-grid">
      <div
        v-for="(color, index) in colors"
        :key="index"
        :style="{ backgroundColor: color }"
        class="color-box"
        @click="changeTextColor(color)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Matriz de Colores en Vue',
      colors: [
        'red',
        'blue',
        'green',
        'yellow',
        'purple',
        'orange',
        'pink',
        'brown',
        'cyan',
        'magenta'
      ],
      textColor: 'black'
    }
  },
  methods: {
    changeTextColor(color) {
      this.textColor = color
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.color-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.color-box {
  width: 50px;
  height: 50px;
  margin: 5px;
  cursor: pointer;
}
</style>
