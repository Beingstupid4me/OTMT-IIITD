import React, { useState } from "react";
import { Link } from "react-router-dom";
import iiitdlogo from '../images/iiitdlogo.png';
import "./navbar.css";

export default function Navbar() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <img src={iiitdlogo} alt="IIITD Logo" />
                </div>
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/service">Our Services</Link>
                    <Link to="/technology">Technology</Link>

                    {/* Dropdown for Resources */}
                    <div
                        className="dropdown"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Link to="/resources" className="dropdown-link">
                            Resources
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                className="dropdown-icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </Link>
                        {dropdownVisible && (
                            <div className="dropdown-menu">
                                <Link to="/Fac_Res">Faculty and Staff</Link>
                                <Link to="/stu_res">Student</Link>
                                <Link to="/Par_res">Partners</Link>
                            </div>
                        )}
                    </div>

                    <Link to="/collaborate">Collaborate</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/contact">Contact Us</Link>
                </nav>
            </div>
        </header>
    );
}
