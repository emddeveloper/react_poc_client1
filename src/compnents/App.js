import React from "react"
import "../assets/css/style-starter.css"
import Footer from "../assets/pages/Footer"
import Header from "../assets/pages/Header"
import $ from "jquery"
import { Helmet } from "react-helmet"
const App = () => {
  $(function () {
    $(".navbar-toggler").click(function () {
      $("body").toggleClass("noscroll")
    })
  })
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="../assets/css/style-starter.css" />
        <script src="../assets/js/owl.carousel.js" type="script"></script>
      </Helmet>
      <Header />
      <Footer />
    </div>
  )
}

export default App
