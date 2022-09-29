import React, { useEffect, useState } from 'react';
import logo from '../../images/runners.png'
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
            <div className='main-section'>
                <div className='page-title'>
                    <img src={logo} alt="" />
                    <h1>URBAN-RUNNERS</h1>
                </div>
                <h3>Select your today’s Workout!</h3>
                <div className="workouts-container">
                    {
                        workouts.map(workout => <Workout 
                            key={workout.id}
                            workout={workout}
                            ></Workout>)
                    }
                </div>
            </div>
            <div className="sidebar-section">
                <h3>sidebar</h3>
            </div>
        </div>
    );
};

export default Home;