<template>
  <div>
    <div
      class="grid grid-cols-2 mx-5 pb-5 text-white items-start text-hacker-green"
      style="font-family: 'Press Start 2P', cursive"
    >
      <span class="grid justify-start">
        <button v-if="isLeftScrollable" @click="scrollLeft()" class="scroll-btn">&lt;- Scroll left</button>
      </span>
      <span class="grid justify-end">
        <button v-if="isRightScrollable" @click="scrollRight()" class="scroll-btn">Scroll right -></button>
      </span>
    </div>
    <div
      id="image-track"
      @mousedown="startDragging($event)"
      @mousemove="scrollX($event)"
      @scroll="checkScrollEnd"
      ref="container"
    >
      <span v-for="project in projects" :key="project.title" class="card group"
        ><span class="more hidden group-hover:grid grid-span-8"
          ><span
            class="row-start-6 row-span-1 text-xl text-white font-bold flex items-end p-2"
            style="font-family: 'Press Start 2P', cursive"
            >{{ project.title }}</span
          >
          <p
            class="text-sm font-arial font-normal row-start-7 p-2"
            style="color: rgba(255, 255, 255, 0.612)"
          >
            {{ project.description }}
          </p> </span
        ><a class="link" target="_blank" :href="project.link"></a
        ><img class="image" :src="project.image"
      /></span>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, ref } from 'vue'
import pathFinderImg from '@/assets/pathfinder.png'
import todolistImg from '@/assets/todolist.png'
import snakegameImg from '@/assets/snakegame.png'
import payprofImg from '@/assets/payprof.png'
const container = ref(null)
let XposStart = 0
let isDragging = false
let lastPosX = 0
let isRightScrollable = ref(true)
let isLeftScrollable = ref(false)
const projects = [
  {
    title: 'Pathfinder',
    description: "Explore Optimal Paths with Vanilla JavaScript's A* Algorithm.",
    link: 'https://github.com/Redtius/PathFinder',
    image: pathFinderImg
  },
  {
    title: 'Payprof',
    description: "Explore Optimal Paths with Vanilla JavaScript's A* Algorithm.",
    link: 'https://github.com/Redtius/PathFinder',
    image: payprofImg
  },
  {
    title: 'Vue-Todolist',
    description: 'My Portfolio Website Made with Vue.js',
    link: 'https://github.com/Redtius/MyWebsite',
    image: todolistImg
  },
  {
    title: 'This Website',
    description: "Explore Optimal Paths with Vanilla JavaScript's A* Algorithm.",
    link: 'https://github.com/Redtius/PathFinder',
    image: pathFinderImg
  },
  {
    title: 'Console Snake Game',
    description: "Explore Optimal Paths with Vanilla JavaScript's A* Algorithm.",
    link: 'https://github.com/Redtius/PathFinder',
    image: snakegameImg
  },
  {
    title: '',
    description: "Explore Optimal Paths with Vanilla JavaScript's A* Algorithm.",
    link: 'https://github.com/Redtius/PathFinder',
    image: pathFinderImg
  }
]

const startDragging = (event) => {
  isDragging = true
  event.preventDefault()
  XposStart = event.clientX

  document.addEventListener('mouseup', stopDragging)
}
const scrollX = (event) => {
  if (isDragging) {
    lastPosX = event.clientX
    const movingX = XposStart - lastPosX
    container.value.scrollBy({ left: movingX, behavior: 'smooth' })
  }
}

const scrollRight = () => {
    container.value.scrollBy({ left: 200, behavior: 'smooth' })
}

const scrollLeft = () => {
    container.value.scrollBy({ left: -200, behavior: 'smooth' })
}

const stopDragging = () => {
  isDragging = false
  document.removeEventListener('mouseup', stopDragging)
}

const checkScrollEnd = () => {
  const scrollableWidth = container.value.scrollWidth - container.value.clientWidth

  if (container.value.scrollLeft === scrollableWidth) {
    isRightScrollable.value = false
  } else isRightScrollable.value = true

  if (container.value.scrollLeft === 0) {
    isLeftScrollable.value = false
  } else isLeftScrollable.value = true

}

onBeforeUnmount(() => {
  document.removeEventListener('mouseup', stopDragging)
})
</script>

<style scoped>
.scroll-btn:hover{
  cursor: pointer;
}
.text-hacker-green {
  color: rgb(0, 191, 25);
}
.card {
  width: 40vmin;
  min-width: 40vmin;
  height: 56vmin;
  border-radius: 4px;
}
.more {
  position: absolute;
  width: inherit;
  height: inherit;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  border-radius: 4px;
}
.link {
  position: absolute;
  width: inherit;
  height: inherit;
}
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 4px;
}
#image-track::-webkit-scrollbar {
  width: 0;
  height: 0;
}

/* Optional: Remove any remaining scrollbar space */
#image-track::-webkit-scrollbar-thumb {
  display: none;
}

#image-track {
  display: flex;
  gap: 20vmin;
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  max-width: 100%;
  margin: 0px 10px;
  overflow-x: auto;
  overflow-y: none;
  padding-bottom: 2.5rem;
  border-bottom: 4px solid white;
}
</style>
