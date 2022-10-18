import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( props ) {

  const { poke } = props

  return (
    <Card>
      <div onClick={ () => props.flipPokemonCard( poke ) } >
        <div className="image">
          <img src={ 

            props.flippedPokemon.includes( poke.id ) ?
              poke.sprites.back
            :
              poke.sprites.front
          
          } alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{ poke.name }</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            { poke.hp }
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
