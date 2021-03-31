import {LIST, LISTBYID} from './mutation-types'

export default {
    [LIST](state, response) {
        state.list = response.data
    },
    [LISTBYID](state, response) {
        state.listById = response.data
        state.images = response.data.Images
        state.specs = response.data.Specs
    }
}

