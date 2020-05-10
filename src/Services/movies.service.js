import AllMovies from './Data/movies.json'
let getAllMovies = () => {
    return new Promise((resolve) => {
        let wait = setTimeout(() => {
            clearTimeout(wait)
            resolve({
                status: 200,
                message: 'success',
                data: AllMovies.movies
            })
        }, 2000)
    })
}

export default {
    getAllMovies
}