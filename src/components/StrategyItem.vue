<template>
  <div class="strategy">
    <div class="row">

      <div class="strategy__lead">
        <h2>{{content.title}}</h2>
        <p>{{content.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['content'],

}
</script>

<style lang="scss" scoped>

@media screen and (max-width:991.98px) {

}

@media screen and (max-width:575.98px) {

}
</style>