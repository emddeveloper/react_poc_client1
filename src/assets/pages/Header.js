import React from "react"

const Header = () => {
  return (
    <section className="w3l-bootstrap-header">
      <nav className="navbar navbar-expand-lg navbar-light py-lg-3 py-2">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <span className="fa fa-cog"></span> Companies
          </a>
          <a className="navbar-brand" href="#index.html">
            <img src={require("../images/vroom-logo.png")} alt="Your logo" title="Your logo" style={{ height: "35px" }} />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon fa fa-bars"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="services.html">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="contact.html">
                  Contact
                </a>
              </li>
            </ul>
            <form action="#" className="form-inline position-relative my-2 my-lg-0">
              <input className="form-control search" type="search" placeholder="Search here..." aria-label="Search" required="" />
              <button className="btn btn-search position-absolute" type="submit">
                <span className="fa fa-search" aria-hidden="true"></span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Header
