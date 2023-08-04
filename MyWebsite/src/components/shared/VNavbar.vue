

<template>
  <div class="grid grid-cols-3">
    <ul class="col-start-2 col-span-1 grid grid-cols-3">
      <li>
        <RouterLink v-if="Selection===1" to="/" class="text-xl nav-link slidein w-10/12">
          <span class="">Profile</span>
          <div class="border-2 rounded border-black"></div>
        </RouterLink>
        <RouterLink v-else to="/" class="text-xl nav-link slidein w-1/3 group hover:w-10/12">
          <span class="">Profile</span>
          <div class="border-2 border-transparent rounded group-hover:border-black"></div>
        </RouterLink>
      </li>
      <li>
        <RouterLink v-if="Selection===2" to="/projects" class="text-xl nav-link slidein w-10/12">
          <span class="">Projects</span>
          <div class="border-2 rounded border-black"></div>
        </RouterLink>
        <RouterLink v-else to="/projects" class="text-xl nav-link slidein w-1/3 group hover:w-10/12">
          <span class="">Projects</span>
          <div class="border-2 border-transparent rounded group-hover:border-black"></div>
        </RouterLink>

      </li>
      <li>
        <RouterLink v-if="Selection===3" to="/docs" class="text-xl nav-link slidein w-10/12" >
          <span class="">Docs</span>
          <div class="border-2 rounded border-black"></div>
        </RouterLink>
        <RouterLink v-else to="/docs" class="text-xl nav-link slidein w-1/3 group hover:w-10/12" :class="{'bg-red-400':Selection===3}">
          <span class="">Docs</span>
          <div class="border-2 border-transparent rounded group-hover:border-black"></div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { computed,onUpdated } from 'vue';
  import { useRoute } from 'vue-router';

//import {RouterLink} from 'vue-router';
//import { ref } from 'vue';

    const route = useRoute();
    let count = 0;

    const Selection = computed(()=>{
      if(route.path === '/')
      {
        console.log('test')
        return 1;
      }
        
      else if(route.path === '/projects')
        return 2;
      else if (route.path === '/docs')
        return 3;
      else return 0;
    })
    onUpdated(()=>{
    const navbar = document.querySelectorAll('.slidein');
    
    if(navbar && count > 0){
      navbar.forEach((element)=>{
      element.classList.remove('slidein');
    })
    }
    
    console.log('beforeUpdate')
    count++;
    
  })


</script>

<style>
.nav-link {
  position: relative;
  text-decoration: none;
  color: black;
  padding-bottom: 0.5rem; /* Adjust this value to control the spacing between text and border */
  display: inline-block;
}

.slidein {
  animation-duration:1s; /* Adjust the duration as needed */
  animation-name: slidein-animation;
  animation-iteration-count: 1;
  animation-direction: normal;
}

@keyframes slidein-animation {
  from {
    margin-left: 100%;
  }

  to {
    margin-left: 0%;
  }
}

.selected{
  border: white;
  background-color: aliceblue;
}
</style>