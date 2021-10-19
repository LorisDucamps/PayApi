<template>
    <section class="ready">
        <div class="container">
            <div class="row">
                <div class="ready__lead">
                    <h2>Ready to start?</h2>
                </div>
                <div class="ready__cta">
                    <EmailInput />
                </div>
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
    .ready {
        margin-bottom: 9.6rem;

        .row {
            display: flex;
            align-items: center;
            gap: 4rem;
        }

        &__lead {
            h2 {
                margin-bottom: 0 !important;
            }
        }

        &__cta {
            flex-grow: 1;
            margin-left: auto;

            .input {
                margin-left: auto;
            }
        }
    }

    @media screen and (max-width:991.98px) {
        .ready {
            .row {
                flex-direction: column;
            }

            &__cta {
                margin-left: inherit;
                width: 100%;
                margin: 0 auto;

                .input {
                    margin-left: inherit;
                }
            }
        }
    }
</style>