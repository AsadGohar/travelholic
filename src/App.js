import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


//IMPORTING ALL COMPONENTS HERE
import Navbar from "./components/header/Navbar.js"
import Footer from "./components/footer/footer.js"
import Homepage from "./components/homepage/homepage.js"

function App() {
  return (
    <BrowserRouter>
      <div className="application-container">
        <Navbar />
        <switch>
          <Route exact path="/" component={Homepage} />
          {/* <Route path ="/login" component={Login} /> */}
        </switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
