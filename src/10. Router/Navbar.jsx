import React from 'react';
import { Link } from 'react-router-dom'
import './Router.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="nav-logo"><b>OKTAVIAN <i>AJI</i></b></Link>
            <div className="nav-content">
                <Link to="/" className="nav-item">HOME</Link>
                <Link to="/about" className="nav-item">ABOUT</Link>
                <Link to="/blog" className="nav-item">BLOG</Link>
                <Link to="/data" className="nav-item">DATA</Link>
            </div>
        </div>
    )
}

export default Navbar
