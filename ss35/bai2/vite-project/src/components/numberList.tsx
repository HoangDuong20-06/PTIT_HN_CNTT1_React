import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { generateRandomNumbers } from "../store/numberSlice";

export default function NumberList() {
  const numbers = useSelector((state: RootState) => state.number.list);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>List number: [{numbers.join(", ")}]</h2>
      <button onClick={() => dispatch(generateRandomNumbers())}>
        Random number
      </button>
    </div>
  );
}