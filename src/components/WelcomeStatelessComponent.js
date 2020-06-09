import React from 'react'

function WelcomeStatelessComponent (props) {

    // controll rendering this component or not by returning `null` value
    if (props.show === false) {
        return null;
    }
        
    return <div>
        <p>Welcome {props.name} to react from stateless component</p>   
    </div>
}

export default WelcomeStatelessComponent;