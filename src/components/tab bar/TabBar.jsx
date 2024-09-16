import React from 'react';
import './TabBar.css'
import {Link} from "react-router-dom";


const TabBar = () => {


    return(
            <div>
                
                <div className='bar'>
                <div className='left'>

                </div>
                <div className='center'>
                <h2><Link to="/">Home</Link></h2>
                <h2><Link to="/Bucket">Bucket List</Link></h2>
                </div>
                <div className='right'>

                </div>
                </div>
                

            </div>
    );
}

export default TabBar;