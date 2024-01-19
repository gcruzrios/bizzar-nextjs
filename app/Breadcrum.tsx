'use client'
import Link from 'next/link';
import React from 'react'

import { usePathname } from 'next/navigation'

interface Props{
    params:{enlace:string[]};
    busquedaParametro: {ordenProducto:string}
}

const Breadcrum = () => {
	
	//const location = useLocation();
    const styles = {
       background:"url(assets/img/pictures/breadcrumb.jpg)",
        
    };

	
    const pathname = usePathname()
  return (
    <div>
        {/* <!-- Start Breadcrumb
		============================================= --> */}
		<div className="site-breadcrumb" style={styles}>
			<div className="container">
			
				<div className="site-breadcrumb-wpr">
					{/* <h2 className="breadcrumb-title">Page: </h2> */}
					<ul className="breadcrumb-menu clearfix">
						<li>
							<Link href="/">Home</Link>
						</li>
						
						<li className="active">{pathname}</li>
						
					</ul>
				</div>
				
			</div>
			
		</div>
        {/* <!-- End Breadcrumb --> */}
    </div>
  )
}

export default Breadcrum