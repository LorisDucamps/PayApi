<template>
    <transition name="sidebar">
        <section class="sidebar">
            <img :src='svgIcon' class='sidebar__icon' alt="icon burger">
            <ul>
                <li>
                    <BaseButton link type='button__link-footer' to='/pricing'>Pricing</BaseButton>
                </li>
                <li>
                    <BaseButton link type='button__link-footer' to='/about'>About</BaseButton>
                </li>
                <li>
                    <BaseButton link type='button__link-footer' to='/contact'>Contact</BaseButton>
                </li>
            </ul>
            <div class="actions">
                <BaseButton type='button__primary'>Schedule a Demo</BaseButton>
            </div>
        </section>

    </transition>
</template>

<script>
    export default {
        data() {
            return {
                mobileNav: true,
                svgIcon: require('../assets/images/close.svg')
            }
        },
    }
</script>

<style lang="scss" scoped>
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

        ul {
            margin-top: 2.4rem;
            border-top: 0.1rem solid #404B56;

            a {
                justify-content: center;
            }
        }

        .actions {
            margin: 2rem auto 0 auto;
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