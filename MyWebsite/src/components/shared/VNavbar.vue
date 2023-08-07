

<template>
  <div class="grid justify-center items-center">
    <ul class="grid grid-cols-3 font-p">
      <li>
        <RouterLink v-if="Selection===1" to="/" class="text-lg nav-link slidein w-10/12">
          <span class="">Profile</span>
          <div class="border-2 rounded border-white"></div>
        </RouterLink>
        <RouterLink v-else to="/" class="text-lg nav-link slidein w-1/3 group hover:w-10/12">
          <span class="">Profile</span>
          <div class="border-2 border-transparent rounded group-hover:border-white"></div>
        </RouterLink>
      </li>
      <li>
        <RouterLink v-if="Selection===3" to="/docs" class="text-lg nav-link slidein w-10/12" >
          <span class="">Docs</span>
          <div class="border-2 rounded border-white"></div>
        </RouterLink>
        <RouterLink v-else to="/docs" class="text-lg nav-link slidein w-1/3 group hover:w-10/12">
          <span class="">Docs</span>
          <div class="border-2 border-transparent rounded group-hover:border-white"></div>
        </RouterLink>
      </li>
      <li>
        <RouterLink v-if="Selection===2" to="/projects" class="text-lg nav-link slidein w-10/12">
          <span class="">Projects</span>
          <div class="border-2 rounded border-white"></div>
        </RouterLink>
        <RouterLink v-else to="/projects" class="text-lg nav-link slidein w-1/3 group hover:w-10/12">
          <span class="">Projects</span>
          <div class="border-2 border-transparent rounded group-hover:border-white"></div>
        </RouterLink>

      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onUpdated } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
let count = 0;

const Selection = computed(() => {
  if (route.path === '/')
    return 1;
  else if (route.path === '/projects')
    return 2;
  else if (route.path.substring(0,5) === '/docs')
    return 3;
  else return 0;
})
onUpdated(() => {
  const navbar = document.querySelectorAll('.slidein');

  if (navbar && count > 0) {
    navbar.forEach((element) => {
      element.classList.remove('slidein');
    })
  }
  count++;

})


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
.nav-link {
  position: relative;
  text-decoration: none;
  color: white;
  padding-bottom: 0.5rem;
  /* Adjust this value to control the spacing between text and border */
  display: inline-block;
}

.font-p{
  font-family: 'Press Start 2P', cursive;
}

.slidein {
  animation-duration: 1s;
  /* Adjust the duration as needed */
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

.selected {
  border: white;
  background-color: aliceblue;
}
</style>