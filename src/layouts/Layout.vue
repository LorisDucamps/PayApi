<template>
  <Header/>
  <slot></slot>
  <CallToAction/>
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue';
import CallToAction from '@/components/CallToAction.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Layout',
  components: {
    Header,
    CallToAction,
    Footer
  }
}
</script>