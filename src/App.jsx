import './App.css'
import { puppyList } from './data'
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
console.log(puppyList)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
