import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import userImage from '../../images/user.png';
import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    const {sidebar} = props;

    let total = 0;
    for(const workout of sidebar){
        total = total + workout.time;
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
                <button className='btn-break'><p>1m</p></button>
                <button className='btn-break'><p>2m</p></button>
                <button className='btn-break'><p>3m</p></button>
                <button className='btn-break'><p>5m</p></button>
                <button className='btn-break'><p>8m</p></button>
            </div>

            <h2>Workout Details</h2>

            <div className='common-class'>
                <h3>Workout time: {total} minutes</h3>
            </div>

            <div className='common-class'>
                <h3>Break time</h3>
            </div>

            <button className='btn-completed'>
                <p>Activity Completed</p>
            </button>
            <p>Selected Items: {sidebar.length}</p>
        </div>
    );
};

export default Sidebar;