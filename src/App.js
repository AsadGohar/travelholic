import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


//IMPORTING ALL COMPONENTS HERE
import Navbar from "./components/header/Navbar.js"
import Footer from "./components/footer/footer.js"
import Homepage from "./components/homepage/homepage.js"
import Login from "./components/login/Login.js"
import SignUp from "./components/sign-up/Sign-up.js"
import Destinations from "./components/destinations/Destinations.js"
import DestinationDetails from "./components/destinations/destination-details/DestinationDetails.js"
import PlanATrip from "./components/plan-a-trip/Plan-a-trip.js"
import BookATrip from "./components/book-a-trip/Book-a-trip.js"
import TripPayment from "./components/book-a-trip/TripPayment.js" 
import BookingConfirmation from "./components/book-a-trip/BookingConfirmation.js"
import BookingDetail from "./components/book-a-trip/BookingDetail"
import Forum from "./components/forum/Forum.js"
import About from "./components/about/About.js"
import Feedback from "./components/about/Feedback.js";
import QuestionDetail from "./components/forum/QuestionDetail";
import AskQuestion from "./components/forum/AskQuestion";
import BookingForm from './components/book-a-trip/BookingForm'

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
          <Route path="/destination-details" component={DestinationDetails} />
          <Route path="/planatrip" component={PlanATrip} />
          <Route path="/bookatrip" component={BookATrip} />
          <Route path="/payment" component={TripPayment}/>
          <Route path="/bookingconfirmation" component={BookingConfirmation}/>
          <Route path="/forum" component={Forum} />
          <Route path="/about" component={About} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/question" component={QuestionDetail} />
          <Route path="/postquestion" component={AskQuestion} />
          <Route path="/tripdetails" component={BookingDetail} />
          <Route path="/bookingform" component={BookingForm} />
        </switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
