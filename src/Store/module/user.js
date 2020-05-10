let User = {
    // namespaced: true,
    state: {
        user: null
    },
    mutations: {
        SET_USER(state, payload) {
            state.user = payload
        }
    },
    actions: {
        setUser({ commit }, payload) {
            commit("SET_USER", payload)
        },
        setMovies({ commit }, payload) {
            commit("SET_USER", payload)
        }
    },
    getters: {
    }
}
export default User