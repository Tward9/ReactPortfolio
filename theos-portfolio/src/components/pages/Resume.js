import React from 'react';
import javascriptIcon from '../../JavaScript-logo.png'
export default function Resume() {
    return (
        <div className='d-flex mt-5 flex-wrap'>
            <h2 className=' text-center w-100'>
                Skills Proficiencies!
            </h2>
            <ul className='buttonCenter' style={{ listStyleType: 'none' }}>
                <li>
                    <figure className='w-25'>
                        <img className='figure-img roundImgSkill' id='javascriptIcon' src={javascriptIcon} alt='Javascript Icon, a J and S cutout of a yello block'/>
                        <figcaption>
                            Javascript
                        </figcaption>
                    </figure>
                </li>
                {/* <li className='skillsList text-center'>HTML</li>
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
                </li> */}
            </ul>
            
        </div>
    )
}