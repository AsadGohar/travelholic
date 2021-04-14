import { SAVE_USER_INFO } from "../constants/userConstants"

export const userInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case SAVE_USER_INFO:
            return {
                userInfo: action.payload
            }

        default:
            return state
    }
}