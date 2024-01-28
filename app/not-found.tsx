import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
<main className="main d-flex align-items-center justify-content-center h-100vh">
		{/* <!-- Start Faq
		============================================= --> */}
		<div className="page-not-found de-padding">
			<div className="container">
				<div className="page-not-wpr grid-2">
					<div className="page-not-left">
						<Image src="/assets/img/vector/404.webp" width="563" height="450" className="d-block text-center" alt="thumb"/>
					</div>
					<div className="page-not-right d-flex align-items-center">
						<div className="page-not-righ-ele">
							<h2 className="headin-1">404</h2>
							<h4 className="heading-4">Look like you are lost</h4>
							<p className="mb-40">the page you are looking for not Found!</p>
							<Link href="/" className="btn-3">Go Back</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- End Faq --> */}
	</main>	
	

  )
}

export default NotFound