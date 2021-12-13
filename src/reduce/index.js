import { combineReducers } from "redux";
import goodsReducer from './goodsReducer'
import cardReducer from './cardReducer'
import testReducer from "./testReducer";

const rootReducer = combineReducers({
    goods: goodsReducer,
    card: cardReducer,
    test: testReducer
})

export default rootReducer