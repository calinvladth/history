const local_api = 'http://localhost:8000/api'
const staging_api = 'https://staging.thegoodworld.live/api'
const production_api = 'https://thegoodworld.live/api'


const setApi = () => {
    let api
    if (process.env.REACT_APP_ENV === 'staging') {
        api = staging_api
    } else if (process.env.NODE_ENV === 'production') {
        api = production_api
    } else {
        api = local_api
    }
    return api
}

export const api = setApi()
export const my_coffee = 'https://www.buymeacoffee.com/thegoodworld'