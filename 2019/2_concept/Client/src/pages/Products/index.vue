<template>
    <div>
        <h1>Products</h1>
        <ul v-for="(product, index) in products" :key="product.productId">
            <li>{{product.name}}
                <ul>
                    <li>{{product.category}}</li>
                    <li>{{product.price}} $</li>
                    <ul v-for="image in product.Images" :key="image.imageId">
                        <b-col>
                            <b-img thumbnail fluid :src="'http://localhost:8000/' + image.image" alt="Image 1" style="width:200px;"></b-img>
                        </b-col>
                    </ul>
                    <li class="my-2">
                        <b-button variant="primary" size="sm" @click="view(product.productId)">View</b-button>
                    </li>
                    <li>
                        <b-button variant="warning" size="sm" @click="order(product)">Order</b-button>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>


<script>
    export default {
        methods: {
            view(data) {
                this.$router.push({name: 'product', params: {productId: data}})
            },
            order(data) {
                this.$store.dispatch('checkout/list', data)
            }
        },
        computed: {
            products() {
                return this.$store.state.products.list ? this.$store.state.products.list : []
            }
        },
        mounted() {
            this.$store.dispatch('products/list')
        }
    }
</script>

