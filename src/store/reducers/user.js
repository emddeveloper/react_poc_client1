import { isLoggedin } from "../actions"

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_DETAILS":
      return { ...state, ...action.payload }
    case "GET_USER":
      return { ...state, ...action.payload }
    case "LOG_IN":
      return { ...state, ...action.payload, isLoggedin: true }
    case "IS_LOGGEDIN":
      return { ...state, isLoggedin: action.payload }
    case "IS_LOGGEDOUT":
      return { ...state, ...action.payload, isLoggedin: false }
    default:
      return state
  }
}

export default userReducer
