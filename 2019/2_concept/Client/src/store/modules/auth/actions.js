import api from "@/plugins/api";
import router from '@/router.js'
export const login = async ({ commit }, payload) => {
    const response = (await api().post(`auth/login`, payload)).data;
    if(response.success) {
        commit("LOGIN", response);
        router.push({name: 'products'})
    }
};

export const logout = async ({ commit }) => {
    commit("LOGOUT");
};

export const register = async ({ commit }, payload) => {
    const response = await api().post('auth/register', payload)
    console.log('REGISTER: ', response)
    router.push({name: 'login'})
}

export default {
    login,
    logout,
    register
};
