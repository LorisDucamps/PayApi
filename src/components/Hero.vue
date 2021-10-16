<template>
    <section class="hero">
        <div class="row">
            <div class="hero__lead">
                <h1>Start building with our APIs for absolutely free.</h1>
                <EmailInput />
                <p>Have any questions ? <BaseButton link type="button__link-text" to='/contact'>Contact Us</BaseButton>
                </p>
            </div>
            <div class="hero__image">
                <!-- SRC SET RESPONSIVE IMG -->
                <img src="../assets/images/phone-intro-2x.png" alt="Phone PayApi">
            </div>
        </div>


    </section>
</template>

<script>
    import EmailInput from './EmailInput.vue';
    export default {
        components: {
            EmailInput
        }

    }
</script>

<style lang="scss" scoped>
    .hero {

        .row {
            display: flex;
            align-items: center;
            gap: 6.5rem;
            margin: 7.4rem 0;

            p {
                margin-top: 0;
                margin-bottom: 0;
                margin-left: 2.7rem;
            }
        }

        &__lead {
            max-width: 54.6rem;
            width: 100%;
        }

        &__image {
            flex: 1;

            img {
                max-width: 26.3rem;
                margin-left: auto;
                margin-right: 9.7rem;
            }
        }
    }

    @media screen and (max-width:991.98px) {
        .hero {

            .row {
                flex-direction: column;
                gap: 4.8rem;
                max-width: 57.3rem;
                margin: 4.8rem auto 10rem auto;
            }

            &__lead {
                order: 1;

                h1 {
                    text-align: center;
                    margin-bottom: 3.2rem;
                }

                p {
                    margin-left: 0;
                    text-align: center;
                }
            }

            &__image {
                order: 0;

                img {
                    max-width: 15.9rem;
                    margin-left: auto;
                    margin-right: auto;
                }
            }
        }
    }
</style>