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
            flex-wrap: wrap;
            height: 10rem;
        }
    }

    @media screen and (max-width:768px) {
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