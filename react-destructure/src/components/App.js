import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import cars from './Practice.js';

function App() {
  const [honda, tesla] = cars;

  const {
    speedStats: { topSpeed: hondaTopSpeed }
  } = honda;
  const {
    speedStats: { topSpeed: teslaTopSpeed }
  } = tesla;
  
  const {
    coloursByPopularity: [hondaTopColour]
  } = honda;
  const {
    coloursByPopularity: [teslaTopColour]
  } = tesla;

  return (
    <div>
    <Header />
    <div className="container">
      <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
      </table>
    </div>
    <Footer /> 
    </div>
  );
}

export default App;
