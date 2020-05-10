import AllUsers from './Data/users.json'

let userLogin = (payload) => {
    return new Promise(resolve => {
        let wait = setTimeout(() => {
            clearTimeout(wait)
            let users = AllUsers.users
            let found = users.find(element => {
                return element.email === payload.email && element.password === payload.password
            })
            found ? resolve({
                status: 200,
                message: "User Found",
                content: found
            }) : resolve({
                status: 400,
                message: "Not found"
            })
        }, 2000);
    })
}

export default {
    userLogin,
}