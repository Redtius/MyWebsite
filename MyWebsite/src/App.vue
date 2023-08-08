<script setup>
import VNavbar from './components/shared/VNavbar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="min-h-screen w-screen">
    <header class="grid items-center h-40">
      <VNavbar/>
    </header>
    <main class="grid grid-rows-6">
      <section class="slidin-track pt-10 border-t-4 border-white row-span-4 w-screen">
      
        <RouterView/>
        
     
      
    </section>
    
    <footer class="w-screen">
    </footer>
    </main>
    
    
  </div>

</template>

<style scoped>


</style>
