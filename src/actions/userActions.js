import { SAVE_USER_INFO } from "../constants/userConstants"

export const saveBookingInfo = (data) => (dispatch) => {
    dispatch({
        type: SAVE_USER_INFO,
        payload: data
    })

    // localStorage.setItem('userInfo', JSON.stringify(data))
}