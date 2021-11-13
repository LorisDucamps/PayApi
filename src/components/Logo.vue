<template>
    <div class="logo">
        <router-link to="/">
            <img :src="imageSource" alt="logo PayApi">
        </router-link>
    </div>
</template>

<script>
    export default {
        props: {
            imageSource: {
                type: String,
                required: false,
                default: ''
            }
        }

    }
</script>

<style lang="scss" scoped>
    .logo {
        flex-shrink: 0;
        z-index:3;
    }
</style>