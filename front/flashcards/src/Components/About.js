import React, {component} from 'react';
import './Submission.css';

class About extends React.Component {
    render() {
        return <div> <h1> About this app </h1> 
            <div className = 'container'>
                <p className = 'p-about'> This application is my first full-stack application using the CRUD model. The front-end was built in React using hooks and class based components.
                    The flash cards created are sent to and retreived from a Mongo Database using the Node.js server model.
                </p>
            </div>
        </div>
    }   
}

export default About;