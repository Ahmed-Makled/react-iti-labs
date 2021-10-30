const INITIAL_STATE = {
  movies: []

};

export default function wishlistReducer(state = INITIAL_STATE, action) {
  // let data = state.movies = [];
  // if (data.length === 0)
  //   data = [action.payload]
  // else
  //   data.push(action.payload)


  switch (action.type) {
    case "UPDATE_WISHLIST":
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        movies: removeItem(state.movies, action)
      };
    case "CLEAR_ITEMS": {
      return {
        movies: []
      };
    }
    case "SET_COUNTER": {
      return {
        movies: action.payload
      };
    }
    default:
      return state;
  }
}

const removeItem = (array, action) => {
  return array.filter((item, index) => item.id !== action.payload.id);
};
