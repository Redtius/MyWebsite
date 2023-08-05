<script setup>
  import { RouterView } from 'vue-router';
import VDocsNavbar from '../components/shared/VDocsNavbar.vue';
</script>

<template>
  <span class="col-span-1">
    <VDocsNavbar></VDocsNavbar>
  </span>
  <span class="col-span-4 grid grid-cols-4">
    <RouterView></RouterView>
  </span>
</template>

<style>
    div ::-webkit-scrollbar {
      width: 12px; /* Width of the scrollbar */
    }

    div ::-webkit-scrollbar-track {
      background: #f1f1f1; /* Background color of the track */
      border-radius: 8px;
    }

    div ::-webkit-scrollbar-thumb {
      background: black; /* Color of the scrollbar handle */
      border-radius: 8px; /* Rounded corners */
    }

    div ::-webkit-scrollbar-thumb:hover {
      background: #555; /* Color of the scrollbar handle on hover */
    }
</style>