import { useState } from "react";
import { sculptureList } from "./data";

const Gallery=() => {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }
  const handleClick1 = () => {
    setIndex(index - 1);
  };

  let sculpture = sculptureList[index];
  return (
    <>
      {index !== 0 && <button type="button" className="btn btn-primary" onClick={handleClick1}>Previous</button>}
      <button type="button" className="btn btn-primary" onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}

export default Gallery