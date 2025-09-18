import React from "react";
import { Provider } from "react-redux";
import { store } from "./components/store";
import ChangeState from "./components/changeState";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ChangeState />
    </Provider>
  );
};

export default App;