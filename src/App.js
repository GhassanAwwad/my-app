import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting name="Alice" message="Welcome to my website!" />
      <Greeting name="Bob" message="Thanks for visiting!" />
    </div>
  );
}

export default App;