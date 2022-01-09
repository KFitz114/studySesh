// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Response.css';
import Flippy, { FrontSide, BackSide } from 'react-flippy'; 
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function Response(props) {
    const[flashCard, setFlashCard ] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:3400/response')
        .then (res => {
            console.log('Res.data', res.data.card)
            setFlashCard(res.data.card);
        })
    }, [])
        console.log('Flash Card: ', flashCard);
        let cardLi = [];
        if(flashCard.length > 0) {
            console.log('IN IF', flashCard);
            cardLi = flashCard.map(el => {
                return(
                    <Flippy
                        flipOnHover={false}
                        flipOnClick={true}
                        flipDirection='horizontal'>
                        <FrontSide>
                            <div className = 'question'>
                                <h4> Question </h4>
                                {el.question}
                            </div>
                        </FrontSide>
                        <BackSide>
                            <div className = 'answer'>
                                <h4> Answer </h4>
                                {el.answer}
                                <div className='buttons'>
                                    <button className = 'delBtn' onClick={() => deleteFunction(el["_id"])}> Delete </button>
                                    <Link exact to={'/modify/'+el["_id"]}> <button className = 'editBtn'> Edit </button>  </Link> 
                                </div>
                            </div>
                        </BackSide>
                    </Flippy>
                )
            })
        }
        const deleteFunction = (id) =>  {
            console.log("ID: ", id);
            axios.delete('http://localhost:3400/delete', {params: {id}})
            .then(res =>{
                console.log('res: ', res.data);
                getFlashCard();
            })
        }
        const getFlashCard = () => {
            axios.get('http://localhost:3400/response')
            .then (res => {
                setFlashCard(res.data.card);
            }
        )}
    return(
        <div id = 'collection'>
            <div className = 'side-link-container'>
            <Link className = "link-side" to = '/submit'> Create Cards   </Link>
            <Link className = "link-side" to = '/response'> View Collection </Link>
            </div>
            <div className = 'introTwo'>
            </div>
            <div className = 'response'>
                <div className = 'CardLi'> {cardLi} </div>
            </div>
        </div>
    )
}

export default Response;