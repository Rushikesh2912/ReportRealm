import { Link } from "react-router-dom";
import React from "react";
const Footer = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark" style={{ height: "4%" }}>
                <div className="container">
                    <Link className="navbar-brand" to="/general">ReportRealm</Link>
                    <p className='text-center' style={{ color: 'white' }}>© 2024 This Website Design and Developed by Rushikesh Shinde</p>
                </div>
            </nav>
        </div>
    )
}
export default Footer;
