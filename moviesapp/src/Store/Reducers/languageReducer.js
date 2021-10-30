import * as types from "../Types"

const INITIAL_STATE = {
    lang: "en",
};

export default function languageReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.SET_LANGUAGE:
            return {
                ...state,
                lang: action.payload,
            };
        default:
            return state;
    }
}

  // Redux thunk , context
