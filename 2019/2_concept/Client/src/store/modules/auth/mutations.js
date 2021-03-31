import Vue from "vue";
import { CHECK, REGISTER, LOGIN, LOGOUT } from "./mutation-types";

export default {
    [LOGIN](state, response) {
        state.user = response.data
        state.address = response.address
        state.token = response.token
        state.authenticated = true
    },
    [LOGOUT](state) {
        state.user = null;
        state.token = null;
        state.authenticated = false;
        console.log("LOGGED OUT");
    }
};
