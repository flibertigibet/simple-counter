import { combineReducers } from 'redux';

import { INCREMENT, DECREMENT, ADDCOUNTER } from './counterActions';

const initialCountersState = {
  counters: [
    {
      ID: 0,
      count: 0
    }
  ],
};

const getId = (state) => {
  return state.counters.reduce((maxId, counterItem) => {
    return Math.max(counterItem.ID, maxId);
  }, -1) + 1;
};

// const counter = (state=0,action) => {
//   switch(action.type) {
//     case INCREMENT:
//       return state + 1;
//     case DECREMENT:
//       return state - 1;
//     default:
//       return state;
//   }
// }

function counters(state=initialCountersState,action) {
  switch(action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        todos: state.counters.map((counterItem) => {
          return counterItem.ID === action.ID ? Object.assign({}, counterItem, { count : counterItem.count + 1 }) : counterItem;
        }),
      });
    case DECREMENT:
      return Object.assign({}, state, {
        todos: state.counters.map((counterItem) => {
          return counterItem.ID === action.ID ? Object.assign({}, counterItem, { count : counterItem.count - 1 }) : counterItem;
        }),
      });
    case ADDCOUNTER:
      return Object.assign({}, state, {
        counters: [...state.counters, {
          count: 0,
          id: gedId(state)
        }],
      });
    default:
      return state;
  }
}

function timepass(state=0,action) {
  return state;
}

// export default counters;

export default combineReducers({counters, timepass});
