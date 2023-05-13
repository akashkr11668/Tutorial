import React, { useState } from 'react';
import axios from 'axios';

const Api = () => {
  const [joke, setJoke] = useState('');

  const getJoke = () => {
    axios.get('https://official-joke-api.appspot.com/random_joke')
      .then((response) => {
        setJoke(response.data.setup + '...' + response.data.punchline);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>Api</h1>
      <button onClick={getJoke}>Get your Joke</button>
      {joke && <p>{joke}</p>}
    </div>
  );
}

export default Api;
