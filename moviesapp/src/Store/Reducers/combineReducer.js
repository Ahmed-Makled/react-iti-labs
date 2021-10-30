import { combineReducers } from "redux";
import languageReducer from "./languageReducer";
import moviesReducer from "./MoviesReducer";
import wishlistReducer from "./WishlistReducer";

export default combineReducers({
    language: languageReducer,
    wishlist: wishlistReducer,
    movies: moviesReducer

})