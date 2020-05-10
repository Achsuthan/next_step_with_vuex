import Vue from 'vue'
import Vuex from 'vuex'
import User from './module/user'
import Movies from './module/movies'

Vue.use(Vuex)

const store = new Vuex.Store({
    namespaced: true,
    modules:{
        user : User,
        movies: Movies,
    }
})

export default store