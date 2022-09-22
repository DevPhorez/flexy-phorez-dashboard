import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Tasks ({ day }) {
	const [open, setOpen] = React.useState(false);
	
	const handleClick = () => {
		setOpen(true)
	};
	
	const handleClose = () => {
		setOpen(false)
	};
	
	const id = open ? 'tasks' : undefined;
	
	return (
		<div className='position-absolute bottom-0'>
			<Button aria-describedby={id} onClick={handleClick}>
				<p className='pointer mb-0' style={ { fontSize: 14 } }>+{day.targets.length -1} بیشتر</p>
			</Button>
			<Popover
				id={id}
				open={open}
				onClose={handleClose}
				anchorReference="anchorPosition"
				anchorPosition={{ top: 120, left: 405 }}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
			>
				<Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
			</Popover>
		</div>
	);
}

export default Tasks