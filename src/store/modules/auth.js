import authApi from '@/api/auth'

// console.log(authApi)

const state = {
    isSubmitting: false
}

const actions = {
    register(context, credentials) {
        return new Promise((resolve) => {
            context.commit('registerStart')
            authApi
                .register(credentials) // axios POST request to API
                .then(response => {
                    console.log('response', response)

                    context.commit('registerSuccess', response.data.user)
                    resolve(response.data.user)
                })
                .catch(error => {
                    console.log('response error', error)

                    context.commit('registerFailure', error.response.data.errors)
                })
        })

        // setTimeout(() => {
        //     context.commit('registerStart')
        // }, 1000)
    }
}

const mutations = {
    registerStart(state) {
        state.isSubmitting = true
    },

    registerSuccess() {
        state.isSubmitting = false
    },

    registerFailure() {
        state.isSubmitting = false
    },
}

export default {
    state,
    actions,
    mutations
}