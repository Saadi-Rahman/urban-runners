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
        </div>
    );
};

export default Blog;