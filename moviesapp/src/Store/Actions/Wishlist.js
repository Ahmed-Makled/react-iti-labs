import * as types from "../Types";

export const updateWishlist = (data) => {
  return {
    type: types.UPDATE_WISHLIST,
    payload: data,
  };
};

export const removeItemWishlist = (data) => {
  return {
    type: types.REMOVE_ITEM,
    payload: data,
  };
};


