import React from 'react';
import './Time.css'

const Time = ({times}) => {
    let sum = 0;
    for (const time of times){
        sum = sum + parseInt(time);
    }
    return (
        <div className='time'>
            <p>Spent time on read : <span>{sum}</span> min</p>
        </div>
    );
};

export default Time;