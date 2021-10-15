<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <TheLogo :imageSource="require('@/assets/images/logo-light.svg')" />
                <TheNavigation type="button__link-footer" />
                <BaseSocial />
            </div>
        </div>
    </footer>
</template>

<script>
    import TheLogo from './TheLogo.vue';
    import TheNavigation from './TheNavigation.vue'
    import BaseSocial from './BaseSocial.vue';
    export default {
        components: {
            TheLogo,
            TheNavigation,
            BaseSocial
        }

    }
</script>

<style lang="scss" scoped>
    .footer {
        background-color: var(--secondary-mirage-blue);

        &__inner {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 10rem;
        }
    }
</style>