import React from "react"
import Aboutskills from "./Aboutskills"
import Ourteam from "./Ourteam"

export default function Aboutpage(props) {
  return (
    <>
      <section className="w3l-about-breadcrum">
        <div className="breadcrum-bg">
          <div className="container py-5">
            <p>
              <a href="index.html">Home</a> &nbsp; / &nbsp; About
            </p>
            <h2 className="my-3">About Us</h2>
            <p>Nulla dolorem perferendis inventore! posuere cubilia Curae; Nunc non risus in justo convallis feugiat. consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
      <section className="w3l-content-with-photo-4" id="about">
        <div id="content-with-photo4-block" className="pt-5">
          <div className="container py-md-3">
            <div className="cwp4-two row">
              <div className="cwp4-text col-lg-6">
                <h3>Our network</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>

                <ul className="cont-4">
                  <li>
                    <span className="fa fa-check"></span>Materiality & Interpretation
                  </li>
                  <li>
                    <span className="fa fa-check"></span>Design Management and Cultural Enterprise{" "}
                  </li>
                  <li>
                    <span className="fa fa-check"></span>Experience Design (XD)
                  </li>
                  <li>
                    <span className="fa fa-check"></span>Sound Design; Social Media and SEO{" "}
                  </li>
                </ul>
              </div>
              <div className="cwp4-image col-lg-6 pl-lg-5 mt-lg-0 mt-5">
                <img src={require("../images/g8.jpg")} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-features-5">
        <div className="features py-4">
          <div className="container pb-5">
            <div className="fea-gd-vv row ">
              <div className="float-lt feature-gd col-lg-4 col-sm-6">
                <div className="icon-info">
                  <h5>Our History 1998</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                </div>
              </div>
              <div className="float-mid feature-gd col-lg-4 col-sm-6 mt-sm-0 mt-4">
                <div className="icon-info">
                  <h5>Over 100 Key milestones</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                </div>
              </div>
              <div className="float-rt feature-gd col-lg-4 col-sm-6 mt-lg-0 mt-4">
                <div className="icon-info">
                  <h5>120 Customer service</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Aboutskills/>
    <Ourteam/>
    
    </>

  )
}
