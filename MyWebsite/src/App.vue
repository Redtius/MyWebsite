<script setup>
import VNavbar from './components/shared/VNavbar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="min-h-screen w-screen grid grid-flow-col grid-rows-6">
    <header class="grid items-center">
      <VNavbar/>
    </header>
    <section class="grid grid-cols-5 row-span-4">
      
        <RouterView/>
     
      
    </section>
    <footer>

    </footer>
    
  </div>

</template>

<style scoped>


</style>
