import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Card} from "react-bootstrap";
import {fetchCat} from "../redux/actions";

const AnimeQuotes = () => {
    const facts = useSelector(state => state.catFactReducer.facts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCat()) ;
    },[])
    return (
        <div>
            {facts && <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Cat Fact</Card.Subtitle>
                    <Card.Text>
                        {facts.fact}
                    </Card.Text>
                </Card.Body>
            </Card>}
        </div>
    );
};

export default AnimeQuotes;