<template>
    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="secondary">
                <b-navbar-brand>NavBar</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-navbar-nav right>
                            <b-nav-item :to="{name: 'products'}">Products</b-nav-item>
                            <b-nav-item :to="{name: 'checkout'}">Checkout</b-nav-item>
                        </b-navbar-nav>
                        <b-nav-item-dropdown right>
                            <!-- Using 'button-content' slot -->
                            <template slot="button-content">
                                <em v-show="authenticated">{{user ? user.fname : ''}} {{user ? user.lname : ''}}</em>
                                <em v-show="!authenticated">Auth</em>
                            </template>
                            <b-dropdown-item v-show="authenticated" href="#">Profile</b-dropdown-item>
                            <b-dropdown-item v-show="!authenticated" :to="{name: 'login'}">Login</b-dropdown-item>
                            <b-dropdown-item v-show="!authenticated" :to="{name: 'register'}">Register</b-dropdown-item>

                            <b-dropdown-item v-show="authenticated" @click="logout">LogOut</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            logout() {
                alert('OUT')
                this.$store.dispatch('auth/logout')
            }
        },
        computed: {
            user() {
                return this.$store.state.auth.user
            },
            authenticated() {
                return this.$store.state.auth.authenticated
            }
        }
    }
</script>
