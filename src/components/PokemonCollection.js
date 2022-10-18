import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection( props ) {

  // const { pokemon } = props

  return (
    <Card.Group itemsPerRow={6}>
      {
        props.pokemon.map( poke =>
          <PokemonCard
            poke = { poke }
            key = { poke.id }
            flipPokemonCard = { props.flipPokemonCard }
            flippedPokemon = { props.flippedPokemon }
          />)
      }
    </Card.Group>
  );
}

export default PokemonCollection;
