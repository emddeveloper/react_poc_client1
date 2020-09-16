import React, { useEffect } from "react"
import OurListServices from "./OurListServices"
import Servicesgallery from "./Servicesgallery"
import ServicesProduct from "./ServicesProduct"

export default function Servicepage(props) {
  return (
    <>
      <section className="w3l-service-breadcrum">
        <div className="breadcrum-bg">
          <div className="container py-5">
            <p>
              <a href="index.html">Home</a> &nbsp; / &nbsp; Services
            </p>
            <h2 className="my-3">Our Services</h2>
            <p>Nulla dolorem perferendis inventore! posuere cubilia Curae; Nunc non risus in justo convallis feugiat. consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
      <Servicesgallery />
      <OurListServices/>
      <ServicesProduct/>
    </>
  )
}
