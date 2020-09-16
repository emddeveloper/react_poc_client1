import React, { useEffect } from "react"

export default function Aboutskills(props) {
  return (
    <>
      <section className="w3l-about ">
        <div className="skills-bars py-5">
          <div className="container py-md-3">
            <div className="heading text-center mx-auto">
              <h3 className="head text-white">Show More Skills</h3>
              <p className="my-3 head text-white"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla mollis dapibus nunc, ut rhoncus turpis sodales quis. Integer sit amet mattis quam.</p>
            </div>
            <div className="row pt-3 mt-5">
              <div className="col-lg-5">
                <h3>More Than 25 Years Of Experience</h3>
                <p className="mt-3"> Quam id quisquam ipsam molestiae ad eius accusantium? Nulla dolorem perferendis inventore! posuere cubilia Curae; Nunc non risus in justo convallis feugiat. consectetur adipisicing elit. </p>
                <a className="btn btn-secondary btn-theme2 mt-4" href="services.html">
                  {" "}
                  Show More{" "}
                </a>
              </div>
              <div className="col-lg-7 pl-lg-5 mt-5 mt-lg-0">
                <div className="skills-bar-grids mb-4 pb-2">
                  <h4>VISION</h4>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-color" role="progressbar" style={{width: '80%'}}  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skills-bar-grids mb-4 pb-2">
                  <h4>PLAN</h4>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-color" role="progressbar" style={{width: '90%'}}  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skills-bar-grids mb-4 pb-2">
                  <h4>GROWTH</h4>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-color" role="progressbar" style={{width: '85%'}}  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skills-bar-grids mb-4 pb-2">
                  <h4>CONTINUOUS IMPROVEMENT</h4>
                  <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-color" role="progressbar" style={{width: '92%'}}  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
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
