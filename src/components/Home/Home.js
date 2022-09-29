import React, { useEffect, useState } from 'react';
import Workout from '../Workout/Workout';
import './Home.css';

const Home = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect( ()=>{

        fetch('workouts.json')
        .then(res => res.json())
        .then(data => setWorkouts(data))

    }, [])

    return (
        <div className='home-pg'>
            <div className="workouts-container">
                {
                    workouts.map(workout => <Workout 
                        key={workout.id}
                        workout={workout}
                        ></Workout>)
                }
            </div>
            <div className="sidebar">
                <h3>sidebar</h3>
            </div>
        </div>
    );
};

export default Home;