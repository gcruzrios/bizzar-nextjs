import React from 'react'

const Slider = () => {

 const styles = {
    background:"url(assets/img/pictures/slider-1.jpg)",
       
 };

  return (
    <div>


{/* <!-- Start Slider 
		============================================= --> */}
		<div className="hero-area pos-rel mt-160 hero-overlay-2 hero-bg" style={styles}>
			<div className="hero-shapes">
				<span className="hero-c-1"></span>
				<span className="hero-c-2"></span>
				<span className="hero-c-3"></span>
				<span className="hero-c-4"></span>
				<span className="hero-c-5"></span>
				<img src="assets/img/dot/dot-3.png" className="hero-dot-3" alt="no image"/>
			</div>
			<div className="hero-single">
				<div className="container">
					<div className="hero-wpr pos-rel">
						<div className="row g-5">
							<div className="col-xl-7">
								<div className="hero-content element-center">
									<div className="hero-content-desc">
										<span className="hero-sub-title wh mb-20">
											<span className="hero-line"></span>
											Bringing Freshness to Every Corner.
										</span>
										<h2 className="hero-title">
											Our work is going to fill a large part of your life
										</h2>
										<div className="hero-btn">
											<a href="contact.html" className="btn-1 btn-md">
												Discover More
											</a>
											<a href="contact.html" className="btn-1 btn-second btn-md">
												Contact Us
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl-5">
								<div className="hero-pic">
									<img src="assets/img/person/hdr-2.png" alt="no image"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- End Slider --> */}

    </div>
  )
}

export default Slider