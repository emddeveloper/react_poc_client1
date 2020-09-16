import React from "react"
import Carousel from "./Carousel"
import Features1 from "./Features1"
import Howwehelp from "./Howwehelp"
import News from "./News"
import Ourservices from "./Ourservices"
import Statscounter from "./Statscounter"
import Testimonials from "./Testimonials"

const Home = () => {
  return (
    <>
      <Carousel />
      <Features1/>
      <Howwehelp/>
      <Statscounter/>
      <Ourservices/>
      <Testimonials/>
      <News/>
    </>
  )
}

export default Home
