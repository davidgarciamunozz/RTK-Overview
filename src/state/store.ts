import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/CounterSlice'

export const store = configureStore ({
    reducer: {
        counter: counterReducer
    }
})

//export 2 types (RootState / AppDispatch )

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>