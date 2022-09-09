import * as React from "react";

import { Button, ListItemButton, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import MuiPopover from "@mui/material/Popover";

// @ts-ignore
import usePopover from '../../Hooks/usePopover.ts';
import Badge from "@mui/material/Badge";
import {RiNotification2Line} from "react-icons/ri";
import IconButton from "@mui/material/IconButton";

import './Popover.css'

function Popover ({ id, title, items, children, icon, color }) {

    const [open, anchorEl, handleClick, handleClose] = usePopover()

    const someItems = items.slice(0, 4)

    return (
        <>
            <IconButton
                style={ { color: 'rgba(0, 0, 0, .2)' } }
                color="inherit"
                aria-label={id}
                sx={ { padding: '.75rem' } }
                aria-describedby={id}
                onClick={handleClick}
            >
                <Badge color={color} variant="dot">
                    {icon}
                </Badge>
            </IconButton>
            <MuiPopover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <div style={ { padding: 30 } }>
                    <div className="header d-flex justify-content-end">
                        <span className='badge me-3 rtl'>
                            {items.length} جدید
                        </span>
                        <Typography variant='h5' >
                            {title} ها
                        </Typography>
                    </div>
                    <List sx={{ width: 310, maxWidth: 360, bgcolor: 'background.paper' }}>
                        {
                            someItems.map( item => (
                                <>
                                    <ListItem className='p-0 rtl position-relative' alignItems='flex-start'>
                                        <ListItemButton className='d-flex justify-content-end'>
                                            <ListItemAvatar>
                                                <Avatar className='my-3' alt="profile" src={item.image} />
                                            </ListItemAvatar>
                                            <ListItemText>
                                                {/*sx={ { right: 80 } }*/}
                                                <>
                                                    <p className='h5 m-0'>{item.title}</p>
                                                    <p className='m-0'>{item.description}</p>
                                                    {
                                                        children && <p className='mb-1'>{item.date}</p>
                                                    }
                                                </>
                                            </ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                    <Divider variant="fullWidth" component="li" />
                                </>
                            ))
                        }
                    </List>
                    <Button className='text-white mt-2' fullWidth variant='contained' color='info'>
                        <span style={ { fontSize: 18 } }>دیدن همه {title} ها</span>
                    </Button>
                </div>
            </MuiPopover>
        </>
    )
}

export default Popover