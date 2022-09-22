import {
	Box,
	FormControl,
	FormControlLabel,
	InputAdornment,
	InputLabel, MenuItem,
	OutlinedInput, Select,
	Switch,
	TextField,
	Button, Popover
} from "@mui/material";

import { BsCalendar2Week } from "react-icons/bs";

import * as React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './style.css'

import { date as days } from '../../../data'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: window.innerWidth > 992 ? '45%' : '80%',
	height: '90%',
	bgcolor: 'background.paper',
	borderRadius: 3,
	overflowY: 'auto',
};


function TaskDate ({ date, setDate }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	
	const handleClose = () => {
		setAnchorEl(null);
	};
	
	const open = Boolean(anchorEl);

	return (
		<>
			<FormControl className='my-4' variant="outlined" fullWidth onClick={handleClick} aria-describedby='date'>
				<InputLabel color='warning' htmlFor="date">Date</InputLabel>
				<OutlinedInput
					fullWidth
					color='warning'
					id="date"
					endAdornment={
						<InputAdornment position="end">
							<BsCalendar2Week fontSize={20} />
						</InputAdornment>
					}
					label="date"
					value={`${ date.length > 0 ? ('Start: ' + date[0].toDateString().replaceAll(' ', '/') + ' --- End: ' + date[0].toDateString().replaceAll(' ', '/')) : (date.toDateString().replaceAll(' ', '/'))}`}
					onChange={ event => setDate(prevState => prevState.startDate = event.target.value) }
				/>
			</FormControl>
			<Popover
				id='date'
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				<>
					<div className='calendar-container '>
						<Calendar
							onChange={setDate}
							value={date}
							selectRange={true}
						/>
					</div>
					{date.length > 0 && (
						<p className='text-center'>
							<span className='bold'>Start:</span>{' '}
							{date[0].toDateString()}
							&nbsp;|&nbsp;
							<span className='bold'>End:</span> {date[1].toDateString()}
						</p>
					)}
				</>
			</Popover>
		</>
	);
}

function ModalContent ({ setOpen, dayID, title, setTitle, description, setDescription, allDay, setAllDay, date, setDate, category, setCategory, handleClose }) {
	
	function AddNewTask () {
		const newTask = {
			id: date.length + 1,
			title,
			description,
			allDay,
			date,
			category: category.toLowerCase(),
		}
		
		days.some( day => {
			if (day.id === +dayID) {
				day.targets = [...day.targets, newTask]
			}
		})
		
		handleClose()
	}
	
	return (
		<Box sx={style}>
			<div className="header w-100 p-3 border-bottom mb-3 rtl">
				<p className='text-gray h5 mb-1'>اضافه کردن رویداد</p>
			</div>
			<div className="body p-3">
				{/*<Title />*/}
				<TextField fullWidth color={'info'} label="Title" variant="outlined" value={title} onChange={ event => setTitle(event.target.value) } />
				<TextField fullWidth color={'info'} multiline label="Description" rows={2} variant="outlined" className='my-4' value={description} onChange={ event => setDescription(event.target.value) } />
				<FormControlLabel control={<Switch color='warning' />} label="All Day" checked={allDay} onChange={ () => setAllDay(prevState => !prevState) } />
				<TaskDate date={date} setDate={setDate} />
				<FormControl fullWidth color='info'>
					<InputLabel id="categories-label">Categories</InputLabel>
					<Select
						labelId="categories-label"
						id="categories"
						value={category}
						label="Categories"
						onChange={ event => setCategory(event.target.value) }
					>
						<MenuItem value={'Personal'}>Personal</MenuItem>
						<MenuItem value={'Business'}>Business</MenuItem>
						<MenuItem value={'Family'}>Family</MenuItem>
						<MenuItem value={'Holiday'}>Holiday</MenuItem>
						<MenuItem value={'Birthday'}>Birthday</MenuItem>
					</Select>
				</FormControl>
				<div className="row mt-4">
					<div className="col d-flex justify-content-end">
						<Button className='me-2' variant='outlined' color='warning' onClick={ handleClose }>Cancel</Button>
						<Button className='text-white' variant='contained' color='warning' sx={ { '&:hover': { backgroundColor: 'rgb(227,132,102)' } } } onClick={ AddNewTask   }>Add</Button>
					</div>
				</div>
			</div>
		</Box>
	)
}

export default ModalContent

// : (
// 	<p className='text-center'>
// 		<span className='bold'>Default selected date:</span>{' '}
// 		{date.toDateString()}
// 	</p>
// )