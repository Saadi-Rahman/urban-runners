import React, { useEffect, useState } from 'react';
import logo from '../../images/runners.png'
import Blog from '../Blog/Blog';
import Sidebar from '../Sidebar/Sidebar';
import Workout from '../Workout/Workout';
import './Home.css';

const Home = () => {
    const [workouts, setWorkouts] = useState([]);
    const [sidebar, setSidebar] = useState([]);

    useEffect( ()=>{
        fetch('workouts.json')
        .then(res => res.json())
        .then(data => setWorkouts(data))
    }, []);

    const handleAddToSidebar = (workout) =>{
        // console.log(workout);
        const newSidebar = [...sidebar, workout];
        setSidebar(newSidebar);
    }

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
                            handleAddToSidebar={handleAddToSidebar}
                            ></Workout>)
                    }
                </div>

                <div className='blog-section'>
                    <h1>Blog posts</h1>
                    <Blog></Blog>
                </div>
            </div>

            <div className="sidebar-section">
                <Sidebar sidebar={sidebar}></Sidebar>
            </div>
        </div>
    );
};

export default Home;