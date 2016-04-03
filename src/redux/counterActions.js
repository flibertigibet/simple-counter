export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADDCOUNTER = 'ADDCOUNTER';

export function increment(id) {
  return {
    type: INCREMENT,
    ID: id,
  };
}

export function decrement(id) {
  return {
    type: DECREMENT,
    ID: id,
  };
}

export function addCounter() {
  return {
    type: ADDCOUNTER,
  };
}
