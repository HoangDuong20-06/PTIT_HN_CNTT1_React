import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./components/store";

function App() {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>+</button>
      <button onClick={() => dispatch({ type: "DECREASEMENT", payload: 1 })}>-</button>
    </>
  );
}

export default App;
