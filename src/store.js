import { createStore } from 'redux';

const initialState = {
  //定义你的初始state
  index: 1, // tabBarIndex
  videoReference:1
};

const rootReducer = (state = initialState, action) => {
  //定义你的reducer逻辑
  switch (action.type) {
    case 'CHANGE':
      return { ...state, index: action.index };
    default:
      return state;
  }
};

const store = createStore(rootReducer);
export default store;