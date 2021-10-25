<template>
    <section class="functioning">
        <div class="container">
            <FunctioningItem :content="functioning" v-for="(functioning, index) in functioning" :key="index" />
        </div>
    </section>
</template>

<script>
    import FunctioningItem from './FunctioningItem.vue';
    export default {
        components: {
            FunctioningItem
        },
        data() {
            return {
                functioning: [{
                        id: 0,
                        title: 'Easy to implement',
                        description: 'Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.',
                        doubleImages: false,
                        images: {
                            imgDesktop: require('../assets/images/functioning/code-desktop.png'),
                            imgDesktop2x: require('../assets/images/functioning/code-desktop-2x.png'),
                            imgTablet: require('../assets/images/functioning/code-tablet.png'),
                            imgTablet2x: require('../assets/images/functioning/code-tablet-2x.png'),
                            imgMobile: require('../assets/images/functioning/code-mobile.png'),
                            imgMobile2x: require('../assets/images/functioning/code-mobile-2x.png'),
                        }
                    },
                    {
                        id: 1,
                        title: 'Simple UI & UX',
                        description: 'Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.',
                        doubleImages: true,
                        images: {
                            imgDesktop: require('../assets/images/functioning/phone-desktop-left.png'),
                            imgDesktop2x: require('../assets/images/functioning/phone-desktop-left-2x.png'),
                            imgTablet: require('../assets/images/functioning/phone-tablet-left.png'),
                            imgTablet2x: require('../assets/images/functioning/phone-tablet-left-2x.png'),
                            imgMobile: require('../assets/images/functioning/phone-mobile-left.png'),
                            imgMobile2x: require('../assets/images/functioning/phone-mobile-left-2x.png'),
                        },
                        imagesTwo: {
                            imgDesktop: require('../assets/images/functioning/phone-desktop-right.png'),
                            imgDesktop2x: require('../assets/images/functioning/phone-desktop-right-2x.png'),
                            imgTablet: require('../assets/images/functioning/phone-tablet-right.png'),
                            imgTablet2x: require('../assets/images/functioning/phone-tablet-right-2x.png'),
                            imgMobile: require('../assets/images/functioning/phone-mobile-right.png'),
                            imgMobile2x: require('../assets/images/functioning/phone-mobile-right-2x.png'),
                        }
                    }
                ],
            }
        }

    }
</script>

<style lang="scss" scoped>
    .functioning {
        position: relative;

        &:before {
            content: '';
            position: absolute;
            bottom: -15rem;
            right: -51.3rem;
            height: 78rem;
            width: 78rem;
            border-radius: 100rem;
            z-index: 0;
            background: var(--secondary-san-juan-blue-15);
            z-index: -1;
        }
    }

    @media screen and (max-width:991.98px) {
        .functioning {
            &:before {
                display: none;
            }
        }
    }
</style>