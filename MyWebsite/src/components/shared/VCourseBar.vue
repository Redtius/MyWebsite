<template>
  <div class="mx-10 bg-white rounded-lg p-10 max-h-screen border overflow">
    {{ titles }}
  </div>

</template>

<script setup>
import { defineProps } from 'vue';


defineProps(['titles'])


</script>