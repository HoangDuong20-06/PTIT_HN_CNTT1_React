import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./store";
import {changeCompany} from "./store"

const ChangeState: React.FC = () => {
  const company = useSelector((state: RootState) => state.name);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>{company}</h2>
      <button onClick={() => dispatch(changeCompany())}>Change state</button>
    </div>
  );
};
export default ChangeState;