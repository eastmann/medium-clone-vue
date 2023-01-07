import Vue from 'vue'
import Vuex from 'vuex'

import auth from '@/store/modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},

    actions: {},

    mutations: {},

    getters: {},

    modules: {
        auth
    }
})

export default store