import React, { useEffect } from "react"

export default function News(props) {
  return (
    <>
      <section className="news-1" id="blog">
        <div className="news py-5">
          <div className="container py-md-3">
            <div className="heading text-center mx-auto">
              <h3 className="head">Latest News & Events</h3>
              <p className="my-3 head"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.</p>
            </div>
            <div className="blog-grids row mt-5">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="blog-grid" id="zoomIn">
                  <a href="#">
                    <figure>
                      <img src={require("../images/g10.jpg")} className="img-fluid" alt="" />
                    </figure>
                  </a>
                  <div className="blog-info">
                    <h3>
                      <a href="#">Seven Outrageous Ideas Industry</a>{" "}
                    </h3>
                    <p> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc</p>
                    <ul>
                      <li>
                        <a href="#author">
                          <span className="fa fa-user-o mr-2"></span>Johnson smith
                        </a>
                      </li>
                      <li>
                        <a href="#author">
                          <span className="fa fa-calendar mr-2"></span>Jan 16, 2020
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mt-md-0 mt-4">
                <div className="blog-grid" id="zoomIn">
                  <a href="#">
                    <figure>
                      <img src={require("../images/g9.jpg")} className="img-fluid" alt="" />
                    </figure>
                  </a>
                  <div className="blog-info">
                    <h3>
                      <a href="#">Seven Doubts You Should Clarify About</a>{" "}
                    </h3>
                    <p> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc</p>
                    <ul>
                      <li>
                        <a href="#author">
                          <span className="fa fa-user-o mr-2"></span>Alexander
                        </a>
                      </li>
                      <li>
                        <a href="#author">
                          <span className="fa fa-calendar mr-2"></span>Jan 16, 2020
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-4">
                <div className="blog-grid" id="zoomIn">
                  <a href="#">
                    <figure>
                      <img src={require("../images/g8.jpg")} className="img-fluid" alt="" />
                    </figure>
                  </a>
                  <div className="blog-info">
                    <h3>
                      <a href="#">Why You Should Not Go To Industry</a>{" "}
                    </h3>
                    <p> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc</p>
                    <ul>
                      <li>
                        <a href="#author">
                          <span className="fa fa-user-o mr-2"></span>Elizabeth ker
                        </a>
                      </li>
                      <li>
                        <a href="#author">
                          <span className="fa fa-calendar mr-2"></span>Jan 16, 2020
                        </a>
                      </li>
                    </ul>
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
