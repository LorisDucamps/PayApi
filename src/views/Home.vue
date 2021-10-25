<template>
  <div class="home">
    <Hero />
    <Work />
    <Functioning />
    <Features />
  </div>
</template>

<script>
  import Hero from '../components/Hero.vue';
  import Work from '../components/Work.vue';
  import Functioning from '../components/Functioning.vue';
  import Features from '../components/Features.vue';
  export default {
    name: 'Home',
    components: {
      Hero,
      Work,
      Functioning,
      Features
    }
  }
</script>