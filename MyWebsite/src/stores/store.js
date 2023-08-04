
import { defineStore } from 'pinia'
import { ref } from 'vue';

export const homeStore = defineStore('homeStore',
  ()=>{
    const tab = ref(null);

    return{tab};
  },

)