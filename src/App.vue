<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { examples } from '@/examples/examples.js'
</script>

<template>
  <div class="h-screen bg-gray-100 font-mono">
    <header class="p-5">
      <h1 class="text-3xl font-bold">Vue Examples</h1>
    </header>

    <div class="flex flex-row h-full bg-gray-200">
      <nav class="w-96 p-4 h-full flex flex-col divide-solid divide-y divide-white">
        <div class="py-2 hover:bg-gray-100 rounded-md" v-for="({ description }, path) in examples">
          <RouterLink activeClass="bg-yellow-100" :to="'/' + path">{{ description }}</RouterLink>
        </div>
      </nav>
      <section class="p-4 w-full h-full">
        <div class="shadow-lg w-full h-full bg-white p-5 rounded-md">
          <RouterView />
        </div>
      </section>
    </div>
  </div>
</template>
