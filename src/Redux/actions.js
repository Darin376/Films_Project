import { todoActionTypes } from "./types";
import axios from "axios";

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

export function searchMoviess(value, pages) {
    return dispatch => {
        axios
            .get(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${value}&page=${pages}`)
            .then(res => {
                dispatch(addedMovies(res.data))
            })
        dispatch({
            type: todoActionTypes.ADD_SEARCH,
            payload: {
                search: value
            }
        })
    }
}