import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

function NotFound () {
	return (
		<div className='container text-center m-auto pt-5 rtl'>
			<img style={ { width: '250px' }} src="/404 error.svg" alt="not found error"/>
			<p>صفه مورد نظر یافت نشد :(</p>
			<Link to='/' className='text-decoration-none'>
				<Button className='text-white' variant='contained' color='warning' sx={ { '&:hover': { backgroundColor: 'rgb(250,131,96)' } } }>
					برگشت به خانه
				</Button>
			</Link>
		</div>
	)
}

export default NotFound