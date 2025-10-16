//This file will contain everything we need that is related to our counter slice (actions, reducers, state)

import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}

const initialState:CounterState = {
    value: 0
}


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) => {
            state.value +=1;
        },
        decrement: (state) => {
            state.value -=1;
        }
    }
})

//Create actions to trigger those reducers (this are functions)
export const {increment, decrement} = counterSlice.actions


export default counterSlice.reducer