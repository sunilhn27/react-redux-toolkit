import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0
  };

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            console.log(state)
            state.counter += 1;
        },
        decrement(state) {
            state.counter -= 1;

        },
        addByTen(state, action) {
            state.counter += action.payload

        }
    }
})

export const actions = counterSlice.actions