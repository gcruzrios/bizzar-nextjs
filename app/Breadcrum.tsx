import React from 'react'

const Breadcrum = () => {

    const styles = {
       background:"url(assets/img/pictures/breadcrumb.jpg)",
        
    };
    
  return (
    <div>
        {/* <!-- Start Breadcrumb
		============================================= --> */}
		<div className="site-breadcrumb" style={styles}>
			<div className="container">
				<div className="site-breadcrumb-wpr">
					<h2 className="breadcrumb-title">About Us</h2>
					<ul className="breadcrumb-menu clearfix">
						<li><a href="index.html">Home</a></li>
						<li className="active">About Us</li>
					</ul>
				</div>
			</div>
		</div>
        {/* <!-- End Breadcrumb --> */}
    </div>
  )
}

export default Breadcrum