import React from "react";
import GithubLink from "../githubLink.png";
import LinkedInLink from '../linkedInLogo.png';
import StackOverflowLink from '../StackOverflowLink.png';
import MyResume from '../TheodoreWardResume.pdf';

function Header({ currentPage, handlePageChange }) {
    const LinkList = [
        {
            "link": 'https://github.com/Tward9',
            'image': GithubLink,
            'altText': 'Github Logo Link to Profile',
        },
        {
            "link": 'https://www.linkedin.com/in/theodore-ward-ba3a80b4/',
            'image': LinkedInLink,
            'altText': 'LinkedIn Logo Link to Profile',
        },
        {
            "link": 'https://stackoverflow.com/users/17845614/tward9',
            'image': StackOverflowLink,
            'altText': 'Stack Overflow Logo Link to Profile',
        }
    ]
    return (
        <div style={{ backgroundColor: "#F9FAF5" }} className='header'>
            <h2 className="p-1 mx-3 my-1" style={{ backgroundColor: "#F9FAF5" }}>Theo Ward</h2>
            <h6 className="p-1 mx-1 mb-1" style={{ backgroundColor: "#F9FAF5" }}>Welcome to my portfolio!</h6>
            <ul className="block nav nav-tabs" style={{ backgroundColor: "#F9FAF5" }}>
                <li className="nav-item ">
                    <a
                        href="#About"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        About
                    </a>
                </li>
                <li className="nav-item ">
                    <a
                        href="#Portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                </li>
                <li className="nav-item ">
                    <a
                        href="#Resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Skills and Background
                    </a>
                </li>
                <li className="nav-item ">
                    <a
                        href="#Contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                </li>
            </ul>
            {
                LinkList.map((link) => (
                    <a href={link.link} target="_blank" rel="noreferrer" className="centerLink">
                        <img
                            src={link.image}
                            alt={link.altText}
                            style={{width: 50, padding: 5, opacity: .4,}}
                            className='aboutImg'
                        />
                    </a>
                ))
            }
            <a href={MyResume} download="TheodoreWardResume" target='_blank' rel='noreferrer' className='d-block w-100 '>
                <button className='btn btn-one m-3 p-2'>Download My Resume</button>
            </a>
        </div>
    )
};

export default Header;