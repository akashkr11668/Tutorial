import React from 'react'
import axios from 'axios'
const Test = () => {
    axios.get('https://official-joke-api.appspot.com/random_joke')
  return (
    <div>
      <button onClick={joke}>Get Your Jokes</button>
    </div>
  )
}

export default Test
