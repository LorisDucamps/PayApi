<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <Logo :imageSource="require('@/assets/images/logo-dark.svg')" />
        <Navigation type="button__link-header" v-show='!mobile' />

        <!-- MENU ICON MOBILE -->
        <img :src="svgIcon" @click='toggleMobileNav' class='header__icon' v-show='mobile' alt="icon burger">
        <!-- /MENU ICON MOBILE -->

        <Sidebar @close="toggleMobileNav" v-show="mobileNav" />

        <div v-show='!mobile' class="actions">
          <BaseButton type='button__primary'>Schedule a Demo</BaseButton>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import Logo from './Logo.vue';
  import Navigation from './Navigation.vue';
  import Sidebar from './Sidebar.vue';
  export default {
    name: 'Header',
    components: {
      Logo,
      Navigation,
      Sidebar
    },

    data() {
      return {
        mobile: null,
        mobileNav: null,
        windowWidth: '',
        svgIcon: require('../assets/images/menu.svg')
      }
    },

    created() {
      window.addEventListener('resize', this.checkScreen);
      this.checkScreen();

    },
    methods: {
      checkScreen() {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth <= 767.98) {
          this.mobile = true
          return
        }
        this.mobile = false
        this.mobileNav = false
        return
      },
      toggleMobileNav() {
        this.mobileNav = !this.mobileNav;
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .header {
    margin-top: 4rem;

    &__inner {
      display: flex;
      align-items: center;

      .actions {
        margin-left: auto;
      }
    }

    &__icon {
      margin-left: auto;
      cursor: pointer;
    }

  }
</style>