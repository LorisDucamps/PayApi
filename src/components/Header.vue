<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <TheLogo :imageSource="require('@/assets/images/logo-dark.svg')" />
        <TheNavigation type="button__link-header" v-show='!mobile' />

        <!-- MENU ICON MOBILE -->
        <img :src="svgIcon" @click='toggleMobileNav' class='header__icon' v-show='mobile' alt="icon burger">
        <!-- /MENU ICON MOBILE -->

        <TheSidebar v-show="mobileNav" />

        <div v-show='!mobile' class="actions">
          <BaseButton type='button__primary'>Schedule a Demo</BaseButton>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import TheLogo from './TheLogo.vue';
  import TheNavigation from './TheNavigation.vue';
  import TheSidebar from './TheSidebar.vue';
  export default {
    name: 'Header',
    components: {
      TheLogo,
      TheNavigation,
      TheSidebar
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
        if (this.windowWidth <= 768) {
          this.mobile = true
          return
        }
        this.mobile = false
        this.mobileNav = false
        return
      },
      toggleMobileNav() {
        this.mobileNav = !this.mobileNav;
      }
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