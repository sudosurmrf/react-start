import { puppyList } from './data.js';
import React, { useState } from 'react';
import './App.css';

const Listpups = () => {
  const [selectedPuppy, setSelectedPuppy] = useState(null);

  const handleClick = (puppy) => {
    setSelectedPuppy(puppy);
  };

  return (
    <div className="container">
      <h1>Puppy List</h1>
      <ul>
        {puppyList.map((puppy) => (
          <li key={puppy.id} onClick={() => handleClick(puppy)}>
            {puppy.name}
          </li>
        ))}
      </ul>
      {selectedPuppy && (
        <div className="selected-puppy">
          <h1>{selectedPuppy.name}</h1>
          <p>Age: {selectedPuppy.age}</p>
          <p>Breed: {selectedPuppy.breed}</p>
          <p>Email: {selectedPuppy.email}</p>
          <p>Is Cute: {selectedPuppy.isCute ? "Yes" : "No"}</p>
          <h2>Tricks:</h2>
          <ul>
            {selectedPuppy.tricks.map((trick) => (
              <li key={trick.id}>{trick.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Listpups;
