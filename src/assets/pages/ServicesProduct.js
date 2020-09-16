import React, { useEffect } from "react"

export default function ServicesProduct(props) {
  return (
    <>
      <section className="w3l-mobile-content-6 bg-white">
        <div className="mobile-info py-5">
          <div className="container py-md-3">
            <div className="heading text-center mx-auto">
              <h3 className="head">Building Better Products</h3>
              <p className="my-3 head"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.</p>
            </div>

            <div className="row mobile-info-inn mt-5 pt-3">
              <div className="col-lg-6 image-left">
                <img src={require("../images/g6.jpg")} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 mobile-right mt-lg-0 mt-5">
                <div className="row mobile-right-grids mb-lg-5 mb-4">
                  <div className="col-2 mobile-right-icon">
                    <div className="mobile-icon text-right mt-2">
                      <span className="fa fa-snowflake-o"></span>
                    </div>
                  </div>
                  <div className="col-10 mobile-right-info">
                    <h6>
                      <a href="#url">Material Engineering</a>
                    </h6>
                    <p>Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consectetur adipisicing elit.</p>
                  </div>
                </div>
                <div className="row mobile-right-grids mb-lg-5 mb-4">
                  <div className="col-2 mobile-right-icon">
                    <div className="mobile-icon text-right mt-2">
                      <span className="fa fa-flask"></span>
                    </div>
                  </div>
                  <div className="col-10 mobile-right-info">
                    <h6>
                      <a href="#url">Chemical Research</a>
                    </h6>
                    <p>Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consectetur adipisicing elit.</p>
                  </div>
                </div>
                <div className="row mobile-right-grids">
                  <div className="col-2 mobile-right-icon">
                    <div className="mobile-icon text-right mt-2">
                      <span className="fa fa-database"></span>
                    </div>
                  </div>
                  <div className="col-10 mobile-right-info">
                    <h6>
                      <a href="#url">Petroleum Engineering</a>
                    </h6>
                    <p>Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consectetur adipisicing elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
