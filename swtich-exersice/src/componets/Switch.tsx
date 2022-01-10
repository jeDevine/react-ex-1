import React, { useState } from 'react';
import './Switch.css';


export const Switch = () => {
    const [switchActive, setSwitchActive] = useState(false);
    let addBlue = "";
    if(switchActive) {
        addBlue = "blue";
    }
    return (
        <div className={"Switch " + addBlue}>
            <h2>Switch</h2>
            {switchActive ? <p>On</p> : <p>Off</p>}
            {switchActive ? <button onClick={() => setSwitchActive(false)}>Off</button> : <button onClick={() => setSwitchActive(true)}>On</button>}
            {/* <button onClick={() => setSwitchActive(true)}>On</button>
            <button onClick={() => setSwitchActive(false)}>Off</button> */}
        </div>
    );
}