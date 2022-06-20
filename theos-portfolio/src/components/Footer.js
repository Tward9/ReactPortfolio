import React from "react";
import GithubLink from "../githubLink.png";
import LinkedInLink from '../linkedInLogo.png';
import StackOverflowLink from '../StackOverflowLink.png';

function Footer() {
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
        <div className="d-flex w-50 mx-auto p-2" style={{justifyContent: 'space-around'}}>
            {
                LinkList.map((link) => (
                    <a href={link.link} target="_blank" rel="noreferrer">
                        <img
                            src={link.image}
                            alt={link.altText}
                            style={{width: 75, opacity: .5}}
                        />
                    </a>
                ))
            }
        </div>
    )
};

export default Footer;