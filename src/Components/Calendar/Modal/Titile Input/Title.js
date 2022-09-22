import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';

function Title () {
	
	let showError = true
	const [title, setTitle] = React.useState('')
	
	function MyFormHelperText ({ title }) {
		const { focused } = useFormControl() || {};
		
		let errorText = ''
		
		if (focused) {
			errorText = React.useMemo(() => {
				if (!title) {
					showError = true
					setTitle('undefined')
					setTitle(undefined)
					return 'Title is required'
					
				} else if (title) {
					showError = false
					return ''
				}
			}, [focused]);
		}
		
		return <FormHelperText className='text-danger fw-bold'>{errorText}</FormHelperText>;
	}
	
	return (
		<Box component="form" autoComplete="off">
			<FormControl fullWidth>
				<OutlinedInput error={showError} label='Title' onChange={ (event) => setTitle(event.target.value) }/>
				<MyFormHelperText title={title} className='text-danger' />
			</FormControl>
		</Box>
	);
}


export default Title