import React from "react"
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <section className="w3l-bootstrap-header">
      <nav className="navbar navbar-expand-lg navbar-light py-lg-3 py-2">
        <div className="container">
          <a className="navbar-brand" href="index.html">
          <img src={require("../images/vroom-logo.png")} alt="Your logo" title="Your logo" style={{ height: "35px" }} /> Vroomwash
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon fa fa-bars"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>

              <li className="nav-item">
              <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/login">
                  Login / Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Header
