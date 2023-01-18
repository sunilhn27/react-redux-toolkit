import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../Store/CounterSlice'


function Counter() {

    const count = useSelector(state => state.counter)
    const dispatch = useDispatch()


    function add() {
        console.log("add")
        dispatch(actions.increment())
    }


    function sub() {
        console.log("Sub")
        dispatch(actions.decrement())
    }


    function addByTen() {
        console.log("addByTen")
        dispatch(actions.addByTen(10))
    }


    return (
        <div>
            <button onClick={add}>increment</button>
            <button onClick={sub}>decrement</button>
            <button onClick={addByTen}>Add By Ten</button>
            <h1>{count}</h1>
        </div>
    )
}

export default Counter
