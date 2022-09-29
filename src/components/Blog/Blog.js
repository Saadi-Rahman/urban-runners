import React from 'react';
import pic from '../../images/Capture.PNG'
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-sec'>
            <h3>How does react work?</h3>
            <p>Introduction to ReactJS: Let us understand this with a practical example. <br /><br />
            Let’s say one of your friends posted a photograph on Facebook. Now you go and like the image and then you started checking out the comments too. Now while you are browsing over comments you see that the likes count has increased by 100, since you liked the picture, even without reloading the page. This magical count change is because of ReactJS. 
            React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ‘V’ denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook. <br /><br />
            React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
            A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.
            <br /><br />
            Note: React is not a framework. It is just a library developed by Facebook to solve some problems that we were facing earlier.
            </p>
            <br /><br /><br /><br />
            <h3>Difference Between props and state.</h3>
            <img src={pic} alt="" />

            <br /><br /><br /><br />
            <h3>What are the uses of useEffect() other than data loading?</h3>
            <p>6 use cases of the useEffect ReactJS hook. <br /><br />
            Whenever we need to make use of side effects in our application, useEffect is the way to go. This hook doesn't present many complications, except for non-primitive data types, due to how JavaScript handles them. <br /><br />

            According to the official documentation, effects run after every completed render, but you can choose to fire them only when certain values have changed. This hook uses an array of "dependencies": variables or states that useEffect listen to for changes. When their values change, the main body of the useEffect hook is executed. <br /><br />

            The return statement of this hook is used to clean methods that are already running, such as timers. The first time this hook is called, its main body is the one that is going to be evaluated first. All other subsequent times the hook is called, the return statement will be evaluated first, and, after that, the hook's main body. This behaviour is especially useful for cleaning code that is already running before run it again, which enable us to prevent memory leaks. <br /><br />
            <h4>useEffect use cases are the following</h4>
            1. Running once on mount: fetch API data <br />
            2. Running on state change: validating input field <br />
            3. Running on state change: live filtering <br />
            4. Running on state change: trigger animation on new array value <br />
            5. Running on props change: update paragraph list on fetched API data update <br />
            6. Running on props change: updating fetched API data to get BTC updated price
            </p>
        </div>
    );
};

export default Blog;