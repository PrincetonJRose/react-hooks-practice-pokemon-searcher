import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const baseUrl = `http://localhost:3000/`
const pokemonUrl = baseUrl + `pokemon/`

function PokemonPage() {

  const [ pokemon, setPokemon ] = useState( [] )
  const [ flippedPokemon, setFlippedPokemon ] = useState( [] )

  const [ searchTerm, setSearchTerm ] = useState( '' )

  useEffect( () => fetchPokemon(), [] )

  function fetchPokemon() {
    fetch( pokemonUrl )
    .then( r => r.json() )
    .then( setPokemon )
  }

  function flipPokemonCard( poke ) {
    if ( flippedPokemon.includes( poke.id ) )
      setFlippedPokemon( flippedPokemon.filter( id => id !== poke.id ) )
    else
      setFlippedPokemon( [...flippedPokemon, poke.id] )
  }

  function changeSearch ( event ) {
    setSearchTerm( event.target.value )
  }

  function addNewPokemon( poke ) {
    
    let postRequest = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify( poke )
    }
    
    fetch( pokemonUrl, postRequest )
    .then( r => r.json() )
    .then( newPokemon => setPokemon( [...pokemon, newPokemon ] ) )

  }

  const filteredPokemon = pokemon.filter( poke => poke.name.toLowerCase().includes( searchTerm.toLowerCase() ) )

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
        addNewPokemon = { addNewPokemon }
      />
      <br />
      <Search
        changeSearch = { changeSearch }
      />
      <br />
      <PokemonCollection
        pokemon = { filteredPokemon }
        flipPokemonCard = { flipPokemonCard }
        flippedPokemon = { flippedPokemon }
      />
    </Container>
  );
}

export default PokemonPage;
