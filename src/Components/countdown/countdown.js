import React from 'react';
import Digit from './digit/digit';


const Countdown = (props) => {

    return(
        <div className="d-flex">
            <Digit value={ props.time.min} color="cornflowerblue"/>
            <Digit value={ props.time.sec} color="tomato"/>
            <Digit value={ props.time.mili} color="teal"/>
        </div>
    )

}

export default Countdown