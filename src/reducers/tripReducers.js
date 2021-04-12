import { TRIP_LIST_REQUEST, TRIP_LIST_SUCCESS, TRIP_LIST_FAIL, TRIP_DETAILS_REQUEST, TRIP_DETAILS_SUCCESS, TRIP_DETAILS_FAIL, SELECT_TRIP_FOR_BOOKING, CANCEL_TRIP_FOR_BOOKING, SAVE_BOOKING_INFO, SAVE_PAYMENT_METHOD, CONFIRM_BOOKING_FAIL, CONFIRM_BOOKING_REQUEST, CONFIRM_BOOKING_SUCCESS, GET_BOOKED_TRIP_FAIL, GET_BOOKED_TRIP_SUCCESS, GET_BOOKED_TRIP_REQUEST } from '../constants/tripConstants'


export const tripListReducer = (state = { trips: [] }, action) => {
    switch (action.type) {
        case TRIP_LIST_REQUEST:
            return { loading: true, trips: [] }

        case TRIP_LIST_SUCCESS:
            return { loading: false, trips: action.payload }

        case TRIP_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const tripDetailsReducer = (state = { trip: { reviews: [] } }, action) => {
    switch (action.type) {
        case TRIP_DETAILS_REQUEST:
            return { loading: true, ...state }

        case TRIP_DETAILS_SUCCESS:
            return { loading: false, trip: action.payload }

        case TRIP_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const selectedTripReducer = (state = {}, action) => {
    switch (action.type) {
        case SELECT_TRIP_FOR_BOOKING:
            return { selectedTrip: action.payload }

        case CANCEL_TRIP_FOR_BOOKING:
            return {
                ...state,
                selectedTrip: {}
            }

        default:
            return state
    }
}


export const bookingReducer = (state = {}, action) => {
    switch (action.type) {
        case SAVE_BOOKING_INFO:
            return {
                bookingInfo: action.payload
            }

        default:
            return state
    }
}

export const paymentMethodReducer = (state = {}, action) => {
    switch (action.type) {
        case SAVE_PAYMENT_METHOD:
            return {
                paymentMethod: action.payload
            }

        default:
            return state
    }
}


export const createBookingReducer = (state = {}, action) => {
    switch (action.type) {
        case CONFIRM_BOOKING_REQUEST:
            return {
                loading: true
            }

        case CONFIRM_BOOKING_SUCCESS:
            return {
                loading: false,
                success: true,
                booking: action.payload
            }

        case CONFIRM_BOOKING_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default: return state
    }
}


export const bookedTripReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_BOOKED_TRIP_REQUEST:
            return { loading: true, ...state }

        case GET_BOOKED_TRIP_SUCCESS:
            return { loading: false, bookedTrip: action.payload }

        case GET_BOOKED_TRIP_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

