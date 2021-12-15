import { ACTIONS_TYPES } from "../actions/actionTypes";
const count = {};

const initialState = {
    values: {},
}


function cardReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS_TYPES.ADD_TO_CARD: {
            const { id } = action.payload;
            state.values[id] = {
                ...action.payload,
                counter: count[id] = 1,
                boo: true
            }
            return { ...state }
        }
        case ACTIONS_TYPES.INCREMENT: {
            const { value, id } = action
            state.values[id].counter = +value
            if (value > 100) state.values[id].counter = 1
            return { ...state }
        }
        case ACTIONS_TYPES.REMOVE_FROM_CART: {
            const { id } = action
            delete state.values[id]
            return { ...state, boo: false }
        }
        default: {
            return state;
        }
    }
}

export default cardReducer;
