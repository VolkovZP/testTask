import { ACTIONS_TYPES } from "../actions/actionTypes";


const initialState = {
    values: {
        count: {}
    },
}



function cardReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS_TYPES.ADD_TO_CARD: {
            const id = action.payload.id;
            if (!state.values[id]) {
                state.values[action.payload.id] = {
                    id: action.payload.id,
                    title: action.payload.title,
                    cost: action.payload.cost,
                    counter: state.values.count[id] = 1,


                }
            } else {
                state.values[action.payload.id] = {
                    id: action.payload.id,
                    title: action.payload.title,
                    cost: action.payload.cost,
                    counter: state.values.count[id] += 1,
                }
            }
            return { ...state }
        }
        default: {
            return state;
        }
    }
}

export default cardReducer;
