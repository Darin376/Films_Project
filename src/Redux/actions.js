import { todoActionTypes } from "./types"

export const addedMovies = (data) => ({
    type: todoActionTypes.ADD_MOVIES,
    payload: {
        movies: data
    }
})

export const addPages = (data) => ({
    type: todoActionTypes.ADD_PAGES,
    payload: {
        pages: data
    }
})