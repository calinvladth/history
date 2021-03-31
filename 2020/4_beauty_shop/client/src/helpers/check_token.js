export const CheckToken = (token) => {
    if (token && token !== 'null') {
        return token
    } else {
        return false
    }
}