import * as React from 'react';

//MUI
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { ThemeProvider, createTheme } from '@mui/material/styles';


// @ts-ignore
import Header from './Components/Header/Header.tsx'
// @ts-ignore
import Sidebar, { DrawerHeader } from './Components/Sidebar/Sidebar.tsx';

import './style.css'
import { useRoutes } from "react-router-dom";

import routes from './routes'

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
	open?: boolean;
}>(({ theme, open }) => ({
	flexGrow: 1,
	padding: theme.spacing(3),
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginRight: -drawerWidth,
	...(open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: 0,
	}),
}));


//change mui default colors
const { palette } = createTheme();
const theme = createTheme({
    palette: {
        info: {
            main: 'rgb(3, 201, 215)'
        },
        warning: {
            main: 'rgb(251, 150, 120)'
        },
    }
});

function App () {
	const themeHook = useTheme();
	const [open, setOpen] = React.useState(true);

	const handleDrawerClose = () => {
		setOpen(false);
	};

    const router = useRoutes(routes)

	// @ts-ignore
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Header open={open} setOpen={setOpen} />
                <Main open={open}>
                    <DrawerHeader />
                    {router}
                </Main>
                <Sidebar open={open} />
            </Box>
        </ThemeProvider>
	);
}

export { drawerWidth }
export default App

// // <List>
// // 	{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
// // 		<ListItem key={text} disablePadding>
// // 			<ListItemButton>
// // 				<ListItemIcon>
// {/*					{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
// {/*				</ListItemIcon>*/}
// {/*				<ListItemText primary={text} />*/}
// {/*			</ListItemButton>*/}
// {/*		</ListItem>*/}
// {/*	))}*/}
// {/*</List>*/}