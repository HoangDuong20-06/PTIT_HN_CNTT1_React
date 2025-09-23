import { createSlice } from "@reduxjs/toolkit";

interface NumberState {
  list: number[];
}

const initialState: NumberState = {
  list: [],
};

const numberSlice = createSlice({
  name: "number",
  initialState,
  reducers: {
    generateRandomNumbers: (state) => {
      const arr: number[] = [];
      const length = Math.floor(Math.random() * 5) + 3; 
      for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 20));
      }
      state.list = arr;
    },
  },
});

export const { generateRandomNumbers } = numberSlice.actions;
export default numberSlice.reducer;