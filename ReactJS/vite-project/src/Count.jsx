import { useState } from 'react';
import "./App.css";

const Count = () => {
  const [count, setCount] = useState(0);

    const increaseCount =() =>{
        setCount(count + 1);
    }
   
    const decreaseCount =() =>{
        setCount(count - 1);
    }
 
  return (
    <div className="app">
      <h2> Count is :{count}</h2>

      <button  onClick={increaseCount}>
        Increase
      </button>
     
      <button  onClick={decreaseCount}>
       Decrease
      </button>
      
    </div>
  );
};

export default Count;