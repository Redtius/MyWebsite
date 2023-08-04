<script setup>
import VNavbar from './components/shared/VNavbar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="min-h-screen w-screen grid grid-flow-col grid-rows-3">
    <header class="grid items-center">
      <VNavbar/>
    </header>
    <section class="bg-black">
      <RouterView/>
    </section>
    <footer>

    </footer>
    
  </div>

</template>

<style scoped>


</style>
