import * as types from "../Types";
const INITIAL_STATE = {
  movies: []

};
export default function wishlistReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.UPDATE_WISHLIST:
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };
    case types.REMOVE_ITEM:
      return {
        ...state,
        movies: removeItem(state.movies, action)
      };


    default:
      return state;
  }
}

const removeItem = (array, action) => {
  return array.filter((item, index) => item.id !== action.payload.id);
};
