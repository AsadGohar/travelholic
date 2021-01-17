import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


//IMPORTING ALL COMPONENTS HERE
import Navbar from "./components/header/Navbar.js"
import Footer from "./components/footer/footer.js"
import Homepage from "./components/homepage/homepage.js"
import Login from "./components/login/Login.js"
import SignUp from "./components/sign-up/Sign-up.js"
import Destinations from "./components/destinations/Destinations.js"
import PlanATrip from "./components/plan-a-trip/Plan-a-trip.js"
import BookATrip from "./components/book-a-trip/Book-a-trip.js"
import Forum from "./components/forum/Forum.js"
import About from "./components/about/About.js"
import Profile from "./components/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="application-container">
        <Navbar />
        <switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/destinations" component={Destinations} />
          <Route path="/planatrip" component={PlanATrip} />
          <Route path="/bookatrip" component={BookATrip} />
          <Route path="/forum" component={Forum} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
        </switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
