import React, {useState} from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    
    setCount(count - 1);
  }

  return (
    <div>
    <Header />
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
    <Footer /> 
    </div>
  );
}

export default App;
