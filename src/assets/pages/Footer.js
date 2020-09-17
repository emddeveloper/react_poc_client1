import React from "react"

export default function Footer() {
  window.onscroll = function () {
    scrollFunction()
  }

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("movetop").style.display = "block"
    } else {
      document.getElementById("movetop").style.display = "none"
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return (
    <>
      <section className="w3l-footer-29-main" id="footer">
        <div className="footer-29">
          <div className="grids-forms-1 pb-5">
            <div className="container">
              <div className="grids-forms">
                <div className="main-midd">
                  <h4 className="title-head">Newsletter – Get Updates & Latest News</h4>
                </div>
                <div className="main-midd-2">
                  <form action="#" method="post" className="rightside-form">
                    <input type="email" name="email" placeholder="Enter your email" />
                    <button className="btn" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container pt-5">
            <div className="d-grid grid-col-4 footer-top-29">
              <div className="footer-list-29 footer-1">
                <h6 className="footer-title-29">About Us</h6>
                <ul>
                  <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
                </ul>
                <div className="main-social-footer-29">
                  <h6 className="footer-title-29">Social Links</h6>
                  <a href="#facebook" className="facebook">
                    <span className="fa fa-facebook"></span>
                  </a>
                  <a href="#twitter" className="twitter">
                    <span className="fa fa-twitter"></span>
                  </a>
                  <a href="#instagram" className="instagram">
                    <span className="fa fa-instagram"></span>
                  </a>
                  <a href="#google-plus" className="google-plus">
                    <span className="fa fa-google-plus"></span>
                  </a>
                  <a href="#linkedin" className="linkedin">
                    <span className="fa fa-linkedin"></span>
                  </a>
                </div>
              </div>
              <div className="footer-list-29 footer-2">
                <ul>
                  <h6 className="footer-title-29">Useful Links</h6>
                  <li>
                    <a href="contact.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="contact.html">Help Desk</a>
                  </li>
                  <li>
                    <a href="services.html">Projects</a>
                  </li>
                  <li>
                    <a href="contact.html">All Users</a>
                  </li>
                  <li>
                    <a href="contact.html">Support</a>
                  </li>
                </ul>
              </div>
              <div className="footer-list-29 footer-3">
                <div className="properties">
                  <h6 className="footer-title-29">Recent Projects</h6>
                  <a href="#">
                    <img src={require("../images/g2.jpg")} className="img-responsive" alt="" />
                    <p>We Are Leading International Consultiing Agency</p>
                  </a>
                  <a href="#">
                    <img src={require("../images/g8.jpg")} className="img-responsive" alt="" />
                    <p>Digital Marketing Agency all the foundational tools</p>
                  </a>
                  <a href="#">
                    <img src={require("../images/g6.jpg")} className="img-responsive" alt="" />
                    <p>Doloremque velit sapien labore eius itna</p>
                  </a>
                </div>
              </div>
              <div className="footer-list-29 footer-4">
                <ul>
                  <h6 className="footer-title-29">Quick Links</h6>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="#"> Blog</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom-copies text-center">
              <p className="copy-footer-29">
                © 2020 Companies. All rights reserved | Designed by <a href="#">EMD-Developer</a>
              </p>
            </div>
          </div>
        </div>

        <button onClick={topFunction} id="movetop" title="Go to top">
          <span className="fa fa-angle-up"></span>
        </button>
      </section>
    </>
  )
}
