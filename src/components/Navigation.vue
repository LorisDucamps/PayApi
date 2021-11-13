<template>
    <nav>
        <ul>
            <li>
                <BaseButton link :class="type" to='/pricing'>Pricing</BaseButton>
            </li>
            <li>
                <BaseButton link :class="type" to='/about'>About</BaseButton>
            </li>
            <li>
                <BaseButton link :class="type" to='/contact'>Contact</BaseButton>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                required: false,
                default: ''
            }
        }

    }
</script>

<style lang="scss" scoped>
    nav {
        margin-left: 4.4rem;
        z-index: 3;

        ul {
            display: flex;
        }
    }
</style>