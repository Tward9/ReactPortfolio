import React from 'react';
import Platters from '../../plattersAndPantries.png';
import OneFish from '../../OneFishTwoFishApp.png';
import EComm from '../../ECommBackEnd.png';
import Employee from '../../MakeSelection.png';
import MongoBack from '../../applicationRoutes.png';
import LocalApp from '../../LocalApplication.png';


const Project = () => {
    const ProjectList = [
        {
            "projectName": "Patters and Pantries",
            "projectDescription": "This application lets the user search for recipes and ingredients before saving ingredient lists to their unique pantry and grocery lists. Users can move items between the lists as they purchase items or run out of items, as well as view saved recipes, saved ingredients, and add individual items to their lists manually.",
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
        <div className='d-flex flex-column'>
            <h2 className='d-block text-center w-100'>Projects</h2>
            {
                ProjectList.map((eachProject) => (
                    <div key={eachProject.projectName} className="card mb-3 w-75 d-flex center" style={{justifyContent: 'center'}}>
                        <h4 className="card-header bg-project text-light p-2 m-0">
                            {eachProject.projectName}
                        </h4>
                        <div className="card-body p-2">
                            <img className='w-50 d-block' src={eachProject.projectImage} alt={eachProject.projectName} style={{textAlign: 'center'}} />
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