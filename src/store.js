import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { bookedTripReducer, bookingReducer, createBookingReducer, orderPayReducer, paymentMethodReducer, selectedTripReducer, tripDetailsReducer, tripListReducer, } from "./reducers/tripReducers";
import { userLoginReducer } from './reducers/userReducers';


const reducer = combineReducers({
    userLogin: userLoginReducer,
    tripList: tripListReducer,
    tripDetails: tripDetailsReducer,
    tripSelected: selectedTripReducer,
    bookingInfo: bookingReducer,
    paymentMethod: paymentMethodReducer,
    bookingDetails: createBookingReducer,
    bookedTrip: bookedTripReducer,
    orderPay: orderPayReducer,
})

const tripDetailsFromStorage = localStorage.getItem('tripDetails') ? JSON.parse(localStorage.getItem('tripDetails')) : {}
const bookingInfoFromStorage = localStorage.getItem('bookingInfo') ? JSON.parse(localStorage.getItem('bookingInfo')) : {}
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null


const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    tripDetails: { trip: tripDetailsFromStorage },
    bookingInfo: bookingInfoFromStorage
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
