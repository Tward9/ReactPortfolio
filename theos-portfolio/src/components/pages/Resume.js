import React from 'react';
import MyResume from '../../TheodoreWardResume.pdf';

export default function Resume() {
    return (
        <div>
            <h2 className='m-1 text-center w-100'>
                Skills Proficiencies!
            </h2>
            <ul className='d-flex flex-wrap justify-content-evenly' style={{ listStyleType: 'none' }}>
                <li className='skillsList text-center'>HTML</li>
                <li className='skillsList'>
                    Javascript
                    <ul style={{ listStyleType: 'none' }}>
                        <li>Node.JS</li>
                        <li>Express.JS</li>
                        <li>React.JS</li>
                        <li>JSX</li>
                    </ul>
                </li>
                <li className='skillsList text-center'>MERN Stack</li>
                <li className='skillsList text-center'>CSS</li>
                <li className='skillsList'>
                    mySQL
                    <ul style={{ listStyleType: 'none' }}>
                        <li>Sequelize</li>
                    </ul>
                </li>
                <li className='skillsList'>
                    NoSQL
                    <ul style={{ listStyleType: 'none' }}>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                    </ul>
                </li>
                <li className='skillsList'>
                    API's
                    <ul style={{ listStyleType: 'none' }}>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ul>
                </li>
            </ul>
            <a href={MyResume} download="TheodoreWardResume" target='_blank' rel='noreferrer'>
                <button className='btn btn-one m-3 p-2'>Download My Resume</button>
            </a>
        </div>
    )
}