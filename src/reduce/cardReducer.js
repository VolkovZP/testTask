import { ACTIONS_TYPES } from "../actions/actionTypes";
const count = {};

const initialState = {
    values: {},
}


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
        case ACTIONS_TYPES.DECREMENT_FROM_AMOUNT: {
            const { values } = state
            const { id } = action
            if (values[id]["counter"] <= 1) {
                delete values[id]
                return { ...state }
            }
            values[id]["counter"]--
            return { ...state }
        }
        default: {
            return state;
        }
    }
}

export default cardReducer;
