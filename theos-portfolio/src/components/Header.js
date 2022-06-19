import React from "react";
function Header({ currentPage, handlePageChange }) {
    return (
        <div style={{backgroundColor: "#ECEDE9"}} className='header'>
            <h2 className="p-1 mx-3 my-1" style={{backgroundColor: "#ECEDE9"}}>Theo Ward</h2>
            <h6 className="p-1 mx-1 mb-1" style={{backgroundColor: "#ECEDE9"}}>Welcome to my portfolio!</h6>
            <ul className="nav nav-tabs" style={{backgroundColor: "#ECEDE9"}}>
                <li className="nav-item">
                    <a
                        href="#About"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#Portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#Resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#Contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Header;