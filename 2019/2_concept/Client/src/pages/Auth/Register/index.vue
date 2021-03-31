<template>
    <div>
        <b-row align-h="center">
            <b-col cols="6">
                <b-form-group
                        label="Register"
                        label-for="input-1"
                >
                    <b-form-input v-model="form.fname" placeholder="First Name" class="mt-3 mb-3"></b-form-input>
                    <b-form-input v-model="form.lname" placeholder="Last Name" class="mb-3"></b-form-input>
                    <b-form-input v-model="form.email" placeholder="Email" class="mb-3"></b-form-input>
                    <b-form-input v-model="form.phone" placeholder="Phone" class="mb-3" type="tel"></b-form-input>
                    <b-form-input v-model="form.pass" placeholder="Password" type="password"></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>

        <b-row align-h="center" class="mt-5">
            <b-col cols="6">
                <b-form-group
                        label="Address"
                        label-for="input-1"
                >
                    <b-form-input v-model="form.address1" placeholder="Address 1" class="mt-3 mb-3"></b-form-input>
                    <b-form-input v-model="form.address2" placeholder="Address 2" class="mb-3"></b-form-input>
                    <b-form-input v-model="form.city" placeholder="City" class="mb-3"></b-form-input>
                    <b-button size="md" block variant="outline-secondary" class="float-right mt-3" @click="register(form, formAddress)">
                        Submit
                    </b-button>
                </b-form-group>
            </b-col>
        </b-row>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    fname: null,
                    lname: null,
                    email: null,
                    phone: null,
                    password: null,
                    address1: null,
                    address2: null,
                    city: null
                }
            }
        },
        methods: {
            register(data) {
                this.$store.dispatch('auth/register', data)
            }
        }
    }
</script>