import { todoActionTypes } from "./types"

const initialState = {
    movies: {},
    pages: 1,
    search: ''

}

export const MoviesReducer = (state = initialState, action) => {

    switch (action.type) {
        case todoActionTypes.ADD_MOVIES:
            return {
                ...state,
                movies: action.payload.movies
            }
        case todoActionTypes.ADD_PAGES:
            return {
                ...state,
                pages: action.payload.pages
            }
        case todoActionTypes.ADD_SEARCH:
            return {
                ...state,
                search: action.payload.search
            }
        default:
            return state
    }
}