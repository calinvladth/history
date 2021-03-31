import api from "@/plugins/api";
import store from '@/store'
import router from '@/router.js'

export const list = async ({commit}) => {
    const data = (await api().get('/products/list')).data
    commit('LIST', data)
}

export const listById = async ({commit}) => {
    const data = (await api().get(`/products/${router.currentRoute.params.productId}`)).data
    commit('LISTBYID', data)
}

export const update = async ({commit}, data) => {
    if(data.formData) {
        await api().post(`/products/images?productId=${router.currentRoute.params.productId}`,  data.formData)
    }
    await api().put(`/products/update/${router.currentRoute.params.productId}?userId=${store.state.auth.user.userId}`, data.data)
    store.dispatch('products/listById')
}

export const deleteImage = async ({commit}, data) => {
    await api().delete(`products/images?imageId=${data.imageId}&filePath=${data.image}`)
    store.dispatch('products/listById')
}

export const createSpec = async ({commit}, data) => {
    const specs = {text: data}
    console.log('spec', specs)
    await api().post(`products/specs?productId=${router.currentRoute.params.productId}`, specs)
}


export default {
    list,
    listById,
    update,
    deleteImage,
    createSpec
}
