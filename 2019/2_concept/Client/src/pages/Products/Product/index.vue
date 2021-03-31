<template>
    <div>
        <h1>{{product.name}}</h1>
        <p>From {{product.category}}</p>
        <p>Costs: {{product.price}} $</p>
        <b-row>
            <b-col v-for="image in images" :key="image.imageId">
                <b-img thumbnail fluid :src="'http://localhost:8000/' + image.image" alt="Image 1" style="height:150px;"></b-img>
                <b-button variant="danger" style="height: 150px;" @click="deleteImage(image)">Delete</b-button>
            </b-col>
        </b-row>
        <b-row>
            <b-col v-for="spec in specs" :key="spec.specId">
                <p style="white-space: pre;">{{spec.text}}</p>
                <b-button size="sm" variant="danger" @click="deleteSpec(spec)">Delete</b-button>
            </b-col>
        </b-row>
        <b-form-checkbox v-model="showUpdate">
            Update?
        </b-form-checkbox>
        <b-form-checkbox v-model="showCreateSpec">
            Create Specs?
        </b-form-checkbox>
        <b-row align-h="center" class="mt-5" v-show="showUpdate">
            <b-col cols="6">
                <p>Update {{product.name}}</p>
                <b-form-group
                >
                <b-form-input v-model="form.name" placeholder="Name" class="mt-3 mb-3" value="hhh"></b-form-input>
                <b-form-input v-model="form.category" placeholder="Category" class="mb-3"></b-form-input>
                <b-form-input v-model="form.price" placeholder="Price" class="mb-3"></b-form-input>
                <b-form-file v-model="form.img" class="mb-3"></b-form-file>
                <b-button size="md" block variant="outline-secondary" class="float-right mt-3" @click="update(form)">
                    Submit
                </b-button>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row align-h="center" class="mt-5" v-show="showCreateSpec">
            <b-col cols="6">
                <p>Create Specs</p>
                <b-form-textarea
                        id="textarea"
                        v-model="form.text"
                        placeholder="Enter something..."
                        rows="3"
                        max-rows="6"
                ></b-form-textarea>
                <b-button size="md" block variant="outline-secondary" class="float-right mt-3" @click="createSpec(form)">
                    Submit
                </b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: null,
                    category: null,
                    price: null,
                    img: null,
                    text: null
                },
                showUpdate: false,
                showCreateSpec: false
            }
        },
        methods: {
            createSpec(data) {
                this.$store.dispatch('products/createSpec', data.text)
            },
            deleteImage(data) {
                this.$store.dispatch('products/deleteImage', data)
            },
            update(data) {
                const formData = new FormData()
                formData.append('file', data.img);
                let allData
                if(data.img) {
                    allData = {formData, data}
                }
                else {
                    allData = {data}
                }
                this.$store.dispatch('products/update', allData)
                this.showUpdate = false
            }
        },
        watch: {
            product() {
                this.form.name = this.product.name
                this.form.category = this.product.category
                this.form.price = this.product.price
            }
        },
        computed: {
            product() {
                return this.$store.state.products.listById
            },
            images() {
                return this.$store.state.products.images
            },
            specs() {
                return this.$store.state.products.specs
            }
        },
        mounted() {
            this.$store.dispatch('products/listById')
        }
    }
</script>
