import MovieService from '../../Services/movies.service'
let Movies = {
    namespaced: true,
    state: {
        movies: []
    },
    mutations: {
        GET_ALL_MOVIES(state) {
            MovieService.getAllMovies().then(res => {
                console.log(res)
                if (res.status === 200) {
                    state.movies = res.data
                    console.log("state", state.movies)
                }
                else {
                    state.movies = []
                }
            })
        }
    },
    actions: {
        getAllMoves({ commit }) {
            commit("GET_ALL_MOVIES")
        },
    },
    getters: {
    }
}
export default Movies
