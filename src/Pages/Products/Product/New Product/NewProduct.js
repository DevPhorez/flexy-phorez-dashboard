import { Breadcrumbs, Typography, Switch, FormGroup, FormControlLabel, Button } from "@mui/material";
import * as React from "react";

import { Link } from 'react-router-dom'
import Box from "../../../../Components/Box/Box";

import { products } from "../../../../Data/data";

function NewProduct () {
	
	const [show, setShow] = React.useState(false)
	
	const [title, setTitle] = React.useState('')
	const [description, setDescription] = React.useState('')
	
	const [price, setPrice] = React.useState( '0')
	const [offerPrice, setOfferPrice] = React.useState( '0')

	const [category, setCategory] = React.useState('همه')
	
	const [image, setImage] = React.useState('/Images/products/1.jpg')
	
	const [successAdd, setSuccessAdd] = React.useState(false)
	
	function AddNewProduct () {
		setSuccessAdd(true)
		
		const newProduct = {
			id: products.length + 1,
			title,
			description,
			image,
			price,
			offerPrice,
			rate: 5,
			category,
		}
		
		products.push(newProduct)
		
		setTimeout( () => {
			setSuccessAdd(false)
		}, 5000)
	}
	
	return (
		<div className='rtl'>
			<Breadcrumbs className='mb-1' aria-label="breadcrumb">
				<Link
					to={'/'}
					className='fw-bold text-dark-gray'
				>
					خانه
				</Link>
				<Link
					to={'/products'}
					className='fw-bold text-dark-gray'
				>
					محصولات
				</Link>
				<Typography className='fw-bold' color="text.primary">محصول جدید</Typography>
			</Breadcrumbs>
			
			<Box>
				<div className='my-4'>
					<p className='fw-bold opacity-75 h5' style={ { color: '#212b36' } }>جزییات پایه</p>
					<div className='mx-3'>
						<p className='fw-bold opacity-50 mt-3 mb-0' style={ { color: '#212b36' } }>عنوان</p>
						<div className='pt-3'>
							<div className="d-grid g-3">
								<input className='input' value={title} onChange={ event => setTitle(event.target.value) } required />
							</div>
						</div>
						
						<p className='fw-bold opacity-50 mt-4 mb-0' style={ { color: '#212b36' } }>توضیحات</p>
						<div className='pt-3'>
							<div className="d-grid g-3">
								<textarea className='input' rows={3} value={description} onChange={ event => setDescription(event.target.value) } />
							</div>
						</div>
					</div>
				</div>
			</Box>
			<Box>
				<div className='my-4'>
					<p className='fw-bold opacity-75 h5' style={ { color: '#212b36' } }>قیمت گذاری</p>
					<div className='mx-3'>
						<p className='fw-bold opacity-50 mt-3 mb-0' style={ { color: '#212b36' } }>قیمت</p>
						<div className='pt-3'>
							<div className="d-grid g-3">
								<input className='input' value={price} onChange={ event => setPrice(event.target.value) } required />
							</div>
						</div>
						<FormGroup>
							<FormControlLabel className='my-3 mx-0' control={<Switch inputProps={ { 'aria-label': 'Color switch demo' } } checked={show} color="info" onChange={ () => setShow(prevState => !prevState) } />} label="تخفیف" />
						</FormGroup>
						{
							show && (
								<>
									<p className='fw-bold opacity-50 mt-0 mb-0' style={ { color: '#212b36' } }>قیمت با تخفیف</p>
									<div className='pt-3'>
										<div className="d-grid g-3">
											<input className='input' value={offerPrice} onChange={ event => setOfferPrice(event.target.value) } />
										</div>
									</div>
								</>
							)
						}
					</div>
				</div>
			</Box>
			<Box>
				<div className='my-4 mx-3'>
					<p className='fw-bold opacity-75 h5 m-0' style={ { color: '#212b36' } }>دسته بندی</p>
					<div className='pt-3'>
						<div className="d-grid g-3">
							<input className='input' value={category} onChange={ event => setCategory(event.target.value) } />
						</div>
					</div>
				</div>
			</Box>
			<Box customClasses='14px'>
				<div className='mx-3'>
					<Button className={`${ successAdd ? 'text-white' : '' } m-0 fw-bold`} color={ successAdd ? 'success' : 'info' } variant={ successAdd ? 'contained' : 'outlined' } fullWidth onClick={ AddNewProduct }>
						{
							successAdd ? 'محصول اضافه شد' : 'اضافه کردن محصول جدید'
						}</Button>
				</div>
			</Box>
		</div>
	)
}

export default NewProduct