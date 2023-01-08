import axios from '@/api/axios'

// https://conduit.productionready.io/api/users
//
// credentials = {
//     "username": "maxim",
//     "email": "teast@com",
//     "password": "123"
// }

const register = (credentials) => {
    return axios.post('/users', { user: credentials })
}

// export all methods
export default {
    register
}