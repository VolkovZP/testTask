import { ACTIONS_TYPES } from "../actions/actionTypes";


const initialState = {
    values: {
        // count: {}
    },
}

let count = {};

function cardReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS_TYPES.ADD_TO_CARD: {
            const { id } = action.payload;
            if (!state.values[id]) {
                state.values[id] = {
                    ...action.payload,
                    counter: count[id] = 1
                }
            } else {
                state.values[id] = {
                    ...action.payload,
                    counter: count[id] += 1
                }
            }
            return { ...state }
        }
        case ACTIONS_TYPES.REMOVE_FROM_CART: {
            const { id } = action
            delete state.values[id]
            return { ...state }
        }
        default: {
            return state;
        }
    }
}

export default cardReducer;
