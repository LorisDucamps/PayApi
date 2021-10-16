<template>
    <button class='button' v-if="!link" :class="type">
        <slot></slot>
    </button>
    <router-link class='button' v-else :to="to" :class="type">
        <slot></slot>
    </router-link>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                required: false,
                default: null
            },
            link: {
                type: Boolean,
                required: false,
                default: false
            },
            to: {
                type: String,
                required: false,
                default: '/'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .button {
        display: flex;
        justify-content: center;
        height: 4.8rem;
        min-width: 12.9rem;
        font-family: 'Public Sans', sans-serif;
        font-weight: 700;
        padding: 0 2.8rem;
        line-height: 4.8rem;
        font-size: 1.5rem;
        color: inherit;
        flex-shrink: 0;
        background-color: inherit;
        border: 0.1rem solid transparent;
        border-radius: 5rem;
        cursor: pointer;

        &__primary {
            color: #FFF;
            background-color: #BA4270;
            box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);

            &:hover {
                background-color: #DA6D97;
            }
        }

        &__secondary-light {
            border: 0.1rem solid #FBFCFE;
            color: #FBFCFE;
            background-color: transparent;

            &:hover {
                background-color: #FBFCFE;
                color: #1B262F;
            }
        }

        &__secondary-dark {
            border: 0.1rem solid #36536B;
            color: #36536B;
            background-color: transparent;

            &:hover {
                background-color: #36536B;
                color: #FFFFFF;
            }
        }

        &__link-header {
            min-width: inherit;
            padding: 0 2rem;
            color: var(--secondary-san-juan-blue-70);
            text-decoration: none;

            &.router-link-active {
                color: var(--secondary-san-juan-blue);
            }

            &:hover {
                color: var(--secondary-san-juan-blue);
            }
        }

        &__link-footer {
            min-width: inherit;
            padding: 0 2rem;
            color: var(--primary-link-water-white-70);
            text-decoration: none;

            &.router-link-active {
                color: var(--primary-link-water-white);
            }

            &:hover {
                color: var(--primary-link-water-white);
            }
        }

        &__link-text {
            display: inline-flex;
            padding-left: 0;
            padding-right: 0;
            min-width: inherit;
            text-decoration: none;
        }

        &__social {
            min-width: inherit;
            padding: 0 1.2rem;
            align-items: center;
            fill: var(--primary-link-water-white);

            &:hover {
                fill: var(--secondary-charm-pink);
            }
        }
    }

    @media screen and (max-width:575.98px) {
        .button {
            &__primary {
                text-align: center;
            }
        }
    }
</style>