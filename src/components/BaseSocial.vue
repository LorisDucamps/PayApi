<template>
    <div class="socials">
        <ul>
            <li>
                <BaseButton class='button__social'>
                    <svg class="icon">
                        <use v-bind="{ 'xlink:href': require('../assets/images/socials/sprite-socials.svg') + '#facebook' }">
                        </use>
                    </svg>
                </BaseButton>
            </li>
            <li>
                <BaseButton class='button__social'>
                    <svg class="icon">
                        <use v-bind="{ 'xlink:href': require('../assets/images/socials/sprite-socials.svg') + '#twitter' }">
                        </use>
                    </svg>
                </BaseButton>
            </li>
            <li>
                <BaseButton class='button__social'>
                    <svg class="icon">
                        <use v-bind="{ 'xlink:href': require('../assets/images/socials/sprite-socials.svg') + '#linkedin' }">
                        </use>
                    </svg>
                </BaseButton>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .socials {
        margin-left: auto;
        margin-right: -1.2rem;
        flex-shrink: 0;


        ul {
            display: flex;
            align-items: center;

            svg {
                height: 100%;
                width: 2.4rem;
            }
        }
    }

    @media screen and (max-width:768px) {
        .socials {
            margin-left: initial;
        }
    }
</style>