import { IconButton, Drawer, TextField } from "@mui/material";
import * as React from "react";

import { AiOutlineCloseCircle } from 'react-icons/ai'
import { RiSearchLine } from 'react-icons/ri';

function Search () {

	const [open, setOpen] = React.useState(false)

	const toggleDrawer =
		(anchor: 'top', open: boolean) =>
			(event: React.KeyboardEvent | React.MouseEvent) => {
				if (
					event.type === 'keydown' &&
					((event as React.KeyboardEvent).key === 'Tab' ||
				(event as React.KeyboardEvent).key === 'Shift')
			) {
					return;
				}

				setOpen(open)
			};

	return (
		<>
            <IconButton
                style={ { color: 'rgba(0, 0, 0, .2)' } }
                color="inherit"
                aria-label="search in site"
                className='me-2'
                sx={ { padding: '.75rem' } }
                onClick={toggleDrawer('top', true)}
            >
                <RiSearchLine color='rgba(0, 0, 0, .3)' size={22} />
            </IconButton>
			<Drawer
				anchor={'top'}
				open={open}
				onClose={toggleDrawer('top', false)}
            >
                <div className='d-flex align-items-center mx-3 p-3'>
                    <AiOutlineCloseCircle className='pointer' color='rgba(0, 0, 0, .3)' size={27} onClick={toggleDrawer('top', false)} />
                    <div className='d-grid g-3 w-100'>
                        <input className='input ms-2 rtl' type="text" placeholder='جستجو کنید' />
                    </div>
                </div>
            </Drawer>
		</>
	)
}

export default Search