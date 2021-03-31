<template>
    <div>
        <b-row align-h="center">
            <b-col cols="6">
                <b-form-group
                        id="fieldset-1"
                        label="Login"
                        label-for="input-1"
                >
                    <b-form-input v-model="form.email" placeholder="Email" class="mt-5 mb-3"></b-form-input>
                    <b-form-input v-model="form.pass" placeholder="Password" type="password"></b-form-input>

                    <b-button size="md" block variant="outline-secondary" class="float-right mt-3" @click="login(form)">
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
                    email: null,
                    pass: null
                }
            }
        },
        methods: {
            login(data) {
                this.$store.dispatch('auth/login', data)
            }
        }
    }
</script>