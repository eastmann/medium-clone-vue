const state = {
    isSubmitting: false
}

const actions = {
    register(context) {
        setTimeout(() => {
            context.commit('registerStart')
        }, 1000)
    }
}

const mutations = {
    registerStart(state) {
        state.isSubmitting = true
    },

    registerSuccess() {},

    registerFailure() {},
}

export default {
    state,
    actions,
    mutations
}