import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import './layout.scss';

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            <div className="layout-content">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout