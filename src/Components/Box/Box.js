import * as React from 'react';
import MuiBox from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function Box ({ children, customClasses }) {
	return (
		<MuiBox
			sx={{
				boxShadow: 'rgb(90 114 123 / 11%) 0px 7px 30px 0px',
				borderRadius: '20px',
				overflow: 'hidden',
				color: 'rgba(0, 0, 0, 0.87)',
				padding: '0 14px 14px',
				margin: '15px',
			}}
			className={customClasses}
		>
			<Paper className={customClasses} elevation={0}>{children}</Paper>
		</MuiBox>
	);
}

Box.defaultProps = {
	customClasses: '',
}

export default Box