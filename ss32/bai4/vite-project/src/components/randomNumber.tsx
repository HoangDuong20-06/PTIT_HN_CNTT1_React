import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store"; 
import { addRandomNumber } from "./store";

const RandomNumber: React.FC = () => {
  const numbers = useSelector((state: RootState) => state.numbers);
  const dispatch = useDispatch<AppDispatch>();

  const handleGenerate = () => {
    const random = Math.floor(Math.random() * 100);
    dispatch(addRandomNumber(random));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h3>{JSON.stringify(numbers)}</h3>
      <button onClick={handleGenerate}>Generate Random Number</button>
    </div>
  );
};

export default RandomNumber;
