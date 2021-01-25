import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';


//IMPORTING ALL COMPONENTS HERE
import Navbar from "./components/header/Navbar"
import Footer from "./components/footer/footer"
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/Login"
import SignUp from "./components/sign-up/Sign-up"
import Destinations from "./components/destinations/Destinations"
import DestinationDetails from "./components/destinations/destination-details/DestinationDetails"
import PlanATrip from "./components/plan-a-trip/PlanATrip"
import BookATrip from "./components/book-a-trip/Book-a-trip"
import TripPayment from "./components/book-a-trip/TripPayment" 
import BookingConfirmation from "./components/book-a-trip/BookingConfirmation"
import BookingDetail from "./components/book-a-trip/BookingDetail"
import BookingForm from './components/book-a-trip/BookingForm'
import Forum from "./components/forum/Forum"
import QuestionDetail from "./components/forum/QuestionDetail"
import About from "./components/about/About"
import Feedback from "./components/about/Feedback"
import Profile from "./components/profile/Profile";
import Newsletter from "./components/support-components/Newsletter"
import Privacy from "./components/support-components/Privacy"

function App() {
  return (
    <BrowserRouter>
      <div className="application-container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/destinations" component={Destinations} />
          <Route path="/destination-details" component={DestinationDetails} />
          <Route path="/planatrip" component={PlanATrip} />
          <Route path="/bookatrip" component={BookATrip} />
          <Route path="/tripdetails" component={BookingDetail} />
          <Route path="/bookingform" component={BookingForm} />
          <Route path="/payment" component={TripPayment}/>
          <Route path="/bookingconfirmation" component={BookingConfirmation}/>
          <Route path="/forum" component={Forum} />
          <Route path="/question" component={QuestionDetail} />
          <Route path="/about" component={About} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/profile" component={Profile} />
          <Route path="/newsletter" component={Newsletter} />
          <Route path="/privacy" component={Privacy} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
