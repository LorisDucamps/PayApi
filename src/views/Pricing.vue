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
</style>