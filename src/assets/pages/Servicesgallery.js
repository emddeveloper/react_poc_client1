import React, { useEffect } from "react"

export default function Servicesgallery(props) {
  return (
    <>
      <div className="w3l-gallery2" id="gallery">
        <div className="insta-picks py-5">
          <div className="container py-md-3">
            <div className="row no-gutters masonry">
              <div className="col-md-4 col-sm-6 brick">
                <a  className="js-img-viwer d-block" data-caption="There are many variations of popular graphic design" data-id="lion">
                  <img src={require("../images/g10.jpg")} className="img-fluid insta-pic" alt="insta-pic" />
                  <div className="content-overlay"></div>
                  <div className="content-details fadeIn-top">
                    <h4>Automotive Parts</h4>
                  </div>
                </a>
              </div>
              <div className="col-md-4 col-sm-6 brick">
                <a  className="js-img-viwer d-block" data-caption="There are many variations of popular graphic design" data-id="camel">
                  <img src={require("../images/g9.jpg")} className="img-fluid insta-pic" alt="insta-pic" />
                  <div className="content-overlay"></div>
                  <div className="content-details fadeIn-top">
                    <h4>Chemical Research</h4>
                  </div>
                </a>
              </div>
              <div className="col-md-4 col-sm-6 brick">
                <a  className="js-img-viwer d-block" data-caption="There are many variations of popular graphic design" data-id="hippopotamus">
                  <img src={require("../images/g8.jpg")} className="img-fluid insta-pic" alt="insta-pic" />
                  <div className="content-overlay"></div>
                  <div className="content-details fadeIn-top">
                    <h4>Power & Energy</h4>
                  </div>
                </a>
              </div>
              <div className="col-md-4 col-sm-6 brick">
                <a  className="js-img-viwer d-block" data-caption="There are many variations of popular graphic design" data-id="koala">
                  <img src={require("../images/g6.jpg")} className="img-fluid insta-pic" alt="insta-pic" />
                  <div className="content-overlay"></div>
                  <div className="content-details fadeIn-top">
                    <h4>Mechanical Engineering</h4>
                  </div>
                </a>
              </div>
              <div className="col-md-4 col-sm-6 brick">
                <a  className="js-img-viwer d-block" data-caption="There are many variations of popular graphic design" data-id="bear">
                  <img src={require("../images/g7.jpg")} className="img-fluid insta-pic" alt="insta-pic" />
                  <div className="content-overlay"></div>
                  <div className="content-details fadeIn-top">
                    <h4>Construction Engineering</h4>
                  </div>
                </a>
              </div>
              <div className="col-md-4 col-sm-6 brick">
                <a  className="js-img-viwer d-block" data-caption="There are many variations of popular graphic design" data-id="rhinoceros">
                  <img src={require("../images/g5.jpg")} className="img-fluid insta-pic" alt="insta-pic" />
                  <div className="content-overlay"></div>
                  <div className="content-details fadeIn-top">
                    <h4>Maintenance</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
