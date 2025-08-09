import React from 'react';

const Counter = ({seconds}) => {
    if (seconds >= 10) {
        console.log("it's greater than 10")
        
    };
    return(
        <div>
            number of seconds: {seconds}
        </div>
    )
};

export default Counter