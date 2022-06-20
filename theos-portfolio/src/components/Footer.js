import React from "react";
import GithubLink from "../../githubLink.png";
import LinkedInLink from '../../linkedInLogo.png';
import StackOverflowLink from '../../StackOverflowLink.png';

function Footer() {
    const LinkList = [
        {
            "link": '',
            'image': GithubLink,
            'altText': 'Github Logo Link to Profile',
        },
        {
            "link": '',
            'image': LinkedInLink,
            'altText': 'LinkedIn Logo Link to Profile',
        },
        {
            "link": '',
            'image': StackOverflowLink,
            'altText': 'Stack Overflow Logo Link to Profile',
        }
    ]
    return (
        <div>
            {
                LinkList.map((link) => (
                    <a href={link.link} target="_blank" rel="noreferrer">
                        <img
                            src={link.image}
                            alt={link.altText}
                        />
                    </a>
                ))
            }
        </div>
    )
};

export default Footer;