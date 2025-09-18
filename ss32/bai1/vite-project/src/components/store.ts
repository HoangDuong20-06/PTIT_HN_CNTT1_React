import { createStore } from "redux";
interface UserState {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}
const SET_USER = "SET_USER";
interface SetUserAction {
  type: typeof SET_USER;
  payload: UserState;
}
type UserAction = SetUserAction;
const initialState: UserState = {
  id: 1,
  userName: "Nguyễn Văn Nam",
  gender: "Nam",
  dateBirth: "20/03/2023",
  address: "Thanh Xuân, Hà Nội"
};
function userReducer(
  state: UserState = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case SET_USER:
      return { ...action.payload };
    default:
      return state;
  }
}
export const store = createStore(userReducer);
export const setUser = (user: UserState): SetUserAction => ({
  type: SET_USER,
  payload: user
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;