import * as React from 'react';

//MUI
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useTheme as useThemeVar } from 'css-vars-hook';

// @ts-ignore
import Header from './Components/Header/Header.tsx'
// @ts-ignore
import Sidebar, { DrawerHeader } from './Components/Sidebar/Sidebar.tsx';

import { useRoutes } from "react-router-dom";

import routes from './routes'

import { ThemeContext } from './Contexts/ThemeContext'




const drawerWidth = 270;

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

function App () {

    const themeVar = {
        info: 'rgb(3, 201, 215)',
        infoLight: 'rgba(3, 201, 215, 0.2)',
        infoHover: 'rgb(5, 178, 189)',
        warning: 'rgb(251, 150, 120)',
        warningHover: 'rgb(230, 126, 95)',
    };

    const {setRef, setVariable} = useThemeVar(themeVar);

    // setVariable('info', 'red');

    //change mui default colors
    const { palette } = createTheme();
    const theme = createTheme({
        palette: {
            info: {
                main: themeVar.info
            },
            warning: {
                main: themeVar.warning
            },
            secondary: {
                main: themeVar.warning
            }
        }
    });

	const themeHook = useTheme();
	const [open, setOpen] = React.useState(true);

	const handleDrawerClose = () => {
		setOpen(false);
	};

    const router = useRoutes(routes)

	// @ts-ignore
    return (
        <ThemeProvider theme={theme}>
            <Box ref={setRef} sx={{ display: 'flex' }}>
                <CssBaseline />
                <Header open={open} setOpen={setOpen} />
                <Main open={open}>
                    <DrawerHeader />
                    {router}
                    <p className='text-center mt-4 mb-3'>© 2021 All rights reserved by PHOREZ</p>
                </Main>
                <ThemeContext.Provider value={setVariable}>
                    <Sidebar open={open} />
                </ThemeContext.Provider>
            </Box>
        </ThemeProvider>
	);
}

export { drawerWidth }
export default App