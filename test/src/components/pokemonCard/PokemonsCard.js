import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Card } from "react-bootstrap";

const PokemonsCard = ({ pokemon }) => {
    const [pokemonItem, setPokemonItem] = useState(null); // Изначально null

    const getDetails = async () => {
        try {
            const response = await axios.get(pokemon.url); // Запрос к API для получения деталей
            setPokemonItem(response.data); // Устанавливаем данные покемона
        } catch (error) {
            console.error("Failed to fetch pokemon details:", error);
        }
    };

    useEffect(() => {
        getDetails(); // Загружаем детали при изменении `pokemon`
    }, [pokemon]);

    if (!pokemonItem) {
        return <div>Loading...</div>;
    }

    return (
        <div className="pokemon-card">
            <Card style={{ width: '18rem', margin: '10px' }} className="g-4">
                <Card.Img
                    variant="top"
                    src={pokemonItem.sprites?.other?.dream_world?.front_default || "https://via.placeholder.com/150"}
                    alt={pokemon.name}
                />
                <Card.Body>
                    <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
                    <Card.Text>
                        <strong>Abilities: </strong>
                        {pokemonItem.abilities?.map((value) => value.ability.name).join(', ') || "No abilities available"}
                        <br />
                        <strong>Stats: </strong>
                        {pokemonItem.stats?.map((value) => `${value.stat.name}: ${value.base_stat}`).join(', ') || "No stats available"}
                        <br />
                        <strong>Types: </strong>
                        {pokemonItem.types?.map((value) => value.type.name).join(', ') || "No types available"}
                        <br />
                        <strong>Some Moves: </strong>
                        {pokemonItem.moves?.slice(0, 5).map((value) => value.move.name).join(', ') || "No moves available"}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PokemonsCard;