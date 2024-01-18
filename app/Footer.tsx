import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>

{/* <!-- Start Footer 
	============================================= --> */}
	<footer className="footer overflow-hidden">
		<div className="footer-up de-padding dbr-top">
			<div className="container">
				<div className="footer-upr-content de-pb">
					<div className="row">
						<div className="col-xl-5">
							<h2 className="heading-2 mb-40">
								Some info about our <br /> awesome services
							</h2>
							<h4 className="heading-4 mb-0">
								<Link href="/contact">CONTACT US</Link>
							</h4>
						</div>
						<div className="col-xl-3">
							<div className="footer-widget pl-30">
								<p className="mb-30">
									We work 6 days a week and 1 day off.Contact us for any info.
								</p>
								<ul className="footer-hours">
									<li><span> Sun - Thu :</span> <span>9.00 - 20.00</span> </li>
									<li><span> Fri - Sat :</span> <span>Closed</span></li>
								</ul>
							</div>
						</div>
						<div className="col-xl-4">
							<div className="footer-widget pl-60">
								<p className="mb-30">
									Subscribe our newsletter to get our latest update &amp;
									news
								</p>
								<div className="subscribe-area">
									<form>
										<span className="btn-shape"></span>
										<input type="text" className="input-style-4" placeholder="Enter Email..."/>
										<button type="submit" className="btn-subs">
											<i className="fa-solid fa-chevron-right"></i>
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row g-5">
					<div className="col-xl-4 col-lg-6 col-md-6">
						<div className="footer-widget about-us pr-60">
							<p className="mb-0">
								Lorem ipsum dolor sit consectetur 
								adipiscing elit, sed do eiusmod temp 
								sed do eiusmod temp <a href="about.html" className="footer-know-more"><b>To know more about our awesome serivce</b></a>
								Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem ipsum
							</p>
						</div>
					</div>
					<div className="col-xl-2 col-lg-6 col-md-6">
						<div className="footer-widget footer-link">
							<ul className="footer-list">
								<li>
									<Link href="/about">
										<i className="fa-solid fa-chevron-right"></i>
										About Us 
									</Link>
								</li>
								<li>
									<Link href="/services">
										<i className="fa-solid fa-chevron-right"></i>
										Services
									</Link>
								</li>
								<li>
									<Link href="/portfolio">
										<i className="fa-solid fa-chevron-right"></i>
										Portfolio
									</Link>
								</li>
								<li>
									<Link href="/contact">
										<i className="fa-solid fa-chevron-right"></i>
										Contact us
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-2 col-lg-6 col-md-6">
						<div className="footer-widget footer-link">
							<ul className="footer-list">
								<li>
									<Link href="/blog">
										<i className="fa-solid fa-chevron-right"></i>
										Latest News
									</Link>
								</li>
								<li>
									<Link href="#npm ">
										<i className="fa-solid fa-chevron-right"></i>
										Case Study
									</Link>
								</li>
								<li>
									<Link href="#">
										<i className="fa-solid fa-chevron-right"></i>
										App Development
									</Link>
								</li>
								<li>
									<Link href="#">
										<i className="fa-solid fa-chevron-right"></i>
										Shop
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-xl-4 col-lg-6 col-md-6">
						<div className="footer-gallery cs-gap-2 grid-4">
							<Image src="/assets/img/pictures/de-1.jpg" width="80" height="80" alt="no image"/>
							<Image src="/assets/img/pictures/de-2.jpg" width="80" height="80" alt="no image"/>
							<Image src="/assets/img/pictures/de-1.jpg" width="80" height="80" alt="no image"/>
							<Image src="/assets/img/pictures/de-2.jpg" width="80" height="80" alt="no image"/>
							<Image src="/assets/img/pictures/de-1.jpg" width="80" height="80" alt="no image"/>
							<Image src="/assets/img/pictures/de-2.jpg" width="80" height="80" alt="no image"/>
							<Image src="/assets/img/pictures/de-1.jpg" width="80" height="80" alt="no image"/>
							<Image src="/assets/img/pictures/de-2.jpg" width="80" height="80" alt="no image"/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="copyright py-5">
			<div className="container">
				<div className="copyright-element d-flex align-items-center justify-content-between">
					<p className="mb-0">Copyright 2023 Bizzar . All Rights Reserved By Templatebucket</p>
					<ul className="footer-social">
						<li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
						<li><a href="#"><i className="fab fa-instagram"></i></a></li>
						<li><a href="#"><i className="fab fa-twitter"></i></a></li>
						<li><a href="#"><i className="fab fa-youtube"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
	{/* <!-- End Footer --> */}
    
        
    </div>
  )
}

export default Footer