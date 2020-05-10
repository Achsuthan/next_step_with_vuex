let Movies = {
    // namespaced: true,
    state: {
        movies: []
    },
    mutations: {
        SET_MOVIES(state, payload) {
            console.log("set movies")
            state.movies = payload
        }
    },
    actions: {
        setMovies({ commit }, payload) {
            commit("SET_MOVIES", payload)
        }
    },
    getters: {
    }
}
export default Movies
