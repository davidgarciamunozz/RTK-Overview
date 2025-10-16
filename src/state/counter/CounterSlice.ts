//This file will contain everything we need that is related to our counter slice (actions, reducers, state)

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
        },
        incrementByAmount:(state, action:PayloadAction<number>) => {
            state.value += action.payload
        }
    }
})

//Create actions to trigger those reducers (this are functions)
export const {increment, decrement, incrementByAmount} = counterSlice.actions


export default counterSlice.reducer