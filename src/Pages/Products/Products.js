import { Breadcrumbs, Link, Typography, Button, ButtonGroup } from '@mui/material'

import { FaList, FaTable } from 'react-icons/fa'

import { Link as RLink } from 'react-router-dom'

import './Products.css'
import * as React from "react";
import ProductList from "./List/ProductList";
import ProductTable from "./Table/ProductTable";

function Products () {
	
	const [displayStatus, setDisplayStatus] = React.useState('list')
	
	return (
		<div className='rtl'>
			<Breadcrumbs className='mb-1' aria-label="breadcrumb">
				<Link
					underline="hover"
					color="inherit"
					href="/material-ui/getting-started/installation/"
					className='fw-bold'
				>
					خانه
				</Link>
				<Typography className='fw-bold' color="text.primary">محصولات</Typography>
			</Breadcrumbs>
			<div className='d-flex align-items-center justify-content-between'>
				<h4 className='me-3'>محصولات</h4>
				<div className='d-flex align-items-center'>
					<ButtonGroup variant="outlined" color='info' aria-label="outlined button group" dir={'ltr'}>
						<Button sx={ displayStatus === 'list' && { backgroundColor: 'var(--infoLight)' } } onClick={ () => setDisplayStatus('list') }>
							<p className='mb-0' style={ { fontSize: 18 } }><FaTable /></p>
						</Button>
						<Button sx={ displayStatus === 'table' && { backgroundColor: 'var(--infoLight)' } } onClick={ () => setDisplayStatus('table') }>
							<p className='mb-0' style={ { fontSize: 18 } }><FaList /></p>
						</Button>
					</ButtonGroup>
					<RLink to='/products/add' className='me-3'>
						<Button className='text-white fw-bold' variant='contained' sx={ { bgcolor: 'var(--info)', '&:hover': { bgcolor: 'var(--infoHover)' } }}>
							اضافه کردن
						</Button>
					</RLink>
				</div>
			</div>
			<div className='px-3 my-4'>
				{
					displayStatus === 'list' ? (
						<ProductList />
					) : (
						<ProductTable />
					)
				}
			</div>
		</div>
	)
}

export default Products