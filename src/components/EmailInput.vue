<template>
    <div class="input">
        <input type="text" class="input__email" placeholder="Enter email address">
        <BaseButton type='button__primary'>Schedule a Demo</BaseButton>
    </div>

</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    .input {
        position: relative;
        max-width: 44.5rem;

        &__email {
            height: 4.8rem;
            padding: 0 20rem 0 2.7rem;
            width: 100%;
            font-family: 'Public Sans', sans-serif;
            font-weight: 700;
            border: 0;
            border-radius: 2.4rem;
            outline: none;
            background-color: var(--primary-link-water-white);

            &::-webkit-input-placeholder {
                color: var(--secondary-san-juan-blue-50);
            }
        }

        button {
            position: absolute;
            top: 0;
            right: 0;
        }
    }

    @media screen and (max-width:575.98px) {
        .input {
            max-width: 100%;

            &__email {
                margin-bottom: 1.6rem;
                box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
            }

            .button {
                position: inherit;
                width: 100%;
            }
        }
    }
</style>