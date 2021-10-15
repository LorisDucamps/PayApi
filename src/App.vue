<template>
  <Header />
  <router-view />
  <!-- CTA -->
  <!-- FOOTER -->
  <Footer />
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  export default {
    components: {
      Header,
      Footer
    }

  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Public+Sans:wght@400;700&display=swap');

  // variables CSS
  :root {
    // HEX : #ba4270
    --primary-dark-pink: hsla(337, 48%, 49%, 1);

    // HEX : #fbfcfe
    --primary-link-water-white: hsla(220, 60%, 99%, 1);
    --primary-link-water-white-70: hsla(220, 60%, 99%, 0.7);

    // HEX : #36536b
    --secondary-san-juan-blue: hsla(207, 33%, 32%, 1);
    --secondary-san-juan-blue-70: hsla(207, 33%, 32%, 0.7);

    // HEX : #1b262f
    --secondary-mirage-blue: hsla(207, 27%, 15%, 1);

    // HEX : #da6d97
    --secondary-charm-pink: hsla(337, 60%, 64%, 1);

    // HEX : #6c8294
    --secondary-light-san-juan-blue: hsla(207, 16%, 50%, 1);
  }

  //   font-family: 'DM Serif Display', serif;
  //    font-family: 'Public Sans', sans-serif;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    font-size: 62.5%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
    overflow-wrap: break-word;
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    background-color: #FBFCFE;
    -webkit-text-size-adjust: 100%;
    font-family: 'Public Sans', sans-serif;
  }

  #app {
    overflow: hidden;
  }

  img,
  svg {
    display: block;
    height: auto;
    max-width: 100%;
  }

  figure {
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 1190px;
    margin: 0 auto;
    padding: 0 4rem;
  }

  @media screen and (max-width:768px) {
    .container {
      padding: 0 2.4rem;
    }
  }
</style>