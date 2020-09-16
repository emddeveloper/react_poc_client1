import React from "react"
import "../assets/css/style-starter.css"
import Footer from "../assets/pages/Footer"
import Header from "../assets/pages/Header"
import $ from "jquery"
import { Helmet } from "react-helmet"
import Home from "../assets/pages/Home"
import {BrowserRouter,Switch,Route} from "react-router-dom"
//router pages
import Aboutpage from "../assets/pages/Aboutpage"
import Servicepage from "../assets/pages/Servicepage"
import Contactpage from "../assets/pages/Contactpage"
import Loginpage from "../assets/pages/Loginpage"
import Signuppage from "../assets/pages/Signuppage"
const App = () => {
  $(function () {
    $(".navbar-toggler").click(function () {
      $("body").toggleClass("noscroll")
    })
  })

  return (
    <div>
      <Helmet>
        <script src="../assets/js/owl.carousel.js" type="text/script"></script>
      </Helmet>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
