import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../state/store"
// This one are functions
import { decrement, increment, incrementByAmount } from "../state/counter/CounterSlice"

export default function Counter() {

    //connect this component to redux to access the state using the useSelector hook form redux.
    const count = useSelector((state:RootState)=> state.counter.value)
    const dispatch = useDispatch()
    return(
        <>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</button>
        </div>
        </>
    )
}