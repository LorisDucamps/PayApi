<template>
  <div class="pricing container">
    <h1 class="h1--small">Pricing</h1>
    <div class="pricing__plan">
      <PricingItem :content="pricing" v-for="(pricing, index) in pricings" :key="index" />
    </div>
  </div>
</template>

<script>
  import PricingItem from '../components/PricingItem.vue';
  export default {
    name: 'Pricing',
    components: {
      PricingItem
    },
    data() {
      return {
        pricings: [{
            id: 0,
            name: 'Free Plan',
            description: 'Build and test using our core set of products with up to 100 API requests',
            price: '$0.00',
            content: {
              transactions: {
                name: 'Transactions',
                enabled: true,
              },
              auth: {
                name: 'Auth',
                enabled: true,
              },
              identity: {
                name: 'Identity',
                enabled: true,
              },
              investments: {
                name: 'Investments',
                enabled: false,
              },
              assets: {
                name: 'Assets',
                enabled: false,
              },
              liabilities: {
                name: 'Liabilities',
                enabled: false,
              },
              income: {
                name: 'Income',
                enabled: false,
              }
            },
            button: 'Request Access'
          },
          {
            id: 1,
            name: 'Basic Plan',
            description: 'Launch your project with unlimited requests and no contractual minimums',
            price: '$249.00',
            content: {
              transactions: {
                name: 'Transactions',
                enabled: true,
              },
              auth: {
                name: 'Auth',
                enabled: true,
              },
              identity: {
                name: 'Identity',
                enabled: true,
              },
              investments: {
                name: 'Investments',
                enabled: true,
              },
              assets: {
                name: 'Assets',
                enabled: true,
              },
              liabilities: {
                name: 'Liabilities',
                enabled: false,
              },
              income: {
                name: 'Income',
                enabled: false,
              }
            },
            button: 'Request Access'
          },
          {
            id: 2,
            name: 'Premium Plan',
            description: 'Get tailored solutions, volume pricing, and dedicated support for your team',
            price: '$499.00',
            content: {
              transactions: {
                name: 'Transactions',
                enabled: true,
              },
              auth: {
                name: 'Auth',
                enabled: true,
              },
              identity: {
                name: 'Identity',
                enabled: true,
              },
              investments: {
                name: 'Investments',
                enabled: true,
              },
              assets: {
                name: 'Assets',
                enabled: true,
              },
              liabilities: {
                name: 'Liabilities',
                enabled: true,
              },
              income: {
                name: 'Income',
                enabled: true,
              }
            },
            button: 'Request Access'
          },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pricing {
    position:relative;

    &:before {
      content: '';
      position: absolute;
      top: -69rem;
      right: -26rem;
      height: 78rem;
      width: 78rem;
      border-radius: 100rem;
      z-index: 0;
      background: var(--secondary-san-juan-blue-15);
      z-index: -1;
    }

    h1 {
      margin-top: 8.2rem;
      margin-bottom: 7.2rem;
    }

    .pricing__plan {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3rem;
      margin-bottom: 9.6rem;


    }

  }

  @media screen and (max-width:991.98px) {
    .pricing {
      h1 {
        text-align: center;
        font-size: 4.8rem;
      }

      .pricing__plan {
        text-align: center;
      }
    }
  }

  @media screen and (max-width:767.98px) {
    .pricing {
      .pricing__plan {
        grid-template-columns: inherit;
        gap: 4.8rem;
      }
    }
  }

  @media screen and (max-width:575.98px) {
    .pricing {
      h1 {
        font-size: 3.2rem;
      }
    }
  }
</style>