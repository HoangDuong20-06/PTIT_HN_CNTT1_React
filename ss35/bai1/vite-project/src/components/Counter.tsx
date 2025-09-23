// src/components/Counter.tsx
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { increase, decrease, reset } from "../store/Couterslice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())} style={{ margin: "0 10px" }}>
        Decrease
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}