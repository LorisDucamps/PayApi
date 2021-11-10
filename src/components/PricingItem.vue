<template>
    <div class="pricing__item">
        <h3>{{content.name}}</h3>
        <p>{{content.description}}</p>
        <h1 class="h1--small">{{content.price}}</h1>
        <ul>
            <li :class="[content.content.transactions.enabled ? 'active' : '']">{{content.content.transactions.name}}
            </li>
            <li :class="[content.content.auth.enabled ? 'active' : '']">{{content.content.auth.name}}</li>
            <li :class="[content.content.identity.enabled ? 'active' : '']">{{content.content.identity.name}}</li>
            <li :class="[content.content.investments.enabled ? 'active' : '']">{{content.content.investments.name}}</li>
            <li :class="[content.content.assets.enabled ? 'active' : '']">{{content.content.assets.name}}</li>
            <li :class="[content.content.liabilities.enabled ? 'active' : '']">{{content.content.liabilities.name}}</li>
            <li :class="[content.content.income.enabled ? 'active' : '']">{{content.content.income.name}}</li>
        </ul>
        <BaseButton type="button__secondary-dark">{{content.button}}</BaseButton>
    </div>
</template>

<script>
    export default {
        props: ['content'],
    }
</script>

<style lang="scss" scoped>
    .pricing__item {

        h3 {
            color: var(--primary-dark-pink);
            margin-bottom: 1.6rem;
        }

        p {
            margin: 1.6rem 0 0.8rem 0;
        }

        h1 {
            line-height: 7.2rem;
            margin-bottom: 2.4rem;
        }

        ul {
            position: relative;
            padding: 2.4rem 0;
            margin-bottom: 2.4rem;
            border-top: 0.1rem solid var(--secondary-san-juan-blue-25);
            border-bottom: 0.1rem solid var(--secondary-san-juan-blue-25);

            li {
                position: relative;
                padding-left: 3.6rem;
                font-size: 1.6rem;
                line-height: 2.8rem;
                opacity: 0.5;
                color: var(--secondary-san-juan-blue);

                &.active {
                    opacity: 1;

                    &::before {
                        content: '';
                        display: block;
                        position: absolute;
                        top: 50%;
                        left: 0;
                        bottom: 0;
                        transform: translateY(-50%);
                        height: 1.2rem;
                        width: 1.4rem;
                        background-image: url('../assets/images/pricing/check.svg');
                        background-repeat: no-repeat;
                        background-position: center center;
                        background-size: contain;
                    }
                }

                &+li {
                    margin-top: 0.8rem;
                }
            }
        }


    }
</style>