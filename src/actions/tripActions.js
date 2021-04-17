import axios from '../axios.js'
import { TRIP_LIST_REQUEST, TRIP_LIST_SUCCESS, TRIP_LIST_FAIL, TRIP_DETAILS_REQUEST, TRIP_DETAILS_SUCCESS, TRIP_DETAILS_FAIL, SELECT_TRIP_FOR_BOOKING, CANCEL_TRIP_FOR_BOOKING, SAVE_BOOKING_INFO, SAVE_PAYMENT_METHOD, CONFIRM_BOOKING_REQUEST, CONFIRM_BOOKING_SUCCESS, CONFIRM_BOOKING_FAIL, GET_BOOKED_TRIP_SUCCESS, GET_BOOKED_TRIP_FAIL, GET_BOOKED_TRIP_REQUEST, ORDER_PAY_FAIL, ORDER_PAY_SUCCESS, ORDER_PAY_REQUEST } from '../constants/tripConstants'



export const listTrips = () => async (dispatch) => {
    try {
        dispatch({ type: TRIP_LIST_REQUEST })

        const { data } = await axios.get('/trips')

        dispatch({
            type: TRIP_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TRIP_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}


export const listTripDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: TRIP_DETAILS_REQUEST })

        const { data } = await axios.get(`/trips/${id}`)

        dispatch({
            type: TRIP_DETAILS_SUCCESS,
            payload: data
        })

        localStorage.setItem('tripDetails', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: TRIP_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}


export const selectTripForBooking = (id) => async (dispatch) => {
    const { data } = await axios.get(`/trips/${id}`)

    dispatch({
        type: SELECT_TRIP_FOR_BOOKING,
        payload: {
            tripId: data._id,
            title: data.title,
            price: data.price,
        }
    })
}

export const cancelTripForBooking = () => {
    return {
        type: CANCEL_TRIP_FOR_BOOKING
    }
}


export const saveBookingInfo = (data) => (dispatch) => {
    dispatch({
        type: SAVE_BOOKING_INFO,
        payload: data
    })

    localStorage.setItem('bookingInfo', JSON.stringify(data))
}


export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: SAVE_PAYMENT_METHOD,
        payload: data
    })

}


export const createBooking = (booking) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CONFIRM_BOOKING_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/bookings`, booking, config)

        dispatch({
            type: CONFIRM_BOOKING_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CONFIRM_BOOKING_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }

}


export const getBookedTrip = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_BOOKED_TRIP_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }


        const { data } = await axios.get(`/bookings/${id}`, config)

        dispatch({
            type: GET_BOOKED_TRIP_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_BOOKED_TRIP_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }

}


export const payOrder = (bookingId, paymentResult, paymentMethod) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_PAY_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(`/bookings/${bookingId}/pay`, paymentResult, config)
        await axios.put(`/bookings/${bookingId}/paymentMethod`, paymentMethod, config)


        dispatch({
            type: ORDER_PAY_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_PAY_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}