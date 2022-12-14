import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { RiNotification2Line, RiSearchLine } from "react-icons/ri";
import { FiMessageSquare, FiShoppingCart } from "react-icons/fi";
import { MdMenu as MenuIcon } from "react-icons/md";
import * as React from "react";
import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar/AppBar";

// @ts-ignore
import { drawerWidth } from "../../App.tsx";

// @ts-ignore
import Search from "./Search.tsx";
// @ts-ignore
import Notifications from './Notifications.tsx';
// @ts-ignore
import Messages from './Messages.tsx';
import Profile from './Profile'

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: drawerWidth,
	}),
}));

const verticalLine = {
    width: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 25,
    marginLeft: '8px',
    marginRight: '8px',
}


function Header ({ open, setOpen }) {

    const drawerHandler = () => {
        setOpen(prevState => !prevState);
    };

	return (
		<AppBar className='shadow-none' sx={ { backgroundColor: 'rgb(250, 251, 251)' } } position="fixed" open={open} color={'inherit'}>
			<Toolbar className='d-flex justify-content-between'>
				<div className='d-flex align-items-center'>
					<Profile />
					<div style={ verticalLine }></div>
                    <Notifications />
					<Messages />
					<IconButton
						style={ { color: 'rgba(0, 0, 0, .2)' } }
						color="inherit"
						aria-label="basket"
						sx={ { padding: '.75rem' } }
					>
						<FiShoppingCart color='rgba(0, 0, 0, .3)' size={22} />
					</IconButton>
				</div>
				<div>
					<Search />
					<IconButton
						style={ { color: 'rgba(0, 0, 0, .2)' } }
						color="inherit"
						aria-label="open drawer"
						edge="end"
						onClick={drawerHandler}
						sx={ { padding: '.75rem' } }
					>
						<MenuIcon color='rgba(0, 0, 0, .3)' size={26} />
					</IconButton>
				</div>
			</Toolbar>
		</AppBar>
	)
}

export default Header