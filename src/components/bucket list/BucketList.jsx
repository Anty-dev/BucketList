import React from "react";
import TabBar from "../tab bar/TabBar";
import './BucketList.css';
import sortList from './SortList.js';
import garbageimage from '../images/garbage.png';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


/*
 * Contains all components of the bucket list.
 * Features include a function to save the items, a submit button and its state, a textarea and its state,
 * a way to sort the list, a delete button, and a check box with its state.
 * Each item in the list has 3 attributes its identifier (id), its text (determined by the input from the user from the textarea),
 * and a boolean, if the item is done (true) or not done (false) default value is not done.
 */


const BucketList = () => {

    const savedItems = () => {
        const savedList = localStorage.getItem('myBucketList');
        return savedList ? JSON.parse(savedList) : [];
    };

    
    const [myList, setMyList] = useState(savedItems())
    const [inputValue, setInputValue] = useState(''); // The input value is the string of text the user inputs

    //Submit Button State 
    function handleSubmit() {
        if (inputValue.trim() !== '') {
            const newItem = {
                id: uuidv4(),
                text: inputValue,
                done: false
            };

            setMyList(myList => {
                return sortList([...myList, newItem]);
            })

            setInputValue('');
        }
    };

    //Delete Button State 
    const handleDelete = (id) => {
        setMyList(myList.filter(item => 
            item.id !== id ));
    };

    //Text Area State 
    const handleInput = (e) => {
        setInputValue(e.target.value);

    };

    // check box state 
    const handleCheckbox = (id) => {
        setMyList(myList => sortList(
            myList.map((item) => 
                item.id === id ? {...item, done: !item.done} : item
            ))
        );
    };

    //this code here saves the list after each time there is a change in the myList array
    useEffect(() => {
        localStorage.setItem('myBucketList', JSON.stringify(myList));
    }, [myList]);

       
    return(
        <div className="fragment">
            <TabBar />
        <h2 className="title">Your Bucket List</h2>
        
        
        <div className="input-div">
        <textarea rows="4" cols="50" maxLength="65"placeholder="Enter your wishes here" className="list_input" onChange={handleInput} value={inputValue} />

        <br></br>
        <button className="list-button" onClick={handleSubmit} >
            <b>Submit</b>
        </button>
        </div>
            
            <div className="current-list">
            <h2>Current Bucket List</h2>
            
            <ul>
                <div className="the-list">
                {myList.map(item => (
                    <li key={item.id}> 
                        <input type="checkbox" checked={item.done} id="checkbox-value" onChange={() => handleCheckbox(item.id)}></input>
                        <p className={item.done ? 'true' : ''}> {item.text}</p> {' '}
                        <button className='delete-button' onClick={() => handleDelete(item.id)}> <img src={garbageimage} alt="garbage" className="garbage-icon"/> </button>
                    </li>
                ))}
                </div>
            </ul>
            </div>
            
        </div>
    )
}
export default BucketList;