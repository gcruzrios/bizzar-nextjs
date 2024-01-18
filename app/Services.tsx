import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div>
        
        {/* <!-- Start Service
		============================================= --> */}
		<div className="service-area de-padding">
			<div className="container">
				<div className="row mb-60 align-items-center">
					<div className="col-xl-8">
						<span className="hero-sub-title mb-20">
							<span className="hero-line"></span>
							Services we provide
						</span>
						<h2 className="heading-1">
							Building your digital <br />
							future with us
						</h2>
					</div>
					<div className="col-xl-4">
						<div className="service-botam text-right">
							<a href="about.html" className="btn-1 btn-md">
								See More
							</a>
						</div>
					</div>
				</div>
				<div className="service-wpr grid-4">
					<div className="service-box">
						<Image src="/assets/img/vector/wash.png" className="service-wash" width="535" height="724" alt="no image"/>
						<div className="service-icon pos-rel">
							<i className="flaticon-server"></i>
							<span className="service-c-1"></span>
						</div>
						<div className="service-desc">
							<h4 className="heading-4">Web Development</h4>
							<p>
								Don`t just take our word for it hear what our customers have to say about us
							</p>
							<a href="about.html" className="btn-text">
								Read More
							</a>
						</div>
					</div>
					<div className="service-box">
						<Image src="/assets/img/vector/wash.png" className="service-wash" width="535" height="724" alt="no image"/>
						<div className="service-icon pos-rel">
							<i className="flaticon-heart-condition"></i>
							<span className="service-c-1"></span>
						</div>
						<div className="service-desc">
							<h4 className="heading-4">Web Design</h4>
							<p>
								Don`t just take our word for it hear what our customers have to say about us
							</p>
							<a href="about.html" className="btn-text">
								Read More
							</a>
						</div>
					</div>
					<div className="service-box">
						<Image src="/assets/img/vector/wash.png" className="service-wash" width="535" height="724" alt="no image"/>
						<div className="service-icon pos-rel">
							<i className="flaticon-research"></i>
							<span className="service-c-1"></span>
						</div>
						<div className="service-desc">
							<h4 className="heading-4">Digital Marketing</h4>
							<p>
								Don`t just take our word for it hear what our customers have to say about us
							</p>
							<a href="about.html" className="btn-text">
								Read More
							</a>
						</div>
					</div>
					<div className="service-box">
						<Image src="/assets/img/vector/wash.png" className="service-wash" width="535" height="724" alt="no image"/>
						<div className="service-icon pos-rel">
							<i className="flaticon-startup-1"></i>
							<span className="service-c-1"></span>
						</div>
						<div className="service-desc">
							<h4 className="heading-4">Business Strategy</h4>
							<p>
								Don`t just take our word for it hear what our customers have to say about us
							</p>
							<a href="about.html" className="btn-text">
								Read More
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- End Service --> */}
    </div>
  )
}

export default Services