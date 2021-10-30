import * as types from "../Types"

export const changeLanguage = (data) => {
    return {
        type: types.SET_LANGUAGE,
        payload: data,
    };
};

