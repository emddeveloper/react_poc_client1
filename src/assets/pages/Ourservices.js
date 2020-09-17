import React from "react"

export default function Ourservices(props) {
  return (
    <>
      <section className="w3l-features-8">
           <div className="features py-5" id="features">
			<div className="container py-md-3">
				
				<div className="heading text-center mx-auto">
					<h3 className="head">Industries Served</h3>
					<p className="my-3 head"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
					  Nulla mollis dapibus nunc, ut rhoncus
					  turpis sodales quis. Integer sit amet mattis quam.</p>
					  
				  </div>
			   <div className="fea-gd-vv text-center row mt-5 pt-3">
				   	
					<div className="col-lg-4 col-md-6">	
						<div className="float-top">	
							<a href="services.html"><img src={require("../images/g1.jpg")} className="img-responsive" alt=""/></a>
							<div className="float-lt feature-gd">	
									<h3><a href="services.html">Metallurgical Engineering</a> </h3>
										<p> Consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et.dolor sit amet </p>
										<a className="btn btn-secondary btn-theme4 mt-4" href="services.html"> More Details</a>
									</div>
								</div>
					</div>
					<div className="col-lg-4 col-md-6 mt-md-0 mt-5">	
						<div className="float-top">	
							<a href="services.html"><img  src={require("../images/g2.jpg")} className="img-responsive" alt=""/></a>
							<div className="float-lt feature-gd">	
									<h3><a href="services.html">Metal Working Tools</a> </h3>
									<p> Consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et.dolor sit amet </p>
									<a className="btn btn-secondary btn-theme4 mt-4" href="services.html"> More Details</a>
								</div>
						</div>
					</div>
						<div className="col-lg-4 col-md-6 mt-lg-0 mt-5">	
							<div className="float-top-1 text-left pl-4 pr-4 py-5">	
								<h4 className="">Jobs</h4>
								<p className="mt-2"> Consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et.dolor sit amet </p>
								<div className="top-right mt-4 pt-2">
									<div className="icon-left pt-1">
										<span className="fa fa-arrow-right"></span>
									</div>
									<div className="icon-text-left">
										<h3 className=""><a href="services.html">Metal Working Tools</a> </h3>
									<p className="mt-2"> Consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et.dolor sit amet </p>
									</div>
								</div>
								<div className="top-right mt-3">
									<div className="icon-left pt-1">
										<span className="fa fa-arrow-right"></span>
									</div>
									<div className="icon-text-left">
										<h3 className=""><a href="services.html">Metal Working Tools</a> </h3>
									<p className="mt-2"> Consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et.dolor sit amet </p>
									</div>
								</div>
								</div>	
						</div>
						<div className="col-lg-4 col-md-6 mt-5">	
							<div className="float-top">	
							<a href="services.html"><img src={require("../images/g3.jpg")} className="img-responsive" alt=""/></a>
							<div className="float-lt feature-gd">	
									<h3><a href="services.html">Grinding & Lapping</a> </h3>
									<p> Consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et.dolor sit amet </p>
									<a className="btn btn-secondary btn-theme4 mt-4" href="services.html"> More Details</a>
								</div>
							</div>
					</div>
					<div className="col-lg-4 col-md-6 mt-5">
						<div className="float-top">		
							<a href="services.html"><img src={require("../images/g7.jpg")} className="img-responsive" alt=""/></a>
							<div className="float-lt feature-gd">	
									<h3><a href="services.html">Precision Metal Cutting</a> </h3>
									<p> Consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et.dolor sit amet </p>
									<a className="btn btn-secondary btn-theme4 mt-4" href="services.html"> More Details</a>
								</div>
						</div>
					</div>
						<div className="col-lg-4 col-md-6 mt-5">	
							<div className="float-top">
								<a href="services.html"><img src={require("../images/g6.jpg")} className="img-responsive" alt=""/></a>
								<div className="float-lt feature-gd">	
										<h3><a href="services.html">Automotive Industry Line</a> </h3>
										<p> Consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et.dolor sit amet </p>
										<a className="btn btn-secondary btn-theme4 mt-4" href="services.html"> More Details</a>
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