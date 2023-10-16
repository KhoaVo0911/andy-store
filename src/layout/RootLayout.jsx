
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { footerAPI } from '../data/data';
const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer endpoint={footerAPI} />
        </>
    )
}

export default RootLayout;