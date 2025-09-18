import { createStore } from "redux";
export interface User {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}
interface UserState {
  users: User[];
}
const ADD_USER = "ADD_USER";
const UPDATE_USER = "UPDATE_USER";
const DELETE_USER = "DELETE_USER";
interface AddUserAction {
  type: typeof ADD_USER;
  payload: User;
}

interface UpdateUserAction {
  type: typeof UPDATE_USER;
  payload: User;
}

interface DeleteUserAction {
  type: typeof DELETE_USER;
  payload: number;
}

type UserAction = AddUserAction | UpdateUserAction | DeleteUserAction;
const initialState: UserState = {
  users: [
    {
      id: 1,
      userName: "Nguyễn Văn A",
      gender: "Nam",
      dateBirth: "20/11/2023",
      address: "Thanh Xuân, Hà Nội"
    },
    {
      id: 2,
      userName: "Nguyễn Thị B",
      gender: "Nữ",
      dateBirth: "20/11/2023",
      address: "Cầu Giấy, Hà Nội"
    }
  ]
};
function userReducer(
  state: UserState = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.id ? action.payload : u
        )
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload)
      };
    default:
      return state;
  }
}
export const store = createStore(userReducer);
export const addUser = (user: User): AddUserAction => ({
  type: ADD_USER,
  payload: user
});

export const updateUser = (user: User): UpdateUserAction => ({
  type: UPDATE_USER,
  payload: user
});
export const deleteUser = (id: number): DeleteUserAction => ({
  type: DELETE_USER,
  payload: id
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;