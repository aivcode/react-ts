import React, { useState } from 'react';
// import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='container'>
      <h1 className='font-bold'>Hello React - {count}</h1>
      <button 
        className='py-2 px-4 border'
        onClick={() => setCount(count + 1)}>PRESS</button>
    </div>
  );
}

export default App;
