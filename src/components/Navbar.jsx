import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import iiitdlogo from '../images/iiitdlogo.png';

export default function Navbar() 
{
    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <img src={iiitdlogo} alt="IIITD Logo" /> 
                </div>
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/services">Our services</Link>
                    <Link to="/technology">Technology</Link>
                    <Link to="/resources">Resources</Link>
                    <Link to="/collaborate">Collaborate</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/contact">Contact Us</Link>
                </nav>
            </div>
        </header>
    );
};

