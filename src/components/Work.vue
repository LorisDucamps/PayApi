<template>
    <section class="work">
        <div class="container">
            <div class="work__inner">
                <div class="work__lead">
                    <h2>Who we work with</h2>
                    <p>Today, millions of people around the world have successfully connected their accounts to apps
                        they
                        love
                        using our API. We provide developers with the tools they need to create easy and accessible
                        experiences for
                        their users. </p>
                    <div class="actions">
                        <BaseButton link type="button__secondary-light button__link-button" to='/about'>About Us
                        </BaseButton>
                    </div>

                </div>
                <ul class="work__image">
                    <li>
                        <svg width="129" height="17">
                            <use
                                v-bind="{ 'xlink:href': require('../assets/images/company/sprite-company.svg') + '#tesla' }">
                            </use>
                        </svg>
                    </li>
                    <li>
                        <svg width="145" height="31">
                            <use
                                v-bind="{ 'xlink:href': require('../assets/images/company/sprite-company.svg') + '#microsoft' }">
                            </use>
                        </svg>
                    </li>
                    <li>
                        <svg width="140" height="27">
                            <use
                                v-bind="{ 'xlink:href': require('../assets/images/company/sprite-company.svg') + '#hp' }">
                            </use>
                        </svg>
                    </li>
                    <li>
                        <svg width="131" height="17">
                            <use
                                v-bind="{ 'xlink:href': require('../assets/images/company/sprite-company.svg') + '#oracle' }">
                            </use>
                        </svg>
                    </li>
                    <li>
                        <svg width="96" height="33">
                            <use
                                v-bind="{ 'xlink:href': require('../assets/images/company/sprite-company.svg') + '#google' }">
                            </use>
                        </svg>
                    </li>
                    <li>
                        <svg width="137" height="26">
                            <use
                                v-bind="{ 'xlink:href': require('../assets/images/company/sprite-company.svg') + '#nvidia' }">
                            </use>
                        </svg>
                    </li>
                </ul>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
    .work {
        position: relative;
        overflow: hidden;
        background-color: var(--secondary-mirage-blue);

        &__inner {
            position: relative;
            display: flex;
            align-items: center;
            gap: 3rem;
            padding: 10rem 0;

            &:before {
                content: '';
                position: absolute;
                left: -23.5rem;
                bottom: 5.1rem;
                height: 78rem;
                width: 78rem;
                border-radius: 100%;
                background-color: var(--secondary-san-juan-blue-15);
                z-index: 0;
            }
        }


        &__lead {
            max-width: 44.5rem;
            z-index: 1;

            h2 {
                color: var(--primary-link-water-white);
            }

            p {
                color: var(--primary-link-water-white-70);
                margin-bottom: 3.2rem;
            }
        }

        &__image {

            display: grid;
            grid-template-columns: repeat(3, minmax(auto, 16rem));
            align-items: center;
            justify-items: center;
            row-gap: 3.9rem;
            column-gap: 3rem;
            margin-left: auto;
            max-width: 53.6rem;
            z-index: 1;

            svg {
                fill: var(--white);
            }
        }
    }

    @media screen and (max-width:991.98px) {
        .work {
            &__inner {
                flex-direction: column;
                gap: 6.4rem;
                padding: 8.8rem 0;

                &:before {
                    content: '';
                    position: absolute;
                    left: calc(50% - 39rem);
                    right: calc(50% - 39rem);
                    top: -55rem;
                    height: 78rem;
                    width: 78rem;
                    border-radius: 100%;
                    background-color: var(--secondary-san-juan-blue-15);
                    z-index: 0;
                }
            }

            &__lead {
                order: 1;
                text-align: center;

                .button {
                    margin: 0 auto;
                }
            }

            &__image {
                order: 0;
                margin: 0 auto;
            }
        }
    }

    @media screen and (max-width:575.98px) {
        .work {
            &__inner {
                flex-direction: column;
                gap: 7rem;
                padding: 8rem 0;

                &:before {
                    content: '';
                    position: absolute;
                    left: calc(50% - 39rem);
                    right: calc(50% - 39rem);
                    top: -60rem;
                    height: 78rem;
                    width: 78rem;
                    border-radius: 100%;
                    background-color: var(--secondary-san-juan-blue-15);
                    z-index: 0;
                }
            }

            &__image {
                grid-template-columns: repeat(2, minmax(auto, 16rem));
            }
        }
    }
</style>