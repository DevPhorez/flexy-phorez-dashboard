import  {Drawer, IconButton, Tooltip } from "@mui/material";
import { AiFillSetting } from "react-icons/ai";

import { MdArrowRight } from 'react-icons/md'

import { useState } from 'react'

import Style from 'style-it'

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
			<Style>
				{`
					.settings:hover .arrowRight {
						opacity: 1 !important;
						right: -2px !important;
					}
				`}
			</Style>
			<Tooltip title='تنظیمات' >
					<IconButton
						onClick={toggleSettingDrawer(true)}
						className='settings position-fixed start-0 bottom-0 m-2 bg-info text-white'
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
							},
						}}
					>
						<AiFillSetting />
						<MdArrowRight className='arrowRight' style={ { position: 'absolute', right: 4, opacity: 0, } } />
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