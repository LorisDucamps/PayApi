<template>
    <div class="feature">
        <div class="row">
            <picture class="feature__picture">
                <svg height="50" width="40">
                    <use
                        v-bind="{ 'xlink:href': require('../assets/images/features/sprite-features.svg') + content.idSprite }">
                    </use>
                </svg>
            </picture>
            <h5>{{content.title}}</h5>
            <p>{{content.description}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['content']

    }
</script>

<style lang="scss" scoped>
    .feature {
        .row {
            h5 {}

            p {}

        }

        &__picture {
            display:flex;
            justify-content: center;
            align-items:center;
            height:10.6rem;
            width:10.6rem;
            border-radius: 100%;
            background-color: var(--secondary-san-juan-blue);
        }
    }
</style>