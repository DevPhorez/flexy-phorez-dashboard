import  {Drawer, IconButton, Tooltip } from "@mui/material";
import { AiFillSetting } from "react-icons/ai";

import ArrowRight from "@mui/icons-material/ArrowRight";

import { useState } from 'react'

function Settings () {
	
	const [settingsOpen, setSettingsOpen] = useState(false)
	
	
	const toggleSettingDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setSettingsOpen(open)
	}
	
	return (
		<>
			<Tooltip title='تنظیمات' >
				<IconButton
					onClick={toggleSettingDrawer(true)}
					className='position-fixed start-0 bottom-0 m-2 bg-info text-white'
					size="large"
					color={'inherit'}
					sx={{
						'& svg': {
							color: '#fff',
							transition: '0.2s',
							transform: 'translateX(0) rotate(0)',
						},
						'&:hover, &:focus': {
							bgcolor: 'unset',
							'& svg:first-of-type': {
								transform: 'translateX(-4px) rotate(-20deg)',
							},
							'& svg:last-of-type': {
								right: 0,
								opacity: 1,
							},
						},
					}}
				>
					<AiFillSetting />
					<ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0,  }} />
				</IconButton>
			</Tooltip>
			
			<Drawer
				anchor={'left'}
				open={settingsOpen}
				onClose={toggleSettingDrawer(false)}
				sx={ { '& .MuiDrawer-paper': {
						width: 240,
					}, } }
			>
			
			</Drawer>
		</>
	)
}

export default Settings