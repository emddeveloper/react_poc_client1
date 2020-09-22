import React, { useState } from "react"
import Axios from "axios"
import "../css/login.css"
import { Link, useHistory } from "react-router-dom"
import API from "../../api"

//Social login
import FacebookLogin from "react-facebook-login"
import GoogleLogin from "react-google-login"
//React-redux
import { useSelector, useDispatch } from "react-redux"
import { user, callWebLogin } from "../../store/actions"
export default function Loginpage(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  async function handleLogin(e) {
    const params = {
      email: username,
      password: password
    }
    e.preventDefault()
    dispatch(callWebLogin(params))
  }
  const [fbdata, setfbdata] = useState({})
  const socialParams = {
    emailId: null,
    gender: null,
    mobileNo: null,
    name: null,
    password: null,
    socialProfilePic: null,
    userCategory: "USER",
    userKey: null,
    userType: "SOCIAL"
  }
  const responseFacebook = response => {
    console.log(JSON.stringify(response))
    setfbdata(response)
    socialParams.emailId = response.email
    socialParams.name = response.name
    socialParams.userKey = response.userID
    socialParams.socialProfilePic = response.picture.data.url
    Axios.post("https://nxv-user-management-app.herokuapp.com/manageuserapp/v1.0/api/social/login-with-social", {
      ...socialParams
    }).then(
      response => {
        if (response.data.message == "Success") {
          localStorage.clear()
          localStorage.setItem("sessionId", response.data.response.sessionId)
          localStorage.setItem("user", JSON.stringify(response.data.response))
          console.log(response.data)
          props.setIsLoggedin(true)
          history.push("/")
        } else {
          console.log("Incorrect Username/Password")
        }
      },
      error => {
        console.log(error)
      }
    )
  }
  const responseGoogle = response => {
    console.log(JSON.stringify(response))
  }

  return (
    <>
      <div className="container pt-5 emd-login">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin row py-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <div className="text-center mb-4">
                  <FacebookLogin appId={process.env.REACT_APP_FB_API_ID} autoLoad={false} fields="name,email,picture" callback={responseFacebook} cssClass="btn btn-mb btn-facebook text-uppercase mb-3" icon="fa-facebook" textButton="Sign in with Facebook" />
                  <GoogleLogin clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} buttonText="Sign in with Google" onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy={"single_host_origin"} className="btn btn-md btn-google text-uppercase" icon="true" />
                </div>
                <div className="separator mb-4">Or</div>
                <form className="form-signin" onSubmit={handleLogin}>
                  <div className="form-label-group">
                    <input onChange={e => setUsername(e.target.value)} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input onChange={e => setPassword(e.target.value)} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  {/*<div className="custom-control custom-checkbox mb-3">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">
                      Remember password
                    </label>
  </div>*/}
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
                    Sign in
                  </button>
                  <div className="pt-4 pb-2 text-center">
                    <p>
                      <Link to="/forgot-password">Forgot password?</Link>
                    </p>
                  </div>
                  <div className="pt-2 pb-2 text-center">
                    <p>
                      Don't have an account? <Link to="/signup">Register Here</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
