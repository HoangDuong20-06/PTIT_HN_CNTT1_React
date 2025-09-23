import { Provider } from "react-redux";
import { store } from "./store/store";
import DataView from "./components/viewMode";

export default function App() {
  return (
    <Provider store={store}>
      <DataView />
    </Provider>
  );
}