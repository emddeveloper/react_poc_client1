import React, { useEffect } from "react"

export default function Ourteam(props) {
  return (
    <>
      	<section className="w3l-team-main">
		<div className="team py-5">
			<div className="container py-lg-5">
				<div className="heading text-center mx-auto">
					<h3 className="head">Our Management</h3>
					<p className="my-3 head"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
					  Nulla mollis dapibus nunc, ut rhoncus
					  turpis sodales quis. Integer sit amet mattis quam.</p>
					  
					</div>
					<div className="row team-row pt-3 mt-5">
							<div className="col-lg-3 col-sm-6 team-wrap">
									<div className="team-info">
										<div className="column position-relative">
											<a href="#url"><img src={require("../images/t1.jpg")} alt="" className="img-fluid team-image" /></a>
										</div>
										<div className="column-btm">
											<h3 className="name-pos"><a href="#url">Mickel Zaman</a></h3>
											<p>Chief Engineering Officer</p>
											<div className="social">
												<a href="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true"></span></a>
												<a href="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true"></span></a>
											</div>
									</div>
								</div>
							</div>
							
				
							<div className="col-lg-3 col-sm-6 team-wrap mt-sm-0 pt-sm-0 mt-4 pt-2">
			
									<div className="team-info">
											<div className="column position-relative">
												<a href="#url"><img src={require("../images/t2.jpg")} alt="" className="img-fluid team-image" /></a>
											</div>
											<div className="column-btm">
												<h3 className="name-pos"><a href="#url">Paul Croves</a></h3>
												<p>Chief Technology Officer</p>
												<div className="social">
													<a href="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true"></span></a>
													<a href="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true"></span></a>
												</div>
										</div>
									</div>
							</div>
							
				
							<div className="col-lg-3 col-sm-6 team-wrap mt-lg-0 pt-lg-0 mt-4 pt-2">
									<div className="team-info">
											<div className="column position-relative">
												<a href="#url"><img src={require("../images/t3.jpg")} alt="" className="img-fluid team-image" /></a>
											</div>
											<div className="column-btm">
												<h3 className="name-pos"><a href="#url">Ricardo Spencer</a></h3>
												<p>Marketing Manager</p>
												<div className="social">
													<a href="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true"></span></a>
													<a href="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true"></span></a>
												</div>
										</div>
									</div>
								
							</div>
							
							
				
							<div className="col-lg-3 col-sm-6 team-wrap mt-lg-0 pt-lg-0 mt-4 pt-2">
			
									<div className="team-info">
											<div className="column position-relative">
												<a href="#url"><img src={require("../images/t4.jpg")} alt="" className="img-fluid team-image" /></a>
											</div>
											<div className="column-btm">
												<h3 className="name-pos"><a href="#url">Marko Dugonji</a></h3>
												<p>Systems Department</p>
												<div className="social">
													<a href="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true"></span></a>
													<a href="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true"></span></a>
												</div>
										</div>
									</div>
							</div>
							
							<div className="col-lg-3 col-sm-6 team-wrap mt-4 pt-2">
									<div className="team-info">
										<div className="column position-relative">
											<a href="#url"><img src={require("../images/t5.jpg")} alt="" className="img-fluid team-image" /></a>
										</div>
										<div className="column-btm">
											<h3 className="name-pos"><a href="#url">Anthony</a></h3>
											<p>Engineering Officer</p>
											<div className="social">
												<a href="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true"></span></a>
												<a href="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true"></span></a>
											</div>
									</div>
								</div>
							</div>
							
				
							<div className="col-lg-3 col-sm-6 team-wrap mt-4 pt-2">
			
									<div className="team-info">
											<div className="column position-relative">
												<a href="#url"><img src={require("../images/t6.jpg")} alt="" className="img-fluid team-image" /></a>
											</div>
											<div className="column-btm">
												<h3 className="name-pos"><a href="#url">Emma Stone</a></h3>
												<p>Ceo</p>
												<div className="social">
													<a href="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true"></span></a>
													<a href="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true"></span></a>
												</div>
										</div>
									</div>
							</div>
							
				
							<div className="col-lg-3 col-sm-6 team-wrap mt-4 pt-2">
									<div className="team-info">
											<div className="column position-relative">
												<a href="#url"><img src={require("../images/t7.jpg")} alt="" className="img-fluid team-image" /></a>
											</div>
											<div className="column-btm">
												<h3 className="name-pos"><a href="#url">Rhoda Byrd</a></h3>
												<p>Technology Officer</p>
												<div className="social">
													<a href="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true"></span></a>
													<a href="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true"></span></a>
												</div>
										</div>
									</div>
								
							</div>
							
							
				
							<div className="col-lg-3 col-sm-6 team-wrap mt-4 pt-2">
			
									<div className="team-info">
											<div className="column position-relative">
												<a href="#url"><img src={require("../images/t8.jpg")} alt="" className="img-fluid team-image" /></a>
											</div>
											<div className="column-btm">
												<h3 className="name-pos"><a href="#url">Max Stoiber</a></h3>
												<p>Manager</p>
												<div className="social">
													<a href="#facebook" className="facebook"><span className="fa fa-facebook" aria-hidden="true"></span></a>
													<a href="#twitter" className="twitter"><span className="fa fa-twitter" aria-hidden="true"></span></a>
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