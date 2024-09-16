import React from "react";
import TabBar from "../tab bar/TabBar";
import './BucketList.css';
import sortList from './SortList.js';
import garbageimage from '../images/garbage.png';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BucketList = () => {

    const savedItems = () => {
        const savedList = localStorage.getItem('myBucketList');
        return savedList ? JSON.parse(savedList) : [];
    };
    
    const [myList, setMyList] = useState(savedItems())
    const [inputValue, setInputValue] = useState(''); // The input value is the string of text the user inputs

    //Submit Button State 
    function HandleSubmit() {
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
    const HandleDelete = (id) => {
        setMyList(myList.filter(item => 
            item.id !== id ));
    };

    //Text Area State 
    const HandleInput = (e) => {
        setInputValue(e.target.value);

    };

    // check box state 
    const HandleCheckbox = (id) => {
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
        <textarea rows="4" cols="50" maxLength="65"placeholder="Enter your wishes here" className="list_input" onChange={HandleInput} value={inputValue} />

        <br></br>
        <button className="list-button" onClick={HandleSubmit} >
            <b>Submit</b>
        </button>
        </div>
            
            <div className="current-list">
            <h2>Current Bucket List</h2>
            
            <ul>
                <div className="the-list">
                {myList.map(item => (
                    <li key={item.id}> 
                        <input type="checkbox" onClick={() => HandleCheckbox(item.id)}></input>
                        <p className={item.done ? 'true' : ''}> {item.text}</p> {' '}
                        <button className='delete-button' onClick={() => HandleDelete(item.id)}> <img src={garbageimage} alt="garbage" className="garbage-icon"/> </button>
                    </li>
                ))}
                </div>
            </ul>
            </div>
            
        </div>
    )
}
export default BucketList;