<template>
    <VeeForm class="input" :validation-schema="schema" @submit="onSubmit" @invalid-submit="onInvalidSubmit"
        autocomplete="off" :class="[reg_error ? 'error' : '']">
        <VeeField name="email" type="text" class="input__email" placeholder="Enter email address" />
        <BaseButton type='button__primary' :disabled="reg_in_submission">Schedule a Demo</BaseButton>
        <p v-if="reg_show_alert" class="message message__success">{{reg_alert_msg}}</p>
        <ErrorMessage class="message message__error" name="email" as="p" />
    </VeeForm>


</template>

<script>
    export default {
        data() {
            return {
                schema: {
                    email: 'required|min:3|max:100|email'
                },
                reg_in_submission: false,
                reg_show_alert: false,
                reg_alert_msg: '',
                reg_error: false,
            }
        },
        methods: {
            onInvalidSubmit({
                values,
                errors
            }) {
                console.log(values);
                console.log(errors);

                if (errors) {
                    this.reg_error = true;
                }
            },
            onSubmit(event) {

                this.reg_show_alert = true;
                this.reg_in_submission = true;
                this.reg_error = false;
                this.reg_alert_msg = 'Your email has been taken into account !';
                console.log(event)
            }
        }

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
            font-size: 1.5rem;
            font-family: 'Public Sans', sans-serif;
            font-weight: 700;
            border: 0;
            border-radius: 2.4rem;
            outline: none;
            color: var(--secondary-san-juan-blue);
            background-color: var(--primary-link-water-white) !important;
            box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);

            &::-webkit-input-placeholder {
                color: var(--secondary-san-juan-blue-50);
            }
        }

        .message {
            padding-left: 2.7rem;
            margin: 0.8rem 0 0 0;

            &__error {
                color: var(--error);
            }
        }

        button {
            position: absolute;
            top: 0;
            right: 0;
        }
    }

    @media screen and (max-width:991.98px) {
        .input {
            margin: 0 auto;
        }
    }

    @media screen and (max-width:575.98px) {
        .input {
            max-width: 100%;

            &__email {
                margin-bottom: 1.6rem;
                padding: 0 2.7rem 0 2.7rem;
                box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
            }

            .button {
                position: inherit;
                width: 100%;
            }
        }
    }
</style>