<template>
  <div class="mx-10 bg-white rounded-lg border">
    <ul class="rounded-lg overflow-y-auto max-h-80">
      <li v-for="str in courseTitles" :key="str" class="text-xl text-black border-black border-b-2 p-2 hover:bg-gray-300">{{ str }}</li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';


const props = defineProps({
  courseTitles:Array,
});


</script>