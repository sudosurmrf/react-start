import './App.css'
import { puppyList } from './data';
import React, { useState } from 'react';


function Listpups() {
  const [count, setCount] = useState(0);


  console.log(puppyList)
  return (
    <>
      <div>
        <h1>puppy List</h1>
        
      </div>
    </>
  );
}


export default Listpups;
