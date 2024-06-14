<script>
export default {
  data() {
    return {
      title: 'Matriz de Colores en Vue',
      colors: ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink'],
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
      <!--
v-for="(color, index) in colors": Un bucle que itera sobre cada color en la matriz colors.
:key="index": Una clave única para cada elemento del bucle, necesaria para que Vue pueda rastrear los cambios de manera eficiente.
:style="{ backgroundColor: color }": Vincula dinámicamente el estilo de fondo al valor de color.
class="color-box": Aplica una clase CSS color-box a cada div.
@click="changeTextColor(color)": Vincula un evento de clic que llama al método changeTextColor y pasa el color clicado como argumento.
Script-->
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
