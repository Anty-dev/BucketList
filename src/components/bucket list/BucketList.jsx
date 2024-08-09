import React from "react";
import TabBar from "../tab bar/TabBar";
import './BucketList.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BucketList = () => {
    const intialList = [];
    const [myList, setMyList] = useState(intialList)

    /*Submit Button State */
    function HandleSubmit() {
        if (inputValue.trim() !== '') {
            const newItem = {
                id: uuidv4(),
                text: inputValue,
                done: false
            };
            setMyList([
                ...myList,
                newItem
            ])
            setInputValue('');
        }
    };

    const HandleDelete = (id) => {
        setMyList(myList.filter(item => 
            item.id !== id ));
    };

    /*Text Area State */
    const [inputValue, setInputValue] = useState('');

    const HandleInput = (e) => {
        setInputValue(e.target.value);

    };

    /* check box state */
    const HandleCheckbox = () => {
        setMyList([
            ...myList,
            myList.done = myList.done ? console.log("1") : console.log("2")
        ])
    }
        
    return(
        <div className="fragment">
            <TabBar />
        <h2 className="title">Your Bucket List</h2>
        
        <div className="input-div">
        <p className="add">Add to the List</p>
        <textarea rows="4" cols="50" placeholder="Enter your wishes here" className="list_input" onChange={HandleInput} value={inputValue} />
        <br></br>
        <button className="list-button" onClick={HandleSubmit} >
            <b>Submit</b>
        </button>
        </div>

            <h2 className="current-list">Current Bucket List</h2>
            <div className="the-list">
            <ul>
                {myList.map(item => (
                <li key={item.id}>{item.text}{' '}
                <input type="checkbox" onClick={() => HandleDelete(item.id)}></input>
                <button className='delete-button' onClick={() => HandleDelete(item.id)}>Delete</button>
                </li>
                ))}
                
            </ul>
            </div>
        </div>
    )
}
export default BucketList;