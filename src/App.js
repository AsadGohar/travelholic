import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import ProtectedRoute from './components/Authentication/ProtectedRoute'
import PublicRoute from './components/Authentication/PublicRoute'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//IMPORTING ALL COMPONENTS HERE
import Navbar from "./components/header/Navbar"
import Footer from "./components/footer/footer"
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/Login"
import SignUp from "./components/sign-up/SignUp"
import Destinations from "./components/destinations/Destinations"
import DestinationDetails from "./components/destinations/destination-details/DestinationDetails"
import PlanATrip from "./components/plan-a-trip/PlanATrip"
import BookATrip from "./components/book-a-trip/BookATrip"
import TripPayment from "./components/book-a-trip/TripPayment" 
import BookingConfirmation from "./components/book-a-trip/BookingConfirmation"
import BookingDetail from "./components/book-a-trip/BookingDetail"
import BookingForm from './components/book-a-trip/BookingForm'
import Forum from "./components/forum/Forum"
import AskQuestion from "./components/forum/AskQuestion"
import QuestionDetail from "./components/forum/QuestionDetail"
import About from "./components/about/About"
import Feedback from "./components/about/Feedback"
import Profile from "./components/profile/Profile";
import Newsletter from "./components/support-components/Newsletter"
import Privacy from "./components/support-components/Privacy"
import PageNotFound from "./components/PageNotFound"

function App() {
  return (
    
    <BrowserRouter>
      <div className="">
        <ToastContainer />
        <Navbar />
        <Switch>
          <PublicRoute exact path="/" component={Homepage} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/signup" component={SignUp} />
          <PublicRoute path="/destinations" component={Destinations} />
          <PublicRoute path="/destinationsdetails/:id" component={DestinationDetails} />
          <PublicRoute path="/planatrip" component={PlanATrip} />
          <PublicRoute path="/bookatrip" component={BookATrip} />
          <PublicRoute path="/tripdetails" component={BookingDetail} />
          <PublicRoute path="/bookingform" component={BookingForm} />
          <PublicRoute path="/payment" component={TripPayment}/>
          <PublicRoute path="/bookingconfirmation" component={BookingConfirmation}/>
          <PublicRoute path="/forum" component={Forum} />
          <PublicRoute path="/askquestion" component={AskQuestion} />
          <PublicRoute path="/question" component={QuestionDetail} />
          <PublicRoute path="/about" component={About} />
          <PublicRoute path="/feedback" component={Feedback} />
          <PublicRoute path="/newsletter" component={Newsletter} />
          <PublicRoute path="/privacy" component={Privacy} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
