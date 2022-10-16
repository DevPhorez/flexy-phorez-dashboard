import { Link, useParams } from "react-router-dom";
import { products } from "../../../../Data/data";
import { Breadcrumbs, Typography, Rating, Divider, Button, IconButton } from "@mui/material";

import * as React from "react";

import Box from "../../../../Components/Box/Box";
import Slider from "./Slider/Slider";
import { FiShoppingCart } from "react-icons/fi";

import Tabs from '../Tabs/Tabs'
import { AiFillStar } from "react-icons/ai";

function ProductDetail () {
	
	const params = useParams()
	
	const product = products.find( product => product.id === +params.productID )
	
	const relatedProducts = products.slice(0, 4)
	
	return (
		<div className='rtl'>
			<Breadcrumbs className='mb-1' aria-label="breadcrumb">
				<Link
					to={'/'}
					className='fw-bold text-dark-gray'
				>
					خانه
				</Link>
				<Typography className='fw-bold' color="text.primary">فورز شاپ</Typography>
			</Breadcrumbs>
			<p className="h3 mb-5">فورز شاپ</p>
			<Box>
				<div className="pt-3">
					<div className="p-3">
						<div className="row">
							<div className="col-12 col-lg-6">
								<Slider product={product} />
							</div>
							<div className="col-12 col-lg-6 mt-4 mt-lg-0">
								<span className="rounded-2 text-white" style={ { background: 'rgb(0, 194, 146)', padding: '3px 18px' } }>موجود</span>
								<h4 className='my-3'>بستنی قیفی کاکایویی</h4>
								<p style={ { color: 'rgb(153, 171, 180)' } }>
									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه . چاپگرها و متون بلکه . چاپگرها و مت									لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه . چاپگرها و متون بلکه . چاپگرها و مت چاپگرها و متون بلکه . چاپگرها و متون بلکه . چاپگرها و مت
								</p>
								<p className="h2 fw-bold">$546.00</p>
								<div className='d-flex align-items-center'>
									<Rating sx={ { direction: 'ltr' } } defaultValue={1} size="small" />
									<Link to={'comments'} className='text-dark text-decoration-underline me-1'>236 نظر</Link>
								</div>
								<div className='d-flex align-items-center' style={ { marginBottom: '2.2rem', marginTop: '2.2rem' } }>
									<p className='fw-bold ms-2 mb-0'>رنگ ها</p>
									<IconButton size='large' color={'info'}>
										<span className='rounded-circle' style={ { padding: '.6rem .6rem', border: '2px solid var(--info)', backgroundColor: 'rgba(3, 201, 215, 0.3)' } }></span>
									</IconButton>
									<IconButton size='large'>
										<span className='rounded-circle border-3 bg-dark' style={ { padding: '.6rem .6rem' }}></span>
									</IconButton>
									<IconButton size='large'>
										<span className='rounded-circle border-3 bg-warning' style={ { padding: '.6rem .6rem' }}></span>
									</IconButton>
								</div>
								<Divider color={'0000001E'} />
								<div className="row py-4">
										<div className="col-12 col-sm-6 pe-0">
											<div className='d-flex align-items-center'>
												<p className='fw-bold ms-2 mb-0'>سایز</p>
												<input type="text" className='input w-100'/>
											</div>
										</div>
										<div className="col-12 col-sm-6 mt-3 mt-sm-0">
											<div className='d-flex align-items-center'>
												<p className='fw-bold ms-2 mb-0'>تعداد</p>
												<input type="text" className='input w-100'/>
											</div>
										</div>
									</div>
								<Divider color={'0000001E'} />
								<Button color='info' variant='contained' className='text-white fw-bold mt-3' sx={ { fontSize: '1rem', '&:hover': { backgroundColor: 'var(--infoHover)' } } } fullWidth startIcon={<FiShoppingCart className='ms-2' />}>
									افزودن به سبد خرید
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Box>
			
			<Box customClasses='mb-0'>
				<div className="pt-3">
					<div className="p-3">
						<Tabs />
					</div>
				</div>
			</Box>
			
			<div>
				<p className="h3 my-5">محصولات مشابه</p>
				<div className="products row">
					{
						relatedProducts.map( product => (
							<div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3 pt-0">
								<div className="product">
									<Link to={`/products/${product.id}/${product.title.replace(' ', '-')}`}>
										<img className='img-fluid mb-4' src={`/Images/products/${product.image}`} alt={product.title}/>
									</Link>
									<div className="product-body">
										<p className='text-dark mb-0' style={ { fontSize: 13 } }>فورز شاپ</p>
										<Link to={`/products/${product.id}/${product.title.replace(' ', '-')}`}>
											<p className='text-dark' style={ { fontSize: 20 } }>{product.title}</p>
										</Link>
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
			</div>
		</div>
	)
}

export default ProductDetail