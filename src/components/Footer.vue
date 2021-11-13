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
        position: relative;
        background-color: var(--secondary-mirage-blue);
        overflow: hidden;

        &:before {
            content: '';
            position: absolute;
            bottom: -54rem;
            left: calc(100% - 39rem);
            height: 78rem;
            width: 78rem;
            border-radius: 100rem;
            z-index: 0;
            background: var(--secondary-san-juan-blue-15);
        }

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

            &:before {
                bottom: -58rem;
                left: calc(50% - 39rem);
            }

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