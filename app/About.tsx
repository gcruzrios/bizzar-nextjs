import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div>
{/* <!-- Start About
		============================================= --> */}
		<div className="about-area de-padding">
			<div className="container">
				<div className="about-wpr grid-2">
					<div className="about-left">
						<div className="about-pics pos-rel">
							<Image src="/assets/img/pictures/about-1.jpg" width="400" height="470" className="about-1" alt="no image"/>
							<Image src="/assets/img/pictures/about-2.jpg" width="300" height="200" className="about-2" alt="no image"/>
							<Image src="/assets/img/pictures/about-3.jpg" width="280" height="200" className="about-3" alt="no image"/>
							<Image src="/assets/img/vector/about.png" width="250" height="227" className="about-v-4" alt="no image"/>
							<div className="pl">
								<a href="#" className="item popup-youtube play-bt">
									<i className="ti-control-play"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="about-right pl-60">
						<span className="hero-sub-title mb-20">
							<span className="hero-line"></span>
							About us
						</span>
						<h2 className="heading-1 mb-20">
							Digital Marketing Business promotional Advantage
						</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolore quasi ducimus animi natus iste, doloribus, non debitis quas quia quisquam culpa numquam quam error velit fugit voluptatibus odit. Labore.
						</p>
						<p className="custom-text mb-30">
							our company provide high quality business idea
						</p>
						<div className="about-opt mb-40">
							<ul className="about-opt-list">
								<li><i className="ti-check"></i>Providing Information To A Client.</li>
								<li><i className="ti-check"></i>Performing Market Research.</li>
								<li><i className="ti-check"></i>Strategic Planning.</li>
							</ul>
							<div className="about-one-opt">
								<h3><span className="about-counter">150</span>K+</h3>
								<h6>Clients Worldwide</h6>
							</div>
						</div>
						<a href="about.html" className="btn-1 btn-md">
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

export default About