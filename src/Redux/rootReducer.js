import { combineReducers } from "redux";
import { MoviesReducer } from "./moviesReduser";
import { userReducer } from "./user/userReduser";

export const rootReducer = combineReducers({
    MoviesReducer,
    userReducer
})