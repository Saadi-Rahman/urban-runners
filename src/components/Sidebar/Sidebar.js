import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userImage from '../../images/user.png';
import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    const {sidebar} = props;

    let total = 0;
    for(const workout of sidebar){
        total = total + workout.time;
    }

    // const [breakTime, setBreakTime] = useState('');
    const [breakTime, setBreakTime] = useState('');
    const handleBreakTime = (event)=>{
        const newBreak = event.target.innerText;
        setBreakTime(newBreak)
        console.log(newBreak)
        }

    return (
        <div className='sidebar'>
            <div className='user'>
                <img src={userImage} alt="" />
                <div>
                    <h2>Kevin R. Jeon</h2>
                    <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> New York, USA</p>
                </div>
            </div>
            <div className='user-info'>
                <div>
                    <h1>75<span style={{fontSize: "16px"}}>kg</span></h1>
                    <p>Weight</p>
                </div>
                <div>
                    <h1>6.5</h1>
                    <p>Height</p>
                </div>
                <div>
                    <h1>25<span style={{fontSize: "16px"}}>yrs</span></h1>
                    <p>Age</p>
                </div>
            </div>

            <h2>Add A Break</h2>

            <div className='btn-container'>
                <button onClick = {(event)=>handleBreakTime(event)} className='btn-break'><p>1m</p></button>
                <button onClick = {(event)=>handleBreakTime(event)} className='btn-break'><p>2m</p></button>
                <button onClick = {(event)=>handleBreakTime(event)} className='btn-break'><p>3m</p></button>
                <button onClick = {(event)=>handleBreakTime(event)} className='btn-break'><p>5m</p></button>
                <button onClick = {(event)=>handleBreakTime(event)} className='btn-break'><p>8m</p></button>
            </div>

            <h2>Workout Details</h2>
            <p>Selected Workouts: {sidebar.length}</p>

            <div className='common-class'>
                <h3>Workout time: {total} minutes</h3>
            </div>

            <div className='common-class'>
                <h3>Break time: {breakTime}</h3>
            </div>

            <button className='btn-completed'>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};

export default Sidebar;