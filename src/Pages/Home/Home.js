import Box from "../../Components/Box/Box";

import { IconButton, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Avatar } from '@mui/material'

import { BiDollar } from 'react-icons/bi'
import { FiShoppingBag, FiDollarSign } from 'react-icons/fi'
import { RiShoppingCartLine } from 'react-icons/ri'
import { BsArrowUpShort } from 'react-icons/bs'

import './Home.css'
import * as React from "react";


import RevenueUpdatesApexChart from "../../Components/Charts/Apex/RevenueUpdatesApexChart";
import MonthlyEarningsApexChart from "../../Components/Charts/Apex/MonthlyEarningsApexChart";
import CustomersApexChart from "../../Components/Charts/Apex/CustomersApexChart";
import TotalSales from "../../Components/Charts/Apex/TotalSales";


function Home () {
	
	// function createData(assigned, name, priority, budget ) {
	// 	return { assigned, name, priority, budget };
	// }
	//
	// const rows = [
	// 	createData('ماست پرچرب', 159, 'low', '$9.3k\n'),
	// 	createData('بستنی سالار', 237, 'medium', '$2.4k'),
	// 	createData('آب هویج بستنی میهن', 262, 'high', '$12.8k'),
	// 	createData('کاپوچینو', 305, 'critical', '$24.5k'),
	// 	createData('نون لواش', 356, 'moderate', '$3.9k'),
	// ];
	
	const rows = [
		{ name: 'ماست پرچرب', price: 159, priority: 'low', budget: '$9.3k'},
		{ name: 'بستنی سالار', price: 237, priority: 'medium', budget: '$2.4k'},
		{ name: 'آب هویج بستنی', price: 262, priority: 'high', budget: '$12.8k'},
		{ name: 'کاپوچینو', price: 305, priority: 'critical', budget: '$24.5k'},
		{ name: 'نون لواش', price: 356, priority: 'moderate', budget: '$3.9k'},
	];
	
	return (
		<div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-6 col-lg-4 p-0">
						<Box>
							<div className="d-flex justify-content-between align-items-center m-3">
								<IconButton className=' text-white' sx={ { backgroundColor: 'var(--warning)', '&:hover': { backgroundColor: 'var(--warningHover) !important' } } } color='inherit'>
									<FiDollarSign className='m-1' />
								</IconButton>
								<p className='mb-0 text-dark fw-bold'>درآمد کل</p>
							</div>
							<div className="m-2 rtl mt-5">
								<p className="h3 mb-1">$93,438.78</p>
								<p className="text-gray opacity-75">درآمد ماهیانه</p>
							</div>
						</Box>
					</div>
					<div className="col-6 col-lg-3 p-0">
						<Box>
							<div className="d-flex justify-content-between align-items-center m-3">
								<IconButton className='bg-info text-white' sx={ { transition: '.3s' ,'&:hover': { backgroundColor: 'var(--infoHover) !important' } } } color='inherit'>
									<FiShoppingBag className='m-1' />
								</IconButton>
								<p className='mb-0 text-dark fw-bold'>خرید ها</p>
							</div>
							<div className="m-2 rtl mt-5">
								<p className="h3 mb-1">2,506</p>
								<p className="text-gray opacity-75">فروش ماهیانه</p>
							</div>
						</Box>
					</div>
					<div className="col-12 col-lg-5 p-0">
						<Box>
							<div className="d-flex justify-content-between align-items-center m-3">
								<IconButton className='bg-info text-white' sx={ { transition: '.3s' ,'&:hover': { backgroundColor: 'var(--infoHover) !important' } } } color='inherit'>
									<FiShoppingBag className='m-1' />
								</IconButton>
								<p className='mb-0 text-dark fw-bold'>خرید ها</p>
							</div>
							<div className="m-2 rtl mt-5">
								<p className="h3 mb-1">2,506</p>
								<p className="text-gray opacity-75">فروش ماهیانه</p>
							</div>
						</Box>
					</div>
					<div className="col-12 col-lg-4 p-0 rtl">
						<Box customClasses='bg-info'>
							<p className='m-3 mt-4 text-white fw-bold mb-0'>
								درآمد ماهانه
							</p>
							<div className="card-body">
								<div className="d-flex justify-content-center">
									<MonthlyEarningsApexChart />
								</div>
								<div className="d-flex align-items-center mx-3">
									<p className='text-white fw-bold mb-0 fs-4'>
										39,358
									</p>
									<BiDollar className='text-white fs-4' fontWeight={700} style={ { marginRight: -6, marginTop: 3 } } />
									<p className='text-white mb-0 me-3 d-flex' style={ { fontSize: '14px' } }>
										این هفته +9 <BsArrowUpShort className='fs-4' />
									</p>
								</div>
							</div>
						</Box>
						
						<Box customClasses='bg-warning'>
							<p className='m-3 mt-4 text-white fw-bold mb-0'>
								مشتریان
							</p>
							<div className="card-body">
								<div className="d-flex justify-content-center">
									<CustomersApexChart />
								</div>
								<div className="d-flex align-items-center mx-3">
									<p className='text-white fw-bold mb-0 fs-4'>
										750
									</p>
									<p className='text-white mb-0 me-3 d-flex' style={ { fontSize: '14px' } }>
										این هفته +9 <BsArrowUpShort className='fs-4' />
									</p>
								</div>
							</div>
						</Box>
					</div>
					<div className="col-12 col-lg-8 p-0">
						<Box>
							<div className="card-header rtl m-3">
								<p className='text-dark fw-bold h5'>به روز رسانی درآمد</p>
								<div className="w-25">
									<select className="form-select">
										<option value="1">مهر 1401</option>
										<option value="2">آبان 1401</option>
										<option value="3" selected>آذر 1401</option>
									</select>
								</div>
							</div>
							<div className="card-body m-3">
								<RevenueUpdatesApexChart />
							</div>
						</Box>
					</div>
					<div className="col-12 col-lg-4 p-0">
						<Box>
							<div style={ { height: 511 } }>
								<div className="card-header rtl m-3">
									<p className='text-dark fw-bold h5'>فروش کل</p>
									<div>
										<select className="form-select">
											<option value="1">مهر 1401</option>
											<option value="2">آبان 1401</option>
											<option value="3" selected>آذر 1401</option>
										</select>
									</div>
								</div>
								<div className="card-body p-3 rtl pb-4 position-relative">
									<div className="border-top mt-2 mb-4 d-flex justify-content-between align-items-center">
										<p className='text-gray opacity-75 my-4'>
											فروش سالیانه
										</p>
										<p className='text-dark fw-bold mb-0 fs-4'>
											8,364,398
										</p>
									</div>
									<TotalSales />
									<Typography variant='body1' sx={ { margin: 0,
										fontWeight: 400,
										fontFamily: "DM Sans",
										fontSize: '2rem',
										lineHeight: 1.5,
										color: 'rgb(119, 126, 137)',
										position: 'absolute',
										left: '46.5%',
										top: '52%',
									}}>
										<RiShoppingCartLine />
									</Typography>
								</div>
							</div>
							
						</Box>
					</div>
					<div className="col-12 col-lg-8 p-0">
						<Box>
							<div style={ { height: 513 } }>
								<div className="card-header rtl m-3">
									<p className='text-dark fw-bold h5'>عملکرد محصول</p>
									<div className="w-25">
										<select className="form-select">
											<option value="1">مهر 1401</option>
											<option value="2">آبان 1401</option>
											<option value="3" selected>آذر 1401</option>
										</select>
									</div>
								</div>
								<div className="card-body m-3">
									<div className='home-table-parent'>
										<table className='home-table'>
											<tr>
												<th id='name'>عنوان</th>
												<th id='price'>قیمت</th>
												<th id='priority' className='d-none d-md-block m-md-auto'>الویت</th>
												<th id='budget'>بودجه</th>
											</tr>
											{
												rows.map( row => (
													<tr>
														<td className='d-flex align-items-center text-dark fw-bold me-2'>
															<Avatar src="/static/images/avatar/1.jpg" />
															<span className='me-2'>
															{row.name}
														</span>
														</td>
														<td style={ { fontSize: 14 } }>{row.price}</td>
														<td className='d-none d-md-block'>
															<p className={`bg-${row.priority} text-center text-white rounded p-1 mb-0 m-auto w-50`} style={ { fontSize: 12 } }>{row.priority}</p>
														</td>
														<td style={ { fontSize: 14 } }>{row.budget}</td>
													</tr>
												))
											}
										</table>
									</div>
								</div>
							</div>
						</Box>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home