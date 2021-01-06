import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


//IMPORTING ALL COMPONENTS HERE
import Header from "./components/header/Header.js"
import Footer from "./components/footer/footer.js"
import Homepage from "./components/homepage/homepage.js"

function App() {
  return (
    <BrowserRouter>
      <div className="application-container">
          <Header/>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
