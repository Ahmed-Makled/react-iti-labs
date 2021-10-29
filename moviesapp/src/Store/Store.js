import { createStore } from "redux";
import wishlistReducer from "./Reducer";

//redux dev tool
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(wishlistReducer, devTools);

export default store;
