<template>
  <div class="grid justify-center items-center p-10">
    <ul class="grid grid-rows-3 gap-5 font-p">
      <li>
        <RouterLink v-if="Selection===1" :to="{name: 'javascript'}" class="text-lg nav-link slidein w-10/12">
          <span class="">Javascript</span>
          <div class="border-2 rounded border-black"></div>
        </RouterLink>
        <RouterLink v-else :to="{name: 'javascript'}" class="text-lg nav-link slidein w-1/3 group hover:w-10/12">
          <span class="">Javascript</span>
          <div class="border-2 border-transparent rounded group-hover:border-black"></div>
        </RouterLink>
      </li>
      <li>
        <RouterLink v-if="Selection===3" :to="{name: 'sass'}" class="text-lg nav-link slidein w-10/12" >
          <span class="">Sass</span>
          <div class="border-2 rounded border-black"></div>
        </RouterLink>
        <RouterLink v-else :to="{name: 'sass'}" class="text-lg nav-link slidein w-1/3 group hover:w-10/12">
          <span class="">Sass</span>
          <div class="border-2 border-transparent rounded group-hover:border-black"></div>
        </RouterLink>
      </li>
      <li>
        <RouterLink v-if="Selection===2" :to="{name: 'vue'}" class="text-lg nav-link slidein w-10/12">
          <span class="">Vue.js</span>
          <div class="border-2 rounded border-black"></div>
        </RouterLink>
        <RouterLink v-else :to="{name: 'vue'}" class="text-lg nav-link slidein w-1/3 group hover:w-10/12">
          <span class="">Vue.js</span>
          <div class="border-2 border-transparent rounded group-hover:border-black"></div>
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
  if (route.name === 'javascript')
    return 1;
  else if (route.name === 'vue')
    return 2;
  else if (route.name === 'sass')
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
  color: black;
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
    margin-top: 100%;
  }

  to {
    margin-top: 0%;
  }
}

</style>