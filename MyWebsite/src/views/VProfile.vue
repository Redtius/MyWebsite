<script>


</script>

<template>
  <span class="col-start-2 col-span-3">
<div class="bg-glass w-full h-full grid grid-rows-12 gap-5 p-8 slidein-glass">
  <div class="flex justify-end items-start h-8 grid-rows-1 gap-2">
    <a href="https://github.com/Redtius" target="_blank"><img src="./../assets/github-icon.png" alt="github" class="w-8 h-8 hover:animate-bounce" /></a>
    <a href="https://www.linkedin.com/in/reda-mountassir/" target="_blank"><img src="./../assets/linkedin-icon.png" alt="likdin" class="w-8 h-8 hover:animate-bounce" /></a>
  </div>
  <div class="md:grid md:grid-cols-3">
    <span class="justify-center items-center flex mb-4 md:hidden">
      <img src="./../assets/reda-img.png" alt="Reda Mountassir Image" id="myImg"/>
    </span>
    <span class="col-span-2">
      <span class="text-hacker-green">Hello World!</span><br>
      <br>
      I'm Reda Mountassir,<br>
      a passionate 21-year-old <br>
      Software Engineering student at ENSA Tangier.
    </span>
    <span class="justify-center items-center hidden md:flex">
      <img src="./../assets/reda-img.png" alt="Reda Mountassir Image" id="myImg"/>
    </span>
  </div>
  <div><span>I'm driven by a deep fascination <br>
    for the world of technology and its endless possibilities.<br>
    Currently pursuing my degree in Software Engineering,<br> 
    I am constantly exploring the vast landscape of programming and software development.<br> 

  </span>
  </div>
  <div><span>
    My journey has led me to become proficient in <span class="text-hacker-green">JavaScript</span> and <span class="text-hacker-green">Vue.js</span>,<br> 
    where I strive to craft elegant and efficient code that brings ideas to life.<br>
    Thank you for visiting my website.<br>
    Feel free to connect with me and explore my journey as a student, developer, and creative individual.<br>
    <span class="text-hacker-green">Let's embark on this exciting technological adventure together!</span><br>
  </span>
  </div>
  
</div>
</span>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  .bg-glass{
    background: rgba( 255, 255, 255, 0.05 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 17px );
    -webkit-backdrop-filter: blur( 17px );
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.18);
  }
  span{
    font-family: 'Press Start 2P', cursive;
    color: black;
  }


  .text-hacker-green{
    color: rgb(0, 191, 25);
  }

  #myImg{
    height: 150px;
    width: 150px;
    border-radius: 50%; /* Makes the image circular */
    border: 2px solid black; /* White border around the image */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  }


  .slidein-glass {
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
</style>