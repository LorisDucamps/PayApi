<template>
    <transition name="sidebar">
        <section class="sidebar">
            <img :src='svgIcon' class='sidebar__icon' alt="icon burger">
            <TheNavigation class="sidebar__navigation" type="button__link-footer" />
            <div class="actions">
                <BaseButton type='button__primary'>Schedule a Demo</BaseButton>
            </div>
        </section>

    </transition>
</template>

<script>
    import TheNavigation from './TheNavigation.vue';
    export default {
        components: {
            TheNavigation
        },
        data() {
            return {
                mobileNav: true,
                svgIcon: require('../assets/images/close.svg')
            }
        },
    }
</script>

<style lang="scss">
    .sidebar {
        position: fixed;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        max-width: 30rem;
        padding: 4.8rem 2.4rem 2.4rem 2.4rem;
        background-color: var(--secondary-mirage-blue);

        &__icon {
            height: 2.3rem;
            width: 2.2rem;
            margin-left: auto;
            cursor: pointer;

        }

        .actions {
            margin: 2rem auto 0 auto;
        }

        &__navigation {
            margin-left: 0 !important;

            ul {
                margin-top: 2.4rem;
                padding-top: 3rem !important;

                border-top: 0.1rem solid #404B56;
                flex-direction: column;

                a {
                    justify-content: center;
                }
            }
        }
    }





    .sidebar-enter-active,
    .sidebar-leave-active {
        transition: all 1s ease;
    }

    .sidebar-enter-from {
        transform: translateX(300px);
    }

    .sidebar-enter-to {
        transform: translateX(0);
    }

    .sidebar-leave-to {
        transform: translateX(300px);
    }
</style>