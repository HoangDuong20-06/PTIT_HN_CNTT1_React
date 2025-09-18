export interface CounterState {
  count: number;
}

interface IncreaseAction {
  type: "INCREMENT";
  payload: number;
}

interface DecreaseAction {
  type: "DECREASEMENT";
  payload: number;
}

type CounterAction = IncreaseAction | DecreaseAction;

const initialState: CounterState = { count: 0 };

const CountReducer = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREASEMENT":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

export default CountReducer;
