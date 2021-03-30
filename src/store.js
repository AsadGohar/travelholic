import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { bookingReducer, paymentMethodReducer, selectedTripReducer, tripDetailsReducer, tripListReducer,  } from "./reducers/tripReducers";


const reducer = combineReducers({
    tripList: tripListReducer,
    tripDetails: tripDetailsReducer,
    tripSelected: selectedTripReducer,
    bookingInfo: bookingReducer,
    paymentMethod: paymentMethodReducer
})


const bookingInfoFromStorage = localStorage.getItem('bookingInfo') ? JSON.parse(localStorage.getItem('bookingInfo')) : {}


const initialState = {
        bookingInfo: bookingInfoFromStorage
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
