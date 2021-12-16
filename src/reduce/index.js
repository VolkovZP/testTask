import { combineReducers } from 'redux';
import goodsReducer from './goodsReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  goods: goodsReducer,
  cart: cartReducer,
});

export default rootReducer;
