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

    // HEX : #EDF3F8
    --background: hsla(209, 46%, 95%, 1);
    // HEX : #ba4270
    --primary-dark-pink: hsla(337, 48%, 49%, 1);

    // HEX : #fbfcfe
    --primary-link-water-white: hsla(220, 60%, 99%, 1);
    --primary-link-water-white-70: hsla(220, 60%, 99%, 0.7);

    // HEX : #36536b
    --secondary-san-juan-blue: hsla(207, 33%, 32%, 1);
    --secondary-san-juan-blue-15: hsla(207, 33%, 32%, 0.15);
    --secondary-san-juan-blue-50: hsla(207, 33%, 32%, 0.5);
    --secondary-san-juan-blue-70: hsla(207, 33%, 32%, 0.7);

    // HEX : #1b262f
    --secondary-mirage-blue: hsla(207, 27%, 15%, 1);
    --secondary-mirage-blue-98: hsla(207, 27%, 15%, 0.98);

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
    position: relative;
    margin: 0;
    font-size: 1.5rem;
    background-color: var(--background);
    -webkit-text-size-adjust: 100%;
    font-family: 'Public Sans', sans-serif;
    overflow-x: hidden;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: 'DM Serif Display', serif;
    color: var(--secondary-san-juan-blue);
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 4.8rem;
  }

  h1,
  .h1 {
    font-size: 7.2rem;
    line-height: 7.2rem;
  }

  h2,
  .h2 {
    font-size: 4.8rem;
  }

  h3,
  .h3 {
    font-size: 3.2rem;
  }

  h4,
  .h4 {
    font-size: 2.4rem;
  }

  p,
  span {
    color: var(--secondary-light-san-juan-blue);
  }

  #app {
    position: relative;
    overflow-x: hidden;
  }

  #app:before {
    content: '';
    position: absolute;
    top: -17.2rem;
    right: -14rem;
    height: 78rem;
    width: 78rem;
    border-radius: 100rem;
    z-index: 0;
    background: var(--secondary-san-juan-blue-15);
    z-index: -1;
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

  @media screen and (max-width:991.98px) {

    .container {
      //max-width: 68.6rem;
      // padding: 0 2.4rem;

      h1,
      .h1 {
        font-size: 4.8rem;
        line-height: 5.6rem;
      }
    }
  }

  @media screen and (max-width:767.98px) {
    #app {
      &:before {
        top: -66.3rem;
        left: calc(50% - 47rem);
        right: calc(50% - 47rem);
        height: 94.9rem;
        width: 94.9rem;
      }
    }
  }

  @media screen and (max-width:575.98px) {
    #app {
      &:before {
        top: -55rem;
        left: calc(50% - 39rem);
        right: calc(50% - 39rem);
        height: 78rem;
        width: 78rem;
      }
    }

    .container {

      h1,
      .h1 {
        font-size: 3.2rem;
        line-height: 3.6rem;
      }
    }
  }
</style>