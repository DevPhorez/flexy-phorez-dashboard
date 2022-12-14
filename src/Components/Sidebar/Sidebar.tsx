import * as React from "react";

import { styled } from "@mui/material/styles";
import { Drawer, Button, IconButton, Tooltip } from "@mui/material";

import { FiChevronDown } from 'react-icons/fi';
import { FaList } from 'react-icons/fa'
import { BiDetail } from 'react-icons/bi'

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import { drawerWidth } from "../../App.tsx";

import { AiOutlineHome, AiOutlineShopping, AiFillSetting } from 'react-icons/ai'
import { MdOutlineModeComment, MdOutlineLocalOffer } from 'react-icons/md'
import { FiUsers, FiShoppingCart, FiCalendar } from 'react-icons/fi'
import { CgNotes } from 'react-icons/cg'

import Settings from './Settings/Settings'

import { NavLink } from 'react-router-dom'

import './Sidebar.css'

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))();

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary

        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgb(255, 255, 255)'
            : 'rgba(0, 0, 0,)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

function Sidebar ({ open }) {

    const [expanded, setExpanded] = React.useState(false)

    // @ts-ignore
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
            className={ !open && 'invisible' }
        >
            <DrawerHeader className='position-relative mb-5'>
                <svg viewBox='0 -8 80 80' className='position-absolute top-0' style={ { left: 80 } }>
                    <circle fill='#fec90f' stroke='#fec90f' className="cls-4" cx="21.703" cy="23.969" r="6.328"></circle>
                    <path fill='var(--warning)' data-name="Rounded Rectangle 698" className="cls-2"
                          d="M8.723,4.086a5.9,5.9,0,0,1,5.895,5.895V28.216a5.895,5.895,0,1,1-11.79,0V9.981A5.9,5.9,0,0,1,8.723,4.086Z"></path>
                    <rect  data-name="Rounded Rectangle 699" className="cls-3" fill='var(--info)' x="3" y="3"
                          width="25" height="12" rx="6" ry="6"></rect>
                </svg>
                <h2 className='position-absolute' style={ { right: 0, top: 12 } }>????????</h2>
            </DrawerHeader>
                <div className='body rtl'>
                    <p className='text-black-50 opacity-50 h5 mb-3'>?????????????? ????</p>
                    <ul className='list-unstyled p-0 pe-2'>
                        <li className='mb-1'>
                            <NavLink to='/' className='text-decoration-none text-dark no-hover'>
                                {
                                    ({ isActive }) => (
                                        <Button className={` ${ isActive && 'text-white bg-info' } d-flex justify-content-start align-items-center `} style={ { padding: '.65rem', borderRadius: 10, fontSize: '1.1rem' } } startIcon={<AiOutlineHome />} fullWidth color={'inherit'}>
                                            <p className="mb-0 me-4">????????</p>
                                        </Button>
                                    )
                                }
                            </NavLink>
                        </li>
                        <li className='mb-1'>
                            <NavLink to='/calendar' className='text-decoration-none text-dark no-hover'>
                                {
                                    ({ isActive}) => (
                                        <Button
                                            className={` ${ isActive && 'text-white bg-info'} d-flex justify-content-start align-items-center `}
                                            style={{padding: '.65rem', borderRadius: 10, fontSize: '1.1rem'}}
                                            startIcon={<FiCalendar/>} fullWidth color={'inherit'}>
                                            <p className="mb-0 me-4">??????????</p>
                                        </Button>
                                    )
                                }
                            </NavLink>
                        </li>
                        <li className='mb-1'>
                            <NavLink to='/products' className='text-decoration-none text-dark no-hover'>
                                {
                                    ({ isActive }) => (
                                        <>
                                            <Accordion className='m-0 p-0' epanded={expanded}>
                                                <AccordionSummary className='m-0 p-0'>
                                                    <Button className={` ${ isActive && 'text-white bg-info'} d-flex justify-content-start align-items-center `} style={ { padding: '.65rem', borderRadius: 10, fontSize: '1.1rem' } } startIcon={<AiOutlineShopping size={24} />} fullWidth onChange={ () => setExpanded( prevState => !prevState)} color={'inherit'}>
                                                        <p className="mb-0 me-4">??????????????</p>
                                                        <div className='position-absolute' style={ { left: 10 } }>
                                                            <FiChevronDown />
                                                        </div>
                                                    </Button>
                                                </AccordionSummary>
                                                <AccordionDetails className='px-1 py-0'>
                                                    <Button className='d-flex justify-content-start align-items-center my-1' style={ { padding: '.65rem', borderRadius: 10, fontSize: '1.1rem' } } startIcon={<FaList size={14} />} fullWidth onChange={ () => setExpanded( prevState => !prevState)} color={'inherit'}>
                                                        <p className="mb-0 me-4">??????????????</p>
                                                    </Button>
                                                    <Button className='d-flex justify-content-start align-items-center mb-1' style={ { padding: '.65rem', borderRadius: 10, fontSize: '1.1rem' } } startIcon={<BiDetail size={16} />} fullWidth onChange={ () => setExpanded( prevState => !prevState)} color={'inherit'}>
                                                        <p className="mb-0 me-4">????????????</p>
                                                    </Button>
                                                </AccordionDetails>
                                            </Accordion>
                                        </>
                                    )
                                }
                            </NavLink>
                        </li>
                        <li className='mb-1'>
                            <NavLink to='/comments' className='text-decoration-none text-dark no-hover'>
                                {
                                    ({ isActive }) => (
                                        <Button className={` ${ isActive && 'text-white bg-info'} d-flex justify-content-start align-items-center `} style={ { padding: '.65rem', borderRadius: 10, fontSize: '1.1rem' } } startIcon={<MdOutlineModeComment />} fullWidth color={'inherit'}>
                                            <p className="mb-0 me-4">??????????</p>
                                        </Button>
                                    )
                                }

                            </NavLink>
                        </li>
                        <li className='mb-1'>
                            <NavLink to='/blog' className='text-decoration-none text-dark no-hover'>
                                {
                                    ({ isActive }) => (
                                        <>
                                            <Accordion className='m-0 p-0' epanded={expanded}>
                                                <AccordionSummary className='m-0 p-0'>
                                                    <Button className={` ${ isActive && 'text-white bg-info'} d-flex justify-content-start align-items-center `} style={ { padding: '.65rem', borderRadius: 10, fontSize: '1.1rem' } } startIcon={<CgNotes />} fullWidth onChange={ () => setExpanded( prevState => !prevState)} color={'inherit'}>
                                                        <p className="mb-0 me-4">????????</p>
                                                        <div className='position-absolute' style={ { left: 10 } }>
                                                            <FiChevronDown />
                                                        </div>
                                                    </Button>
                                                </AccordionSummary>
                                                <AccordionDetails className='px-1 py-0'>
                                                    <NavLink to={'/blog'} className='no-hover'>
                                                        <Button className='d-flex justify-content-start align-items-center my-1' style={ { padding: '.65rem', borderRadius: 10, fontSize: '1.1rem' } } startIcon={<FaList size={14} />} fullWidth onChange={ () => setExpanded( prevState => !prevState)} color={'inherit'}>
                                                            <p className="mb-0 me-4">????????????</p>
                                                        </Button>
                                                    </NavLink>
                                                    <NavLink to={'/blog/1/lorem-ipsum'} className='no-hover'>
                                                        <Button className='d-flex justify-content-start align-items-center mb-1' style={ { padding: '.65rem', borderRadius: 10, fontSize: '1.1rem' } } startIcon={<BiDetail size={16} />} fullWidth onChange={ () => setExpanded( prevState => !prevState)} color={'inherit'}>
                                                            <p className="mb-0 me-4">??????????</p>
                                                        </Button>
                                                    </NavLink>
                                                </AccordionDetails>
                                            </Accordion>
                                        </>
                                    )
                                }

                            </NavLink>
                        </li>
                        <li className='mb-1'>
                            <NavLink to='/users' className='text-decoration-none text-dark no-hover'>
                                {
                                    ({ isActive }) => (
                                        <Button className={` ${ isActive && 'text-white bg-info'} d-flex justify-content-start align-items-center `} style={ { padding: '.65rem', borderRadius: 10, fontSize: '1.1rem' } } startIcon={<FiUsers />} fullWidth color={'inherit'}>
                                            <p className="mb-0 me-4">??????????????</p>
                                        </Button>
                                    )
                                }
                            </NavLink>
                        </li>
                        <li className='mb-1'>
                            <NavLink to='/orders' className='text-decoration-none text-dark no-hover'>
                                {
                                    ({ isActive }) => (
                                        <Button className={` ${ isActive && 'text-white bg-info'} d-flex justify-content-start align-items-center `} style={ { padding: '.65rem', borderRadius: 10, fontSize: '1.1rem' } } startIcon={<FiShoppingCart />} fullWidth color={'inherit'}>
                                            <p className="mb-0 me-4">??????????????</p>
                                        </Button>
                                    )
                                }
                            </NavLink>
                        </li>
                        <li className='mb-1'>
                            <NavLink to='/offers' className='text-decoration-none text-dark no-hover'>
                                {
                                    ({ isActive }) => (
                                        <Button className={` ${ isActive && 'text-white bg-info'} d-flex justify-content-start align-items-center `} style={ { padding: '.65rem', borderRadius: 10, fontSize: '1.1rem' } } startIcon={<MdOutlineLocalOffer />} fullWidth color={'inherit'}>
                                            <p className="mb-0 me-4">?????????? ????</p>
                                        </Button>
                                    )
                                }
                            </NavLink>
                        </li>
                    </ul>
                    <Settings />
                </div>
        </Drawer>
    )
}

export { DrawerHeader }
export default Sidebar