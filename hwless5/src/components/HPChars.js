import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Card, Image} from "react-bootstrap";
import {fetchHarry, fetchHarrySuccess} from "../redux/actions";

const HpChars = () => {
    const chars = useSelector((state) => state.harryReducer.chars);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Harry Potter Character</h2>
            <Button onClick={()=> dispatch(fetchHarry())}>Get Chars</Button>
            {chars.map((char) => (
                <Card style={{ width: '18rem' }} key={char.url} className="chars">
                    <Card.Img variant="top" src={char.image} />
                    <Card.Body>
                        <Card.Title>{char.name}</Card.Title>
                        <Card.Text>
                            Date Birth: {char.dateOfBirth} <br/>
                            Faculty: {char.house} <br/>
                            Patronus: {char.patronus} <br/>
                            Alternate name:{char.alternate_names[0]}
                        </Card.Text>
                    </Card.Body>
                </Card>

            ))}

        </div>
    );
};

export default HpChars;