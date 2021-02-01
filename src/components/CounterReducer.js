import React, { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
  CHANGE_COUNT: "change-count",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return 0;
    case ACTIONS.CHANGE_COUNT:
      return { count: state.count + action.payload.amount };
    default:
      return state.count;
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  function resetCount() {
    dispatch({ type: ACTIONS.RESET });
  }

  function changeCount() {
    dispatch({ type: ACTIONS.CHANGE_COUNT, payload: { amount: 5 } });
  }

  return (
    <>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={changeCount}>Add 5</button>
      <button onClick={resetCount}>Reset</button>
    </>
  );
}

export default CounterReducer;
