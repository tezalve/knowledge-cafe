import React from 'react';
import './Answers.css'

const Answers = () => {
    return (
        <div className='answers'>
            <h3>Props vs State</h3>
            <p>Props information is sent from one component to the next. That is unchangeable (cannot be modified). State data is only transmitted within the component. It can be changed ( can be modified). Props can be used in conjunction with state and functional components. State may only be utilized with state components/class components. Props are read-only. State is both read and write.</p>

            <h3>How does useState work?</h3>
            <p>We may use the useState hook to establish state variables for our component. State variables are utilized in our component to hold dynamic data that might change when a user interacts with it. useState accepts an argument and returns an array containing the state variable and a function to alter it. It is standard practice to destructure this array and make its contents const. This is due to the fact that the state variable should never be transferred directly and should only be changed using the setter method. The setter function receives either a new value or a function that takes as an argument the current value and returns the new value.</p>

            <h3>Purpose of useEffect other than fetching data?</h3>
            <p>In addition to retrieving data, useEffect may do the following tasks.</p>
            <ul>
                <li>Validating input field on state change.</li>
                <li>Live filtering based on state change.</li>
                <li>Running on state change: start animation when a new array value is entered.</li>
                <li>Running on props change: update paragraph list when API data is fetched.</li>
                <li>Running on props change: updating fetched API data to get BTC updated price.</li>
            </ul>

            <h3>How Does React work?</h3>
            <p>ReactJS separates the user interface into independent, reusable pieces of code known as components. React components, like JavaScript functions, take arbitrary inputs called properties or props. The client-side UI is determined by the returned React elements. It is feasible to have as many components as you need without clogging up our code.</p>
        </div>
    );
};

export default Answers;