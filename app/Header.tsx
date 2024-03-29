'use client'
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// const logosize{

// 	width:'88',
// 	height:'60'
//  }	

const Header = () => {

  const {status, data:session } = useSession();

  return (
    <div>
{/* 
<!-- Start header
    ============================================= --> */}
    <header className="header header-before-off">
		<div className="main-wrapper">
			<div className="navbar navbar-expand-lg bsnav bsnav-sticky bsnav-sticky-slide bsnav-transparent">
				<span className="navbar-bar-shape"></span>
				<div className="navbar-container">
					<div className="navbar-extra-logo">
						<Link href="/">
							<Image  src="/assets/img/logo/logo-white.png" width="188" height="60" className="logo-outside" alt="thumb"/>
						</Link>
					</div>
					<div className="top-header-menu">
						<div className="top-bar-area pos-rel topbar-white">
							<span className="top-bar-shape"></span>
							<div className="row">
								<div className="col-xl-10 col-lg-6">
									<div className="top-box-wrp d-flex justify-content-md-center align-items-center">
										<div className="top-box top-location mr-30">
											<i className="fa-solid fa-location-dot"></i>
											<span>Oficentro Dent San José, Costa Rica</span>
										</div>
										<div className="top-email top-box mr-30">
											<i className="fa-solid fa-envelope"></i>
											<span>support@gcruzrios.com</span>
										</div>
										<div className="top-phone top-box">
											<i className="fa-solid fa-phone"></i>
											<span> + 506 84925499</span>
										</div>
									</div>
								</div>
								<div className="col-xl-2 col-lg-6">
									<div className="top-bar-social">
										<ul className="top-social">
											<li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
											<li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
											<li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
											<li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="navbar-menu-opt">
							<div className="navbar-brand-tog">
								<Link className="navbar-brand g-nop" href="/">
									<Image src="/assets/img/logo/logo-white.png" width="188" height="60" className="logo-display" alt="thumb"/>
									<Image src="/assets/img/logo/logo.png" width="188" height="60"  className="logo-scrolled" alt="thumb"/> 
								</Link>
								<button className="navbar-toggler toggler-spring">
									<span className="navbar-toggler-icon"></span>
								</button>
							</div>
							<div className="collapse navbar-collapse justify-content-md-between">
								<Link className="navbar-brand nop" href="/">
									<Image src="/assets/img/logo/logo-white.png" width="188" height="60" className="logo-display" alt="thumb"/>
									<Image src="/assets/img/logo/logo.png" width="188" height="60" className="logo-scrolled" alt="thumb"/>
								</Link>
								<ul className="navbar-nav navbar-mobile justify-content-md-center w-100">
									<li className="nav-item dropdown fadeup">
										<Link className="nav-link" href="/">Home <i className="ti-plus"></i></Link>
										
									</li>
									<li className="nav-item dropdown fadeup">
										<Link className="nav-link" href="/services">Services <i className="ti-plus"></i></Link>
										
									</li>
									<li className="nav-item"><a className="nav-link" href="/about">About Us <i className="ti-plus"></i></a></li>
									{/* <li className="nav-item dropdown fadeup">
										<a className="nav-link" href="#">Shop <i className="ti-plus"></i></a>
										<ul className="navbar-nav">
											<li className="nav-item"><a className="nav-link" href="shop.html">Shop</a></li>
											<li className="nav-item"><a className="nav-link" href="product-single.html">Shop Single</a></li>
											<li className="nav-item"><a className="nav-link" href="cart.html">Cart</a></li>
											<li className="nav-item"><a className="nav-link" href="checkout.html">Checkout</a></li>
										</ul>
									</li> */}
									<li className="nav-item dropdown fadeup">
										<Link className="nav-link" href="/blog">Blog <i className="ti-plus"></i></Link>
										
									</li>
									<li className="nav-item">
										<Link className="nav-link" href="/contact">Contact</Link></li>
								</ul>
								<div className="search-cart nav-profile">
									{status === 'authenticated' && <div>{session.user!.name}{" "}
									<Link href='/api/auth/signout'><i className="fas fa-sign-out-alt"></i></Link>
									</div>}
									{status === 'unauthenticated' && <Link href="/api/auth/signin" className="btn-1 btn-sm justify-content: space-between;"><i className="fas fa-sign-in-alt"></i>  Login</Link>
									}


									{/* <Link href="/api/auth/signin" className="btn-1 btn-sm">Login</Link> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bsnav-mobile">
				<div className="bsnav-mobile-overlay"></div>
				<div className="navbar"></div>
			</div>
		</div>
    </header>
    {/* <!-- End header --> */}

    </div>
  )
}

export default Header