import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { products } from "../../../Data/data";

import { AiFillStar } from "react-icons/ai";
import { IoIosEye } from "react-icons/io";
import { IconButton } from "@mui/material";
import {Link} from "react-router-dom";

const columns = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'title', headerName: 'Title', width: 130 },
	{ field: 'price', headerName: 'Price', width: 130 },
	{
		field: 'rate',
		headerName: 'Rate',
		width: 160,
		renderCell: (params) => {
			const arr = []
			for (let i = 0; i < params.row.rate; i++) {
				arr.push(<AiFillStar color='var(--yellow)' />)
			}
			return arr
		},
	},
	{
		field: 'visit',
		headerName: 'Visit',
		width: 60,
		renderCell: (params) => {
			return (
				<Link to={`${params.row.id}/${params.row.title.replace(' ', '-')}`}>
					<IconButton>
						<IoIosEye fontSize={24} />
					</IconButton>
				</Link>
			)
		},
	},
];


function ProductTable () {
	return (
		<div style={{ height: 400, width: '100%', direction: 'ltr' }}>
			<DataGrid
				rows={products}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	)
}

export default ProductTable