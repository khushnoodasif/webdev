import React from 'react';
import Login from "./Login";
import Header from './Header.js';
import Footer from './Footer.js';

var isLoggedIn = false;

const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div>
      <Header />
      <div className="container">{/*Ternary Operator*/}
      {isLoggedIn ? <h1>Hello!</h1> : <Login />}
      {/*AND Operator*/}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
