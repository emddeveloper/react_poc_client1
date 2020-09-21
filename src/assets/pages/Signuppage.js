import React, { useState } from "react"
import Axios from "axios"
import "../css/login.css"
import { Link, useHistory } from "react-router-dom"

import FacebookLogin from "react-facebook-login"
import GoogleLogin from "react-google-login"

export default function Signuppage(props) {
  const history = useHistory()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [mobileNo, SetMobileNo] = useState()
  const [gender, setGender] = useState()
  async function handleSignup(e) {
    const params = {
      confirmPassword: confirmPassword,
      emailId: email,
      firstName: firstName,
      gender: gender,
      lastName: lastName,
      mobileNo: mobileNo,
      password: password
    }
    e.preventDefault()
    try {
      const response = await Axios.post("https://cmsappapi.herokuapp.com/cmsapp/api/user", params)
      if (response.data.message == "Success") {
        console.log(response.data)
        history.push("/login")
      } else {
        console.log("Data not registered yet Please try again")
      }
    } catch (e) {
      console.log("Something went wrong" + e)
    }
  }
  const responseFacebook = response => {
    console.log(JSON.stringify(response))
  }
  const responseGoogle = response => {
    console.log(JSON.stringify(response))
  }
  return (
    <>
      <div className="container pt-5 emd-login">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign up</h5>
                <div className="text-center mb-4">
                  <FacebookLogin appId={process.env.REACT_APP_FB_API_ID} autoLoad={false} fields="name,email,picture" callback={responseFacebook} cssClass="btn btn-mb btn-facebook text-uppercase mb-3" icon="fa-facebook" textButton="Sign up with Facebook" />
                  <GoogleLogin clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} buttonText="Sign up with Google" onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy={"single_host_origin"} className="btn btn-md btn-google text-uppercase" icon="true" />
                </div>
                <div className="separator mb-4">Or</div>
                <form className="form-signin" onSubmit={handleSignup}>
                  <div className="form-label-group">
                    <input onChange={e => setFirstName(e.target.value)} type="text" id="firstname" className="form-control" placeholder="Firstname" required autoFocus />
                    <label htmlFor="firstname">Firstname</label>
                  </div>

                  <div className="form-label-group">
                    <input onChange={e => setLastName(e.target.value)} type="text" id="lastname" className="form-control" placeholder="Lastname" required />
                    <label htmlFor="lastname">Lastname</label>
                  </div>

                  <div className="form-label-group">
                    <input onChange={e => setGender(e.target.value)} type="text" id="gender" className="form-control" placeholder="Gender" required />
                    <label htmlFor="gender">Gender</label>
                  </div>

                  <div className="form-label-group">
                    <input onChange={e => SetMobileNo(e.target.value)} type="text" id="mobile" className="form-control" placeholder="Mobile No." required />
                    <label htmlFor="mobile">Mobile No.</label>
                  </div>

                  <div className="form-label-group">
                    <input onChange={e => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input onChange={e => setConfirmPassword(e.target.value)} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <div className="form-label-group">
                    <input onChange={e => setPassword(e.target.value)} type="password" id="inputConfirmPassword" className="form-control" placeholder="Confirm Password" required />
                    <label htmlFor="inputConfirmPassword">Confirm Password</label>
                  </div>
                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
                    Create Account
                  </button>

                  <div className="pt-2 pb-2 text-center">
                    <p>
                      Already registed? <Link to="/login">Login Here</Link>
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
