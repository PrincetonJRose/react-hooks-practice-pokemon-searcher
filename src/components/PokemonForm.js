import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm( props ) {

  const [ name, setName ] = useState( '' )
  const [ front, setFront ] = useState( '' )
  const [ back, setBack ] = useState( '' )
  const [ hp, setHp ] = useState( 0 )

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          props.addNewPokemon({
            name: name,
            hp: hp,
            sprites: {
              front: front,
              back: back,
            }
          })
          
          setBack( '' )
          setFront( '' )
          setHp( 0 )
          setName( '' )
      }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" value={ name } name="name" onChange = { (e) => setName( e.target.value ) }/>
          <Form.Input fluid label="hp" type='number' min='0' value={ hp }placeholder="hp" name="hp" onChange = { (e) => setHp( e.target.value ) }/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={ front }
            onChange = { (e) => setFront( e.target.value ) }
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={ back }
            onChange = { (e) => setBack( e.target.value ) }
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
