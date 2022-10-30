<template>
      <picture>
        <!-- DESKTOP -->
        <source media="(min-width: 992px)"
                srcset="../assets/images/employees/employees-desktop.jpg 1x, ../assets/images/employees/employees-desktop-2x.jpg 2x"
                type="image/jpg" alt="employees working together">

        <!-- TABLET -->
        <source media="(min-width: 768px)"
                srcset="../assets/images/employees/employees-tablet.jpg 1x, ../assets/images/employees/employees-tablet-2x.jpg 2x"
                type="image/jpg" alt="employees working together">

        <source media="(min-width: 320px)"
                srcset="../assets/images/employees/employees-mobile.jpg 1x, ../assets/images/employees/employees-mobile-2x.jpg 2x"
                type="image/jpg" alt="employees working together">

        <img src="../assets/images/employees/employees-desktop.jpg" alt="employees working together">
      </picture>
</template>

<script>
export default {
  name: 'PictureCollaborators',
}
</script>

<style lang="scss" scoped>

img {
  margin: 0 auto;
}

</style>