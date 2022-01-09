import React, {component} from 'react';
import './Submission.css';

class Home extends React.Component {
    render() {
        return <div className = 'filler'> <h1> Welcome to Study Sesh </h1> 
            <div className = 'container'>
                <div className = 'submitDesc'>
                    <p className = 'p-Home'> The Flash Cards tab will take you right to the Flash Card workspace. Create Cards is used to create new flash cards to add to the collection. Simply type the question into the question text area and the answer into the answer text area then press submit! </p>
                        <div className = 'bg'></div>
                </div>
                <div className = 'responseDesc'>
                    <p className = 'p-Home'> View Collection is where you will see the flash cards that have been created. Scroll down to see the cards. Clicking anywhere on the cards will cause them to flip revealing the answer or returning to the question. 
                        There are also two buttons, one is the the delete button and the other is the edit button. Clicking the delete button will remove the card from the database immediately. Clicking the edit button will return you to the submit tab but what you enter will change that one card upon submit.
                    </p>
                </div>
            </div>
        </div>
    }   
}

export default Home;