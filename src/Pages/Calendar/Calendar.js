import * as React from 'react'

import {
	Paper,
	Button,
	ButtonGroup,
	IconButton,
	Checkbox,
	FormControlLabel,
} from '@mui/material'
import MuiModal from "@mui/material/Modal";

import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

import './Calendar.css'
import '../../Components/Modal.css'

import { date as days } from '../../data'

import ModalContent from "../../Components/Calendar/Modal/ModalContent";
import Tasks from "../../Components/Calendar/More Task/Tasks";

function Calendar () {
	
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	
	const handleClose = () => {
		setOpen(false)
		setTitle('')
		setDescription('')
		setAllDay(false)
		setCategory('Business')
		setDate(new Date())
	}
	
	const [title, setTitle] = React.useState('')
	const [description, setDescription] = React.useState('')
	const [allDay, setAllDay] = React.useState(false)
	const [date, setDate] = React.useState(new Date())
	const [category, setCategory] = React.useState('Business');
	
	const states = { title, setTitle, description, setDescription, allDay, setAllDay, date, setDate, category, setCategory }
	
	let [dayID, setDayID] = React.useState()
	
	return (
		<Paper sx={ { padding: '16px', borderRadius: 4 } } elevation={3}>
			<div className="row pt-2">
				<div className="col-lg-9 col-12">
					<div className='header d-flex justify-content-between border-bottom pb-3'>
						<ButtonGroup variant="outlined" color='info' aria-label="outlined button group">
							<Button><p className='mb-0' style={ { fontSize: 18 } }>لیست</p></Button>
							<Button><p className='mb-0' style={ { fontSize: 18 } }>روز</p></Button>
							<Button><p className='mb-0' style={ { fontSize: 18 } }>هفته</p></Button>
							<Button sx={ { backgroundColor: 'rgba(3, 201, 215, 0.2)' }}><p className='mb-0' style={ { fontSize: 18 } }>ماه</p></Button>
						</ButtonGroup>
						
						<div className='d-flex align-items-center'>
							<IconButton>
								<BsChevronLeft />
							</IconButton>
							<p className='mb-0 mx-3 h3 text-dark'>1401 آذر</p>
							<IconButton>
								<BsChevronRight />
							</IconButton>
						</div>
					</div>
					<div className='d-flex justify-content-between rtl text-center' style={ { color: 'rgba(58, 53, 65, 0.87)' } }>
						<p className='my-2 m-auto'>شنبه</p>
						<p className='my-2 m-auto'>1 شنبه</p>
						<p className='my-2 m-auto'>2 شنبه</p>
						<p className='my-2 m-auto'>3 شنبه</p>
						<p className='my-2 m-auto'>4 شنبه</p>
						<p className='my-2 m-auto'>5 شنبه</p>
						<p className='my-2 m-auto'>جمعه</p>
					</div>
					<table className='calendar w-100 text-gray'>
						<tr>
							{
								days.map( day => (
									<td key={day.id} className='position-relative' onClick={ event => {
										handleOpen()
										setDayID(day.id)
									} }>
										<p className={` ${ day.disable && 'disable' } mb-0 position-absolute`}>{ day.day }</p>
										{
											day.targets.length > 0 && (
												<div className='d-flex justify-content-center flex-wrap mt-4 position-relative pb-4 rtl'>
													{
														day.targets.slice(0, 1).map( (target, index) => (
															<>
																<div className={`chip-${target.category} chip`} style={ { top: 25 * index * 1 } } onClick={ () => {
																	setCategory(target.category)
																	setTitle(target.title)
																	setDescription(target.description)
																	setAllDay(target.allDay)
																	setDate(target.date)
																	handleOpen()
																}}>{ target.title }</div>
																{
																	day.targets.length > 1 && (
																		<>
																			<br/>
																			<Tasks day={day} />
																		</>
																	)
																}
															</>
														))
													}
												</div>
											)
										}
									</td>
								))
							}
						</tr>
					</table>
					<MuiModal
						open={open}
						onClose={handleClose}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
						className='backdrop'
					>
						<ModalContent {...states} setOpen={setOpen} dayID={dayID} handleClose={handleOpen}  />
					</MuiModal>
				</div>
				<div className="col-3 border-start d-flex justify-content-center flex-wrap align-items-center d-lg-block d-none">
					<Button fullWidth sx={ { '&:hover': { backgroundColor: 'rgb(3,181,193)' } } } color='info' variant='contained'>
						<p className='h5 text-white my-1'>اضافه کردن رویداد</p>
					</Button>
					<div className='text-end w-100'>
						<p className='text-gray mt-4 mb-0'>نماش رویداد ها</p>
						<ul className='list-unstyled rtl p-0 mt-2'>
							<li>
								<FormControlLabel className='me-0' control={<Checkbox defaultChecked color='default' />} label="نمایش همه" />
							</li>
							<li>
								  <FormControlLabel className='me-0' control={<Checkbox defaultChecked color='error' />} label="شخصی" />
							</li>
							<li>
								  <FormControlLabel className='me-0' control={<Checkbox defaultChecked color='secondary' />} label="کاری" />
							</li>
							<li>
								  <FormControlLabel className='me-0' control={<Checkbox defaultChecked color='warning' />} label="خانوادگی" />
							</li>
							<li>
								  <FormControlLabel className='me-0' control={<Checkbox defaultChecked color='success' />} label="تفریحات" />
							</li>
							<li>
								  <FormControlLabel className='me-0' control={<Checkbox defaultChecked color='info' />} label="تولد" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Paper>
	)
}

export default Calendar