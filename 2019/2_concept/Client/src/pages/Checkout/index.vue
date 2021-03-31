<template>
    <div>
        <b-row align-h="center">
            <b-col cols="6">
                <h1>Checkout</h1>
                <ul>
                    <li v-for="(product, index) in checkout" :key="product.productId">
                        {{product.name}}
                        <ul>
                            <li>{{product.category}}</li>
                            <li>{{product.price}}</li>
                            <li>
                                <b-button size="sm" variant="danger" @click="remove(product)">Remove</b-button>
                            </li>
                        </ul>
                    </li>
                </ul>
                <b-button @click="sendOrder(checkout)" v-show="checkout.length > 0" block variant="outline-secondary" class="mt-3">
                    Send
                </b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        methods: {
            sendOrder(data) {
                this.$store.dispatch('checkout/send', data)
            },
            remove(data) {
                this.$store.dispatch('checkout/remove', data)
            }
        },
        computed: {
            checkout() {
                //ToDo: To list from last to first
                return this.$store.state.checkout.list
            }
        }
    }
</script>