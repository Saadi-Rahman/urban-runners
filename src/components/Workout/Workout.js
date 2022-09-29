import React from 'react';
import './Workout.css';

const Workout = (props) => {
    const {workout, handleAddToSidebar} = props;
    const {name, img, details, age, time} = workout;

    return (
        <div className='workout'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p className='details'>{details}</p>
            <p className='common'>For Age: <span>{age}</span></p>
            <p className='common'>Time required: <span>{time} minutes</span></p>

            <button onClick={() => handleAddToSidebar(workout)} className='btn-workout'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Workout;