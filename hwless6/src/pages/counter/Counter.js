import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, reset} from "../../store/counterSlice";


const Counter = () => {
    const {counter} = useSelector(state => state.counterSlice);
    const dispatch = useDispatch();


    return (
        <div>
            {counter}
            <button onClick={()=>dispatch(increment(1))}>+</button>
            <button onClick={()=>dispatch(decrement(1))}>-</button>
            <button onClick={()=> dispatch(increment(10))}>+10</button>
            <button onClick={()=> dispatch(decrement(10))}>-10</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    );
};

export default Counter;