import {CLEARCHECKOUT, LIST, REMOVEPRODUCT} from './mutation-types'

export default {
    [LIST](state, response) {
        let exists = false;
        state.list.forEach(o => {
            if(o.productId) {
                if(o.productId === response.productId) {
                    exists = true
                }
            }
        })
        if(!exists) {
            // state.list.push(response)
            state.list.splice(0, 0, response)
        }
    },
    [REMOVEPRODUCT](state, response) {
        const checkoutProductList = state.list
        const removeProductFromCheckout = checkoutProductList.map((item) => { return item.productId }).indexOf(response.productId)
        state.list.splice(removeProductFromCheckout, 1)
    },
    [CLEARCHECKOUT](state, response) {
        state.list = []
    }

}

