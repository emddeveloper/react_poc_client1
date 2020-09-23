import API from "../../api"
import { push } from "react-router-redux"
import { useHistory } from "react-router-dom"
//const history = useHistory()
export const increment = () => {
  return {
    type: "INCREMENT",
    payload: 1
  }
}
export const decrement = () => {
  return {
    type: "DECREMENENT",
    payload: 1
  }
}
//IS LOGGEDIN
export const isLoggedin = value => {
  return {
    type: "IS_LOGGEDIN",
    payload: value
  }
}
//IS LOGGEDOUT
export const isLoggedout = () => {
  return {
    type: "IS_LOGGEDOUT",
    payload: {}
  }
}
//GET USER CALL
export const getuser = userKey => {
  return dispatch => {
    API.get(`user/${userKey}`)
      .then(response => {
        dispatch({
          type: "USER_DETAILS",
          payload: response.data.response
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}
//SIGN IN POST
export const callWebLogin = params => {
  return dispatch => {}
}
