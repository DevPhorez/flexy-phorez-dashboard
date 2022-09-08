import * as React from "react";

import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";

// @ts-ignore
import { drawerWidth } from "../../App.tsx";


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

function Sidebar ({ open }) {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxShadow: 'rgb(113 122 131 / 11%) 0px 7px 30px 0px',
                    border: 'none'
                },
            }}
            variant="persistent"
            anchor="right"
            open={open}
        >
            <DrawerHeader>

            </DrawerHeader>
            {/*// place items*/}
        </Drawer>
    )
}

export { DrawerHeader }
export default Sidebar