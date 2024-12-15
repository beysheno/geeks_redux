import React from 'react';

const CharacterCard = (character) => {
    return (
        <div className='character-card'>
            <img src={character.image} alt=""/>
            <h3>{character.name}</h3>
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
            <p>Location{character.location.name}</p>
        </div>
    );
};

export default CharacterCard;