import React from 'react';
import javascriptIcon from '../../skillsImages/JavaScript-logo.png';
import reactIcon from '../../skillsImages/react-logo.svg';
import nodeIcon from '../../skillsImages/node-logo.png';
import htmlIcon from '../../skillsImages/html-logo.png';
import graphqlIcon from '../../skillsImages/graphql-logo.png';
import restIcon from '../../skillsImages/restapi-logo.jpeg';
import cssIcon from '../../skillsImages/css-logo.png';
import mongoDBIcon from '../../skillsImages/MongoDB-logo.png';
import pythonIcon from '../../skillsImages/phyton-logo.jpeg';
import sqlIcon from '../../skillsImages/sql-logo.png';
export default function Resume() {
    return (
        <div className='d-flex mt-5 flex-wrap'>
            <h2 className=' buttonCenter w-100'>
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
                <li className='px-2'>
                    <figure className='w-25'>
                        <img className='figure-img roundImgSkill' id='reactIcon' src={sqlIcon} alt='sqL Icon, a blue cylinder' />
                        <figcaption className=''>
                            SQL
                        </figcaption>
                    </figure>
                </li>
                <li className='px-2'>
                    <figure className='w-25'>
                        <img className='figure-img roundImgSkill' id='reactIcon' src={mongoDBIcon} alt='MongoDB Icon, a leaf' />
                        <figcaption className=''>
                            MongoDB
                        </figcaption>
                    </figure>
                </li>
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
                <li className='px-3'>
                    <figure className='w-25'>
                        <img className='figure-img roundImgSkill' id='reactIcon' src={cssIcon} alt='css Icon, a blue shield with a 3 in the center' />
                        <figcaption className='left'>
                            CSS
                        </figcaption>
                    </figure>
                </li>
                <li className='px-1'>
                    <figure className='w-25'>
                        <img className='figure-img roundImgSkill' id='reactIcon' src={restIcon} alt='REST API Icon, a a cloud with a gear in it' />
                        <figcaption className='left px-2'>
                            HTML
                        </figcaption>
                    </figure>
                </li>
                <li className='px-3'>
                    <figure className='w-25'>
                        <img className='figure-img roundImgSkill' id='reactIcon' src={pythonIcon} alt='Python Icon, a blue and yellow snake that form a plus' />
                        <figcaption className='left'>
                            Python
                        </figcaption>
                    </figure>
                </li>
            </ul>
        </div>
    )
}