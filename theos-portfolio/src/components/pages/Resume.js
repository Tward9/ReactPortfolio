import React from 'react';
import javascriptIcon from '../../skillsImages/JavaScript-logo.png';
import reactIcon from '../../skillsImages/react-logo.svg';
import nodeIcon from '../../skillsImages/node-logo.png';
import htmlIcon from '../../skillsImages/html-logo.png';
import graphqlIcon from '../../skillsImages/graphql-logo.png';
export default function Resume() {
    return (
        <div className='d-flex mt-5 flex-wrap'>
            <h2 className=' listCenter w-100'>
                Skills Proficiencies!
            </h2>
            <ul className='listCenter d-flex' style={{ listStyleType: 'none' }}>
                <li className='px-2'>
                    <figure className='w-25'>
                        <img className='figure-img roundImgSkill' id='javascriptIcon' src={javascriptIcon} alt='Javascript Icon, a J and S cutout of a yello block' />
                        <figcaption>
                            Javascript
                        </figcaption>
                    </figure>
                </li>
                <li className='px-2'>
                    <figure className='w-25'>
                        <img className='figure-img roundImgSkill' id='reactIcon' src={reactIcon} alt='React Icon, a blue Fbolt' />
                        <figcaption className='left'>
                            React
                        </figcaption>
                    </figure>
                </li>
                <li className='px-2'>
                    <figure className='w-25'>
                        <img className='figure-img roundImgSkill' id='reactIcon' src={graphqlIcon} alt='GraphQL Icon, a pink triangle inside a hexigon with circles at the virtices' />
                        <figcaption className=''>
                            GraphQL
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
            <ul className='listCenter d-flex' style={{ listStyleType: 'none' }}>
                <li className='px-2'>
                    <figure className='w-25'>
                        <img className='figure-img roundImgSkill' id='nodeIcon' src={nodeIcon} alt='Node Icon, a J and S inside a green hexagon' />
                        <figcaption className='left'>
                            Node
                        </figcaption>
                    </figure>
                </li>
                <li className='px-3'>
                    <figure className='w-25'>
                        <img className='figure-img roundImgSkill' id='reactIcon' src={htmlIcon} alt='HTML Icon, a red shield with a 5 in the center' />
                        <figcaption className='left'>
                            HTML
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </div>
    )
}