import { Breadcrumbs, Link, Typography } from "@mui/material";
import * as React from "react";
import Box from "../../Components/Box/Box";

import { Link as RRLink } from 'react-router-dom'

import { HiSearch } from 'react-icons/hi'
import { AiOutlineUser } from 'react-icons/ai'
import { MdModeComment } from "react-icons/md";
import { IoIosEye } from "react-icons/io";


import './Blogs.css'
import {articles} from "../../Data/data";

function Blogs () {
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
				<Typography className='fw-bold' color="text.primary">مقالات</Typography>
			</Breadcrumbs>
			<h4 className='me-3'>مقالات</h4>
			<Box customClasses={14}>
				<div className='position-relative'>
					<input type="text" className="input w-50" placeholder='عنوان مورد نظر...' maxLength={50}/>
					<HiSearch size={24} color={'#8294a1'} className='position-absolute pointer search' style={ { left: '51%', top: 7 } } />
				</div>
			</Box>
			<Box customClasses={14}>
				<div className="row">
					{
						articles.map( article => (
							<div className="col-12 col-md-6 col-lg-4 mb-4">
								<div className='border rounded blog'>
									<RRLink to={'/blog/1/lorem-ipsum'}>
										<div className="img-layer">
											<img className='w-100 pointer' src={`/Images/blog/${article.image}`} alt={article.title} style={ { height: 220 } }/>
											<RRLink className='no-hover' to={'/blog/1/lorem-ipsum'}>
												<span>مشاهده کامل مقاله</span>
											</RRLink>
										</div>
									</RRLink>
									<div className='title'>
										<RRLink className='text-dark' to={'/blog/1/lorem-ipsum'} style={ { fontSize: 14 } }>{article.title}</RRLink>
									</div>
									<p className='description mb-0' style={ { fontSize: 13 } }>{article.description}</p>
									<div className="detail align-items-center">
										<div className='d-flex align-items-center' style={ { color: '#697174' } }>
											<IoIosEye color={'#c8cfd5'} size={18} />
											<span className='ms-3 me-1' style={ { fontSize: 13 } }>{article.views}</span>
											<MdModeComment color={'#c8cfd5'} />
											<span className='me-1' style={ { fontSize: 13 } }>{article.comments}</span>
										</div>
										<div className='author'>
											<AiOutlineUser size={18} />
											<span>فورز بابایی</span>
										</div>
									</div>
								</div>
							</div>
						))
					}
				</div>
			</Box>
		</div>
	)
}

export default Blogs