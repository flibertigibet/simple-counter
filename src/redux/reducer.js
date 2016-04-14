import { combineReducers } from 'redux';

import { INCREMENT, DECREMENT, ADDCOUNTER } from './counterActions';

const initialCountersState = {
  counters: [
    {
      ID: 0,
      count: 0,
    }
  ],
};

const getId = (state) => {
  return state.counters.reduce((maxId, counterItem) => {
    return Math.max(counterItem.ID, maxId);
  }, -1) + 1;
};

function counters(state=initialCountersState,action) {
  switch(action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        counters: state.counters.map((counterItem) => {
          return counterItem.ID === action.ID ? Object.assign({}, counterItem, { count : counterItem.count + 1 }) : counterItem;
        }),
      });
    case DECREMENT:
      return Object.assign({}, state, {
        counters: state.counters.map((counterItem) => {
          return counterItem.ID === action.ID ? Object.assign({}, counterItem, { count : counterItem.count - 1 }) : counterItem;
        }),
      });
    case ADDCOUNTER:
      console.log(state);
      return Object.assign({}, state, {
        counters: [...state.counters, {
          count: 0,
          ID: getId(state)
        }],
      });
    default:
      return state;
  }
}

// export default counters;

export default combineReducers({counters});
