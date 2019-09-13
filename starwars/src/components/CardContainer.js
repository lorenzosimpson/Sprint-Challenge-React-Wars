import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Card from './Card';

function CardContainer() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacter] = useState([])

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    Axios.get(`https://swapi.co/api/people/`)
    .then(response => {
      const characters = response.data.results;
      console.log(characters)
      setCharacter(characters);
    })
    .catch(error => {
      console.log('The API did not return a response.', error);
    })
  }, [])


  return (
      <div>
      {characters.map(character => {
          return (
            <Card name={character.name} gender={character.gender} mass={character.mass}/>
          )

      })}
      </div>
  )
}

export default CardContainer;