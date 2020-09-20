import React from 'react'

function WelcomeStatelessComponent(props) {
    // show component or not on 'show' prop injected
    if (props.show === false) {
        return null;
    }

    return <div>
        <p>Welcome, "{(props.name).toUpperCase()}", from welcome stateless component (function component)</p>
    </div>
}

export default WelcomeStatelessComponent