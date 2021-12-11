import { ACTIONS_TYPES } from "../actions/actionTypes";
import goodsArr from '../data'

const initialState = { goods: goodsArr }



function goodsReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS_TYPES.SHOW_GOODS: {
            return { ...state }
        }
        default: {
            return state;
        }
    }
}

export default goodsReducer;