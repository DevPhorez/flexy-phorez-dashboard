import * as React from "react";

import { styled } from "@mui/material/styles";
import { Drawer, Button, IconButton, Tooltip } from "@mui/material";
import ArrowRight from '@mui/icons-material/ArrowRight';

// @ts-ignore
import { drawerWidth } from "../../App.tsx";

import { AiOutlineHome, AiOutlineShopping, AiFillSetting } from 'react-icons/ai'
import { MdOutlineModeComment, MdOutlineLocalOffer } from 'react-icons/md'
import { FiUsers, FiShoppingCart } from 'react-icons/fi'

import Settings from './Settings'

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
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
                    padding: '16px',
                    border: 'none'
                },
            }}
            variant="persistent"
            anchor="right"
            open={open}
        >
            <DrawerHeader className='position-relative mb-5'>
                <svg viewBox='0 -8 80 80' className='position-absolute top-0' style={ { left: 80 } }>
                    <circle fill='#fec90f' stroke='#fec90f' className="cls-4" cx="21.703" cy="23.969" r="6.328"></circle>
                    <path fill='var(--warning)' data-name="Rounded Rectangle 698" className="cls-2"
                          d="M8.723,4.086a5.9,5.9,0,0,1,5.895,5.895V28.216a5.895,5.895,0,1,1-11.79,0V9.981A5.9,5.9,0,0,1,8.723,4.086Z"></path>
                    <rect  data-name="Rounded Rectangle 699" className="cls-3" fill='var(--info)' x="3" y="3"
                          width="25" height="12" rx="6" ry="6"></rect>
                </svg>
                <h2 className='position-absolute' style={ { right: 0, top: 12 } }>فورز</h2>
            </DrawerHeader>
            <div className='body rtl'>
                <p className='text-black-50 opacity-50 h5 mb-3'>داشبورد ها</p>

                <ul className='list-unstyled p-0 pe-2'>
                    <li>
                        <Button className='d-flex justify-content-start align-items-center text-white bg-info' style={ { padding: '.85rem', borderRadius: 10, fontSize: '1.1rem' } } startIcon={<AiOutlineHome />} fullWidth color={'inherit'}>
                            <p className="mb-0 me-4">خانه</p>
                        </Button>
                    </li>
                    <li>
                        <Button className='d-flex justify-content-start align-items-center ' style={ { padding: '.85rem', borderRadius: 10, fontSize: '1.1rem' } } startIcon={<AiOutlineShopping />} fullWidth color={'inherit'}>
                            <p className="mb-0 me-4">محصولات</p>
                        </Button>
                    </li>
                    <li>
                        <Button className='d-flex justify-content-start align-items-center ' style={ { padding: '.85rem', borderRadius: 10, fontSize: '1.1rem' } } startIcon={<MdOutlineModeComment />} fullWidth color={'inherit'}>
                            <p className="mb-0 me-4">نظرات</p>
                        </Button>
                    </li>
                    <li>
                        <Button className='d-flex justify-content-start align-items-center ' style={ { padding: '.85rem', borderRadius: 10, fontSize: '1.1rem' } } startIcon={<FiUsers />} fullWidth color={'inherit'}>
                            <p className="mb-0 me-4">کاربران</p>
                        </Button>
                    </li>
                    <li>
                        <Button className='d-flex justify-content-start align-items-center ' style={ { padding: '.85rem', borderRadius: 10, fontSize: '1.1rem' } } startIcon={<FiShoppingCart />} fullWidth color={'inherit'}>
                            <p className="mb-0 me-4">سفارشات</p>
                        </Button>
                    </li>
                    <li>
                        <Button className='d-flex justify-content-start align-items-center ' style={ { padding: '.85rem', borderRadius: 10, fontSize: '1.1rem' } } startIcon={<MdOutlineLocalOffer />} fullWidth color={'inherit'}>
                            <p className="mb-0 me-4">تخفیف ها</p>
                        </Button>
                    </li>
                </ul>
                <Settings />
            </div>
        </Drawer>
    )
}

export { DrawerHeader }
export default Sidebar