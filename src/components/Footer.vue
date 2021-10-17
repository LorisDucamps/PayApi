<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <Logo :imageSource="require('@/assets/images/logo/logo-light.svg')" />
                <Navigation type="button__link-footer" />
                <BaseSocial />
            </div>
        </div>
    </footer>
</template>

<script>
    import Logo from './Logo.vue';
    import Navigation from './Navigation.vue'
    import BaseSocial from './BaseSocial.vue';
    export default {
        components: {
            Logo,
            Navigation,
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
            flex-wrap: wrap;
            height: 10rem;
        }
    }

    @media screen and (max-width:767.98px) {
        .footer {
            &__inner {
                height: inherit;
                flex-direction: column;
                padding: 4rem 0;

                nav {
                    margin: 4rem 0;
                }
            }
        }
    }
</style>