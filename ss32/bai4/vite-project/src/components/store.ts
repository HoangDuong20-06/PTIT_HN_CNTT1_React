import { createStore } from "redux";

interface RandomState {
  numbers: number[];
}
const ADD_RANDOM_NUMBER = "ADD_RANDOM_NUMBER";
interface AddRandomNumberAction {
  type: typeof ADD_RANDOM_NUMBER;
  payload: number;
}
type RandomAction = AddRandomNumberAction;
const initialState: RandomState = {
  numbers: []
};
function randomReducer(
  state: RandomState = initialState,
  action: RandomAction
): RandomState {
  switch (action.type) {
    case ADD_RANDOM_NUMBER:
      return { ...state, numbers: [...state.numbers, action.payload] };
    default:
      return state;
  }
}
export const store = createStore(randomReducer);
export const addRandomNumber = (num: number): AddRandomNumberAction => ({
  type: ADD_RANDOM_NUMBER,
  payload: num
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
