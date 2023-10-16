import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTotalQTY, setOpenCart } from '../app/CartSlice.js';
import { Avatar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png';
import LoginGoogle from './LoginGoogle.jsx';
import { setLoading } from './features/login/loginSlice.jsx';


const Navbar = () => {
    const dispatch = useDispatch();

    const { isLoading } = useSelector((state) => state.login);
    const [isLogin, setIsLogin] = useState();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        setIsLogin(JSON.parse(localStorage.getItem("userLogin")));
    }, [isLoading]);

    const handleLogout = () => {
        localStorage.removeItem("userLogin");
        dispatch(setLoading());
    };


    const [navState, setNavState] = useState(false);
    const totalQTY = useSelector(selectTotalQTY);

    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }

    const onNavScroll = () => {
        if (window.scrollY > 30) {
            setNavState(true);
        } else {
            setNavState(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    }, []);
    return (
        <>
            <header className={
                !navState ? 'absolute top-7 left-0 right-0 opacity-100 z-50' : 'fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme'
            }>
                <nav className='flex items-center justify-between nike-container'>
                    <div className='flex items-center'>
                        <img
                            src={logo}
                            alt="logo/img"
                            className={`w-16 h-auto ${navState && "filter brightness-0"}`}
                        />
                    </div>
                    <ul className='flex items-center justify-around gap-10'>
                        <li className={`grid items-center`}>
                            <a className={`menu-style ${navState && "text-slate-900 transition-all duration-300"}`}>New & Featured</a>
                        </li>
                        <li className={`grid items-center`}>
                            <a className={`menu-style ${navState && "text-slate-900 transition-all duration-300"}`}>Man</a>
                        </li>
                        <li className={`grid items-center`}>
                            <a className={`menu-style ${navState && "text-slate-900 transition-all duration-300"}`}>Woman</a>
                        </li>
                        <li className={`grid items-center`}>
                            <a className={`menu-style ${navState && "text-slate-900 transition-all duration-300"}`}>Kid</a>
                        </li>
                        <li className={`grid items-center`}>
                            <a className={`menu-style ${navState && "text-slate-900 transition-all duration-300"}`}>Sales</a>
                        </li>
                    </ul>
                    <ul className='flex items-center justify-around gap-5'>



                        <li className='grid items-center'>
                            <MagnifyingGlassIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                        </li>
                        <li className='grid items-center'>
                            <HeartIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                        </li>
                        <li className='grid items-center'>
                            <button type='button' onClick={onCartToggle} className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                                <ShoppingBagIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                                <div className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-100'}`}>{totalQTY}</div>
                            </button>
                        </li>
                        <li className='grid items-center'>
                            {isLogin ? (
                                <IconButton
                                    sx={{ p: 0, ml: 2, mr: 2 }}
                                    aria-controls={open ? "basic-menu" : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                    onClick={(event) => {
                                        setAnchorEl(event.currentTarget);
                                    }}
                                >
                                    <Avatar alt={isLogin.name} src={isLogin.imageUrl} />
                                </IconButton>
                            ) : (
                                <LoginGoogle />
                            )}
                        </li>
                    </ul>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                    >
                        <MenuItem sx={{ p: 1 }} onClick={handleClose}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleLogout()}
                            >
                                Logout
                            </Button>
                        </MenuItem>
                    </Menu>
                </nav>
            </header>
        </>
    )
}

export default Navbar