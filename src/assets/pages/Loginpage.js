import React, { useState } from "react"
import Axios from "axios"
import "../css/login.css"
import { Link, useHistory } from "react-router-dom"
export default function Loginpage(props) {
  const history = useHistory()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  async function handleLogin(e) {
    const params = {
      email: username,
      password: password
    }
    e.preventDefault()
    try {
      const response = await Axios.post("https://cmsappapi.herokuapp.com/cmsapp/api/login", params)
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
    } catch (e) {
      console.log("Something went wrong" + e)
    }
  }
  return (
    <>
      <div className="container pt-5 emd-login">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
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
                  <hr className="my-4" />
                  <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit">
                    <i className="fa fa-google mr-2"></i> Sign in with Google
                  </button>
                  <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit">
                    <i className="fa fa-facebook-f mr-2"></i> Sign in with Facebook
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
