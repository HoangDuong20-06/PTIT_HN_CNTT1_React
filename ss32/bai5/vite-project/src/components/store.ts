import { createStore } from "redux";
interface CompanyState {
  name: string;
}
const CHANGE_COMPANY = "CHANGE_COMPANY";
export const changeCompany = () => ({
  type: CHANGE_COMPANY,
});
const initialState: CompanyState = {
  name: "Rikkei Academy",
};
const companyReducer = (
  state: CompanyState = initialState,
  action: { type: string }
): CompanyState => {
  switch (action.type) {
    case CHANGE_COMPANY:
      return {
        ...state,
        name: state.name === "Rikkei Academy" ? "RikkeiSoft" : "Rikkei Academy",
      };
    default:
      return state;
  }
};
export const store = createStore(companyReducer);
export type RootState = ReturnType<typeof store.getState>;