<script>
export default {
  name: 'App',
  data() {
    return {
      title: ' Mi primer trabajo en Vue',
      name: 'Jose Manuel',
      age: 60,
      favoriteLanguage: 'JavaScript',
      tegustaProgramar: true,
      favoriteNumber: 777
    }
  }
}
</script>

<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <p>Hola, mi nombre es {{ name }}.</p>
    <p>Tengo {{ age }} años.</p>
    <p>Me encanta programar en {{ favoriteLanguage }}.</p>
    <p>¿Es divertido programar? {{ tegustaProgramar }}</p>
    <p>Mi número favorito es {{ favoriteNumber }}.</p>
  </div>
</template>
