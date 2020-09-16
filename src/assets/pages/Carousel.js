import React, { useEffect } from "react"
import $ from "jquery"
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
export default function Carousel(props) {
  const options = {
    loop: true,
  margin: 0,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 3500,
  autoplaySpeed: 1000,
  autoplayHoverPause: false,
  nav: true,
  dots:false,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    480: {
      items: 1,
      nav: false
    },
    667: {
      items: 1,
      nav: true
    },
    1000: {
      items: 1,
      nav: true
    }
  }
}
  return (
    <>
      <section className="w3l-main-slider emd-carousel" id="home">
        <div className="companies20-content">
          <OwlCarousel className="owl-one owl-carousel owl-theme"  {...options} >
            <div className="item">
              <li>
                <div className="slider-info banner-view bg bg2" data-selector=".bg.bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg mr-auto">
                        <h5> We are industry Factory solutions</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, velit recusandae eum necessitatibus blanditiis porro cum</p>
                        <a className="btn btn-secondary btn-theme2 mt-md-5 mt-4" href="services.html">
                          {" "}
                          Our Services
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div className="item">
              <li>
                <div className="slider-info  banner-view banner-top1 bg bg2" data-selector=".bg.bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg mr-auto">
                        <h5>Fast and Reliable Electrical services</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, velit recusandae eum necessitatibus blanditiis porro cum</p>
                        <a className="btn btn-secondary btn-theme2 mt-md-5 mt-4" href="contact.html">
                          {" "}
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div className="item">
              <li>
                <div className="slider-info banner-view banner-top2 bg bg2" data-selector=".bg.bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg mr-auto">
                        <h5>A company involved in service, maintenance</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, velit recusandae eum necessitatibus blanditiis porro cum</p>
                        <a className="btn btn-secondary btn-theme2 mt-md-5 mt-4" href="about.html">
                          {" "}
                          About Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div className="item">
              <li>
                <div className="slider-info banner-view banner-top3 bg bg2" data-selector=".bg.bg2">
                  <div className="banner-info">
                    <div className="container">
                      <div className="banner-info-bg mr-auto">
                        <h5>We're thriving and building better products</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, velit recusandae eum necessitatibus blanditiis porro cum</p>
                        <a className="btn btn-secondary btn-theme2 mt-md-5 mt-4" href="services.html">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </OwlCarousel>
        </div>
      </section>
    </>
  )
}
