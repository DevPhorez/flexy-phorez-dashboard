import { Button } from "@mui/material";
import * as React from "react";


function Color ({ active, info, id, onChange }) {
	
	function clickHandler () {
		onChange(id)
	}
	
	return (
		<Button color='inherit' className='color' variant='outlined' style={ active ? { border: `3px solid ${info}`} : {} } onClick={clickHandler}>
			<div style={ active ? { border: `none`} : {} }>
				<div className={`elliptical ${ active && 'active-elliptical' }`} style={ { background: info } }></div>
			</div>
		</Button>
	)
}

export default Color