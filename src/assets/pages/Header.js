import React from "react"
import { Link } from "react-router-dom"
//react redux
import { useSelector, useDispatch } from "react-redux"
import { isLoggedout } from "../../store/actions"
const Header = props => {
  function handleLogout() {
    props.setIsLoggedin(false)
    dispatch(isLoggedout())
    localStorage.removeItem("sessionId")
    localStorage.removeItem("userKey")
  }
  const dispatch = useDispatch()
  const _userdetails = useSelector(state => state.userReducer)
  return (
    <section className="w3l-bootstrap-header">
      <nav className="navbar navbar-expand-lg navbar-light py-lg-3">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src={require("../images/vroom-logo.png")} alt="Your logo" title="Your logo" className="mlogo" /> Vroomwash
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon fa fa-bars"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent" data-toggle="collapse" data-target=".navbar-collapse">
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

              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              {_userdetails.isLoggedin ? (
                <li className="nav-item">
                  <div className="dropdown">
                    <a href="#" className="dropdown-toggle nav-link p-0" data-toggle="dropdown">
                      {_userdetails.profilePic != "" ? <img src={_userdetails.profilePic} alt="profile pic" className="header-profile-img" /> : <img src={require("../images/vroom/noprofile.jpg")} alt="profile pic" className="header-profile-img" />}
                      {_userdetails.name}
                    </a>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
                        Action
                      </a>
                      <a href="#" className="dropdown-item">
                        Another action
                      </a>
                      <a className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </a>
                    </div>
                  </div>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Header
