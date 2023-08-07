<template>
      <div id="image-track" @mousedown="startDragging($event)" @mousemove="scrollX($event)" ref="container">
        <img src="./../assets/test-img.jpg"/>
        <img src="./../assets/test-img.jpg"/>
        <img src="./../assets/test-img.jpg"/>
        <img src="./../assets/test-img.jpg"/>
        <img src="./../assets/test-img.jpg"/>
      </div>
</template>

<script setup>
import { onBeforeUnmount, ref } from 'vue';
  const container = ref(null);
  let XposStart = 0;
  let isDragging = false;

  const startDragging = (event) =>{
    isDragging = true;
    event.preventDefault();
    XposStart = event.clientX;

    document.addEventListener('mouseup', stopDragging);
  }
  const scrollX = (event) => {
    if(isDragging){
      const lastPosX = event.clientX;

      console.log(isDragging)
      container.value.style.transition = 'scroll-left 0s ease-in-out';
      container.value.scrollBy({ left: (XposStart-lastPosX)*2, behavior: 'smooth' });
    }
  }

  const stopDragging = () => {
    console.log('stopped dragging')
    isDragging=false;
    document.removeEventListener('mouseup',stopDragging);
  }

  onBeforeUnmount(()=>{
    document.removeEventListener('mouseup',stopDragging);
  })
</script>

<style>
#image-track > img{
  width: 40vmin;
  height: 56vmin;
  object-fit: cover;
  object-position: center;
}

#image-track::-webkit-scrollbar {
  width: 0;
  height: 0;
}

/* Optional: Remove any remaining scrollbar space */
#image-track::-webkit-scrollbar-thumb {
  display: none;
}

#image-track{
  display: flex;
  gap:20vmin;
  position: absolute;
  top: 25%;
  max-width: 100%;
  overflow-x: auto;
}
</style>