export const updateWishlist = (data) => {
  return {
    type: "UPDATE_WISHLIST",
    payload: data,
  };
};

export const removeItem = (data) => {
  return {
    type: "REMOVE_ITEM",
    payload: data,
  };
};

export const setCounter = (data) => {
  return {
    type: "SET_COUNTER",
    payload: data,
  };
};
