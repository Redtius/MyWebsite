<script setup>
  import { RouterView } from 'vue-router';
import VDocsNavbar from '../components/shared/VDocsNavbar.vue';
</script>

<template>
  <span class="col-span-1">
    <VDocsNavbar></VDocsNavbar>
  </span>
  <span class="col-span-3 bg-white rounded-lg p-10 max-h-screen border overflow-auto">
    <RouterView></RouterView>
  </span>
</template>

<style>
  ::-webkit-scrollbar {
      width: 8px; /* Width of the scrollbar */
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1; /* Background color of the track */
    }

    ::-webkit-scrollbar-thumb {
      background: #888; /* Color of the scrollbar handle */
      border-radius: 4px; /* Rounded corners */
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555; /* Color of the scrollbar handle on hover */
    }
</style>