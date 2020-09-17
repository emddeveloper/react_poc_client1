import React from "react"

export default function Contactpage(props) {
  return (
    <>
      <section className="w3l-contact-breadcrum">
        <div className="breadcrum-bg">
          <div className="container py-5">
            <p>
              <a href="index.html">Home</a> &nbsp; / &nbsp; Contact
            </p>
            <h2 className="my-3">Contact Us</h2>

            <p>Nulla dolorem perferendis inventore! posuere cubilia Curae; Nunc non risus in justo convallis feugiat. consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
      <section className="w3l-contacts-2" id="contact">
        <div className="contacts-main">
          <div className="contant11-top-bg py-5">
            <div className="container py-md-3">
              <div className="d-grid contact section-gap">
                <div className="contact-info-left d-grid text-center">
                  <div className="contact-info">
                    <span className="fa fa-map-marker" aria-hidden="true"></span>
                    <h4>Address</h4>
                    <p>485 Pretty View Lane, Lorem ipsum, London, England</p>
                  </div>
                  <div className="contact-info">
                    <span className="fa fa-mobile" aria-hidden="true"></span>
                    <h4>Phone</h4>
                    <p>
                      <a href="tel:+44 7834 857829">+44 7834 857829</a>
                    </p>
                    <p>
                      <a href="tel:+44 987 654 321">+44 987 654 321</a>
                    </p>
                  </div>
                  <div className="contact-info">
                    <span className="fa fa-envelope-o" aria-hidden="true"></span>
                    <h4>Mail</h4>
                    <p>
                      <a href="mailto:mail@example.com" className="email">
                        mail@example.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:mail@example.com" className="email">
                        mail@example.com
                      </a>
                    </p>
                  </div>
                  <div className="contact-info">
                    <span className="fa fa-print" aria-hidden="true"></span>
                    <h4>Fax</h4>
                    <p>
                      <a href="tel:+44 7834 857829">+44 7834 857829</a>
                    </p>
                    <p>
                      <a href="tel:+44 987 654 321">+44 987 654 321</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-41-mian pb-5">
            <div className="container pb-md-3">
              <div className="d-grid align-form-map">
                <div className="form-inner-cont">
                  <h3 className="cont-head">Send Message Us</h3>
                  <form className="main-input">
                    <div className="top-inputs d-grid">
                      <input type="text" placeholder="Name" name="w3lName" id="w3lName" required="" />
                      <input type="email" name="email" placeholder="Email" id="w3lSender" required="" />
                    </div>
                    <input type="text" placeholder="Phone Number" name="w3lName" id="w3lName" required="" />
                    <textarea placeholder="Message" name="w3lMessage" id="w3lMessage" required=""></textarea>
                    <div className="text-right">
                      <button type="submit" className="btn btn-theme3">
                        Send Now
                      </button>
                    </div>
                  </form>
                </div>

                <div className="contact-right">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281066703!2d-0.24168144921176335!3d51.5287718408761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1569921526194!5m2!1sen!2sin" frameBorder="0" style={{border:'0px'}} allowFullScreen=""></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
