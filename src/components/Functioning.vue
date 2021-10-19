<template>
    <div class="function">
        <div class="row">
            <picture class="function__image">
                <!-- DESKTOP -->
                <source media="(min-width: 992px)"
                    :srcset="`${content.images.imgDesktop} 1x, ${content.images.imgDesktop2x} 2x`" type="image/png"
                    :alt="content.images.imgDesktop">

                <!-- TABLET -->
                <source media="(min-width: 768px)"
                    :srcset="`${content.images.imgTablet} 1x, ${content.images.imgTablet2x} 2x`" type="image/png"
                    :alt="content.images.imgTablet">

                <source media="(min-width: 320px)"
                    :srcset="`${content.images.imgMobile} 1x, ${content.images.imgMobile2x} 2x`" type="image/png"
                    :alt="content.images.imgMobile">

                <img :src="content.images.imgDesktop" :alt="content.images.imgDesktop">
            </picture>
            <div class="function__lead">
                <h2>{{content.title}}</h2>
                <p>{{content.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['content'],

    }
</script>

<style lang="scss" scoped>
    .function {
        margin: 15rem auto;

        .row {
            display: flex;
            align-items: center;
            gap: 4.8rem;
        }

        &__image {
            flex-shrink: 0;
        }

        &__lead {
            max-width: 44.5rem;
        }

        // pair
        &:nth-child(even) {

            .function__image {
                order: 1;
                margin-left: auto;
            }

            .function__lead {
                order: 0;
            }
        }

        // impair
        &:nth-child(odd) {
            .function__lead {
                margin-left: auto;
                margin-right: 9.7rem;
            }
        }
    }

    @media screen and (max-width:991.98px) {
        .function {
            margin: 10rem 0;

            .row {
                flex-direction: column;

            }

            &__lead {
                max-width: 57.3rem;
                margin: inherit !important;
                text-align: center;
            }

            &__image {
                margin: 0 auto;
            }

            &:nth-child(even) {
                .function__image {
                    order: 0;
                }
            }
        }
    }

    @media screen and (max-width:575.98px) {
        .function {
            margin: 8rem 0;
        }
    }
</style>