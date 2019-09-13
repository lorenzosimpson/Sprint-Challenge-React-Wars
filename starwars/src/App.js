import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [character, setCharacter] = useState({})

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    Axios.get(`https://swapi.co/api/people/`)
    .then(response => {
      const data = response.data.results;
      console.log(data)
      setCharacter(data);
    })
    .catch(error => {
      console.log('The API did not return a response.', error);
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {/* return card container here */}
    </div>
  );
}

export default App;
