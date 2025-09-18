import { createStore } from "redux";
import CountReducer from "./Count";

const store = createStore(CountReducer);
export type RootState = ReturnType<typeof store.getState>;
export default store;