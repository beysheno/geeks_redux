import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Card} from "react-bootstrap";
import { fetchQuote} from "../redux/actions";

const Quotes = () => {
    const quote = useSelector((state) => state.quotesReducer.quotes);
    const dispatch = useDispatch();
    console.log(quote);
    useEffect(() => {
        dispatch(fetchQuote()) ;
    }, []);
    return (
        <div>
            {quote &&  <Card>
                <Card.Header>Quote</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {quote.quote}
                        </p>
                        <footer className="blockquote-footer">
                            Authored by <cite title="Source Title">{quote.author}</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            }
        </div>
    );
};

export default Quotes;