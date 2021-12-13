
import { ACTIONS_TYPES } from "../actions/actionTypes";

const initialState = {
    value: {}
}


function testReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS_TYPES.TEST: {
            state.value[action.id.id] = {
                id: action.id.id,
                boo: action.id.s
            }
        }
        default: {
            return state;
        }
    }
}

export default testReducer;