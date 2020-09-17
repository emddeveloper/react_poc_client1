import React from "react"

export default function Howwehelp(props) {
  return (
    <>
      <div className="w3l-about1 py-5" id="about">
        <div className="container py-lg-3">
          <div className="aboutgrids row">
            <div className="col-lg-6 aboutgrid2">
              <img src={require("../images/index-1.jpg")} alt="about image" className="img-fluid" />
            </div>
            <div className="col-lg-6 aboutgrid1 mt-lg-0 mt-4 pl-lg-5">
              <h4>How we can help you?</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, velit recusandae eum necessitatibus blanditiis porro cum, facere qui impedit dolor doloribus quis reiciendis ullam repellendus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, velit recusandae eum </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, velit recusandae eum necessitatibus blanditiis porro cum, facere qui impedit dolor doloribus quis reiciendis ullam repellendus.</p>

              <a className="btn btn-secondary btn-theme2" href="about.html">
                {" "}
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
