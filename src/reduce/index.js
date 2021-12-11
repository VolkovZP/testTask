import { combineReducers } from "redux";
import goodsReducer from './goodsReducer'
import cardReducer from './cardReducer'

const rootReducer = combineReducers({
    goods: goodsReducer,
    card: cardReducer
})

export default rootReducer