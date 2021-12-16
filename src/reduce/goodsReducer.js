import goodsArr from '../data';

const initialState = { goods: goodsArr };

function goodsReducer (state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export default goodsReducer;
