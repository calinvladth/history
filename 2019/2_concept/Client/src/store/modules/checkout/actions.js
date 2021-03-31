import api from "@/plugins/api";
import router from '@/router.js'
import store from '@/store'

export const list = async ({commit}, data) => {
    commit('LIST', data)
}

export const remove = async ({commit}, data) => {
    commit('REMOVEPRODUCT', data)
}

export const send = async ({commit}, data) => {
    let user = store.state.auth.user.userId
    let address = store.state.auth.address
    const order = {products: data, total: '2222', address: address}
    await api().post(`/orders/create?userId=${user}`, order)
    router.push({name: 'products'})
    commit('CLEARCHECKOUT')
}


export default {
    list,
    remove,
    send
}
