import { ACTIONS_TYPES } from "../actions/actionTypes";


const initialState = {
    value: {

    },
}

function cardReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS_TYPES.ADD_TO_CARD: {
            const id = action.payload;
            if (state.value[id] === undefined) state.value[id] = 0
            state.value[id]++
            return { ...state }
        }
        default: {
            return state;
        }
    }
}

export default cardReducer;
// return { ...state.value, v: 2 }