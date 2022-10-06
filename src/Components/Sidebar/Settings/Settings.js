import { Button, Drawer, IconButton, Tooltip } from "@mui/material";

import { AiFillSetting } from "react-icons/ai";
import { BiMoon, BiSun } from "react-icons/bi";
import { MdArrowRight, MdFormatTextdirectionLToR, MdFormatTextdirectionRToL } from 'react-icons/md'

import Style from 'style-it'
import * as React from "react";

import './Settings.css'
import Color from "./Color";
import {useContext} from "react";
import { ThemeContext } from "../../../Contexts/ThemeContext";

function Settings () {
	
	const [settingsOpen, setSettingsOpen] = React.useState(false)
	
	const setTheme = useContext(ThemeContext)
	
	
	const toggleSettingDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setSettingsOpen(open)
	}
	
	const [colors] = React.useState([
		{ id: 1, info: 'rgb(26, 155, 252)', infoLight: 'rgba(26, 155, 252, .2)', infoHover: 'rgb(22, 130, 212)', warning: 'rgb(30, 77, 183)', warningHover: 'rgb(23, 63, 152)'},
		{ id: 2, info: 'rgb(0, 206, 195)', infoLight: 'rgba(0, 206, 195, .2)', infoHover: 'rgb(2, 179, 169)', warning: 'rgb(6, 106, 115)', warningHover: 'rgb(8, 85, 89)'},
		// { id: 3, info: 'rgb(115, 82, 255)', infoLight: 'rgba(115, 82, 255, .2)', infoHover: 'rgb(117, 61, 229)', warning: 'rgb(228, 106, 118)', warningHover: 'rgb(210, 132, 171)'},
		{ id: 4, info: 'rgb(208, 153, 197)', infoLight: 'rgba(208, 153, 197, .2)', infoHover: 'rgb(210, 132, 171)', warning: 'rgb(81, 191, 160)', warningHover: 'rgb(83, 170, 134)'},
		// { id: 5, info: 'rgb(30, 77, 183)', infoLight: 'rgba(26, 155, 252, .2)', infoHover: 'rgb(22, 130, 212)', warning: 'rgb(30, 77, 183)', warningHover: 'rgb(23, 63, 152)'},
		{ id: 6, info: 'rgb(251, 150, 120)', infoLight: 'rgba(251, 150, 120, .2)', infoHover: 'rgb(230, 126, 95)', warning: 'rgb(3, 201, 215)', warningHover: 'rgb(5, 178, 189)'},
		{ id: 7, info: 'rgb(3, 201, 215)', infoLight: 'rgba(3, 201, 215, 0.2)', infoHover: 'rgb(5, 178, 189)', warning: 'rgb(251, 150, 120)', warningHover: 'rgb(230, 126, 95)'},
		{ id: 8, info: 'rgb(81, 191, 160)', infoLight: 'rgba(81, 191, 160, .2)', infoHover: 'rgb(83, 170, 134)', warning: 'rgb(208, 153, 197)', warningHover: 'rgb(210, 132, 171)'},
		{ id: 9, info: 'rgb(237, 28, 36)', infoLight: 'rgba(237, 28, 36, .2)', infoHover: 'rgb(239, 7, 10)', warning: 'rgb(25 ,19 ,71)', warningHover: 'rgb(27 ,0 ,45)'},
		{ id: 10, info: 'rgb(224, 19, 110)', infoLight: 'rgba(224, 19, 110, .2)', infoHover: 'rgb(226, 0, 84)', warning: '#1e1c1e', warningHover: '#000'},
		{ id: 11, info: 'rgb(202, 194, 177)', infoLight: 'rgba(202, 194, 177, .2)', infoHover: 'rgb(204, 173, 151)', warning: '#11123b', warningHover: '#000'},
	])
	
	const [currentColor, setCurrentColor] = React.useState('rgb(3, 201, 215)')
	
	const changeColor = ID => {
		const color = colors.find(color => color.id == ID)
		
		setCurrentColor(color.info)
		setTheme('info', color.info)
		setTheme('infoLight', color.infoLight)
		setTheme('infoHover', color.infoHover)
		setTheme('warning', color.warning)
		setTheme('warningHover', color.warningHover)
	}
	
	return (
		<>
			<Style>
				{`
					.settings:hover .arrowRight, .settings:focus .arrowRight {
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
				className='rtl'
				sx={ { '& .MuiDrawer-paper': {
						width: 240,
					}, } }
			>
				<div className='p-3'>
					<p className='fw-bold opacity-75 mb-2' style={ { color: '#212b36' } }>رنگ قالب</p>
					<div className="d-flex justify-content-evenly flex-wrap" style={ { color: '#999' } }>
						{
							colors.map( color => (
								<Color key={color.id} {...color} active={ currentColor === color.info && true} onChange={changeColor} />
							))
						}
					</div>
					<p className='fw-bold opacity-75 mb-2 mt-3' style={ { color: '#212b36' } }>جهت قالب</p>
					<div className="d-flex justify-content-evenly flex-wrap" style={ { color: currentColor } }>
						<Button color='inherit' className='direction' variant='outlined' style={ { color: 'rgba(145, 158, 171)' } }>
							<MdFormatTextdirectionLToR fontSize={30}/>
						</Button>
						<Button color='inherit' className='direction' variant='outlined' style={ { border: `2px solid ${currentColor}` } }>
							<MdFormatTextdirectionRToL fontSize={30} color={currentColor}/>
						</Button>
					</div>
					<p className='fw-bold opacity-75 mb-2 mt-3' style={ { color: '#212b36' } }>مود قالب</p>
					<div className="d-flex justify-content-evenly flex-wrap" style={ { color: currentColor } }>
						<Button color='inherit' sx={ { bgcolor: 'rgb(33, 43, 54)' } } className='direction' variant='outlined' style={ { border: `2px solid ${currentColor}` } }>
							<BiMoon fontSize={30} />
						</Button>
						<Button color='inherit' className='direction' variant='outlined'>
							<BiSun fontSize={30} color='rgb(145, 158, 171)' />
						</Button>
					</div>
				</div>
			</Drawer>
		</>
	)
}

export default Settings