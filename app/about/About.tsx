import React from 'react'

const AboutContent = () => {
  return (
    <div>
	{/* <!-- Start About
		============================================= --> */}
		<div className="about-area-2 de-padding">
			<div className="container">
				<div className="about-wpr-2 grid-2">
					<div className="about-left-2">
						<div className="about-left-pics-2 pos-rel">
							<img src="assets/img/pictures/about-2-1.jpg" className="about-2-1" alt="no image" />
							<img src="assets/img/pictures/about-2-2.jpg" className="about-2-2" alt="no image" />
							<div className="about-exp-yr pos-rel">
								<div className="about-exp">
									<h2 className="heading-2">25+</h2>
									<h5 className="heading-5 mb-0">Years Experience</h5>
								</div>
								<img src="assets/img/person/person-1.png" alt="no image" className="about-exp-pic" />
							</div>
						</div>
					</div>
					<div className="about-right-2 pl-30">
						<div className="about-right-up mb-30">
							<span className="hero-sub-title mb-20">
								<span className="hero-line"></span>
								About us
							</span>
							<h2 className="heading-1 mb-0">
								Let’s build your success with our <span>Business</span> solution
							</h2>
						</div>
						<p className="mb-30">
							System is a term used to refer to an organized collection symbols and processes that may be used to operate on such symbols. Perspiciatis omnis natus error voupems accusa
						</p>
						<ul className="about-opt-list-2">
							<li><i className="ti-check"></i>Providing information To a client.</li>
							<li><i className="ti-check"></i>Performing market research.</li>
							<li><i className="ti-check"></i>Strategic planning.</li>
							<li><i className="ti-check"></i>Qualified engineer &amp; ideas</li>
						</ul>
						<div className="about-contact-2">
							<div className="about-cnt-icon">
								<i className="ti-microphone"></i>
							</div>
							<div className="about-cnt-text">
								<h5 className="heading-5">Do you have any question?</h5>
								<p className="mb-0">
									<a href="tel:9123456789">+91-123-4567-89</a>
								</p>
							</div>
						</div>
						<a href="about.html" className="btn-1 btn-md btn-border-2">
							Discover More
						</a>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- End About --> */}
        </div>

  )
}

export default AboutContent