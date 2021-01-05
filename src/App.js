import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


//IMPORTING ALL COMPONENTS HERE
import Homepage from "./components/homepage/homepage.js"

function App() {
  return (
    <BrowserRouter>
      <div className="application-container">
        <Homepage />
      </div>
    </BrowserRouter>
  );
}

export default App;
