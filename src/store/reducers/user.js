import { isLoggedin } from "../actions"

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_DETAILS":
      return { ...state, ...action.payload, isLoggedin: true }
    case "GET_USER":
      return { ...state, ...action.payload, isLoggedin: true }
    case "LOG_IN":
      return { ...state, ...action.payload, isLoggedin: true }
    case "IS_LOGGEDIN":
      return { ...state, ...action.payload, isLoggedin: true }
    case "IS_LOGGEDOUT":
      return { isLoggedin: false }
    default:
      return state
  }
}

export default userReducer
