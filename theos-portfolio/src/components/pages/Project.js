import React from 'react';
import Platters from '../../projectImages/plattersAndPantries.png';
import OneFish from '../../projectImages/OneFishTwoFishApp.png';
import EComm from '../../projectImages/ECommBackEnd.png';
import Employee from '../../projectImages/MakeSelection.png';
import MongoBack from '../../projectImages/applicationRoutes.png';
import LocalApp from '../../projectImages/LocalApplication.png';
import diveBuddy from '../../projectImages/diveBuddy.png'


const Project = () => {
    const ProjectList = [
        {
            "projectName": "Dive Buddy",
            "projectDescription": `Dive Buddy is an application that calculates different stats for divers, a convenient alternative to filling out paper forms. On this application a user can create an account, review and update their dashboard, and view a feed that includes other registered users.
            
            Once a diver has created an account they can start filling dive logs. All of their completed dive logs can then be found under the “dashboard” feature of the application. The dive log presents the user with the needed fields for the app to calculate pressure used, pressure at depth, total nitrogen time, ending letter group, next residual nitrogen, next start letter, next max diving time, etc. 
            
            Our application can also be used as a dedicated social media platform for divers. People who dive with friends and family can add each other as “dive buddies”. When a diver creates an account they are given an ID number. Users can add friends by exchanging these IDs. All the users they add are then displayed on their personalized “feed” page.
            Are you ready to dive in?`,
            "projectImage": diveBuddy,
            "projectRepo": "https://github.com/P3-sharkBait/diveBuddy",
            "projectLink": "https://dive-buddy-app.herokuapp.com/",
        },
        {
            "projectName": "Patters and Pantries",
            "projectDescription": `What's for dinner? Yeah, it's just one of those questions that chases every answer from your mind. Eating out is expensive and gas prices are even worse, so eating in is probably a good idea. But what? You know you have a few things in your pantry. Wouldn't it be great if you could search thousands of delicious recipes based on ingredients you already have and create a convenient grocery list from there?

            Now the Platters & Pantries application allows you to just that, and with a personalized updatable pantry for planning future meals!
            
            Your palate and budget will thank you!
            
            `,
            "projectImage": Platters,
            "projectRepo": "https://github.com/Pleasant-Pantry-Professionals/Platters-and-Pantries",
            "projectLink": "https://platters-and-pantries.herokuapp.com/",
        },
        {
            "projectName": "One Fish, Two Fish, Red Fish, Go Fish",
            "projectDescription": "This application lets the user select a costal location, then displays weather information as well as local ocean fish. Find out if the next few days will be good weather for fishing, as well as start to plan what gear to bring and where to start your adventure, depending on your goals",
            "projectImage": OneFish,
            "projectRepo": "https://github.com/Tward9/1-fish-2-fish-red-fish-joe-fish",
            "projectLink": "https://tward9.github.io/1-fish-2-fish-red-fish-joe-fish/",
        },
        {
            "projectName": "ECommBackEnd",
            "projectDescription": "This application models the back-end site requirements for an e-commerce website. The user can create, update, and delete products, product tags, and categories that are all stored using sequelize.",
            "projectImage": EComm,
            "projectRepo": "https://github.com/Tward9/E-Commerce_BackEnd",
            "projectLink": "https://drive.google.com/file/d/1x3Y592tHl-iT9CR0bdYwEGXwW-kW5ill/view?usp=sharing",
        },
        {
            "projectName": "Employee Tracker",
            "projectDescription": "This application lets the user create and manage an employee database. They can create roles, departments, and employees. Assign and update managers, roles, even salaries.",
            "projectImage": Employee,
            "projectRepo": "https://github.com/Tward9/Employee_Tracker",
            "projectLink": "https://drive.google.com/file/d/1it5hR84RQRgNBXf0p1MZDcCvJNOpD482/view?usp=sharing",
        },
        {
            "projectName": "MongoSocialNetworkBackEnd",
            "projectDescription": "This application is a model back end for a social networking site that utilizes MongoDB to manage the users and data. You can create, update, and delete users. And other users to a friends list. Create and update thoughts, and add reactions to those thoughts.",
            "projectImage": MongoBack,
            "projectRepo": "https://github.com/Tward9/MongoSocialNetworkBackEnd",
            "projectLink": "https://drive.google.com/drive/folders/1gohdgV60PlqwrUvfX0RYrH1ZagL0KY4U?usp=sharing",
        },
        {
            "projectName": "PWA Text Editor",
            "projectDescription": "This application is a text editor that can be downloaded as an app and run offline. The data entered into the editor is saved if it loses focus and is still viewable the next time it is opened thanks to IndexedDB.",
            "projectImage": LocalApp,
            "projectRepo": "https://github.com/Tward9/PWA-Text-Editor",
            "projectLink": "https://tw-text-editor.herokuapp.com/",
        }
    ];
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <div className=' d-flex flex-column'>
            <h2 className='d-block text-center w-100'>Projects</h2>
            {
                ProjectList.map((eachProject) => (
                    <div key={eachProject.projectName} className="card mb-3 w-75 d-flex center" style={{ justifyContent: 'center' }}>
                        <h4 className="card-header bg-project text-light p-2 m-0">
                            {eachProject.projectName}
                        </h4>
                        <div className="card-body p-2">
                            <img className='w-50 d-block imageCenter' src={eachProject.projectImage} alt={eachProject.projectName} style={{ textAlign: 'center' }} />
                            <p>{eachProject.projectDescription}</p>
                        </div>
                        <button className='btn btn-one mb-3' onClick={() => openInNewTab(eachProject.projectRepo)}>
                            View Github Repository
                        </button>
                        <button className='btn btn-two' onClick={() => openInNewTab(eachProject.projectLink)}>
                            View Application Demo
                        </button>
                    </div>
                ))
            }
        </div>
    )
};

export default Project;