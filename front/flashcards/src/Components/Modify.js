import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Submission.css';
import { useParams } from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function Modify(props) {
  const [question, setQuestion] = useState(' ');
  const [answer, setAnswer] = useState(' ');
  const [cardId, setCardId] = useState([]);
  const [cardUpdate, setCardUpdate] = useState(false);
  let params = useParams();
  useEffect(() => {
    
  console.log("params: ", params);
    console.log("USE EFFECT");
    console.log('Props.params: ', props)
    console.log('Params in use effect: ', params);
    if (typeof params.id != 'undefined')  {
      // let id = params.id;
      axios.get('http://localhost:3400/find', {params: { id: params.id }})
      .then(res => {
        console.log('Params: ', params);
        console.log('res.data', res.data);
        console.log("FOUND!");
        setQuestion(res.data.question);
        setAnswer(res.data.answer);
        setCardId(res.data["_id"]);
        setCardUpdate(true);
      })
    }
  }, [])

  const submit = (e) => {
    e.preventDefault();
    console.log('Show question: ', question);
    console.log('Show answer: ', answer);
    console.log("Card UPDATE: ", cardUpdate);
    if(cardUpdate)  {
      console.log('Card found');
      let data = {
        question,
        answer,
        cardId
        };
        axios.post('http://localhost:3400/modify', data)
        .then(res => console.log("response ", res));
    }
    // } else {
    //     let data = {
    //       question,
    //       answer
    //     };
    //     console.log('Data: ', data);
    //     console.log('Submitted');
    //     alert('Flash card created!');
    //     axios.post('http://localhost:3400/submit', data)
    //     .then(res => console.log('Response ', res));
    // }
  }

  return (
    <div className="submission">
      <div className ='side-link-container'>
      <Link className = "link-side" to = '/submit'> Create Cards </Link>
      <Link className = "link-side" to = '/response'> View Collection </Link>
      {/* <h3> Welcome ${userName}</h3> */}
      {/* <h3> Add Cards </h3> */}
      </div>
      <div className ='cardCreate'>
        <p className = 'intro'> Question </p>
        <textarea className = 'input' type = 'text' placeholder = 'Question' value ={question} onChange = {e => setQuestion(e.target.value)} />
        <p className = 'intro'> Answer </p>
        <textarea className = 'inputAnswer' type = 'text' placeholder = 'Answer' value = {answer} onChange = { e => setAnswer(e.target.value)} />
        <br></br>
        <button className = 'button' onClick = {e => submit(e)}>Submit</button>
      </div>
    </div>
  );
}

export default Modify;
