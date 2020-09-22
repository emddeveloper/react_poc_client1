import API from "../../api"

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
  return dispatch => {
    API.post(`login`, params)
      .then(response => {
        if (response.data.message == "Success") {
          localStorage.clear()
          localStorage.setItem("sessionId", response.data.response.sessionId)
          localStorage.setItem("userKey", response.data.response.userKey)
          //props.setIsLoggedin(true)
          //dispatch(user(response.data.response))
          dispatch({
            type: "USER_DETAILS",
            payload: response.data.response
          })
          dispatch({
            type: "IS_LOGGEDIN",
            payload: true
          })
          //history.push("/")
        } else {
          console.log("Incorrect Username/Password")
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}
