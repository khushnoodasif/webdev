import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Form from './Form.js';

var userIsRegistered = true;

const currentTime = new Date().getHours();
console.log(currentTime);

function App() {
  return (
    <div>
      <Header />
      <div className="container">
      <Form isRegistered={userIsRegistered} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
