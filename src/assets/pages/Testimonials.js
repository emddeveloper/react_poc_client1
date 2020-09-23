import React from "react"

export default function Testimonials(props) {
  return (
    <>
      <section className="w3l-customers-4" id="testimonials">
        <div id="customers4-block" className="py-5">
          <div className="container py-md-3">
            <div id="customerhnyCarousel" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#customerhnyCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#customerhnyCarousel" data-slide-to="1"></li>
                <li data-target="#customerhnyCarousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner pb-5 mb-md-5 pt-md-5">
                <div className="carousel-item active">
                  <div className="section-title">
                    <div className="item-top">
                      <div className="item text-center">
                        <div className="imgTitle">
                          <img src={require("../images/c1.jpg")} className="img-responsive" alt="" />
                        </div>
                        <h6 className="mt-3">Steve Smith</h6>
                        <p className="">Client</p>
                        <h5>" Magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor " </h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="section-title">
                    <div className="item-top">
                      <div className="item text-center">
                        <div className="imgTitle">
                          <img src={require("../images/c2.jpg")} className="img-responsive" alt="" />
                        </div>
                        <h6 className="mt-3">Jessey Rider</h6>
                        <p className="">Worker</p>
                        <h5>" Magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor " </h5>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <div className="section-title">
                    <div className="item-top">
                      <div className="item text-center">
                        <div className="imgTitle">
                          <img src={require("../images/c3.jpg")} className="img-responsive" alt="" />
                        </div>
                        <h6 className="mt-3">Mark Stoins</h6>
                        <p className="">Engineer</p>
                        <h5>" Magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor " </h5>
                      </div>
                    </div>
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
