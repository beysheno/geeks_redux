import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Image} from "react-bootstrap";
import {fetchCat} from "../../redux/actions";

const CatPage = () => {
    const catImage = useSelector(state => state.catReducer.catImage);
    const dispatch = useDispatch();

    return (
        <div className='text-center'>
            <h2>Random Cat</h2>
            <Button onClick={()=> dispatch(fetchCat())}>Get a Cat</Button>
            {catImage && <Image src={catImage} alt='Random Cat' fluid className='mt-3'/>}
        </div>
    );
};

export default CatPage;