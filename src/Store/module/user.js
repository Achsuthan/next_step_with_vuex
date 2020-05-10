import UserService from '../../Services/user.service'
let User = {
    namespaced: true,
    state: {
        user: null
    },
    mutations: {
        LOGIN_USER(state, payload) {
            UserService.userLogin(payload).then(res => {
                if (res.status === 200) {
                    state.user = res.content
                }
                else {
                    state.user = null
                }
            })
        },
    },
    actions: {
        LoginUser({ commit }, payload) {
            commit("LOGIN_USER", payload)
        }
    },
    getters: {
    }
}
export default User