const INITIAL_STATE = {
  movies:[        ]

};
  
  export default function wishlistReducer(state = INITIAL_STATE, action) {
    let data = state.movies;
    if(data.length === 0)
     data=[action.payload]
      else
    data.push(action.payload)
    console.log(data)
    switch (action.type) {
      case "UPDATE_WISHLIST":
        return {
          ...state,
          movies: data,
        };
      default:
        return state;
    }
  }
  