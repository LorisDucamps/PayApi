<template>
    <transition name="sidebar">
        <section class="sidebar">
            <img @click="$emit('close')" :src='svgIcon' class='sidebar__icon' alt="icon burger">
            <Navigation class="sidebar__navigation" type="button__link-footer" />
            <div class="actions">
                <BaseButton type='button__primary'>Schedule a Demo</BaseButton>
            </div>
        </section>

    </transition>
</template>

<script>
    import Navigation from './Navigation.vue';
    export default {
        emits: ['close'],
        components: {
            Navigation
        },
        data() {
            return {
                svgIcon: require('../assets/images/menu/close.svg')
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
        background-color: var(--secondary-mirage-blue-98);
        z-index: 1;

        &__icon {
            height: 2.3rem;
            width: 2.2rem;
            margin-left: auto;
            cursor: pointer;

        }

        .actions {
            margin: 2rem 0 0 0;

            .button {
                width: 100%;
            }
        }

        &__navigation {
            margin-left: 0 !important;

            ul {
                margin-top: 2.4rem;
                padding-top: 3rem !important;

                border-top: 0.1rem solid #404B56;
                flex-direction: column;

                a {
                    font-size: 2rem !important;
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