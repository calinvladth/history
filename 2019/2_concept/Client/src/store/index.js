import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

// Modules
import auth from "./modules/auth";
import products from "./modules/products";
import checkout from './modules/checkout'

Vue.use(Vuex);

export default new Vuex.Store({
    /*
     * Persisted State
     */
    plugins: [createPersistedState()],
    /**
     * Assign the modules to the store.
     */
    modules: {
        auth,
        products,
        checkout
    },
    strict: true
});