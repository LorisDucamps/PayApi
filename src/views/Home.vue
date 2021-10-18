<template>
  <div class="home">
    <Hero />
    <Work />
    <section class="functioning container">
      <Functioning :content="functioning" v-for="(functioning, index) in functioning" :key="index" />
    </section>
    <section class="features container">
      <Features :content="feature" v-for="(feature, index) in features" :key="index" />
    </section>
  </div>

  <!--

  <div class="features">
    <div class="container">
      <div class="row">
        <div class="col-xl-4">
          <div class="feature">
            <div class="circle">
              <img src="../assets/images/personal-finances.svg" alt="">
            </div>
            <h3>Personal Finances</h3>
            <p>Consolidate financial data from multiple sources and categorize transactions up to 2 years of history.
              Analyze reports to reconcile activities in your account. </p>
          </div>

        </div>
        <div class="col-xl-4">
          <div class="feature">
            <div class="circle">
              <img src="../assets/images/banking-coverage.svg" alt="">
            </div>
            <h3>Banking & Coverage</h3>
            <p>With our platform, you can speed up account onboarding and support ongoing payments for checking,
              savings, credit card, and brokerage accounts.</p>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="feature">
            <div class="circle">
              <img src="../assets/images/consumer-payments.svg" alt="">
            </div>
            <h3>Consumer Payments</h3>
            <p>It’s easier to set up secure bank payments with us through a flow designed with the user experience in
              mind. Customers could instantly authenticate their account.</p>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="ready">
    <div class="container">
      <div class="row">
        <div class="ready__inner">
          <div class="title">
            <h3>Ready to Start ?</h3>
          </div>
          <div class="bloc-input">
            <input type="text" placeholder="Enter email address">
            <button>Schedule a Demo</button>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
  import Hero from '../components/Hero.vue';
  import Work from '../components/Work.vue';
  import Functioning from '../components/Functioning.vue';
  import Features from '../components/Features.vue';
  export default {
    name: 'Home',
    data() {
      return {
        functioning: [{
            id: 0,
            title: 'Easy to implement',
            description: 'Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.',
            images: {
              imgDesktop: require('../assets/images/functioning/code-desktop.png'),
              imgDesktop2x: require('../assets/images/functioning/code-desktop-2x.png'),
              imgTablet: require('../assets/images/functioning/code-tablet.png'),
              imgTablet2x: require('../assets/images/functioning/code-tablet-2x.png'),
              imgMobile: require('../assets/images/functioning/code-mobile.png'),
              imgMobile2x: require('../assets/images/functioning/code-mobile-2x.png'),
            }
          },
          {
            id: 1,
            title: 'Simple UI & UX',
            description: 'Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.',
            images: {
              imgDesktop: require('../assets/images/functioning/phone-desktop.png'),
              imgDesktop2x: require('../assets/images/functioning/phone-desktop-2x.png'),
              imgTablet: require('../assets/images/functioning/phone-tablet.png'),
              imgTablet2x: require('../assets/images/functioning/phone-tablet-2x.png'),
              imgMobile: require('../assets/images/functioning/phone-mobile.png'),
              imgMobile2x: require('../assets/images/functioning/phone-mobile-2x.png'),
            }
          }
        ],
        features: [{
            id: 0,
            title: 'Personal Finances',
            description: 'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. ',
            idSprite: '#personal'
          },
          {
            id: 1,
            title: 'Banking & Coverage',
            description: 'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.',
            idSprite: '#banking'
          },
          {
            id: 2,
            title: 'Consumer Payments',
            description: 'It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.',
            idSprite: '#consumer'
          }
        ]
      }
    },
    components: {
      Hero,
      Work,
      Functioning,
      Features
    }
  }
</script>

<style lang="scss" scoped>
  .functioning {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      bottom: -15rem;
      right: -51.3rem;
      height: 78rem;
      width: 78rem;
      border-radius: 100rem;
      z-index: 0;
      background: var(--secondary-san-juan-blue-15);
      z-index: -1;
    }

  }

  @media screen and (max-width:991.98px) {
    .functioning {
      &:before {
        display: none;
      }
    }
  }
</style>