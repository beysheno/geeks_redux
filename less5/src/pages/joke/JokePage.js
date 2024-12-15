import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button} from "react-bootstrap";
import {fetchJoke} from "../../redux/actions";

const JokePage = () => {
    const joke = useSelector((state) => state.catReducer.joke);
    const dispatch = useDispatch();
    return (
        <div className='text-center'>
            <h2>Random Jokes</h2>
            <Button onClick={()=>dispatch(fetchJoke())}>Get a Joke</Button>
            {joke && <p className='mt-3'>{joke}</p>}
        </div>
    );
};

export default JokePage;