import usePopover from '../../Hooks/usePopover.ts';

import { Button, Avatar, Popover, ListItemButton, ListItem, ListItemText, Divider, List } from '@mui/material';

import { BsChevronDown } from 'react-icons/bs'
import { BiTask } from 'react-icons/bi'
import { HiOutlineMail, HiOutlineInbox } from 'react-icons/hi'
import { AiOutlineUser } from 'react-icons/ai'

const style = (bg) => {
	return {
		backgroundColor: bg,
		borderRadius: 10,
		padding: '10px 16px',
	}
}

function Profile () {
	
	const [open, anchorEl, handleClick, handleClose] = usePopover()
	
	return (
		<>
			<Button aria-describedby={'profile'} variant="text" color='inherit' onClick={handleClick}>
				<Avatar className={'me-2'} alt="Remy Sharp" src="/Images/Avatar/1.jpg" />
				سلام, طاهر <BsChevronDown className='ms-2' />
			</Button>
			<Popover
				id={'profile'}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<div className='rtl text-dark' style={ { padding: 30, width: 360, maxWidth: 360 } }>
					<p className="h5 mb-5">نمایه کاربری</p>
					<div className="d-flex mb-2">
						<Avatar className={'ms-3'} alt="Remy Sharp" sx={ { width: 90, height: 90 } } src="/Images/Avatar/1.jpg" />
						<div>
							<p className="h5 mb-1">بابا طاهر</p>
							<p className="text-gray mb-1">ادمین</p>
							<p className="text-gray d-flex align-self-center" style={ { fontSize: 14 } }>dad.taher@gmail.com <HiOutlineMail className='me-1' fontSize={22} /></p>
						</div>
					</div>
					<List sx={{ bgcolor: 'background.paper' }}>
						<>
							<Divider variant="fullWidth" component="li" />
							<ListItem className='p-0 rtl position-relative' alignItems='flex-start'>
								<ListItemButton className='d-flex justify-content-end p-3'>
									<div className='d-flex align-items-center'>
										<div style={ style('rgb(229, 250, 251)') }>
											<AiOutlineUser fontSize={ 22 } color={'rgb(3, 201, 215)'} />
										</div>
                                        <div className='d-flex flex-wrap me-2'>
	                                        <p className="fs-5 text-dark mb-0">نمایه کاربری من</p>
	                                        <p className="text-gray mb-0">تنظیمات حساب کاربری</p>
                                        </div>
									</div>
								</ListItemButton>
							</ListItem>
							<Divider variant="fullWidth" component="li" />
							<ListItem className='p-0 rtl position-relative' alignItems='flex-start'>
								<ListItemButton className='d-flex justify-content-end p-3'>
									<div className='d-flex align-items-center'>
										<div style={ style('rgb(235, 250, 242)') }>
											<HiOutlineInbox fontSize={ 22 } color={'rgb(0, 194, 146)'} />
										</div>
										<div className='d-flex flex-wrap me-2'>
											<p className="fs-5 text-dark mb-0">صندوق پستی من</p>
											<p className="text-gray mb-0">پیام ها & پست های الکترونیکی</p>
										</div>
									</div>
								</ListItemButton>
							</ListItem>
							<Divider variant="fullWidth" component="li" />
							<ListItem className='p-0 rtl position-relative' alignItems='flex-start'>
								<ListItemButton className='d-flex justify-content-end p-3'>
									<div className='d-flex align-items-center'>
										<div style={ style('rgb(253, 243, 245)') }>
											<BiTask fontSize={ 22 } color={'rgb(228, 106, 118)'} />
										</div>
										<div className='d-flex flex-wrap me-2'>
											<p className="fs-5 text-dark mb-0">وظایف من</p>
											<p className="text-gray mb-0">وظایف روزانه & در دست انجام</p>
										</div>
									</div>
								</ListItemButton>
							</ListItem>
						</>
					</List>
					<Button className='text-white mt-1' variant='contained' color='info' fullWidth>
						<p className='mb-0 h5'>خروج از حساب</p>
					</Button>
				</div>
			</Popover>
		</>
	)
}

export default Profile