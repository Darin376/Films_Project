import { combineReducers } from "redux";
import { MoviesReducer } from "./moviesReduser";

export const rootReducer = combineReducers({
    MoviesReducer,
})