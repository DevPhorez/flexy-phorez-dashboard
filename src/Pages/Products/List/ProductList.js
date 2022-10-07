import { products } from "../../../Data/data";
import { AiFillStar } from "react-icons/ai";
import * as React from "react";

function ProductList () {
	return (
		<div className="products row">
			{
				products.map( product => (
					<div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
						<div className="product">
							<img className='img-fluid mb-4' src={`/Images/products/${product.image}`} alt={product.title}/>
							<div className="product-body">
								<p className='text-dark mb-0' style={ { fontSize: 13 } }>فورز شاپ</p>
								<p className='text-dark' style={ { fontSize: 20 } }>{product.title}</p>
								<div className='product-sub-body'>
									<div style={ { color: 'var(--yellow)' } }>
										{(() => {
											const arr = []
											for (let i = 0; i < product.rate; i++) {
												arr.push(<AiFillStar />)
											}
											return arr
										})()}
									</div>
									<p>${product.price}</p>
								</div>
							</div>
						</div>
					</div>
				))
			}
		</div>
	)
}

export default ProductList