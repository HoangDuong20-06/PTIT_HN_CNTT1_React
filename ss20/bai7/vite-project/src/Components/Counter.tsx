import React, { useReducer } from "react";
import "./Counter.css";

type State = {
  count: number;
};

type Action =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" };

const initialState: State = {
  count: 0,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter-container">
      <h1>Số đếm: {state.count}</h1>
      <div className="button-group">
        <button onClick={() => dispatch({ type: "INCREMENT" })}>Tăng</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Giảm</button>
      </div>
    </div>
  );
};

export default Counter;
