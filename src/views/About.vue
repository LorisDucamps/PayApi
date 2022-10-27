<template>
    <div class="about container">
      <div class="about__inner">
        <h1 class="h1--small">We empower innovators by delivering access to the financial system</h1>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'About',

    }
</script>

<style lang="scss" scoped>
.about {
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

  &__inner {
    max-width: 1112px;
    margin: 0 auto;
    padding: 0 9.6rem;
  }

  h1 {
    margin-top: 8.2rem;
    margin-bottom: 7.2rem;
    max-width: 73rem;
  }

}

@media screen and (max-width:991.98px) {
  .about {

    &__inner {
      max-width: inherit;
      padding: 0;
    }

    h1 {
      text-align: center;
      font-size: 4.8rem;
      max-width: inherit;
    }
  }
}

@media screen and (max-width:767.98px) {
  .about {}
}

@media screen and (max-width:575.98px) {
  .about {
    h1 {
      font-size: 3.2rem;
    }
  }
}
</style>