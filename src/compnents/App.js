import React, { useState } from "react"
import "../assets/css/style-starter.css"
import Footer from "../assets/pages/Footer"
import Header from "../assets/pages/Header"
import $ from "jquery"
import { Helmet } from "react-helmet"
import Home from "../assets/pages/Home"
import { BrowserRouter, Switch, Route } from "react-router-dom"
//router pages
import Aboutpage from "../assets/pages/Aboutpage"
import Servicepage from "../assets/pages/Servicepage"
import Contactpage from "../assets/pages/Contactpage"
import Loginpage from "../assets/pages/Loginpage"
import Signuppage from "../assets/pages/Signuppage"
import ForgotPassword from "../assets/pages/ForgotPassword"
const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(Boolean(localStorage.getItem("sessionId")))
  return (
    <div>
      <Helmet>
        <script src="../assets/js/owl.carousel.js" type="text/script"></script>
      </Helmet>
      <BrowserRouter>
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
          <Route path="/login">
            <Loginpage setIsLoggedin={setIsLoggedin} />
          </Route>
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
