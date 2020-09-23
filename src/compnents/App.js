import React, { useState, useEffect } from "react"
import "../assets/css/style-starter.css"
import "../assets/css/media.css"
import Footer from "../assets/pages/Footer"
import Header from "../assets/pages/Header"
import $ from "jquery"
import { Helmet } from "react-helmet"
import Home from "../assets/pages/Home"
import { BrowserRouter, Switch, Route, useHistory, Redirect } from "react-router-dom"
//router pages
import Aboutpage from "../assets/pages/Aboutpage"
import Servicepage from "../assets/pages/Servicepage"
import Contactpage from "../assets/pages/Contactpage"
import Loginpage from "../assets/pages/Loginpage"
import Signuppage from "../assets/pages/Signuppage"
import ForgotPassword from "../assets/pages/ForgotPassword"
//React redux
import { useSelector, useDispatch } from "react-redux"
import { getuser } from "../store/actions"
//Toaster
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  //Toaster configure
  const dispatch = useDispatch()
  useEffect(() => {
    if (Boolean(localStorage.getItem("sessionId"))) {
      dispatch(getuser(localStorage.getItem("userKey")))
    }
  }, [])
  const { _userDetails } = useSelector(state => state.userReducer)
  const [isLoggedin, setIsLoggedin] = useState(Boolean(localStorage.getItem("sessionId")))
  const history = useHistory()
  return (
    <div>
      <ToastContainer />
      <Helmet>
        <script src="../assets/js/owl.carousel.js" type="text/script"></script>
      </Helmet>
      <BrowserRouter>
        {/* {<div>Counter {counter}</div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>} */}
        <Header isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <Aboutpage />
          </Route>
          <Route path="/services">
            <Servicepage />
          </Route>
          <Route path="/contact">
            <Contactpage />
          </Route>
          <Route path="/login">{!isLoggedin ? <Loginpage setIsLoggedin={setIsLoggedin} /> : <Redirect to="/" />}</Route>
          <Route path="/signup">
            <Signuppage />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
