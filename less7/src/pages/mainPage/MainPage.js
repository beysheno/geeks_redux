import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {mainInfo, changeTitleWithParams} from "../../store/mainSlice";

const MainPage = () => {

    const {title} = useSelector(state => state.mainSlice)
    const dispatch = useDispatch();

    const changeTitle=()=>{
        dispatch(mainInfo());
    }

    const withParamsChange=()=>{
        dispatch(changeTitleWithParams('qwerty'));
    }
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitle}>change title</button>
            <button onClick={withParamsChange}>change title with param</button>
        </div>
    );
};

export default MainPage;