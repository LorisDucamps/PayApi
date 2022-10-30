<template>
  <section class="strategy">
    <StrategyItem :content="strategy" v-for="(strategy, index) in strategy" :key="index"/>
  </section>
</template>

<script>
import StrategyItem from '@/components/StrategyItem';

export default {
  components: {
    StrategyItem
  },
  data() {
    return {
      strategy: [
        {
          id: 0,
          title: 'Our Vision',
          description: 'Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.',
        },
        {
          id: 1,
          title: 'Our Business',
          description: 'At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.',
        }
      ],
    }
  }

}
</script>

<style lang="scss" scoped>
.strategy {
  position: relative;
}

@media screen and (max-width: 991.98px) {
  .strategy {
  }
}
</style>